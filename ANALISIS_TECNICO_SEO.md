# ANÁLISIS TÉCNICO COMPLETO - Brisbane Roof Painting Solutions

**Fecha de análisis:** 28 de Enero, 2026  
**Tipo de proyecto:** React SPA (Single Page Application) con Vite  
**Propósito:** Optimización SEO para mejor indexación en Google

---

## 1. ARQUITECTURA ACTUAL

### Stack Técnico

#### Dependencias Principales
- **React:** `^18.3.1`
- **React DOM:** `^18.3.1`
- **Vite:** `^5.4.19`
- **React Router DOM:** `^6.30.1`
- **TypeScript:** `^5.8.3`

#### Plugins de Vite
- `@vitejs/plugin-react-swc` (`^3.11.0`) - Compilador SWC para React
- `lovable-tagger` (`^1.1.13`) - Solo en modo desarrollo

#### Sistema de Estilos
- **Tailwind CSS:** `^3.4.17`
- **PostCSS:** `^8.5.6`
- **Autoprefixer:** `^10.4.21`
- **Tailwind Typography:** `^0.5.16` (plugin)
- **Tailwind Animate:** `^1.0.7` (plugin)

#### Librerías UI
- **Radix UI:** Múltiples componentes (Accordion, Alert Dialog, Avatar, Checkbox, Dialog, Dropdown, etc.)
- **shadcn/ui:** Sistema de componentes basado en Radix UI
- **Framer Motion:** `^12.28.1` - Animaciones
- **Lucide React:** `^0.462.0` - Iconos

#### Otras Dependencias Relevantes
- **TanStack React Query:** `^5.83.0` - Gestión de estado del servidor
- **React Hook Form:** `^7.61.1` - Formularios
- **Zod:** `^3.25.76` - Validación de esquemas
- **date-fns:** `^3.6.0` - Manipulación de fechas

### Estructura de Archivos

```
brisbane-roof-revive/
├── index.html                    # Entry HTML con meta tags estáticos
├── vite.config.ts               # Configuración de Vite
├── tailwind.config.ts           # Configuración de Tailwind CSS
├── postcss.config.js            # Configuración de PostCSS
├── package.json                 # Dependencias y scripts
├── public/
│   ├── robots.txt               # ✅ Existe
│   ├── favicon.ico
│   └── images/
│       ├── logobrisbane.svg
│       └── logofooter.svg
└── src/
    ├── main.tsx                 # Entry point de React
    ├── App.tsx                  # Configuración de routing
    ├── index.css                # Estilos globales
    ├── pages/                   # Páginas de la aplicación
    │   ├── Index.tsx            # Home page
    │   ├── About.tsx
    │   ├── Contact.tsx
    │   ├── Services.tsx
    │   ├── ServiceDetail.tsx    # Página dinámica
    │   ├── Projects.tsx
    │   └── NotFound.tsx
    ├── components/              # Componentes reutilizables
    │   ├── home/                # Componentes específicos del home
    │   ├── layout/              # Header, Footer, FloatingBanner
    │   ├── services/            # Componentes de servicios
    │   └── ui/                  # Componentes shadcn/ui
    └── data/
        └── serviceData.ts       # Datos de servicios (6 servicios)
```

### Entry Point
- **HTML:** `index.html` → Carga `src/main.tsx`
- **React:** `src/main.tsx` → Renderiza `App.tsx`
- **Routing:** `src/App.tsx` → Configura todas las rutas

---

## 2. ROUTING Y PÁGINAS

### Configuración de Rutas en `App.tsx`

| Ruta | Componente | Descripción | Tipo |
|------|------------|-------------|------|
| `/` | `Index` | Página principal (Home) | Estática |
| `/about` | `About` | Página "Sobre Nosotros" | Estática |
| `/contact` | `Contact` | Formulario de contacto | Estática |
| `/services` | `Services` | Listado de todos los servicios | Estática |
| `/services/:serviceId` | `ServiceDetail` | Detalle de servicio específico | **Dinámica** |
| `/projects` | `Projects` | Galería de proyectos | Estática |
| `*` | `NotFound` | Página 404 | Catch-all |

### Servicios Dinámicos Disponibles

Según `src/data/serviceData.ts`, existen **6 servicios** con rutas dinámicas:

1. `/services/terracotta-tiles` - Clay Terracotta Tiles Painting
2. `/services/metal-roof` - Metal Roof Restoration
3. `/services/flat-concrete` - Flat Concrete Roof Painting
4. `/services/decramastic` - Decramastic Tile Painting
5. `/services/concrete-tiles` - Concrete Tiles Painting
6. `/services/industrial-coating` - Industrial Coating

### Componente ScrollToTop

El `App.tsx` incluye un componente `ScrollToTop` que hace scroll automático al inicio cuando cambia la ruta, mejorando la UX pero no afecta el SEO.

---

## 3. META TAGS Y SEO ACTUAL

### Meta Tags en `index.html` (ESTÁTICOS)

#### Meta Tags Básicos
```html
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Brisbane Roof Painting Solutions | Professional Roof Painting Services Brisbane QLD</title>
<meta name="description" content="Transform your roof with Brisbane's trusted roof painting experts. Professional roof restoration, terracotta tile painting, metal roof coating and more. Free quotes available." />
<meta name="author" content="Brisbane Roof Painting Solutions" />
```

#### Open Graph (Facebook/LinkedIn)
```html
<meta property="og:title" content="Brisbane Roof Painting Solutions | Professional Roof Painting Services" />
<meta property="og:description" content="Transform your roof with Brisbane's trusted roof painting experts. Professional roof restoration and painting services." />
<meta property="og:type" content="website" />
<meta property="og:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />
```

#### Twitter Cards
```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:site" content="@BrisbaneRoofPaintingSolutions" />
<meta name="twitter:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />
```

### Problemas Detectados con Meta Tags

1. **❌ Meta tags estáticos:** Todos los meta tags están hardcodeados en `index.html`
2. **❌ Mismo title/description para todas las páginas:** Google verá el mismo contenido en todas las rutas
3. **❌ Falta `og:url`:** No hay URL canónica en Open Graph
4. **❌ Falta `og:locale`:** No especifica el idioma/región
5. **❌ Imagen Open Graph genérica:** Usa una imagen placeholder de Lovable.dev
6. **❌ Falta `twitter:title` y `twitter:description`:** Solo tiene `twitter:card` e `image`
7. **❌ No hay meta tags específicos por página:** Cada página debería tener su propio title, description, etc.

### Meta Tags en Componentes de Páginas

**❌ NO se encontró uso de:**
- `react-helmet`
- `react-helmet-async`
- `react-helmet-async` (alternativa recomendada)
- Cualquier otra librería de gestión de meta tags

**Conclusión:** Todas las páginas comparten los mismos meta tags del `index.html`, lo que es un **problema crítico para SEO**.

---

## 4. SCHEMA MARKUP

### Estado Actual

**❌ NO existe Schema Markup JSON-LD en ninguna página.**

No se encontraron:
- Schema.org JSON-LD
- Microdata
- RDFa
- Cualquier tipo de structured data

### Schema Markup Recomendado

Para un negocio de servicios locales como Brisbane Roof Painting Solutions, se debería implementar:

1. **LocalBusiness** - Información del negocio local
2. **Service** - Para cada tipo de servicio ofrecido
3. **Organization** - Información de la empresa
4. **FAQPage** - Para las secciones de FAQ
5. **Review/Rating** - Si hay testimonios (actualmente hay testimonios pero sin Schema)
6. **BreadcrumbList** - Para navegación estructurada

---

## 5. SITEMAP Y ROBOTS

### Sitemap

**❌ NO existe `public/sitemap.xml`**

**Problemas:**
- Google no tiene un mapa del sitio para indexar todas las páginas
- Las páginas dinámicas de servicios no están listadas
- No hay generación automática de sitemap

**Páginas que deberían estar en el sitemap:**
- `/` (Home)
- `/about`
- `/contact`
- `/services`
- `/services/terracotta-tiles`
- `/services/metal-roof`
- `/services/flat-concrete`
- `/services/decramastic`
- `/services/concrete-tiles`
- `/services/industrial-coating`
- `/projects`

### Robots.txt

**✅ Existe `public/robots.txt`**

**Contenido actual:**
```
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: facebookexternalhit
Allow: /

User-agent: *
Allow: /
```

**Problemas detectados:**
- ❌ No referencia `sitemap.xml` (porque no existe)
- ✅ Permite todos los bots (correcto)
- ⚠️ Podría ser más específico con reglas para diferentes secciones

---

## 6. BUILD Y DEPLOYMENT

### Scripts en `package.json`

```json
{
  "dev": "vite",                    // Servidor de desarrollo
  "build": "vite build",            // Build de producción
  "build:dev": "vite build --mode development",  // Build en modo desarrollo
  "lint": "eslint .",               // Linter
  "preview": "vite preview",        // Preview del build
  "test": "vitest run",             // Tests unitarios
  "test:watch": "vitest"            // Tests en modo watch
}
```

### Proceso de Build

1. **Comando:** `npm run build`
2. **Output:** Carpeta `dist/` (por defecto en Vite)
3. **Optimizaciones:** Vite aplica minificación y optimización automática
4. **No hay prerendering:** Es una SPA pura, no hay SSR ni SSG

### Netlify

**❌ NO existe `netlify.toml`**

**Configuración recomendada para Netlify:**
- Redirects para SPA (todas las rutas → `index.html`)
- Headers de seguridad
- Configuración de build
- Variables de entorno si es necesario

**Nota:** Netlify puede funcionar sin `netlify.toml` si se configura desde el dashboard, pero es mejor práctica tenerlo en el repositorio.

---

## 7. PROBLEMAS DETECTADOS PARA SEO

### Problemas Críticos (Alta Prioridad)

1. **❌ Meta tags estáticos en `index.html`**
   - **Impacto:** Google ve el mismo title/description en todas las páginas
   - **Solución:** Implementar `react-helmet-async` para meta tags dinámicos

2. **❌ Falta `react-helmet-async`**
   - **Impacto:** No hay forma de cambiar meta tags por página
   - **Solución:** Instalar y configurar `react-helmet-async`

3. **❌ Falta Schema Markup JSON-LD**
   - **Impacto:** Google no entiende la estructura del contenido (negocio local, servicios, etc.)
   - **Solución:** Implementar Schema.org JSON-LD en cada página relevante

4. **❌ Falta `sitemap.xml`**
   - **Impacto:** Google no tiene un mapa completo del sitio para indexar
   - **Solución:** Generar sitemap automáticamente con todas las rutas

5. **❌ No hay URLs canónicas**
   - **Impacto:** Posible contenido duplicado en los ojos de Google
   - **Solución:** Agregar `<link rel="canonical">` dinámico por página

### Problemas Moderados (Media Prioridad)

6. **⚠️ Imagen Open Graph genérica**
   - **Impacto:** Compartir en redes sociales muestra imagen placeholder
   - **Solución:** Usar imágenes específicas por página

7. **⚠️ Falta `og:url` en Open Graph**
   - **Impacto:** Redes sociales no saben la URL canónica
   - **Solución:** Agregar `og:url` dinámico

8. **⚠️ No hay `netlify.toml`**
   - **Impacto:** Configuración de deployment no está versionada
   - **Solución:** Crear archivo con redirects y headers

9. **⚠️ Falta `lang` attribute en HTML**
   - **Impacto:** No especifica el idioma del contenido
   - **Solución:** Agregar `lang="en"` o `lang="en-AU"` en `<html>`

### Problemas Menores (Baja Prioridad)

10. **ℹ️ Robots.txt no referencia sitemap**
    - **Impacto:** Menor, pero es mejor práctica
    - **Solución:** Agregar `Sitemap: https://domain.com/sitemap.xml`

11. **ℹ️ Falta meta tag `robots` específico por página**
    - **Impacto:** Menor, pero útil para control granular
    - **Solución:** Agregar cuando sea necesario

---

## 8. DEPENDENCIES RELEVANTES PARA MIGRACIÓN

### Dependencias Actuales Relacionadas con SEO

**❌ NO tiene:**
- `react-helmet` - NO instalado
- `react-helmet-async` - NO instalado (recomendado sobre react-helmet)
- `vite-plugin-html` - NO instalado (alternativa para meta tags)
- `vite-plugin-sitemap` - NO instalado
- `sitemap-generator` - NO instalado
- Cualquier plugin de SEO para Vite

### Dependencias que SÍ tiene (pero no relacionadas con SEO)

- `react-router-dom` - Para routing (ya instalado)
- `@tanstack/react-query` - Para data fetching (no relacionado con SEO)

---

## 9. RECOMENDACIONES PARA OPTIMIZACIÓN SEO

### Fase 1: Instalación de Dependencias

```bash
npm install react-helmet-async
npm install --save-dev vite-plugin-sitemap
```

**O alternativamente para sitemap:**
```bash
npm install --save-dev sitemap-generator-cli
```

### Fase 2: Configuración de react-helmet-async

1. **Modificar `src/main.tsx`:**
   - Envolver la app con `<HelmetProvider>`

2. **Crear componente `SEO.tsx`:**
   - Componente reutilizable para meta tags
   - Props: title, description, ogImage, canonical, etc.

3. **Modificar cada página:**
   - Agregar componente `<SEO />` con props específicas
   - Ejemplo: `Index.tsx`, `About.tsx`, `Contact.tsx`, etc.

### Fase 3: Implementar Schema Markup

1. **Crear componente `SchemaMarkup.tsx`:**
   - Genera JSON-LD dinámicamente
   - Tipos: LocalBusiness, Service, Organization, FAQPage

2. **Agregar Schema en páginas:**
   - Home: `LocalBusiness` + `Organization`
   - Services: `Service` para cada servicio
   - About: `Organization`
   - Contact: `LocalBusiness` con información de contacto

### Fase 4: Generar Sitemap

**Opción A: Plugin de Vite (Recomendado)**
1. Configurar `vite-plugin-sitemap` en `vite.config.ts`
2. Generar automáticamente en build

**Opción B: Script personalizado**
1. Crear `scripts/generate-sitemap.js`
2. Ejecutar en pre-build
3. Generar `public/sitemap.xml` con todas las rutas

### Fase 5: Configuración de Netlify

1. **Crear `netlify.toml`:**
   ```toml
   [build]
     command = "npm run build"
     publish = "dist"

   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```

2. **Agregar headers de seguridad y SEO**

### Fase 6: Mejoras Adicionales

1. **Actualizar `index.html`:**
   - Agregar `lang="en-AU"` al tag `<html>`
   - Remover meta tags estáticos (se manejarán con Helmet)

2. **Actualizar `robots.txt`:**
   - Agregar referencia a sitemap: `Sitemap: https://domain.com/sitemap.xml`

3. **Optimizar imágenes Open Graph:**
   - Crear imágenes específicas por página (1200x630px)
   - Almacenar en `public/og-images/`

### Orden de Implementación Recomendado

1. ✅ **Instalar `react-helmet-async`** → Configurar HelmetProvider
2. ✅ **Crear componente SEO** → Implementar en todas las páginas
3. ✅ **Implementar Schema Markup** → Empezar con LocalBusiness y Organization
4. ✅ **Generar sitemap.xml** → Configurar plugin o script
5. ✅ **Crear netlify.toml** → Configurar redirects para SPA
6. ✅ **Actualizar robots.txt** → Agregar referencia a sitemap
7. ✅ **Optimizar Open Graph** → Crear imágenes específicas

### Archivos a Modificar/Crear

**Modificar:**
- `src/main.tsx` - Agregar HelmetProvider
- `src/App.tsx` - (opcional) Agregar lógica de canonical URLs
- `src/pages/Index.tsx` - Agregar SEO component
- `src/pages/About.tsx` - Agregar SEO component
- `src/pages/Contact.tsx` - Agregar SEO component
- `src/pages/Services.tsx` - Agregar SEO component
- `src/pages/ServiceDetail.tsx` - Agregar SEO component dinámico
- `src/pages/Projects.tsx` - Agregar SEO component
- `index.html` - Remover meta tags estáticos, agregar lang
- `vite.config.ts` - Agregar plugin de sitemap
- `public/robots.txt` - Agregar referencia a sitemap

**Crear:**
- `src/components/SEO.tsx` - Componente de meta tags
- `src/components/SchemaMarkup.tsx` - Componente de Schema JSON-LD
- `netlify.toml` - Configuración de Netlify
- `public/sitemap.xml` - (generado automáticamente o manualmente)

---

## 10. RESUMEN EJECUTIVO

### Estado Actual del SEO

| Aspecto | Estado | Prioridad |
|--------|--------|-----------|
| Meta tags dinámicos | ❌ No implementado | 🔴 Crítica |
| Schema Markup | ❌ No implementado | 🔴 Crítica |
| Sitemap.xml | ❌ No existe | 🔴 Crítica |
| Robots.txt | ✅ Existe | 🟢 OK |
| URLs canónicas | ❌ No implementado | 🟡 Media |
| Open Graph optimizado | ⚠️ Parcial | 🟡 Media |
| Netlify config | ❌ No existe | 🟡 Media |

### Impacto en Google

**Problemas que impiden indexación correcta:**
1. Google ve el mismo title/description en todas las páginas → **Bajo ranking**
2. No hay structured data → **No aparece en rich snippets**
3. No hay sitemap → **Indexación lenta/incompleta**
4. No hay URLs canónicas → **Posible contenido duplicado**

### Próximos Pasos Inmediatos

1. Instalar `react-helmet-async`
2. Implementar meta tags dinámicos en todas las páginas
3. Agregar Schema Markup básico (LocalBusiness)
4. Generar sitemap.xml
5. Configurar Netlify para SPA

---

**Fin del Análisis Técnico**

Este documento sirve como base para la implementación de optimizaciones SEO en el proyecto Brisbane Roof Painting Solutions.
