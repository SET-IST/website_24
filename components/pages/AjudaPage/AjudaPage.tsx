const faqs = [
  {
    question: 'O que é a SET?',
    text: 'A SET, Semana Empresarial e Tecnológica, é o maior evento do Técnico Taguspark. Possibilita a ligação entre estudantes e empresas oferecendo, para além de workshops e palestras, a oportunidade única de falar diretamente com as mais prestigiadas empresas das áreas de Tecnologia e Gestão.',
  },
  {
    question: 'Como posso participar na SET?',
    text: ' A SET está aberta a toda a comunidade estudantil. Para participar na XIX Edição só tens que te deslocar até ao Instituto Superior Técnico – campus Taguspark nos dias 13 a 16 de Março de 2023 e escolher as palestras e atividades que mais te interessem! Podes consultar o horário de todos os eventos na página das Atividades',
  },
  {
    question: 'Como faço a inscrição para um dos workshops?',
    text: 'Na nossa página de Facebook será publicado, à data do evento, um formulário para a inscrição prévia em cada workshop.',
  },
  {
    question: 'Que oradores/empresas vão estar presentes no evento?',
    text: 'Na SET, as empresas poderão dar-se a conhecer através de stands, que permitem um contacto direto com os alunos e/ou mediante palestras/workshops que possibilita uma abordagem mais dinâmica.',
  },
  {
    question:
      'Represento uma empresa e pretendo estabelecer uma parceria com o evento, a quem me devo dirigir?',
    text: 'Por favor entre em contacto por email para coordenação.set@gmail.com ou por telefone para +351 214 233 579 (5179).',
  },
  {
    question: 'Como posso fazer parte da equipa da próxima SET?',
    text: 'Junta-te a nós! Basta estar atento à nossa página de Facebook, as inscrições para 2024 irão abrir e poderás candidatar-te, ou envia-nos um email para geral@set-tagus.tecnico.ulisboa.pt.',
  },
]

const AjudaPage = () => {
  return (
    <main className="py-10">
      <div className="max-w-screen-xl mx-auto px-5 bg-white min-h-sceen">
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-5xl mt-5 tracking-tight text-primary-500">
            FAQ
          </h2>
          <p className="text-tertirary-500 text-xl mt-3">
            Frequenty asked questions
          </p>
        </div>
        <div className="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
          {faqs.map((faq) => (
            <div className="py-5" key={faq.question}>
              <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>{faq.question}</span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shapeRendering="geometricPrecision"
                      stroke="#0091da"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="text-tertiary-600 mt-3 group-open:animate-fadeIn">
                  {faq.text}
                </p>
              </details>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default AjudaPage
