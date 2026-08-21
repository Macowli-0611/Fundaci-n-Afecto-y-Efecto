# Contenido Pendiente — Fundación Afecto y Efecto

Este documento lista todos los contenidos y recursos que faltan para completar el sitio web.

## 📋 Contenido Institucional

### ✅ Completado
- [x] Nombre y tagline: "Fundación Afecto y Efecto" - "SONREÍR ES GRATIS"
- [x] Párrafo institucional (fundada en 2018, sin ánimo de lucro)
- [x] Misión
- [x] 8 Principios completos
- [x] 5 Programas con descripción
- [x] 6 Actividades/celebraciones recurrentes
- [x] Contacto: email, teléfono, dirección, redes sociales

### ❌ Pendiente - Información Institucional

**Visión**
- [ ] Texto oficial de la Visión de la Fundación
- [ ] Ubicación: `src/content/organizacion.ts` → campo `vision.contenido`

**Historia**
- [ ] Texto de la historia y origen de la Fundación
- [ ] Ubicación: `src/content/organizacion.ts` → campo `historia.contenido`
- [ ] Nota: En el sitio viejo estaba como imagen en la página "Acerca de"

**Director/Directora**
- [ ] Nombre y foto del director/a actual
- [ ] Pequeña biografía o descripción del rol
- [ ] Ubicación: crear nuevo componente en `src/components/sections/Director.tsx`

---

## 🖼️ Imágenes y Medios

### ✅ Funcional
- [x] 3 videos en Vimeo (sobrevivieron del sitio viejo)
  - `vimeo.com/522357760` — "FUNDACIÓN AFECTO Y EFECTO" (80s, 2021-03-11)
  - `vimeo.com/516470278` — "fundacion afecto y efecto" (21s, 2021-02-24)
  - `vimeo.com/525323372` — "FUNDACION AFECTO Y EFECTO" (9s, 2021-03-17)

### ❌ Pendiente - Fotografías

**Hero (Home)**
- [ ] Imagen principal de la fundación
- [ ] Tamaño: 600×500px (mínimo)
- [ ] Ruta: `public/imagenes/hero/hero.jpg`

**Programas** (necesarias 5 imágenes)
1. [ ] Refuerzo escolar y talleres de pintura
   - Ruta: `public/imagenes/programas/refuerzo-escolar.jpg`
2. [ ] Lectura y cuento terapia
   - Ruta: `public/imagenes/programas/lectura-terapia.jpg`
3. [ ] Celebra tu cumpleaños
   - Ruta: `public/imagenes/programas/cumpleanos.jpg`
4. [ ] Buzón y fotografía de afecto
   - Ruta: `public/imagenes/programas/fotografia-afecto.jpg`
5. [ ] Comedor comunitario
   - Ruta: `public/imagenes/programas/comedor.jpg`

**Actividades** (necesarias 6 imágenes)
- [ ] Día del Niño → `public/imagenes/actividades/dia-nino.jpg`
- [ ] Halloween → `public/imagenes/actividades/halloween.jpg`
- [ ] Cumpleaños → `public/imagenes/actividades/cumpleanos.jpg`
- [ ] Día de la Madre → `public/imagenes/actividades/dia-madre.jpg`
- [ ] Amor y Amistad → `public/imagenes/actividades/amor-amistad.jpg`
- [ ] Navidad → `public/imagenes/actividades/navidad.jpg`

**Galería** (necesarias 6 imágenes)
- [ ] 6 fotos de eventos, talleres o actividades
- [ ] Rutas: `public/imagenes/galeria/galeria1.jpg` hasta `galeria6.jpg`

**Página "Nosotros"**
- [ ] Foto de la fundación o del equipo → `public/imagenes/programas/nosotros.jpg`
- [ ] Foto de la misión/trabajo → `public/imagenes/programas/mision.jpg`

**Logo**
- [ ] Logo oficial en formato PNG/SVG
- [ ] Ruta: `public/logo.png`

### 📸 Vías para Recuperar Fotos (Prioridad)

1. **Facebook (ALTA PROBABILIDAD)**
   - Página: https://www.facebook.com/Fundaci%C3%B3n-Afecto-y-Efecto-317325025459270
   - Pasos:
     1. Acceder a tu cuenta de Facebook
     2. Ir a Configuración → Tu información → Descargar tu información
     3. Seleccionar "Fotos y videos"
     4. Esperar el ZIP con todos tus medios
   - Las fotos de la fundación publicadas allí están en resolución original

2. **Instagram (ALTA PROBABILIDAD)**
   - Cuenta: @fundacion_afecto_y_efecto_
   - Método similar a Facebook: Configuración → Descargar tus datos
   - O descargar una por una desde la app

3. **Panel de now.site (MEDIA PROBABILIDAD)**
   - Si aún tienes acceso a la cuenta de fundacionafectoyefecto.now.site
   - Revisar Biblioteca de Medios o Archivos del editor
   - Las imágenes pueden estar almacenadas localmente en el servidor

4. **Soporte de now.site (BAJA PROBABILIDAD)**
   - Contactar: `support@now.site`
   - Pedir: Restauración de contenedor de medios
   - Referencia: `landingPageID 50081029`, subdominio `fundacionafectoyefecto`
   - Después de años es poco probable, pero es gratis intentar

5. **Dispositivo de quien administraba el sitio (MEDIA/ALTA PROBABILIDAD)**
   - Google Drive de la fundación
   - WhatsApp, Telegram
   - Computador personal
   - Fotos en el teléfono
   - Correos con archivos adjuntos

---

## 💰 Configuración de Donaciones

### ✅ Listo
- [x] Sección "Formas de Apoyo" estructurada
- [x] Interfaz para métodos de pago
- [x] Formulario de contacto funcional

### ⚠️ Seguridad — cómo se maneja este bloque ahora

Estos datos **ya no se escriben en el código**. Se leen de variables de
entorno (`.env.local` en desarrollo, "Environment Variables" en Vercel para
producción), así nunca quedan guardados en el historial de git —
imprescindible porque el repositorio tiene colaboradores y está desplegado
en Vercel. Ver plantilla completa: **`.env.local.example`**.

Mientras una variable no esté configurada, esa sección de la página
`/donar` se oculta sola (no se ve nada roto ni "pendiente" visible).

### ❌ Pendiente - Métodos de Pago

**PayPal** (3 botones encontrados en sitio viejo — verificar antes de reactivar)
- [ ] Verificar que estos IDs sigan activos (⚠️ ya estuvieron expuestos en un
      commit público anterior del repo; considera regenerarlos en PayPal en
      vez de reutilizarlos, por precaución):
  - `MKJEGZC7KHSNA` — Donación de alimentos
  - `EX3LVAYQL8L3U` — Equipos de protección
  - `MZKDTPJKLFL8G` — Recursos digitales
- [ ] Configurar en `.env.local` (local) y en Vercel (producción):
  ```
  PAYPAL_BUTTON_ID_ALIMENTOS=...
  PAYPAL_BUTTON_ID_BIOSEGURIDAD=...
  PAYPAL_BUTTON_ID_RECURSOS=...
  ```

**Transferencia Bancaria**
- [ ] Nombre del banco, número de cuenta, titular, tipo de cuenta
- [ ] Configurar en `.env.local` y en Vercel:
  ```
  DONACIONES_BANCO_NOMBRE=...
  DONACIONES_BANCO_NUMERO=...
  DONACIONES_BANCO_TITULAR=...
  DONACIONES_BANCO_TIPO=...
  ```

**Billetera Digital (opcional)**
- [ ] Número Nequi / Daviplata / similar
- [ ] Configurar en `.env.local` y en Vercel:
  ```
  DONACIONES_BILLETERA_NUMERO=...
  DONACIONES_BILLETERA_TIPO=...
  ```

---

## 📍 Datos de Contacto

### ✅ Confirmados
- [x] Email: `fundacionafectoyefecto@gmail.com`
- [x] Teléfono: `312 602 6887`
- [x] WhatsApp: `+57 312 602 6887`
- [x] Dirección: Carrera 10 Norte #5-50
- [x] Ciudad: Yumbo
- [x] Departamento: Valle del Cauca
- [x] Instagram: `@fundacion_afecto_y_efecto_`
- [x] Facebook: Fundación Afecto y Efecto

### ❌ Pendiente - Detalles de Ubicación
- [ ] Confirmación si la dirección completa es correcta
- [ ] Código postal (si aplica)
- [ ] Teléfono alternativo o fax
- [ ] Horario de atención

**Ubicación en código:** `src/config/site.config.ts` → `contact` y `history`

---

## 🔧 Integraciones Técnicas

### ❌ Pendiente - Email del Formulario
- [ ] Conectar servicio de email real (actualmente solo simula)
- [ ] Opciones:
  - **Resend** (recomendado): https://resend.com
  - **Formspree**: https://formspree.io
  - **SendGrid**: https://sendgrid.com
  - **Firebase**: Función en Cloud

**Ubicación:** `src/app/api/contacto/route.ts` (crear archivo)

### ❌ Pendiente - Mapas
- [ ] Integrar Google Maps en página de contacto
- [ ] O Leaflet para privacidad

---

## ✏️ Ajustes Menores

- [ ] Verificar colores exactos del logo (muestrear PNG)
- [ ] Completar cualquier información faltante en biografía Instagram
- [ ] Revisar URLs de redes sociales
- [ ] Confirmar años históricos en la sección de impacto
- [ ] Actualizar año de copyright en footer (actualmente 2024)

---

## 📋 Checklist de Próximos Pasos

```
PRIORIDAD 1 - CRÍTICO
- [ ] Obtener fotos del Facebook/Instagram de la Fundación
- [ ] Completar datos bancarios para donaciones
- [ ] Verificar que PayPal IDs sigan funcionando
- [ ] Escribir/obtener la Visión

PRIORIDAD 2 - IMPORTANTE
- [ ] Subir fotos a carpetas designadas
- [ ] Conectar email del formulario de contacto
- [ ] Revisar logo y muestrear colores exactos
- [ ] Escribir/obtener la Historia de la Fundación

PRIORIDAD 3 - COMPLEMENTARIO
- [ ] Integrar Google Maps
- [ ] Información del Director/a
- [ ] Foto de la dirección física
- [ ] Horario de atención
- [ ] Página de Privacidad y Términos

PUBLICACIÓN
- [ ] QA completo (revisar todas las páginas)
- [ ] Testing de formulario
- [ ] Verificar enlaces
- [ ] Testing en móvil/tablet/desktop
- [ ] Lighthouse ≥95 en performance
- [ ] Deploy a producción
```

---

## 📞 Cómo Proceder

1. **Descarga de fotos del Facebook:**
   - Ve a Facebook → Configuración → Tu información → Descargar tu información
   - Selecciona "Fotos y videos" y "Solo mis publicaciones"
   - Espera el ZIP (toma ~24h)
   - Extrae y copia las fotos a las carpetas indicadas

2. **Sube las fotos:**
   - Coloca cada foto en su carpeta exacta (ver secciones arriba)
   - Respeta los nombres de archivo indicados
   - El sitio reemplaza automáticamente los placeholders

3. **Completa la configuración:**
   - Abre `src/config/site.config.ts`
   - Rellena datos bancarios, PayPal y información faltante
   - Guarda el archivo

4. **Conecta email (opcional pero recomendado):**
   - Elige un servicio (Resend es muy fácil)
   - Crea función en `src/app/api/contacto/route.ts`
   - El formulario comenzará a enviar emails reales

5. **Deploy:**
   - Ejecuta `npm run build` localmente
   - Corrige errores si hay
   - Sube a Vercel, Netlify o tu servidor favorito

---

## 📎 Referencias

- **Sitio viejo:** https://fundacionafectoyefecto.now.site/home (aún vivo pero con fotos muertas)
- **Instagram:** https://www.instagram.com/fundacion_afecto_y_efecto_/
- **Facebook:** https://www.facebook.com/Fundaci%C3%B3n-Afecto-y-Efecto-317325025459270
- **Vimeo videos:** Los 3 videos están enlazados en la sección de Actividades

---

**Última actualización:** 2026-08-21
**Estado:** Sitio funcional con contenido real. Aguardando fotos, datos bancarios y configuración de email.
