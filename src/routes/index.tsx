import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  MapPin,
  Phone,
  Stethoscope,
  HeartPulse,
  Activity,
  ChevronDown,
  Wind,
  FileSearch,
  Waves,
  ClipboardCheck,
  Search,
  ShieldCheck,
  GitBranch,
} from "lucide-react";
import drBrunoAsset from "@/assets/dr-bruno-sessa.jpg.asset.json";
const drBruno = drBrunoAsset.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dr. Bruno Sessa — Cardiologista Intervencionista em Vila Velha" },
      {
        name: "description",
        content:
          "Cardiologista em Vila Velha especializado em Cardiologia Intervencionista e Hemodinâmica. Consulta em cardiologia, cateterismo, angioplastia, TAVI, MitraClip e segunda opinião especializada.",
      },
      { property: "og:title", content: "Dr. Bruno Sessa — Cardiologia Intervencionista" },
      {
        property: "og:description",
        content:
          "Formação HC-USP e InCor-USP. Consulta em cardiologia e procedimentos minimamente invasivos sob indicação clínica precisa.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: LandingPage,
});

// =====================================================================
// CONFIGURAÇÃO WHATSAPP — Alterar número e mensagens aqui
// Formato: 55 + DDD + número (sem espaços/símbolos)
// =====================================================================
const WHATSAPP_NUMBER = "5527996419119"; // <-- TROCAR NÚMERO AQUI
const WHATSAPP_DEFAULT_MESSAGE =
  "Olá, vim do site do Dr. Bruno Sessa e quero marcar uma consulta.";
const WHATSAPP_SECOND_OPINION_MESSAGE =
  "Olá, vim do site do Dr. Bruno Sessa e quero marcar uma consulta.";
const WHATSAPP_MESSAGES = {
  heroSchedule: WHATSAPP_DEFAULT_MESSAGE,
  heroSecondOpinion: WHATSAPP_SECOND_OPINION_MESSAGE,
  authority: WHATSAPP_DEFAULT_MESSAGE,
  procedures: WHATSAPP_DEFAULT_MESSAGE,
  contact: WHATSAPP_DEFAULT_MESSAGE,
  nav: WHATSAPP_DEFAULT_MESSAGE,
};
const wa = (msg: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
// =====================================================================

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Authority />
      <WhenToSeek />
      <Services />
      <Procedures />
      <Hospitals />
      <Insurance />
      <Differentials />
      <Specialties />
      <FAQ />
      <Location />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

function Nav() {
  return (
    <header className="absolute top-0 left-0 right-0 z-20">
      <div className="container-page flex items-center justify-between py-6">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="text-base font-semibold tracking-tight text-navy-deep">
            Dr. Bruno Sessa
          </span>
          <span className="hidden sm:inline text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            Cardiologia Intervencionista
          </span>
        </a>
        <a
          href={wa(WHATSAPP_MESSAGES.nav)}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-navy-deep hover:text-navy transition-colors"
        >
          Agendar consulta <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="container-page grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-7">
          <p className="text-[11px] uppercase tracking-[0.24em] text-navy mb-6">
            <span className="hairline mr-3 align-middle" />
            Cardiologia Intervencionista &amp; Hemodinâmica
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] font-semibold leading-[1.05]">
            Cardiologia de alta
            <br />
            <span className="text-navy">complexidade,</span>
            <br />
            conduzida com precisão.
          </h1>
          <p className="mt-8 max-w-xl text-base sm:text-lg leading-relaxed text-muted-foreground">
            Da consulta clínica especializada aos procedimentos minimamente invasivos
            de alta complexidade — quando clinicamente indicados — conduzidos com o
            rigor técnico dos maiores centros do país.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href={wa(WHATSAPP_MESSAGES.heroSchedule)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-navy-deep px-7 py-4 text-sm font-medium text-cream hover:bg-navy transition-colors"
            >
              Agendar Consulta
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={wa(WHATSAPP_MESSAGES.heroSecondOpinion)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-navy-deep/20 px-7 py-4 text-sm font-medium text-navy-deep hover:bg-sand transition-colors"
            >
              Solicitar Segunda Opinião
            </a>
          </div>
          <dl className="mt-14 grid grid-cols-3 gap-6 max-w-md">
            <Stat n="10+" label="anos em hospitais de referência" />
            <Stat n="HC-USP" label="formação e residência" />
            <Stat n="InCor" label="fellowship e atuação" />
          </dl>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="absolute -inset-6 bg-sand/60 rounded-[2rem] -z-10" />
          <img
            src={drBruno}
            alt="Dr. Bruno Sessa, cardiologista intervencionista"
            width={1024}
            height={1280}
            className="w-full h-auto rounded-2xl object-cover shadow-2xl shadow-navy-deep/10"
          />
        </div>
      </div>
    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <dt className="text-2xl font-semibold text-navy-deep">{n}</dt>
      <dd className="mt-1 text-xs leading-snug text-muted-foreground">{label}</dd>
    </div>
  );
}

function Authority() {
  const credentials = [
    { place: "HC-USP", detail: "Hospital das Clínicas da Universidade de São Paulo — formação médica e residência em Cardiologia" },
    { place: "InCor-USP", detail: "Instituto do Coração — fellowship em Hemodinâmica e Cardiologia Intervencionista" },
    { place: "Hospital Sírio-Libanês", detail: "Fellowship em procedimentos cardíacos estruturais" },
    { place: "InCor", detail: "Ex-médico assistente do Instituto do Coração" },
  ];
  return (
    <section id="autoridade" className="py-24 md:py-36 bg-navy-deep text-cream">
      <div className="container-page">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <p className="text-[11px] uppercase tracking-[0.24em] text-cream/60 mb-6">
              <span className="inline-block h-px w-12 bg-cream/60 mr-3 align-middle" />
              Sobre o médico
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.1] text-cream">
              Uma década entre os maiores centros cardiológicos do país.
            </h2>
            <p className="mt-8 text-base leading-relaxed text-cream/75 max-w-md">
              Formação integral e mais de dez anos de atuação nos serviços que
              definem o padrão brasileiro em Cardiologia Intervencionista e
              Hemodinâmica.
            </p>
            <a
              href={wa(WHATSAPP_MESSAGES.authority)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-cream border-b border-cream/30 pb-1 hover:border-cream transition-colors"
            >
              Conversar pelo WhatsApp <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="lg:col-span-7">
            <ul className="divide-y divide-cream/15 border-y border-cream/15">
              {credentials.map((c) => (
                <li key={c.place} className="py-6 grid grid-cols-12 gap-4 items-baseline">
                  <span className="col-span-12 sm:col-span-4 text-sm font-medium text-cream tracking-wide">
                    {c.place}
                  </span>
                  <span className="col-span-12 sm:col-span-8 text-base text-cream/75 leading-relaxed">
                    {c.detail}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhenToSeek() {
  const items = [
    { icon: HeartPulse, label: "Dor no peito" },
    { icon: Wind, label: "Falta de ar" },
    { icon: FileSearch, label: "Alterações em exames" },
    { icon: Waves, label: "Sopro cardíaco" },
    { icon: Activity, label: "Indicação de cateterismo" },
    { icon: Search, label: "Busca por segunda opinião" },
    { icon: ShieldCheck, label: "Avaliação de doença das válvulas" },
    { icon: GitBranch, label: "Avaliação de doença coronária" },
  ];
  return (
    <section className="py-24 md:py-36">
      <div className="container-page">
        <div className="max-w-2xl mb-16 md:mb-20">
          <p className="text-[11px] uppercase tracking-[0.24em] text-navy mb-6">
            <span className="hairline mr-3 align-middle" />
            Quando procurar
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.1]">
            Situações clínicas que indicam avaliação com um cardiologista intervencionista.
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {items.map((it) => (
            <div key={it.label} className="bg-card p-6 md:p-8 flex flex-col gap-4">
              <it.icon className="h-5 w-5 text-navy" strokeWidth={1.5} />
              <span className="text-sm font-medium text-navy-deep leading-snug">
                {it.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      tag: "Consulta",
      title: "Consulta em Cardiologia",
      body:
        "Avaliação clínica especializada, interpretação de exames e definição de conduta individualizada.",
    },
    {
      tag: "Check-up",
      title: "Check-up Cardiológico",
      body:
        "Rastreio e estratificação de risco cardiovascular com base em história clínica e exames complementares.",
    },
    {
      tag: "Hemodinâmica",
      title: "Cateterismo Cardíaco",
      body:
        "Estudo hemodinâmico diagnóstico das artérias coronárias e câmaras cardíacas, realizado sob indicação precisa.",
    },
    {
      tag: "Segunda Opinião",
      title: "Segunda Opinião Especializada",
      body:
        "Revisão criteriosa de diagnósticos e condutas propostas, com foco em decisões clínicas fundamentadas em evidências.",
    },
  ];
  return (
    <section className="py-24 md:py-36 bg-sand/40">
      <div className="container-page">
        <div className="max-w-2xl mb-16 md:mb-20">
          <p className="text-[11px] uppercase tracking-[0.24em] text-navy mb-6">
            <span className="hairline mr-3 align-middle" />
            Como posso ajudar
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.1]">
            Serviços clínicos oferecidos.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((s) => (
            <div key={s.tag} className="bg-card border border-border rounded-2xl p-8 md:p-10">
              <ClipboardCheck className="h-6 w-6 text-navy" strokeWidth={1.5} />
              <span className="mt-6 block text-[10px] uppercase tracking-[0.22em] text-navy font-medium">
                {s.tag}
              </span>
              <h3 className="mt-3 text-xl font-semibold leading-snug">{s.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Procedures() {
  const items = [
    {
      tag: "Angioplastia",
      title: "Tratamento das coronárias",
      body:
        "Procedimento indicado no manejo da doença coronariana obstrutiva, com implante de stents quando há critério clínico e anatômico estabelecido.",
    },
    {
      tag: "TAVI",
      title: "Implante valvar aórtico transcateter",
      body:
        "Substituição da válvula aórtica por cateter, reservada a pacientes selecionados com estenose aórtica e indicação formal por equipe multidisciplinar.",
    },
    {
      tag: "MitraClip",
      title: "Reparo mitral percutâneo",
      body:
        "Tratamento percutâneo da insuficiência mitral, indicado após avaliação estruturada em pacientes com anatomia favorável e critérios clínicos definidos.",
    },
  ];
  return (
    <section id="procedimentos" className="py-24 md:py-36">
      <div className="container-page">
        <div className="max-w-2xl mb-16 md:mb-20">
          <p className="text-[11px] uppercase tracking-[0.24em] text-navy mb-6">
            <span className="hairline mr-3 align-middle" />
            Procedimentos Especializados
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.1]">
            Intervenções de alta complexidade realizadas sob indicação clínica precisa.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {items.map((p) => (
            <article key={p.tag} className="bg-card p-8 md:p-10 flex flex-col">
              <span className="text-[10px] uppercase tracking-[0.22em] text-navy font-medium">
                {p.tag}
              </span>
              <h3 className="mt-6 text-xl font-semibold leading-snug">{p.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground flex-1">
                {p.body}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <a
            href={wa(WHATSAPP_MESSAGES.procedures)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-navy-deep px-7 py-4 text-sm font-medium text-cream hover:bg-navy transition-colors"
          >
            Tirar dúvidas pelo WhatsApp <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Hospitals() {
  return (
    <section className="py-20 md:py-28 bg-sand/40">
      <div className="container-page max-w-3xl">
        <p className="text-[11px] uppercase tracking-[0.24em] text-navy mb-6">
          <span className="hairline mr-3 align-middle" />
          Hospitais de atuação
        </p>
        <p className="text-xl sm:text-2xl font-medium leading-snug text-navy-deep">
          Procedimentos realizados em hospitais de referência da Grande Vitória,
          conforme indicação clínica e cobertura do convênio.
        </p>
      </div>
    </section>
  );
}

function Insurance() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page max-w-3xl">
        <p className="text-[11px] uppercase tracking-[0.24em] text-navy mb-6">
          <span className="hairline mr-3 align-middle" />
          Convênios
        </p>
        <p className="text-xl sm:text-2xl font-medium leading-snug text-navy-deep">
          Atendimento particular e pelos principais convênios. A disponibilidade
          pode variar conforme o procedimento e o hospital.
        </p>
      </div>
    </section>
  );
}

function Differentials() {
  const items = [
    "Formação nos maiores centros do país",
    "Mais de dez anos de atuação",
    "Experiência em procedimentos minimamente invasivos",
    "Atendimento humanizado",
    "Atuação baseada em evidências",
  ];
  return (
    <section className="py-24 md:py-36 bg-navy-deep text-cream">
      <div className="container-page">
        <div className="max-w-2xl mb-16">
          <p className="text-[11px] uppercase tracking-[0.24em] text-cream/60 mb-6">
            <span className="inline-block h-px w-12 bg-cream/60 mr-3 align-middle" />
            Diferenciais
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.1] text-cream">
            Rigor técnico, cuidado individualizado.
          </h2>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-cream/15 border border-cream/15 rounded-2xl overflow-hidden">
          {items.map((it) => (
            <li key={it} className="bg-navy-deep p-8 text-base text-cream/85 leading-snug">
              {it}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Specialties() {
  const groups = [
    {
      icon: HeartPulse,
      tag: "Valvopatias",
      title: "Doenças valvares do coração",
      body:
        "Avaliação e tratamento de estenose aórtica, insuficiência mitral e demais disfunções valvares, com indicação criteriosa entre conduta clínica e procedimentos estruturais.",
    },
    {
      icon: Activity,
      tag: "Coronariopatias",
      title: "Doença isquêmica do coração",
      body:
        "Investigação de angina, infarto e obstruções coronarianas, com planejamento individualizado entre tratamento clínico, angioplastia e encaminhamento cirúrgico quando necessário.",
    },
  ];
  return (
    <section className="py-24 md:py-36 bg-sand/40">
      <div className="container-page">
        <p className="text-[11px] uppercase tracking-[0.24em] text-navy mb-6">
          <span className="hairline mr-3 align-middle" />
          Áreas de atuação
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.1] max-w-3xl">
          Duas subespecialidades, uma abordagem dedicada.
        </h2>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {groups.map((g) => (
            <div
              key={g.tag}
              className="bg-card border border-border rounded-2xl p-8 md:p-10"
            >
              <g.icon className="h-6 w-6 text-navy" strokeWidth={1.5} />
              <span className="mt-6 block text-[10px] uppercase tracking-[0.22em] text-navy font-medium">
                {g.tag}
              </span>
              <h3 className="mt-3 text-xl font-semibold leading-snug">{g.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {g.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    {
      q: "Quando devo procurar um cardiologista?",
      a: "Diante de sintomas como dor no peito, falta de ar, palpitações, tonturas ou histórico familiar de doença cardiovascular, além de alterações em exames de rotina ou solicitação para avaliação pré-operatória.",
    },
    {
      q: "Quando procurar uma segunda opinião?",
      a: "Sempre que houver dúvida quanto a um diagnóstico, indicação de procedimento invasivo ou conduta cirúrgica. A segunda opinião em cardiologia oferece revisão criteriosa e decisão fundamentada em evidências.",
    },
    {
      q: "O que é um cateterismo?",
      a: "O cateterismo cardíaco é um exame de hemodinâmica que avalia as artérias coronárias e o funcionamento do coração, permitindo diagnóstico preciso e, quando indicado, tratamento no mesmo procedimento.",
    },
    {
      q: "Quais convênios são atendidos?",
      a: "O atendimento é particular e por meio dos principais convênios. A disponibilidade pode variar conforme o tipo de consulta, procedimento e hospital de realização.",
    },
    {
      q: "Onde os procedimentos são realizados?",
      a: "Os procedimentos são realizados em hospitais de referência da Grande Vitória, definidos conforme indicação clínica e cobertura do convênio do paciente.",
    },
    {
      q: "Como agendar uma consulta?",
      a: "O agendamento é feito diretamente pelo WhatsApp, com atendimento em horário comercial da nossa equipe.",
    },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-24 md:py-36">
      <div className="container-page grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-4">
          <p className="text-[11px] uppercase tracking-[0.24em] text-navy mb-6">
            <span className="hairline mr-3 align-middle" />
            Perguntas frequentes
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold leading-[1.1]">
            Esclarecimentos sobre consultas, exames e procedimentos.
          </h2>
        </div>
        <div className="lg:col-span-8">
          <ul className="divide-y divide-border border-y border-border">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <li key={f.q}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full py-6 flex items-start justify-between gap-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg font-medium text-navy-deep leading-snug">
                      {f.q}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 text-navy shrink-0 mt-1 transition-transform ${isOpen ? "rotate-180" : ""}`}
                      strokeWidth={1.5}
                    />
                  </button>
                  {isOpen && (
                    <div className="pb-6 pr-10 text-sm sm:text-base leading-relaxed text-muted-foreground">
                      {f.a}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Location() {
  return (
    <section id="contato" className="py-24 md:py-36 bg-sand/40">
      <div className="container-page grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <p className="text-[11px] uppercase tracking-[0.24em] text-navy mb-6">
            <span className="hairline mr-3 align-middle" />
            Onde atendo
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.1]">
            Consultório particular no
            <br />
            <span className="text-navy">Edifício The Point.</span>
          </h2>
          <div className="mt-10 space-y-4 text-base text-muted-foreground">
            <p className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-navy shrink-0 mt-0.5" strokeWidth={1.5} />
              <span>
                Edifício The Point Offices - Rua Moema, 25 - Sala 1605 - Divino Espírito Santo, Vila Velha - ES
              </span>
            </p>
            <p className="flex items-start gap-3">
              <Stethoscope className="h-5 w-5 text-navy shrink-0 mt-0.5" strokeWidth={1.5} />
              <span>Consulta em cardiologia sob agendamento</span>
            </p>
            <p className="flex items-start gap-3">
              <Phone className="h-5 w-5 text-navy shrink-0 mt-0.5" strokeWidth={1.5} />
              <span>Agendamento exclusivo via WhatsApp</span>
            </p>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="bg-navy-deep text-cream rounded-2xl p-10">
            <h3 className="text-xl font-semibold text-cream leading-snug">
              Agende sua avaliação especializada.
            </h3>
            <p className="mt-4 text-sm text-cream/75 leading-relaxed">
              Consulta em cardiologia, segunda opinião em cardiologia e avaliação
              para cateterismo cardíaco, angioplastia, TAVI e MitraClip — sempre
              conforme indicação clínica.
            </p>
            <a
              href={wa(WHATSAPP_MESSAGES.contact)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-cream px-7 py-4 text-sm font-medium text-navy-deep hover:bg-sand transition-colors"
            >
              Falar no WhatsApp <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={wa(WHATSAPP_DEFAULT_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl transition-transform duration-300 ease-out hover:scale-110 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366]"
    >
      <svg
        className="w-7 h-7"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.521.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.521.074-.797.372-.275.297-1.05 1.027-1.05 2.503 0 1.476 1.077 2.904 1.227 3.105.149.198 2.098 3.172 5.076 4.447.71.306 1.263.489 1.694.625.712.226 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
    </a>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="container-page flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        <div>
          <p className="text-sm font-medium text-navy-deep">Dr. Bruno Sessa</p>
          <p className="text-xs text-muted-foreground mt-1">
            Cardiologia Intervencionista e Hemodinâmica · Vila Velha — ES
          </p>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} — Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
