import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { mkdir } from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configuración
const hostname = 'https://brisbaneroofpaintingsolutions.com.au';
const outputPath = resolve(__dirname, '..', 'public', 'sitemap.xml');

// Rutas estáticas
const staticRoutes = [
  { url: '/', changefreq: 'weekly', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.8 },
  { url: '/services', changefreq: 'weekly', priority: 0.9 },
  { url: '/projects', changefreq: 'weekly', priority: 0.7 },
];

// Rutas dinámicas de servicios
const serviceRoutes = [
  { url: '/services/terracotta-tiles', changefreq: 'monthly', priority: 0.8 },
  { url: '/services/metal-roof', changefreq: 'monthly', priority: 0.8 },
  { url: '/services/flat-concrete', changefreq: 'monthly', priority: 0.8 },
  { url: '/services/decramastic', changefreq: 'monthly', priority: 0.8 },
  { url: '/services/concrete-tiles', changefreq: 'monthly', priority: 0.8 },
  { url: '/services/industrial-coating', changefreq: 'monthly', priority: 0.8 },
];

// Combinar todas las rutas
const allRoutes = [...staticRoutes, ...serviceRoutes];

// Generar sitemap
async function generateSitemap() {
  try {
    // Crear carpeta public si no existe
    const publicDir = resolve(__dirname, '..', 'public');
    await mkdir(publicDir, { recursive: true });

    const stream = new SitemapStream({ hostname });
    const writeStream = createWriteStream(outputPath);

    // Pipe el stream al archivo
    stream.pipe(writeStream);

    // Agregar todas las rutas
    allRoutes.forEach(route => {
      stream.write({
        url: route.url,
        changefreq: route.changefreq,
        priority: route.priority,
        lastmod: new Date().toISOString(),
      });
    });

    // Cerrar el stream
    stream.end();

    // Esperar a que termine de escribir
    await streamToPromise(stream);

    console.log('✅ Sitemap generated successfully at:', outputPath);
    console.log(`📄 Total URLs: ${allRoutes.length}`);
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
    process.exit(1);
  }
}

// Ejecutar
generateSitemap();
