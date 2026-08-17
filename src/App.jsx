import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  Buildings,
  CalendarCheck,
  CaretDown,
  ChatsCircle,
  CheckCircle,
  EnvelopeSimple,
  FileText,
  HouseLine,
  InstagramLogo,
  List,
  MapPin,
  ShieldCheck,
  UsersThree,
  WhatsappLogo,
  Wrench,
  X,
} from "@phosphor-icons/react";

const WHATSAPP_URL =
  "https://wa.me/542233405935?text=Hola%20Grupo%20Consolidar%2C%20quiero%20hacer%20una%20consulta%20sobre%20la%20administraci%C3%B3n%20de%20mi%20comunidad.";
const LOGIN_URL = "https://copropietarios.i-data.com.ar/login";

const navItems = [
  ["Servicios", "#servicios"],
  ["Cómo trabajamos", "#como-trabajamos"],
  ["Respaldo", "#respaldo"],
  ["Preguntas frecuentes", "#preguntas-frecuentes"],
  ["Contacto", "#contacto"],
];

const workPrinciples = [
  {
    number: "01",
    icon: UsersThree,
    title: "Participación activa",
    text: "Las decisiones pertenecen a los propietarios. Ordenamos el proceso, acercamos información y acompañamos lo que la comunidad define.",
  },
  {
    number: "02",
    icon: CalendarCheck,
    title: "Presencia viva",
    text: "Visitamos cada comunidad según su necesidad para revisar instalaciones, mantenimiento, personal y prioridades reales.",
  },
  {
    number: "03",
    icon: ChatsCircle,
    title: "Comunicación clara",
    text: "Centralizamos expensas, circulares y novedades mediante Idata / Power System, con más de una casilla asociada por unidad.",
  },
  {
    number: "04",
    icon: Wrench,
    title: "Mantenimiento preventivo",
    text: "Revisamos espacios comunes, luminarias y sistemas de seguridad para planificar a tiempo y evitar deterioros mayores.",
  },
];

const transparencyItems = [
  "Detalle mensual de gastos",
  "Facturas y comprobantes escaneados",
  "Pólizas de seguro vigentes",
  "Nómina, aportes y seguridad social",
  "Extractos bancarios del consorcio",
  "Documentación disponible online 24/7",
];

const communities = [
  "Country Brisas del Mar",
  "Laprida Torres I y II",
  "Altos de Pepa",
  "Arenales I",
  "Lafayette",
  "Damar VIII",
  "Dorrego Torres V y VI",
  "Torre Almafuerte",
];

const faqs = [
  {
    question: "¿Cómo iniciamos una consulta?",
    answer:
      "Podés escribirnos por WhatsApp o email y contarnos brevemente sobre tu consorcio o barrio. Coordinamos una primera conversación para conocer la situación, las prioridades y el alcance que necesita la comunidad.",
  },
  {
    question: "¿Qué documentación recibe cada propietario?",
    answer:
      "Al cierre mensual se comparte el detalle de gastos junto con facturas escaneadas, pólizas, información laboral y comprobantes correspondientes. También se publica el extracto bancario de la cuenta del consorcio para consulta o auditoría.",
  },
  {
    question: "¿Cómo se comunica la administración?",
    answer:
      "La gestión utiliza Idata / Power System para enviar expensas, circulares e información relevante. La plataforma permite vincular más de una casilla de email por unidad y mantener la documentación ordenada.",
  },
  {
    question: "¿Qué sucede ante una urgencia?",
    answer:
      "Existe un canal de atención de urgencias disponible las 24 horas, con respaldo de gremios y prestadores. Cada situación se evalúa según su naturaleza y las pautas definidas por la comunidad.",
  },
  {
    question: "¿Cómo se toman las decisiones?",
    answer:
      "La administración se rige por lo aprobado en asamblea. Cuando surge un tema que requiere una definición específica, se convoca una asamblea extraordinaria según corresponda.",
  },
];

function Logo({ compact = false }) {
  return (
    <a className={`logo ${compact ? "logo--compact" : ""}`} href="#inicio" aria-label="Grupo Consolidar, volver al inicio">
      <img src="/assets/consolidar-logo.png" alt="Grupo Consolidar" width="545" height="145" />
    </a>
  );
}

function WhatsAppLink({ children = "WhatsApp", className = "button button--primary" }) {
  return (
    <a className={className} href={WHATSAPP_URL} target="_blank" rel="noreferrer">
      <WhatsappLogo size={20} weight="fill" aria-hidden="true" />
      <span>{children}</span>
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", closeOnEscape);
    document.body.classList.toggle("menu-open", open);
    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      document.body.classList.remove("menu-open");
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Logo />
        <nav className="desktop-nav" aria-label="Navegación principal">
          {navItems.map(([label, href]) => (
            <a href={href} key={href}>{label}</a>
          ))}
        </nav>
        <div className="header-actions">
          <a className="header-login" href={LOGIN_URL}>ingreso co-propietarios</a>
          <button
            className="menu-button"
            type="button"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={27} /> : <List size={29} />}
          </button>
        </div>
      </div>
      <nav id="mobile-menu" className={`mobile-nav ${open ? "is-open" : ""}`} aria-label="Navegación móvil">
        {navItems.map(([label, href]) => (
          <a href={href} key={href} onClick={() => setOpen(false)}>{label}<ArrowRight size={18} /></a>
        ))}
        <a className="mobile-login" href={LOGIN_URL}>ingreso co-propietarios <ArrowRight size={18} /></a>
      </nav>
    </header>
  );
}

function SectionHeader({ eyebrow, title, text, light = false }) {
  return (
    <div className={`section-heading ${light ? "section-heading--light" : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text && <p className="section-lead">{text}</p>}
    </div>
  );
}

function App() {
  return (
    <>
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <Header />
      <main id="contenido">
        <section className="hero" id="inicio" aria-labelledby="hero-title">
          <div className="hero-inner">
            <p className="eyebrow">Administración en Mar del Plata</p>
            <h1 id="hero-title">Tu edificio<br />bien administrado</h1>
            <p className="hero-copy">Una gestión moderna, transparente y cercana para consorcios y barrios privados.</p>
            <div className="hero-actions">
              <a className="button button--ink" href="#como-trabajamos">
                Conocé nuestra forma de trabajar <ArrowDown size={18} />
              </a>
              <WhatsAppLink className="button button--text">Escribinos por WhatsApp</WhatsAppLink>
            </div>
          </div>
          <p className="hero-note">La confianza que buscas, con la flexibilidad que necesitas</p>
        </section>

        <figure className="architecture-strip">
          <img src="/assets/comunidad-atlantica.webp" alt="Arquitectura residencial contemporánea y espacios comunes en la costa atlántica argentina" width="2048" height="804" />
          <figcaption>Comunidades cuidadas, vínculos claros.</figcaption>
        </figure>

        <section className="trust-ribbon" aria-label="Principios de gestión">
          <div><ShieldCheck size={31} weight="light" /><span>Cuentas claras</span></div>
          <div><FileText size={31} weight="light" /><span>Información disponible</span></div>
          <div><UsersThree size={31} weight="light" /><span>Decisiones compartidas</span></div>
          <div><Buildings size={31} weight="light" /><span>Presencia local</span></div>
        </section>

        <section className="value section-shell">
          <p className="section-index">01 / Una gestión a medida</p>
          <div className="value-copy">
            <h2>Cada comunidad es única.<br />Su gestión también.</h2>
            <div>
              <p>Trabajamos con una mirada integral, moderna y profesional, construida junto a quienes viven cada espacio todos los días.</p>
              <p>Confianza, experiencia y valores para ordenar la administración sin perder de vista los vínculos humanos.</p>
            </div>
          </div>
        </section>

        <section className="services section-shell" id="servicios">
          <SectionHeader
            eyebrow="Servicios"
            title="Administramos con el mismo rigor, escuchando realidades distintas."
            text="Una gestión institucional para edificios y comunidades, con información ordenada, presencia y seguimiento cercano."
          />
          <div className="service-split">
            <article className="service-block">
              <div className="service-icon"><Buildings size={45} weight="light" /></div>
              <p className="service-number">01</p>
              <h3>Administración<br />de consorcios</h3>
              <p>Organizamos la gestión cotidiana de acuerdo con lo aprobado en asamblea: comunicación, documentación, mantenimiento preventivo y coordinación de proveedores regularizados.</p>
              <ul>
                <li><CheckCircle size={18} /> Seguimiento de instalaciones y espacios comunes</li>
                <li><CheckCircle size={18} /> Información mensual clara y respaldada</li>
                <li><CheckCircle size={18} /> Trato equitativo con propietarios, inquilinos y personal</li>
              </ul>
            </article>
            <article className="service-block">
              <div className="service-icon"><HouseLine size={45} weight="light" /></div>
              <p className="service-number">02</p>
              <h3>Administración<br />de barrios privados</h3>
              <p>Acompañamos comunidades residenciales con el mismo enfoque: decisiones participativas, organización documental, coordinación operativa y cuidado de la convivencia.</p>
              <ul>
                <li><CheckCircle size={18} /> Gestión basada en las decisiones de la comunidad</li>
                <li><CheckCircle size={18} /> Presencia y diálogo directo</li>
                <li><CheckCircle size={18} /> Red de prestadores con documentación al día</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="working" id="como-trabajamos">
          <div className="section-shell">
            <div className="working-top">
              <SectionHeader
                eyebrow="Cómo trabajamos"
                title="Estar presentes también es administrar."
                text="Combinamos método, cercanía y criterios claros para que la comunidad sepa qué ocurre y pueda decidir con información."
              />
              <div className="process" aria-label="Proceso de trabajo">
                <span>Escuchar</span><ArrowRight size={17} /><span>Ordenar</span><ArrowRight size={17} /><span>Acompañar</span>
              </div>
            </div>
            <div className="principles-grid">
              {workPrinciples.map(({ number, icon: Icon, title, text }) => (
                <article className="principle" key={number}>
                  <div className="principle-meta"><span>{number}</span><Icon size={30} weight="light" /></div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="support section-shell" id="respaldo">
          <p className="section-index">02 / Experiencia y respaldo</p>
          <div className="support-grid">
            <figure className="portrait">
              <img src="/assets/alejandro.webp" alt="Alejandro Giuliano Acampora, administrador de Grupo Consolidar" width="900" height="1200" />
              <figcaption>Presencia local y diálogo directo.</figcaption>
            </figure>
            <div className="bio">
              <p className="eyebrow">Administrador responsable</p>
              <h2>Alejandro Giuliano Acampora</h2>
              <p className="bio-role">Administrador de Propiedad Horizontal · Matrícula Provincial 2440</p>
              <p className="bio-copy">Siete años de experiencia en administración de propiedades, con formación en Administración de Propiedad Horizontal y como Auxiliar en Recursos Humanos.</p>
              <p className="bio-copy">Participa en la capacitación para la formación de administradores de la Cámara de Administradores de la Provincia de Buenos Aires (CAPHPBA), según la propuesta institucional presentada.</p>
              <div className="credentials">
                <div><strong>7 años</strong><span>de experiencia</span></div>
                <div><strong>Mat. 2440</strong><span>provincial</span></div>
              </div>
            </div>
          </div>
          <div className="communities">
            <div className="communities-heading">
              <p className="eyebrow">Referencias profesionales</p>
              <h3>Comunidades que confían en Consolidar</h3>
            </div>
            <ul>{communities.map((community) => <li key={community}>{community}</li>)}</ul>
          </div>
        </section>

        <section className="transparency" aria-labelledby="transparency-title">
          <div className="transparency-photo" aria-hidden="true">
            <img src="/assets/comunidad-atlantica.webp" alt="" width="2048" height="804" />
          </div>
          <div className="transparency-content">
            <SectionHeader
              eyebrow="Transparencia en cada decisión"
              title="La información, siempre a la vista."
              text="Cada cierre mensual deja un registro claro y consultable. La documentación queda disponible online para que cada vecino pueda revisarla o auditarla cuando lo necesite."
              light
            />
            <div className="transparency-list">
              {transparencyItems.map((item) => (
                <div key={item}><CheckCircle size={20} weight="fill" /><span>{item}</span></div>
              ))}
            </div>
            <p className="transparency-note"><ShieldCheck size={23} /> Cuentas respaldadas por documentación real, sin atajos ni zonas grises.</p>
          </div>
        </section>

        <section className="faq section-shell" id="preguntas-frecuentes" aria-labelledby="faq-title">
          <div className="faq-intro">
            <p className="eyebrow">Preguntas frecuentes</p>
            <h2 id="faq-title">Lo importante,<br />con respuestas claras.</h2>
            <p>Si tu consulta es más específica, podemos conversar directamente.</p>
            <WhatsAppLink className="button button--text">Hacer otra consulta</WhatsAppLink>
          </div>
          <div className="faq-list">
            {faqs.map(({ question, answer }, index) => (
              <details key={question} name="faq">
                <summary><span>{String(index + 1).padStart(2, "0")}. {question}</span><CaretDown size={21} /></summary>
                <div className="faq-answer"><p>{answer}</p></div>
              </details>
            ))}
          </div>
        </section>

        <section className="contact" id="contacto">
          <div className="contact-inner">
            <p className="eyebrow">Empecemos una conversación</p>
            <h2>Hablemos</h2>
            <p>Contanos qué necesita tu consorcio o barrio. Estamos en Mar del Plata y trabajamos con una gestión cercana, clara y profesional.</p>
            <WhatsAppLink className="button button--white">Escribinos por WhatsApp <ArrowRight size={19} /></WhatsAppLink>
            <div className="contact-links">
              <a href="mailto:admgrupoconsolidar@gmail.com"><span>Email</span>admgrupoconsolidar@gmail.com</a>
              <a href="https://www.instagram.com/grupoconsolidar_/" target="_blank" rel="noreferrer"><span>Instagram</span>@grupoconsolidar_</a>
              <div><span>Cobertura</span><MapPin size={17} /> Mar del Plata y zona</div>
            </div>
          </div>
        </section>
      </main>

      <a className="whatsapp-bubble" href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="Escribir por WhatsApp">
        <WhatsappLogo size={28} weight="fill" aria-hidden="true" />
      </a>

      <footer className="footer">
        <div className="footer-main">
          <div><Logo compact /><p>Administración moderna, transparente y cercana.</p></div>
          <nav aria-label="Navegación de pie">{navItems.map(([label, href]) => <a href={href} key={href}>{label}</a>)}</nav>
          <div className="footer-contact">
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer"><WhatsappLogo size={20} /> +54 9 223 340-5935</a>
            <a href="mailto:admgrupoconsolidar@gmail.com"><EnvelopeSimple size={20} /> admgrupoconsolidar@gmail.com</a>
            <a href="https://www.instagram.com/grupoconsolidar_/" target="_blank" rel="noreferrer"><InstagramLogo size={20} /> @grupoconsolidar_</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Grupo Consolidar · Matrícula Provincial 2440</p>
          <div className="footer-bottom-actions">
            <p>Información institucional sujeta a las condiciones de cada propuesta de administración.</p>
            <a className="back-to-top" href="#inicio" aria-label="Volver al inicio"><ArrowUp size={18} /></a>
          </div>
        </div>
      </footer>
    </>
  );
}

export { App };
