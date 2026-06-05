import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, MapPin, Phone, Stethoscope, HeartPulse, Activity } from "lucide-react";
import drBruno from "@/assets/dr-bruno-sessa.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dr. Bruno Sessa — Cardiologista Intervencionista | Vila Velha" },
      {
        name: "description",
        content:
          "Procedimentos cardíacos minimamente invasivos — TAVI, MitraClip e Angioplastia. Atendimento particular no Edifício The Point, Vila Velha (ES).",
      },
      { property: "og:title", content: "Dr. Bruno Sessa — Cardiologia Intervencionista" },
      {
        property: "og:description",
        content:
          "Formação HC-USP / InCor-USP. Tratamento de valvopatias e coronariopatias sem cortes.",
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
const WHATSAPP_NUMBER = "5500000000000"; // <-- TROCAR NÚMERO AQUI
const WHATSAPP_MESSAGES = {
  hero: "Olá Dr. Bruno, gostaria de agendar uma avaliação cardiológica particular.",
  authority: "Olá Dr. Bruno, gostaria de mais informações sobre o atendimento.",
  procedures: "Olá Dr. Bruno, tenho interesse em saber sobre os procedimentos minimamente invasivos.",
  contact: "Olá Dr. Bruno, gostaria de agendar uma consulta no Edifício The Point.",
  nav: "Olá Dr. Bruno, vim pelo site e gostaria de agendar uma consulta.",
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
      <Procedures />
      <Specialties />
      <Location />
      <Footer />
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
            Procedimentos cardíacos
            <br />
            <span className="text-navy">sem cortes.</span>
            <br />
            Precisão minimamente invasiva.
          </h1>
          <p className="mt-8 max-w-xl text-base sm:text-lg leading-relaxed text-muted-foreground">
            TAVI, MitraClip e Angioplastia conduzidos com a técnica dos grandes centros
            de São Paulo, agora em consultório particular independente.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href={wa(WHATSAPP_MESSAGES.hero)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-navy-deep px-7 py-4 text-sm font-medium text-cream hover:bg-navy transition-colors"
            >
              Agendar avaliação
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#autoridade"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-navy-deep/20 px-7 py-4 text-sm font-medium text-navy-deep hover:bg-sand transition-colors"
            >
              Conhecer o médico
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
    { place: "HC-USP", detail: "Formação médica e residência em Cardiologia" },
    { place: "InCor-USP", detail: "Fellowship em Hemodinâmica e Cardiologia Intervencionista" },
    { place: "Hospital Sírio-Libanês", detail: "Fellowship em procedimentos estruturais" },
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
              Dez anos de atuação nos principais hospitais de São Paulo, com formação
              integral nos serviços que definem o padrão brasileiro em cardiologia
              intervencionista.
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

function Procedures() {
  const items = [
    {
      tag: "TAVI",
      title: "Implante valvar aórtico transcateter",
      body:
        "Substituição da válvula aórtica por cateter, sem abertura do tórax — recuperação significativamente mais rápida e indicada para pacientes selecionados com estenose aórtica.",
    },
    {
      tag: "MitraClip",
      title: "Reparo mitral percutâneo",
      body:
        "Correção da insuficiência mitral por via percutânea, evitando cirurgia aberta em pacientes com risco cirúrgico elevado ou anatomia favorável.",
    },
    {
      tag: "Angioplastia",
      title: "Tratamento das coronárias",
      body:
        "Desobstrução de artérias coronárias com implante de stents farmacológicos, restaurando o fluxo sanguíneo com técnica de alta precisão.",
    },
  ];
  return (
    <section id="procedimentos" className="py-24 md:py-36">
      <div className="container-page">
        <div className="max-w-2xl mb-16 md:mb-20">
          <p className="text-[11px] uppercase tracking-[0.24em] text-navy mb-6">
            <span className="hairline mr-3 align-middle" />
            Procedimentos
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.1]">
            Intervenções de alta complexidade conduzidas sem grandes incisões.
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

function Location() {
  return (
    <section id="contato" className="py-24 md:py-36">
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
              <span>Edifício The Point — Vila Velha, Espírito Santo</span>
            </p>
            <p className="flex items-start gap-3">
              <Stethoscope className="h-5 w-5 text-navy shrink-0 mt-0.5" strokeWidth={1.5} />
              <span>Atendimento particular, sob agendamento</span>
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
              Pronto para uma avaliação cardiológica?
            </h3>
            <p className="mt-4 text-sm text-cream/75 leading-relaxed">
              Agende sua consulta diretamente pelo WhatsApp. Nossa equipe responde
              em horário comercial.
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
