import {
  BadgeDollarSign,
  HandCoins,
  Landmark,
  PersonStanding,
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
      'Procesaremos sus operaciones, mediante un sistema de contabilidad electrónica, que nos permita un registro basado en las normas de información financiera. Siempre actualizados de acuerdo a los cambios de las leyes fiscales.',
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
      'Actualmente estamos obligados, de acuerdo con las Leyes fiscales a pagar impuestos al Servicio de Administración Tributaria (SAT). Te brindamos asesoría fiscal gratuita para el pago de sus impuestos, sea apegado a las leyes fiscales, siempre beneficiado a nuestros clientes.',
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
      'El recurso Humano es lo más importante para la organización y una de las obligaciones como patrón es pagar sus salarios y demás prestaciones laborales. Nosotros te ofrecemos el servicio de cálculo y proceso de nómina, con la posibilidad de que este tiempo lo invierta en su operación.',
    characteristics: [
      'Altas y bajas de personal ante el Instituto Mexicano del Seguro Social (IMSS).',
      'Generación de Carga social, para el pago de cuotas obrero-patronales ante el Instituto Mexicano del Seguro Social (IMSS).',
      'Aportaciones patronales ante el Instituto del Fondo Nacional de la Vivienda para los trabajadores (INFONAVIT).',
    ],
  },
];
// Servicios Contables
// Procesaremos sus operaciones, mediante un sistema de contabilidad electrónica, que nos permita un registro basado en las normas de información financiera.
// Siempre actualizados de acuerdo a los cambios de las leyes fiscales.
// Proceso de datos:

// Proceso de Ingresos relacionados con su actividad.
// Proceso de costos relacionados con sus compras de su actividad.
// Proceso de Gastos Fijos y variables relacionados con su actividad.
