// Configuración principal del sitio - EDITAR AQUÍ LOS DATOS

export const siteConfig = {
  name: "Fundación Afecto y Efecto",
  description: "Sonreír es gratis",
  tagline: "SONREÍR ES GRATIS",

  // Contacto - Verificar y completar
  contact: {
    email: "fundacionafectoyefecto@gmail.com",
    phone: "3126026887",
    whatsapp: "+573126026887",
    whatsappMessage: "Hola, quiero conocer más sobre la Fundación Afecto y Efecto",
    address: "Carrera 10 Norte #5-50",
    city: "Yumbo",
    department: "Valle del Cauca",
    country: "Colombia",
  },

  // Redes sociales
  social: {
    instagram: "https://www.instagram.com/fundacion_afecto_y_efecto_/",
    facebook: "https://www.facebook.com/Fundaci%C3%B3n-Afecto-y-Efecto-317325025459270",
  },

  // Donaciones - Completar cuando confirmes
  donations: {
    // PayPal - Cambiar 'activo' a true cuando verifices que funcionan
    paypal: {
      activo: false,
      // IDs encontrados en el sitio viejo - VERIFICAR
      buttonIds: {
        alimentos: "MKJEGZC7KHSNA", // Donación de alimentos
        bioseguridad: "EX3LVAYQL8L3U", // Equipos de protección
        recursos: "MZKDTPJKLFL8G", // Recursos digitales
      },
    },
    // Transferencia bancaria - Completar con datos oficiales
    banco: {
      activo: false,
      nombre: null as string | null,
      numero: null as string | null,
      titular: null as string | null,
      tipo: null as string | null, // "Cuenta corriente", "Cuenta de ahorros", etc
    },
    // Nequi, Daviplata, etc - Completar si se usa
    billetera: {
      activo: false,
      numero: null as string | null,
      tipo: null as string | null,
    },
  },

  // Datos históricos y ubicaciones
  history: {
    foundingYear: 2018,
    cities: {
      historic: ["Cartagena", "Medellín"],
      active: ["Yumbo"],
    },
  },

  // Colores del logo - Se actualizan al muestrear el PNG
  brand: {
    primary: "#00559B", // Azul (por muestrear)
    accent: "#FFC107", // Amarillo (por muestrear)
    accent2: "#E74C3C", // Coral/Rojo (por muestrear)
    text: "#000000",
    textLight: "#666666",
    background: "#FFFFFF",
  },
};

export type SiteConfig = typeof siteConfig;
