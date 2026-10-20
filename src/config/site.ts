// ✏️ Editá solo este archivo para personalizar tu sitio.

export interface FotoGaleria {
  src: string;
  alt: string;
}

export interface Servicio {
  icono: string;
  titulo: string;
  descripcion: string;
  fotos: FotoGaleria[];
}

export const site = {
  nombre: 'Mi Mesa',
  slogan: 'Alquiler de vajilla para tus celebraciones',
  descripcion:
    'Platos, copas, cubiertos, manteles y más para cumpleaños, casamientos, eventos y reuniones. Nos encargamos de la entrega y el retiro.',

  // Número en formato internacional, sin +, espacios ni guiones.
  // Argentina (celular): 549 + código de área + número. Ej: 5493431234567
  whatsapp: '3437416666',
  mensajeWhatsapp: 'Hola! Quisiera consultar por el alquiler de vajilla para un evento.',

  // Archivo dentro de /public
  listaPrecios: '/lista-de-precios.pdf',

  email: 'contacto@tudominio.com',
  instagram: 'https://instagram.com/tuusuario',
  zona: 'Entregas en tu ciudad y alrededores',
  horario: 'Lunes a sábado de 9 a 19 hs',
};

export const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  site.mensajeWhatsapp,
)}`;

export const servicios: Servicio[] = [
  {
    icono: 'bi-circle',
    titulo: 'Platos y fuentes',
    descripcion: 'Playos, hondos, de postre y fuentes de servir, en distintos estilos.',
    fotos: [
      { src: '/galeria/platos-1.svg', alt: 'Platos playos blancos' },
      { src: '/galeria/platos-2.svg', alt: 'Platos con borde dorado' },
      { src: '/galeria/platos-3.svg', alt: 'Fuentes de servir' },
    ],
  },
  {
    icono: 'bi-cup-straw',
    titulo: 'Copas y vasos',
    descripcion: 'Copas de vino, agua, champagne, vasos de trago largo y de whisky.',
    fotos: [
      { src: '/galeria/copas-1.svg', alt: 'Copas de vino' },
      { src: '/galeria/copas-2.svg', alt: 'Copas de champagne' },
      { src: '/galeria/copas-3.svg', alt: 'Vasos de trago largo' },
    ],
  },
  {
    icono: 'bi-fork-knife',
    titulo: 'Cubiertos',
    descripcion: 'Tenedores, cuchillos, cucharas y cucharitas, en acero inoxidable, hieleras, bandejas',
    fotos: [
      { src: '/galeria/cubiertos-1.svg', alt: 'Set de cubiertos de acero' },
      { src: '/galeria/cubiertos-2.svg', alt: 'Cucharitas de postre' },
      { src: '/galeria/cubiertos-3.svg', alt: 'Cubiertos sobre servilleta' },
    ],
  },
  {
    icono: 'bi-flower1',
    titulo: 'Manteles y accesorios',
    descripcion: 'Manteles rectangulares y redondos, servilletas, individuales y centros de mesa.',
    fotos: [
      { src: '/galeria/manteles-1.svg', alt: 'Manteles blancos' },
      { src: '/galeria/manteles-2.svg', alt: 'Servilletas de tela' },
      { src: '/galeria/manteles-3.svg', alt: 'Centros de mesa' },
    ],
  },
];

export const pasos = [
  { n: '1', titulo: 'Consultanos', texto: 'Contanos la fecha y la cantidad de invitados.' },
  { n: '2', titulo: 'Elegí y reservá', texto: 'Te armamos el presupuesto y reservamos tu fecha.' },
  { n: '3', titulo: 'Entrega y retiro', texto: 'Llevamos todo y lo retiramos después, sin que laves nada.' },
];

// La galería con categorías se arma sola desde las carpetas de src/assets/galeria
// (ver src/config/galeria.ts).
