import '@/app/components/topnav/topnav.css';

export default function TopNav() {
  return (
    <div className="wrap-top-menu">
      <div className="container">
        <div className="top-menu">
          <div className="container-small">
            <nav>
              <ul>
                <li className="">
                  <a href="https://fisk.com.br/quem-somos">Quem Somos</a>
                </li>
                <li className="">
                  <a href="https://fisk.com.br/certificacoes">Certificações</a>
                </li>
                <li className="">
                  <a href="https://fisk.com.br/intercambio">Intercâmbio</a>
                </li>
                <li className="">
                  <a href="https://fisk.com.br/teste-classificacao">
                    Teste de Classificação
                  </a>
                </li>
                <li className="">
                  <a href="https://fisk.com.br/seja-um-franqueado">
                    Seja um Franqueado
                  </a>
                </li>
                <li className="">
                  <a href="https://fisk.com.br/convenios">Convênios</a>
                </li>
                <li className="">
                  <a href="https://fisk.com.br/bilingue">Bilíngue</a>
                </li>
                <li className="">
                  <a href="/ebook-digital">E-book</a>
                </li>
                <li className="">
                  <a href="https://fisk.com.br/fisk-web-curso-online">
                    Fisk Web
                  </a>
                </li>
                <li className="">
                  <a href="https://fisk.com.br/infantil">Infantil</a>
                </li>
                <li className="">
                  <a href="https://fisk.com.br/alok-fisk-your-life">
                    Fisk Your Life
                  </a>
                </li>
              </ul>
            </nav>
            <div className="login flex">
              <a href="#" className="btn btn-red btn-sm btn-login">
                Login
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
