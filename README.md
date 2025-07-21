# NexuraLabs Landing Page

Una landing page moderna y limpia para NexuraLabs, construida con Next.js 14, App Router y TailwindCSS.

## 🚀 Tecnologías

- **Next.js 14** - Framework de React con App Router
- **TypeScript** - Tipado estático
- **TailwindCSS** - Framework de CSS utility-first
- **Lucide React** - Iconos modernos
- **Inter Font** - Tipografía moderna

## 🎨 Diseño

- **Paleta de colores:**
  - Primario: #001F3F (azul marino oscuro)
  - Acento: #007BFF (azul vívido)
  - Neutral: #F4F4F4 (gris claro), #FFFFFF (blanco), #1A1A1A (casi negro para texto)

- **Tipografía:** Inter (sans-serif moderno)

## 📁 Estructura del Proyecto

```
├── app/
│   ├── globals.css          # Estilos globales y TailwindCSS
│   ├── layout.tsx           # Layout principal con metadata
│   └── page.tsx             # Página principal
├── components/
│   ├── Hero.tsx             # Sección hero principal
│   ├── ProblemsSection.tsx  # Problemas que resolvemos
│   ├── SolutionsSection.tsx # Nuestras soluciones
│   ├── WhyNexuraLabs.tsx    # Por qué elegirnos
│   ├── TestimonialsSection.tsx # Testimonios de clientes
│   ├── CTASection.tsx       # Llamada a la acción
│   └── Footer.tsx           # Pie de página
├── public/                  # Archivos estáticos
└── package.json            # Dependencias y scripts
```

## 🛠️ Instalación

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Ejecutar en desarrollo:**
   ```bash
   npm run dev
   ```

3. **Construir para producción:**
   ```bash
   npm run build
   ```

4. **Ejecutar en producción:**
   ```bash
   npm start
   ```

## 📱 Características

- ✅ **Diseño responsive** - Optimizado para móvil y desktop
- ✅ **Componentes modulares** - Fácil de editar y mantener
- ✅ **SEO optimizado** - Metadata configurada
- ✅ **Accesibilidad** - ARIA labels y navegación por teclado
- ✅ **Performance** - Optimizado con Next.js 14
- ✅ **Animaciones suaves** - Transiciones y hover effects

## 🎯 Secciones

1. **Hero** - Headline principal y CTA
2. **Problemas** - 3 tarjetas con problemas comunes
3. **Soluciones** - Grid con servicios principales
4. **Why NexuraLabs** - 3 razones para elegirnos + estadísticas
5. **Testimonios** - Opiniones de clientes
6. **CTA/Contacto** - Llamada a la acción final
7. **Footer** - Enlaces y información de contacto

## 🔧 Personalización

### Colores
Los colores se pueden modificar en `tailwind.config.js`:

```javascript
colors: {
  primary: '#001F3F',    // Azul marino oscuro
  accent: '#007BFF',     // Azul vívido
  neutral: {
    50: '#F4F4F4',       // Gris claro
    900: '#1A1A1A',      // Casi negro
  }
}
```

### Contenido
Cada componente es independiente y fácil de editar. Los textos y datos están definidos en variables dentro de cada archivo.

### Iconos
Se utilizan iconos de Lucide React. Puedes cambiar los iconos importando otros de la librería.

## 📄 Licencia

Este proyecto está bajo la licencia MIT.

---

**NexuraLabs** - Tech Solutions that Grow with You
