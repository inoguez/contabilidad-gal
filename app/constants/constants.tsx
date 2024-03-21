import {
  BadgeDollarSign,
  FlaskConical,
  HandCoins,
  Landmark,
  Locate,
  Microscope,
  PersonStanding,
  Scale,
} from 'lucide-react';

export const NAV_LINKS = [
  { name: 'Home', to: '/' },
  { name: 'Servicios', to: 'services' },
  { name: 'Nosotros', to: 'about' },
];

export const SERVICES = [
  {
    id: 'account',
    Icon: HandCoins,
    title: 'Contables',
    description:
      'Procesaremos sus operaciones con un sistema de contabilidad electrónica que cumple con las normas de información financiera y se actualiza conforme a las leyes fiscales.',
    characteristics: [
      'Reportes Financieros (Balance General, Estado de Resultados).',
      'Análisis Financieros a los Reportes Financieros.',
      'DIOT',
      'ISAN',
    ],
  },
  {
    id: 'fiscal',
    Icon: Landmark,
    title: 'Fiscales',
    description:
      'Actualmente, según las leyes fiscales, debemos pagar impuestos al SAT. Ofrecemos asesoría fiscal para garantizar el cumplimiento legal y beneficiar a nuestros clientes.',
    characteristics: [
      'Declaraciones Anuales de Personas Físicas y Morales.',
      'Pagos Provisionales de Impuesto sobre la renta (ISR) de Personas Físicas y Morales.',
      'Pagos Definitivos de Impuesto al Valor Agregado (IVA) de Personas Físicas y Morales.',
      'Declaraciones Informativas de Personas Físicas y Moral.',
    ],
  },
  {
    id: 'finance',
    Icon: BadgeDollarSign,
    title: 'Financieros',
    description:
      'La información financiera veraz y oportuna, para la toma de decisiones. Es fundamental para el posicionamiento de la organización en el mercado.',
    characteristics: [
      'Reportes Financieros (Balance General, Estado de Resultados).',
      'Análisis Financieros a los Reportes Financieros.',
      'DIOT',
      'ISAN',
    ],
  },
  {
    id: 'rh',
    Icon: PersonStanding,
    title: 'Recursos Humanos',
    description:
      'El recurso humano es vital para la organización y como empleador, es crucial pagar salarios y prestaciones. Ofrecemos el servicio de cálculo y proceso de nómina, liberándole tiempo para su operación.',
    characteristics: [
      'Altas y bajas de personal ante el Instituto Mexicano del Seguro Social (IMSS).',
      'Generación de Carga social, para el pago de cuotas obrero-patronales ante el Instituto Mexicano del Seguro Social (IMSS).',
      'Aportaciones patronales ante el Instituto del Fondo Nacional de la Vivienda para los trabajadores (INFONAVIT).',
    ],
  },
];

export const SPEECH_ABOUT =
  ' En Contabilidad GAL, nos enorgullece ofrecer soluciones integrales en el ámbito contable, fiscal, humano y financiero. Con más de 30 años de experiencia en el sector. Nuestro equipo está compuesto por profesionales altamente calificados y comprometidos, que se esfuerzan por proporcionar un servicio excepcional a cada uno de nuestros clientes.  \n\n Nos dedicamos a entender las necesidades específicas de tu empresa para brindarte soluciones personalizadas que impulsen tu crecimiento y éxito. En un entorno empresarial cada vez más complejo, entendemos la importancia de contar con asesoramiento experto y confiable. Es por eso que nos esforzamos por mantenernos actualizados con las últimas regulaciones y tendencias del mercado, para poder ofrecerte las mejores estrategias y recomendaciones. En Contabilidad GAL, no solo nos dedicamos a cumplir con tus expectativas, sino que nos esforzamos por superarlas en cada interacción. \n\n Nos comprometemos a proporcionarte un servicio excepcional, transparente y orientado a resultados que te permita alcanzar tus metas comerciales con confianza y tranquilidad. Ya sea que estés buscando optimizar tus procesos contables, maximizar tus beneficios fiscales, gestionar tu capital humano o planificar tus finanzas corporativas, estamos aquí para ayudarte en cada paso del camino. Gracias por considerar a Contabilidad GAL como tu socio confiable en el éxito empresarial. Esperamos tener la oportunidad de trabajar contigo y demostrarte el valor que podemos agregar a tu negocio. ¡Contáctanos hoy mismo y descubre cómo podemos ayudarte a alcanzar tus objetivos financieros!';

export const ABOUT_CHARACTERISTICS = [
  { icon: FlaskConical, text: '+30 años de experiencia' },
  { icon: Scale, text: 'Cumplimiento de las regulaciones fiscales' },
  { icon: Locate, text: 'Registros financieros precisos' },
  { icon: Microscope, text: 'Atención personalizada' },
];
// Servicios Contables
// Procesaremos sus operaciones, mediante un sistema de contabilidad electrónica, que nos permita un registro basado en las normas de información financiera.
// Siempre actualizados de acuerdo a los cambios de las leyes fiscales.
// Proceso de datos:

// Proceso de Ingresos relacionados con su actividad.
// Proceso de costos relacionados con sus compras de su actividad.
// Proceso de Gastos Fijos y variables relacionados con su actividad.
