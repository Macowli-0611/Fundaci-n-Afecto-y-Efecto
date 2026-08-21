# Fundación Afecto y Efecto — Nuevo Sitio Web

Sitio web moderno, accesible y responsivo para la Fundación Afecto y Efecto, construido con Next.js 15, TypeScript, Tailwind CSS.

## 🚀 Inicio Rápido

```bash
npm install && npm run dev
```

Abre http://localhost:3000

## ⚙️ Configuración

**Edita TODO los datos en un único archivo:**
```
src/config/site.config.ts
```

- Teléfono, email, WhatsApp
- Redes sociales
- Datos bancarios
- Métodos de PayPal

## 🖼️ Agregar Fotos

Coloca imágenes exactamente aquí (los nombres importan):

```
public/imagenes/
  ├── hero/hero.jpg
  ├── programas/{nombre-programa}.jpg
  ├── actividades/{nombre-actividad}.jpg
  └── galeria/galeria{1-6}.jpg
```

Ver `CONTENIDO-PENDIENTE.md` para lista completa.

## ➕ Agregar Contenido

**Nuevo programa:** Edita `src/content/programas.ts`
**Nueva actividad:** Edita `src/content/actividades.ts`

## 📧 Conectar Email

1. Crea cuenta: https://resend.com
2. Obtén API key
3. Añade a `.env.local`: `RESEND_API_KEY=...`
4. Crea `src/app/api/contacto/route.ts` con la integración

## 📱 Deploy

```bash
npm run build
vercel     # o netlify deploy
```

## 📋 Tareas Pendientes

Ver `CONTENIDO-PENDIENTE.md` para:
- Fotos que faltan
- Visión e Historia (pendientes)
- Datos bancarios para donaciones

## 🆘 Más Info

- Estructura completa: Ver `CONTENIDO-PENDIENTE.md`
- Componentes: `src/components/`
- Contenido: `src/content/`
