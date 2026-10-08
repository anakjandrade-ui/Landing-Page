import "./App.css";

function App() {
  return (
    <div className="site">

      {/* ================= HEADER ================= */}

      <header className="header">

        <div className="logo">
          <strong>&lt;SENAI /&gt;</strong>
          <span>TECNOLOGIA</span>
        </div>

        <nav>
          <a href="#inicio">🏠Início</a>
          <a href="#curso">📚O curso</a>
          <a href="#jornada">🛣️Jornada</a>
          <a href="#tecnologias">💻Tecnologias</a>
          <a href="#carreira">🚀Carreira</a>
        </nav>

      </header>


      {/* ================= HERO ================= */}

      <section className="hero" id="inicio">

        <div className="hero-content">

          <span className="mini-title">
            SENAI • TÉCNICO EM DESENVOLVIMENTO DE SISTEMAS
          </span>

          <h1>
            Do primeiro
            <br />
            <strong>código ao seu futuro.</strong>
          </h1>

          <p>
            Você usa aplicativos, sites e sistemas todos os dias.
            Já imaginou ser a pessoa que está por trás deles?
          </p>

          <div className="buttons">

            <a href="#curso" className="button">
              Quero descobrir →
            </a>

            <a href="#jornada" className="button-secondary">
              Explorar a jornada
            </a>

          </div>

        </div>


        <div className="terminal">

          <div className="terminal-header">
            <span>●</span>
            <span>●</span>
            <span>●</span>
          </div>

          <div className="terminal-body">

            <p>
              <span className="green">const</span> futuro =
              <span className="yellow"> "tecnologia"</span>;
            </p>

            <p>
              <span className="green">const</span> ideia =
              <span className="yellow"> "sua criatividade"</span>;
            </p>

            <br />

            <p>
              <span className="blue">if</span> (ideia) {"{"}
            </p>

            <p className="indent">
              aprender();
            </p>

            <p className="indent">
              criar();
            </p>

            <p className="indent">
              desenvolver();
            </p>

            <p>{"}"}</p>

            <p className="result">
              → futuro.iniciar();
            </p>

          </div>

        </div>

      </section>


      {/* ================= FRASE ================= */}

      <section className="question">

        <span>UMA PERGUNTA PARA VOCÊ</span>

        <h2>
          E se a próxima tecnologia
          <br />
          que você usar for criada por você?
        </h2>

        <p>
          O desenvolvimento de sistemas transforma ideias,
          problemas e necessidades em soluções digitais.
        </p>

      </section>


      {/* ================= CURSO ================= */}

      <section className="section" id="curso">

        <div className="section-title">

          <span>01 • ENTENDENDO O CURSO</span>

          <h2>
            Afinal, o que faz
            <br />
            um desenvolvedor?
          </h2>

        </div>


        <div className="course-grid">

          <div className="course-text">

            <p>
              Um desenvolvedor de sistemas é o profissional que
              utiliza programação e tecnologia para criar e manter
              soluções digitais.
            </p>

            <p>
              Ele pode desenvolver sites, aplicativos, sistemas
              empresariais, plataformas, bancos de dados e muitas
              outras soluções.
            </p>

            <p>
              No curso Técnico em Desenvolvimento de Sistemas,
              você aprende os conhecimentos necessários para começar
              a construir esse tipo de solução.
            </p>

          </div>


          <div className="course-highlight">

            <span>💡</span>

            <h3>
              Programar não é
              apenas escrever código.
            </h3>

            <p>
              É entender um problema, pensar em uma solução
              e transformar essa solução em algo que funciona.
            </p>

          </div>

        </div>

      </section>


      {/* ================= JORNADA ================= */}

      <section className="journey" id="jornada">

        <div className="section-title">

          <span>02 • SUA JORNADA</span>

          <h2>
            Você começa com uma ideia.
            <br />
            E termina com um projeto.
          </h2>

        </div>


        <div className="journey-line">

          <div className="journey-item">

            <div className="number">01</div>

            <h3>🧠 Pensar</h3>

            <p>
              Aprender lógica de programação e
              desenvolver seu raciocínio.
            </p>

          </div>


          <div className="journey-item">

            <div className="number">02</div>

            <h3>⌨️ Programar</h3>

            <p>
              Escrever seus primeiros códigos e
              entender como os sistemas funcionam.
            </p>

          </div>


          <div className="journey-item">

            <div className="number">03</div>

            <h3>🛠️ Construir</h3>

            <p>
              Criar sites, sistemas e aplicações
              utilizando diferentes tecnologias.
            </p>

          </div>


          <div className="journey-item">

            <div className="number">04</div>

            <h3>🚀 Evoluir</h3>

            <p>
              Criar projetos, desenvolver habilidades
              e continuar aprendendo.
            </p>

          </div>

        </div>

      </section>


      {/* ================= TECNOLOGIAS ================= */}

      <section className="section" id="tecnologias">

        <div className="section-title">

          <span>03 • FERRAMENTAS</span>

          <h2>
            Conheça algumas das
            <br />
            tecnologias da jornada.
          </h2>

        </div>


        <div className="technology-grid">

          <div className="technology">
            <strong>HTML</strong>
            <span>Estrutura</span>
          </div>

          <div className="technology">
            <strong>CSS</strong>
            <span>Design</span>
          </div>

          <div className="technology">
            <strong>JavaScript</strong>
            <span>Interatividade</span>
          </div>

          <div className="technology">
            <strong>React</strong>
            <span>Interfaces</span>
          </div>

          <div className="technology">
            <strong>Node.js</strong>
            <span>Backend</span>
          </div>

          <div className="technology">
            <strong>SQL</strong>
            <span>Dados</span>
          </div>

          <div className="technology">
            <strong>Git</strong>
            <span>Versionamento</span>
          </div>

          <div className="technology">
            <strong>GitHub</strong>
            <span>Colaboração</span>
          </div>

        </div>

      </section>


      {/* ================= ÁREAS ================= */}

      <section className="career" id="carreira">

        <div className="section-title">

          <span>04 • FUTURO PROFISSIONAL</span>

          <h2>
            Depois de aprender,
            <br />
            existem vários caminhos.
          </h2>

        </div>


        <div className="career-grid">

          <div className="career-card">
            <span>01</span>
            <h3>Frontend</h3>
            <p>
              Criação das interfaces que os usuários
              visualizam e utilizam.
            </p>
          </div>


          <div className="career-card">
            <span>02</span>
            <h3>Backend</h3>
            <p>
              Desenvolvimento da lógica e funcionamento
              dos sistemas.
            </p>
          </div>


          <div className="career-card">
            <span>03</span>
            <h3>Full Stack</h3>
            <p>
              Desenvolvimento envolvendo frontend
              e backend.
            </p>
          </div>


          <div className="career-card">
            <span>04</span>
            <h3>Banco de Dados</h3>
            <p>
              Organização, armazenamento e gerenciamento
              de informações.
            </p>
          </div>

        </div>

      </section>


      {/* ================= PROJETOS ================= */}

      <section className="projects-section">

        <div className="section-title">

          <span>05 • MÃO NA MASSA</span>

          <h2>
            O que você poderia
            <br />
            criar?
          </h2>

        </div>


        <div className="project-grid">

          <div className="project-card">
            <span>📱</span>
            <h3>Aplicativo</h3>
            <p>
              Uma aplicação para organizar tarefas,
              estudos ou compromissos.
            </p>
          </div>


          <div className="project-card">
            <span>🛒</span>
            <h3>Loja Virtual</h3>
            <p>
              Uma plataforma para apresentar produtos
              e organizar vendas.
            </p>
          </div>


          <div className="project-card">
            <span>📊</span>
            <h3>Dashboard</h3>
            <p>
              Um painel para transformar dados
              em informações visuais.
            </p>
          </div>


          <div className="project-card">
            <span>🎓</span>
            <h3>Projeto Educacional</h3>
            <p>
              Uma solução digital para ajudar
              estudantes e professores.
            </p>
          </div>

        </div>

      </section>


  
      <section className="challenge">

        <span>SEU DESAFIO</span>

        <h2>
          Pense em um problema
          <br />
          que você gostaria de resolver.
        </h2>

        <p>
          Agora imagine que você pudesse criar um sistema
          para ajudar milhares de pessoas.
        </p>

        <div className="challenge-box">
          💭 Qual seria a sua ideia?
        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="cta">

        <span>🚀 O PRÓXIMO PASSO É SEU</span>

        <h2>
          Sua ideia pode ser
          <br />
          o começo de algo grande.
        </h2>

        <p>
          Conheça o Técnico em Desenvolvimento de Sistemas
          e comece sua jornada na tecnologia.
        </p>

        <a href="#inicio" className="button">
          Começar minha jornada ↑
        </a>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <div>

          <strong>&lt;SENAI /&gt;</strong>

          <p>
            Técnico em Desenvolvimento de Sistemas
          </p>

        </div>


        <div>

          <p>© 2026</p>

          <p>
            Aluno(a): Ana Karolina J. Andrade 

            @_ana_0318.
          </p>

        </div>

      </footer>

    </div>
  );
}

export default App;
