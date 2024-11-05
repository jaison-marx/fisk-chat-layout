
import Image from 'next/image';
import logoLaco from '@/assets/images/logo-laco.png';
import "./header.css"
import TopNav from './topnav/TopNav';

export default function Header() {
  return (
    <header>
      <div className="wrap-top-menu">
        <div className="container">
          <div className="top-menu">
            <div className="container-small">
             <TopNav/>
            </div>
          </div>
        </div>
      </div>
      <div className="wrap-main-menu">
        <div className="container">
          <div className="main-menu">
            <div className="container-small">
              <div className="logo">
                <a href="https://fisk.com.br">
                  {/* <Image src="https://fisk.com.br/assets/images/logo-laco.png" alt="" style="margin-top: -7px;">  */}
                  <Image
                    src={logoLaco}
                    alt="Logo com Laço"
                    width={120} // Defina o valor conforme necessário
                    height={60} // Defina o valor conforme necessário
                    style={{ marginTop: '-7px' }} // Adiciona o estilo inline
                  />
                </a>
              </div>
              <nav className="menu-desk">
                <ul>
                  <li className="menu-sup">
                    <a href="https://fisk.com.br/cursos" className="no-link">
                      Cursos
                    </a>
                    {/* <div className="wrap-menu-sup">
                      <ul className="shadow">
                        <li>
                          <a href="https://fisk.com.br/cursos/ingles">Inglês</a>
                        </li>
                        <li>
                          <a href="https://fisk.com.br/cursos/espanhol">
                            Espanhol
                          </a>
                        </li>
                        <li>
                          <a href="https://fisk.com.br/cursos/portugues">
                            Português
                          </a>
                        </li>
                        <li>
                          <a href="https://fisk.com.br/cursos/robotica/robotica-educacional">
                            Robótica
                          </a>
                        </li>
                        <li>
                          <a href="https://fisk.com.br/cursos/informatica">
                            Informática
                          </a>
                        </li>
                        <li>
                          <a href="https://fisk.com.br/cursos/profissionalizante">
                            Profissionalizante
                          </a>
                        </li>
                        <li>
                          <a href="/curso-online">Curso Online</a>
                        </li>
                      </ul>
                    </div> */}
                  </li>
                  <li>
                    <a href="https://fisk.com.br/unidades">Unidades</a>
                  </li>
                  <li>
                    <a href="https://fisk.com.br/blog">Blog</a>
                  </li>
                  <li>
                    <a href="https://fisk.com.br/fale-conosco">Fale Conosco</a>
                  </li>
                </ul>
                <div className="button"  style={{marginTop: '13px'}}>
                  <a
                    href="https://fisk.com.br/pre-matricula"
                    className="btn btn-red-white btn-border-white"
                  
                  >
                    Voltar
                  </a>
                </div>
              </nav>
            </div>

            {/* <div className="menu-mobile" style="display: none;"> */}
            <div>
              <nav>
                <div className="icon-menu">
                  {/* <img src="https://fisk.com.br/assets/images/icons/menu-hamburguer.svg" alt=""> */}
                </div>
                {/* <ul>
                  <li className="menu-sup">
                    <a href="#" className="no-link">
                      Cursos
                    </a>
                    <ul>
                      <li>
                        <a href="https://fisk.com.br/cursos/ingles">Inglês</a>
                      </li>
                      <li>
                        <a href="https://fisk.com.br/cursos/espanhol">
                          Espanhol
                        </a>
                      </li>
                      <li>
                        <a href="https://fisk.com.br/cursos/portugues">
                          Português
                        </a>
                      </li>
                      <li>
                        <a href="https://fisk.com.br/cursos/informatica">
                          Informática
                        </a>
                      </li>
                      <li>
                        <a href="/curso-online">Fisk web</a>
                      </li>
                      <li>
                        <a href="https://fisk.com.br/infantil">Infantil</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="https://fisk.com.br/unidades">Unidades</a>
                  </li>
                  <li>
                    <a href="https://fisk.com.br/blog">Blog</a>
                  </li>
                  <li>
                    <a href="https://fisk.com.br/fale-conosco">Fale Conosco</a>
                  </li>
                  <li>
                    <a href="https://fisk.com.br/quem-somos">Quem Somos</a>
                  </li>
                  <li>
                    <a href="https://fisk.com.br/certificacoes">
                      content.menu_header.certification
                    </a>
                  </li>
                  <li>
                    <a href="https://fisk.com.br/intercambio">Intercâmbio</a>
                  </li>
                  <li>
                    <a href="https://fisk.com.br/seja-um-franqueado">
                      Seja um Franqueado
                    </a>
                  </li>
                  <li className="">
                    <a href="https://fisk.com.br/teste-classNameificacao">
                      Teste de ClassNameificação
                    </a>
                  </li>
                  <li className="attempt">
                    Central de Atendimento:{' '}
                    <span className="phone">0800 773 3475</span>
                  </li>
                </ul> */}
              </nav>
            </div>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-default navbar-fixed-top mobile-menu">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navbar"
              aria-expanded="false"
              aria-controls="navbar"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <span className="navbar-brand">
              <div className="logo">
                <a href="https://fisk.com.br">
                  {/* <img src="https://fisk.com.br/assets/images/logo-laco.png" alt="" style="margin-top: -7px;"> */}
                </a>
              </div>
            </span>
          </div>
          {/* <div id="navbar" className="navbar-collapse collapse" aria-expanded="false" style="height: 1px;"> */}
          <ul className="nav navbar-nav">
            <li>
              <a href="https://fisk.com.br/cursos" className="no-link">
                Cursos
              </a>
            </li>
            <li>
              <a href="https://fisk.com.br/unidades">Unidades</a>
            </li>
            <li>
              <a href="https://fisk.com.br/blog">Blog</a>
            </li>
            <li>
              <a href="https://fisk.com.br/fale-conosco">Fale Conosco</a>
            </li>
            <li>
              <a href="https://fisk.com.br/quem-somos">Quem Somos</a>
            </li>
            <li>
              <a href="https://fisk.com.br/certificacoes">Certificações</a>
            </li>
            <li>
              <a href="https://fisk.com.br/intercambio">Intercâmbio</a>
            </li>
            <li>
              <a href="https://fisk.com.br/seja-um-franqueado">
                Seja um Franqueado
              </a>
            </li>
            <li className="">
              <a href="https://fisk.com.br/teste-classificacao">
                Teste de Classificação
              </a>
            </li>
            <li>
              <a href="//fisk.com.br/portaldoaluno" target="_blank">
                Portal do Aluno
              </a>
            </li>
            <li>
              <a href="//fisk.com.br/sgfprofessor" target="_blank">
                Portal do Professor
              </a>
            </li>
            <li>
              <a href="//fisk.com.br/sgf" target="_blank">
                SGF
              </a>
            </li>

            <li>
              <a href="https://fisk.com.br/convenios">Convênios</a>
            </li>
            <li>
              <a href="https://fisk.com.br/bilingue">Bilíngue</a>
            </li>
            <li>
              <a href="https://fisk.com.br/pre-matricula">Pré-matricula</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
