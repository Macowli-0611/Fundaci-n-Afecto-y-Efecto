export const organizacion = {
  nombre: "Fundación Afecto y Efecto",
  tagline: "SONREÍR ES GRATIS",
  founded: 2018,

  institucional: {
    descripcion:
      "La Fundación Afecto y Efecto, creada en el año 2018, es una organización independiente, sin ánimo de lucro, dedicada al desarrollo de programas sociales en las comunidades más vulnerables de Colombia a través de proyectos y programas que promuevan el desarrollo integral de niños, niñas y adolescentes.",
  },

  mision: {
    titulo: "Nuestra Misión",
    contenido:
      "Promover el desarrollo integral de niños, niñas y/o adolescentes en condición de vulnerabilidad en las áreas de educación, salud y recreación. Con el fin de fortalecer su proyecto de vida y por tanto contribuir al desarrollo de sus familias, la comunidad y la sociedad en general.",
  },

  // PENDIENTE: La visión y la historia se encuentran como imágenes en el sitio viejo
  // Necesita ser completada por la fundación
  vision: {
    titulo: "Nuestra Visión",
    contenido: "[CONTENIDO PENDIENTE - Ver CONTENIDO-PENDIENTE.md]",
    pendiente: true,
  },

  historia: {
    titulo: "Nuestra Historia",
    contenido: "[CONTENIDO PENDIENTE - Ver CONTENIDO-PENDIENTE.md]",
    pendiente: true,
  },

  // Cita de la biografía oficial de Instagram
  citaBio:
    "Cada uno da de lo que tiene en su corazón. Da, ya sea por altruismo, ya sea por filantropía, en ambas hay compasión.",

  ubicaciones: {
    historicas: ["Cartagena", "Medellín"],
    activas: ["Yumbo, Valle del Cauca"],
  },

  impacto: {
    metricas: [
      {
        label: "Niños y niñas beneficiados",
        value: "1.300+",
        description: "Desde la fundación en 2018",
        year: 2021,
        historical: true,
      },
      {
        label: "Ciudades de impacto",
        value: "3",
        description: "Cartagena, Medellín y Yumbo",
        year: 2021,
        historical: false, // Yumbo sigue activo
      },
      {
        label: "Años de labor",
        value: "6+",
        description: "Desde 2018 hasta hoy",
        year: 2024,
        historical: false,
      },
    ],
  },
};
