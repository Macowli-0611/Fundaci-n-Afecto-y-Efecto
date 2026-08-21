// Configuración principal del sitio.
//
// Los datos NO sensibles (contacto público, redes sociales) están escritos
// directamente aquí porque ya son públicos en el Facebook/Instagram de la
// Fundación.
//
// Los datos de donación (cuenta bancaria, IDs de PayPal) se leen de
// variables de entorno — NUNCA se escriben aquí como texto literal, para
// que nunca queden guardados en el historial de git. Se configuran en
// `.env.local` (desarrollo) y en Vercel → Settings → Environment Variables
// (producción). Ver `.env.local.example` para la lista completa.

function readEnv(name: string): string | null {
  const value = process.env[name];
  return value && value.trim().length > 0 ? value : null;
}

export const siteConfig = {
  name: "Fundación Afecto y Efecto",
  description: "Sonreír es gratis",
  tagline: "SONREÍR ES GRATIS",

  // Contacto - público, tomado del sitio/redes oficiales
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

  // Redes sociales - públicas
  social: {
    instagram: "https://www.instagram.com/fundacion_afecto_y_efecto_/",
    facebook: "https://www.facebook.com/Fundaci%C3%B3n-Afecto-y-Efecto-317325025459270",
  },

  // Donaciones — todo sale de variables de entorno. Si la variable no está
  // configurada, la sección se oculta sola (ver src/app/donar/page.tsx).
  donations: {
    paypal: {
      buttonIds: {
        alimentos: readEnv("PAYPAL_BUTTON_ID_ALIMENTOS"),
        bioseguridad: readEnv("PAYPAL_BUTTON_ID_BIOSEGURIDAD"),
        recursos: readEnv("PAYPAL_BUTTON_ID_RECURSOS"),
      },
    },
    banco: {
      nombre: readEnv("DONACIONES_BANCO_NOMBRE"),
      numero: readEnv("DONACIONES_BANCO_NUMERO"),
      titular: readEnv("DONACIONES_BANCO_TITULAR"),
      tipo: readEnv("DONACIONES_BANCO_TIPO"),
    },
    billetera: {
      numero: readEnv("DONACIONES_BILLETERA_NUMERO"),
      tipo: readEnv("DONACIONES_BILLETERA_TIPO"),
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
