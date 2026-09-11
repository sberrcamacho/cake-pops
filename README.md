# Cake Pops — landing page

Landing page de una sola página para un emprendimiento de cake pops artesanales, construida en
HTML, CSS y JavaScript planos (sin frameworks ni paso de build), publicada con GitHub Pages.

🔗 **Sitio publicado:** https://sberrcamacho.github.io/cake-pops/

## Estructura

```
index.html                Página principal
404.html                   Página de error 404
css/styles.css             Estilos (design tokens: colores, tipografía, spacing)
js/main.js                 Menú móvil y año dinámico del footer
assets/images/             Fotos optimizadas (JPG + WebP)
assets/favicon.svg, ...    Favicon e íconos
robots.txt, sitemap.xml    SEO técnico
design_handoff_cake_pops_landing/   Especificación de diseño original (referencia histórica)
```

## Contenido y diseño

El diseño reproduce fielmente la especificación de
`design_handoff_cake_pops_landing/Cake Pops Landing.dc.html` y su README (colores, tipografía
`DM Serif Display` + `Jost`, spacing, radios y copy), con la interfaz escalada ~12% para una
presencia visual más grande. El hero, la tarjeta de Vainilla y la sección "Nosotros" ya usan fotos
reales del producto (`hero-actual.png`, `vainilla-actual.png`, `nosotros-actual.png` en el
handoff); el destacado "Nuevo sabor" y las tarjetas de Red Velvet y Vainilla con Oreo siguen
usando fotos de stock provistas en el handoff y deben reemplazarse por fotografía propia del
negocio antes de usarse en producción a largo plazo.

## Desarrollo local

No requiere instalación. Para previsualizar con rutas relativas correctas:

```bash
python3 -m http.server 8000
```

Y abrir `http://localhost:8000/`.

## Despliegue

El sitio se sirve directamente desde la rama `main` (raíz) vía GitHub Pages — no hay paso de
build. Cualquier cambio en `main` se refleja automáticamente en la URL publicada.
