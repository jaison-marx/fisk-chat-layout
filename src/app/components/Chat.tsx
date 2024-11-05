import { useState, useEffect, useRef } from 'react';

interface Message {
  text: string;
  sender: 'user' | 'bot';
}

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    { text: 'Ola! Como posso te ajudar?', sender: 'bot' },
  ]);
  const [input, setInput] = useState<string>('');

  const suggestions = [
    'Solicitar Boleto',
    'Avaliar meu progresso',
    'Unidade mais proxima',
  ];

  // Ref para rolar automaticamente até a última mensagem
  const bottomRef = useRef<HTMLDivElement>(null);

  // Função para rolar para o fim do chat
  const scrollToBottom = () => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Efeito para rolar para o fim sempre que a lista de mensagens mudar
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (messageText: string) => {
    if (messageText.trim()) {
      const newMessage: Message = { text: messageText, sender: 'user' };
      setMessages([...messages, newMessage]);

      // Limpar o campo de input se for usado o campo de entrada manual
      if (messageText === input) {
        setInput('');
      }

      // Simula uma resposta automática do bot
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: 'Serviço fisk', sender: 'bot' },
        ]);
      }, 1000);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white shadow-lg rounded-lg flex flex-col h-[50vh]">
      {/* Área de mensagens */}
      <div className="p-4 flex-grow overflow-y-auto flex flex-col">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-2 p-2 max-w-xs ${
              message.sender === 'user'
                ? 'ml-auto bg-theme text-white'
                : 'mr-auto bg-gray-300 text-theme'
            } rounded-lg`}
          >
            {message.text}
          </div>
        ))}
        {/* Elemento invisível para rolar até o fim */}
        <div ref={bottomRef} />
      </div>

      {/* Input e Botões de Envio */}
      <div className="p-4 border-t">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend(input)}
          placeholder="Digite Algo..."
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={() => handleSend(input)}
          className="mt-2 w-full bg-theme text-white py-2 rounded-lg"
        >
          Enviar
        </button>

        {/* Botões de Sugestões */}
        <div className="mt-4 flex justify-between">
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              onClick={() => handleSend(suggestion)}
              className="bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300"
            >
              {suggestion}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
