import { useState, useEffect, useRef } from 'react';
import { FiSend } from 'react-icons/fi'; // Importando ícone de enviar
import { getCookie } from '../utils/cookie';

interface Message {
  text: string;
  sender: 'user' | 'bot';
}

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    { text: 'Chat de atendimento!', sender: 'bot' },
  ]);
  const [input, setInput] = useState<string>('');
  const [ws, setWs] = useState<WebSocket | null>(null);
  const processedMessageIds = useRef<Set<number>>(new Set());


  const suggestions = [
    'Solicitar Boleto',
    'Avaliar meu progresso',
    'Unidade mais proxima',
    'Notas',
  ];

  const bottomRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const connectToWebSocket = () => {
    const cd_depto = getCookie('cd_depto');
    const cd_pessoa = getCookie('cd_pessoa');
    const no_usuario = getCookie('no_usuario');

    if (!ws && cd_depto && cd_pessoa && no_usuario) {
      const newWs = new WebSocket(
        `wss://homologsgfapps.fisk.com.br:44380/sgf/message/${cd_pessoa}/${no_usuario}/${cd_depto}`,
      );

      newWs.onopen = () => {
      };

   

      newWs.onmessage = (message) => {

        // Parse a mensagem recebida
        const parsedMessage = JSON.parse(message.data);
        const messageId = parsedMessage.nm_mensagem;

        console.log(messageId, parsedMessage, "here");

        // Verifique se o ID da mensagem já foi processado
        if (!processedMessageIds.current.has(messageId)) {
          // Adicione o ID ao conjunto de mensagens processadas
          processedMessageIds.current.add(messageId);

          // Adicione a mensagem ao estado
          const newMessage: Message = {
            text: parsedMessage[0].dc_mensagem,
            sender: 'bot',
          };
          setMessages((prevMessages) => [...prevMessages, newMessage]);
        } else {
          console.log('Mensagem duplicada ignorada:', messageId);
        }
      };



      newWs.onerror = (error) => {
        console.error('Erro no WebSocket:', error);
      };

      newWs.onclose = () => {
        console.log('Conexão WebSocket fechada');
      };

      setWs(newWs);
    }
  };

  useEffect(() => {
    connectToWebSocket();

    return () => {
      ws?.close(); // Fecha a conexão WebSocket ao desmontar o componente
    };
  }); // [] garante que o efeito seja executado apenas uma vez

  const handleSend = (messageText: string) => {
    if (messageText.trim()) {
      const newMessage: Message = { text: messageText, sender: 'user' };
      setMessages([...messages, newMessage]);

      if (messageText === input) {
        setInput('');
      }

      // setTimeout(() => {
      //   setMessages((prevMessages) => [
      //     ...prevMessages,
      //     { text: 'Serviço fisk.', sender: 'bot' },
      //   ]);
      // }, 1000);
    }
  };

  return (
    <div className="max-w-6xl mx-auto mt-10 mb-5 bg-white shadow-lg rounded-lg flex flex-col h-[60vh]">
      <div className="p-4 flex-grow overflow-y-auto flex flex-col">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-2 p-2 ${
              message.sender === 'user'
                ? 'ml-auto bg-theme text-white'
                : 'mr-auto bg-gray-300 text-theme'
            } rounded-lg`}
          >
            {message.text}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      <div className="p-4 border-t flex items-center">
        <div className="relative w-full">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend(input)}
            placeholder="Pergunte algo..."
            className="w-full p-2 pr-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <button
            onClick={() => handleSend(input)}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-red-500 hover:text-red-600"
          >
            <FiSend size={24} color={'red'} />
          </button>
        </div>
      </div>

      <div className="p-4 border-t">
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


