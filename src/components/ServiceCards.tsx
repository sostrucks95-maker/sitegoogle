import "../styles/service-cards.css";

function ShieldIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 3l7 3v5c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}

function WrenchIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M14.7 6.3a4 4 0 0 0-5.6 4.6l-6.4 6.4a1.5 1.5 0 0 0 2.1 2.1l6.4-6.4a4 4 0 0 0 4.6-5.6l-2.5 2.5-2.1-2.1 2.5-2.5z" />
    </svg>
  );
}

function RoadIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 21s-6.5-6.1-6.5-11a6.5 6.5 0 0 1 13 0c0 4.9-6.5 11-6.5 11z" />
      <circle cx="12" cy="10" r="2.2" />
    </svg>
  );
}

const CARDS = [
  {
    icon: <ShieldIcon />,
    title: "SEGURANÇA EM 1º LUGAR",
    desc: "Equipe experiente e transporte com total segurança.",
  },
  {
    icon: <ClockIcon />,
    title: "ATENDIMENTO RÁPIDO",
    desc: "Agilidade no atendimento e rapidez na chegada.",
  },
  {
    icon: <WrenchIcon />,
    title: "FORÇA E RESISTÊNCIA",
    desc: "Equipamento preparado para caminhões pesados.",
  },
  {
    icon: <RoadIcon />,
    title: "ESTAMOS ONDE VOCÊ PRECISAR",
    desc: "Cobertura em Jundiaí, Campinas, Campo Limpo Paulista e Várzea Paulista.",
  },
];

function ServiceCards() {
  return (
    <section id="beneficios" className="service-cards">
      <div className="service-cards__grid">
        {CARDS.map((card) => (
          <article className="card" data-reveal key={card.title}>
            <span className="card__icon">{card.icon}</span>
            <h2 className="card__title">{card.title}</h2>
            <p className="card__desc">{card.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ServiceCards;
