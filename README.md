# Fundación Afecto y Efecto — Nuevo Sitio Web

Sitio web moderno, accesible y responsivo para la Fundación Afecto y Efecto, construido con Next.js 15, TypeScript, Tailwind CSS.

## 🚀 Inicio Rápido

```bash
npm install && npm run dev
```

Abre http://localhost:3000

## ⚙️ Configuración

**Datos públicos** (teléfono, email, WhatsApp, redes sociales) → edítalos en:
```
src/config/site.config.ts
```

**Datos de donación** (cuenta bancaria, IDs de PayPal) → **NO van en el
código**. Se leen de variables de entorno para que nunca queden guardadas
en el historial de git:

1. Copia la plantilla: `cp .env.local.example .env.local`
2. Rellena los valores reales en `.env.local` (este archivo nunca se sube a git)
3. En producción (Vercel): Project → Settings → Environment Variables

Mientras una variable no esté configurada, esa sección se oculta sola en
`/donar` — no se ve nada roto.

## 🔒 Seguridad del repositorio

- **Mantén el repo privado en GitHub** (Settings → General → Danger Zone →
  Change repository visibility). Es público por defecto al crearlo; para un
  sitio con datos de donación es mejor privado, sobre todo si vas a dar
  acceso a un colaborador.
- **Para dar acceso a alguien:** Settings → Collaborators → Add people, en
  vez de compartir tu usuario/contraseña de GitHub.
- **Nunca** commitees `.env.local` (ya está en `.gitignore`) ni pegues
  claves/API keys directamente en el código — usa siempre variables de
  entorno.
- Los 3 IDs de PayPal del sitio viejo (`MKJEGZC7KHSNA`, `EX3LVAYQL8L3U`,
  `MZKDTPJKLFL8G`) ya estuvieron expuestos en un commit público anterior de
  este repo. No son secretos críticos (solo sirven para recibir pagos a esa
  cuenta), pero por precaución considera regenerarlos en PayPal antes de
  reactivarlos.

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
