/* eslint-disable @typescript-eslint/no-unused-vars */
import { /*useEffect,*/ useState } from 'react';
import Chat from './Chat';
import { setCookie } from '../utils/cookie';

export default function ChatApp() {
  const [user, setUser] = useState<{
    firstName: string;
    lastName: string;
    email: string;
  } | null>(null);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [showChat, setShowChat] = useState(false); // Estado para controlar exibição do chat

  // useEffect(() => {
  //   async function fetchUser() {
  //     await fetch('http://localhost:8080/sgf/jaxrs/bandeira/chat/enabled', {
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     }).then((response) => {
  //       if (response.ok) {
  //        //validação se o chat ta ativo

  //         // setUser(user);
  //         // // connectToWebSocket();
  //         // console.log('Usuário registrado no chat:', user);
  //       }
  //     });
  //   }
  //   fetchUser();
  //   return () => {
  //     // websocket.send(
  //     //   JSON.stringify({
  //     //     no_acao: 'close',
  //     //     nm_sessao: v_nm_sessao,
  //     //     nm_sessao_destino: +v_nm_sessao_destino,
  //     //   }),
  //     // );
  //   };
  // });

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const email = formData.get('email') as string;

    if (firstName && lastName && email) {
      setChatRegister({ firstName, lastName, email });
    }
  };

  const setChatRegister = async (user: {
    firstName: string;
    lastName: string;
    email: string;
  }) => {
    const dataRequest: URLSearchParams = new URLSearchParams();
    dataRequest.append('p_no_primeiro', user.firstName);
    dataRequest.append('p_no_sobrenome', user.lastName);
    dataRequest.append('p_dc_email', user.email);

    await fetch(
      'https://homologsgfapps.fisk.com.br:44380/sgf/jaxrs/pessoas/crm',
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: dataRequest,
      },
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data) {
          setUser(data.no_usuario);
          setIsRegistered(true);
          setCookie(data, 7); // setCookies(data, 7);
          // connectToWebSocket(data);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };


  return (
    <div className="pt-5 mb-2 pb-10 flex items-center justify-center bg-gray-100">
      {!isRegistered ? (
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h1 className="text-2xl font-bold mb-4">Identificação do Usuário</h1>
          <form onSubmit={handleFormSubmit}>
            <div className="mb-4">
              <label htmlFor="firstName" className="block text-gray-700">
                Primeiro Nome
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                required
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="lastName" className="block text-gray-700">
                Sobrenome
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                required
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div className="mb-4 flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                required
                className="mr-2"
                onClick={() => setShowTermsModal(true)}
              />
              <label htmlFor="terms" className="text-gray-700">
                Concordo com os{' '}
                <button
                  type="button"
                  className="text-red-500 underline"
                  onClick={() => setShowTermsModal(true)}
                >
                  Termos de Uso
                </button>
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Entrar
            </button>
          </form>
        </div>
      ) : (
        <Chat /> // Exibe o chat
      )}

      {/* Modal de Termos de Uso */}
      {showTermsModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
            <h2 className="text-xl font-bold mb-4">Termos de Uso</h2>
            <p className="mb-4">
              Estes são os Termos de Uso. Leia atentamente antes de continuar.
            </p>
            <button
              onClick={() => setShowTermsModal(false)}
              className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
