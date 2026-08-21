import { Program } from "@/types";

export const programs: Program[] = [
  {
    id: "1",
    slug: "refuerzo-escolar-talleres",
    title: "Refuerzo Escolar y Talleres de Pintura",
    description:
      "Fortalecemos el aprendizaje estudiantil con técnicas de dibujo, pintura y artes plásticas.",
    fullDescription:
      "Programa integral de refuerzo académico combinado con talleres de arte. Enseñamos tejido, bordado, costura, dibujo, caricatura, pintura en 5 técnicas diferentes: plano, alto relieve, barro, cubismo y técnicas de pinceladas.",
    targetAudience: "Niños y niñas en condición de vulnerabilidad",
    image: "refuerzo-escolar.jpg",
    activities: [
      "Refuerzo en materias principales",
      "Técnicas de pintura y dibujo",
      "Tejido y bordado",
      "Desarrollo de habilidades artísticas",
    ],
  },
  {
    id: "2",
    slug: "lectura-dibujo-terapia",
    title: "Lectura, Dibujo y Cuento Terapia",
    description: "Fomentamos y trabajamos la inteligencia emocional a través de la expresión artística.",
    fullDescription:
      "Un espacio donde los niños y niñas pueden expresar sus emociones a través del dibujo, la lectura y la narración de cuentos. Trabajamos inteligencia emocional de forma terapéutica y segura.",
    targetAudience: "Niños y niñas de todas las edades",
    image: "lectura-terapia.jpg",
    activities: [
      "Lectura compartida",
      "Interpretación de cuentos",
      "Dibujo expresivo",
      "Sesiones de inteligencia emocional",
    ],
  },
  {
    id: "3",
    slug: "celebra-cumpleanos-afecto",
    title: "Celebra tu Cumpleaños con Afecto",
    description: "Celebramos las fiestas de nuestros niños y niñas en pro de un día feliz.",
    fullDescription:
      "Un programa especial donde los niños y niñas de la fundación pueden celebrar sus cumpleaños en un ambiente lleno de amor, amistad y alegría. Cada celebración es un momento para sentirse especial y acompañado.",
    targetAudience: "Todos los niños y niñas de la fundación",
    image: "cumpleanos.jpg",
    activities: [
      "Celebración personalizada",
      "Juegos y dinámicas",
      "Compartir alimentos",
      "Regalos y sorpresas",
    ],
  },
  {
    id: "4",
    slug: "buzon-fotografia-afecto",
    title: "Buzón y Fotografía de Afecto",
    description: "Recibimos videos, fotografías y mensajes para que nuestros niños sientan acompañamiento.",
    fullDescription:
      "Un espacio donde padrinos, amigos y donantes pueden enviar mensajes, fotografías y videos de apoyo. Los niños reciben estos mensajes de afecto que refuerzan su autoestima y sienten el acompañamiento permanente de la comunidad.",
    targetAudience: "Todos los niños y niñas de la fundación",
    image: "fotografia-afecto.jpg",
    activities: [
      "Recepción de mensajes de donantes",
      "Lectura y visualización de mensajes",
      "Compartir experiencias",
      "Creación de lazos",
    ],
  },
  {
    id: "5",
    slug: "comedor-comunitario-recreacion",
    title: "Comedor Comunitario y Grupo de Recreación",
    description: "Realizamos almuerzos comunitarios y espacios de juego y compartir.",
    fullDescription:
      "Ofrecemos almuerzos nutritivos en un comedor comunitario donde los niños y niñas comparten no solo alimento sino también momentos de convivencia, amistad y diversión. Contamos con espacios seguros para jugar, reír y fortalecer vínculos.",
    targetAudience: "Niños, niñas y familias de la comunidad",
    image: "comedor.jpg",
    activities: [
      "Almuerzos comunitarios nutritivos",
      "Juegos y deportes",
      "Actividades de recreación",
      "Espacios de convivencia",
    ],
  },
];
