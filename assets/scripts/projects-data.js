export const projects = [

  // Project #1
  {
    slug: "25-5-clock",

    category: "react",

    year: 2025,

    icon: "clock",

    title: {
      en: "25 + 5 Clock",
      es: "Reloj 25 + 5",
    },

    heroImage: {
      src: "https://res.cloudinary.com/dolmulmgp/image/upload/v1768921297/25_5_Clock_p57sxt.jpg",
      alt: {
        en: "25 + 5 Clock Screenshot",
        es: "Captura del Reloj 25 + 5",
      },
    },

    shortSummary: {
      en: "Pomodoro timer with session control and keyboard interaction.",
      es: "Temporizador Pomodoro con control de sesión y navegación por teclado.",
    },

    summary: {
      en: "A Pomodoro-style timer built with React and Babel, featuring session and break controls, keyboard interaction, and audio alerts. Styled with a retro digital aesthetic using Orbitron font, neon green accents, and glowing shadows. This project is part of the freeCodeCamp Front End Development Libraries certification.",
      es: "Un temporizador estilo Pomodoro construido con React y Babel, con controles de sesión y descanso, interacción por teclado y alertas de audio. Estilizado con una estética digital retro usando la fuente Orbitron, acentos en verde neón y sombras brillantes. Este proyecto forma parte de la certificación de freeCodeCamp en Bibliotecas de Desarrollo Front-End.",
    },

    technologies: ["React", "Timer", "UX"],

    links: {
      demo: "https://codepen.io/JoseAlfonzo92/full/EajRaEg",
      code: "https://codepen.io/JoseAlfonzo92/pen/EajRaEg",
    },

    sections: [
      {
        key: "objectives",

        title: {
          en: "Objectives",
          es: "Objetivos",
        },

        text: {
          en: "Build a functional Pomodoro timer with session and break intervals, using React for state management and JSX rendering. The project needed to support keyboard interaction, audio alerts, and a responsive layout with retro styling.",
          es: "Construir un temporizador Pomodoro funcional con intervalos de sesión y descanso, usando React para gestión de estado y renderizado con JSX. El proyecto debía soportar interacción por teclado, alertas de audio y un diseño responsivo con estilo retro.",
        },
      },

      {
        key: "challenges",

        title: {
          en: "Challenges Faced",
          es: "Desafíos Encontrados",
        },

        text: {
          en: "Managing timer state transitions between session and break modes, formatting time display accurately, and ensuring keyboard and audio functionality worked seamlessly across browsers. Styling the UI to evoke a nostalgic digital feel without sacrificing clarity.",
          es: "Gestionar las transiciones de estado del temporizador entre modos de sesión y descanso, formatear correctamente la visualización del tiempo y asegurar que la funcionalidad de teclado y audio funcionara sin problemas en todos los navegadores. Estilizar la interfaz para evocar una estética digital nostálgica sin sacrificar claridad.",
        },
      },

      {
        key: "solutions",

        title: {
          en: "Solutions Implemented",
          es: "Soluciones Implementadas",
        },

        text: {
          en: "Used React hooks for state and interval control, Babel for JSX compilation, and custom CSS for retro styling. Integrated audio playback for alerts and keyboard event listeners for accessibility. Applied responsive design principles and Orbitron font for digital aesthetics.",
          es: "Se utilizaron hooks de React para control de estado e intervalos, Babel para compilación de JSX y CSS personalizado para el estilo retro. Se integró reproducción de audio para alertas y listeners de teclado para accesibilidad. Se aplicaron principios de diseño responsivo y la fuente Orbitron para estética digital.",
        },
      },
    ],

    benefits: [
      {
        icon: "stopwatch",

        text: {
          en: "Pomodoro-style timer with session and break intervals",
          es: "Temporizador estilo Pomodoro con intervalos de sesión y descanso",
        },
      },

      {
        icon: "keyboard",

        text: {
          en: "Keyboard interaction and audio alerts",
          es: "Interacción por teclado y alertas de audio",
        },
      },

      {
        icon: "desktop",

        text: {
          en: "Responsive layout with retro digital styling",
          es: "Diseño responsivo con estilo digital retro",
        },
      },

      {
        icon: "certificate",

        text: {
          en: "Part of freeCodeCamp Front End Libraries certification",
          es: "Parte de la certificación de freeCodeCamp en Bibliotecas Front-End",
        },
      },
    ],

    gallery: {
      images: [
        {
          src: "https://res.cloudinary.com/dolmulmgp/image/upload/v1768921297/25_5_Clock_p57sxt.jpg",

          alt: {
            en: "Retro digital UI with Orbitron font and neon accents",
            es: "Interfaz digital retro con fuente Orbitron y acentos en verde neón",
          },
        },

        {
          src: "https://res.cloudinary.com/dolmulmgp/image/upload/v1768921297/25_5_Clock_p57sxt.jpg",

          alt: {
            en: "Session and break controls with keyboard interaction",
            es: "Controles de sesión y descanso con interacción por teclado",
          },
        },

        {
          src: "https://res.cloudinary.com/dolmulmgp/image/upload/v1768921297/25_5_Clock_p57sxt.jpg",

          alt: {
            en: "Responsive mobile layout of the timer",
            es: "Diseño responsivo del temporizador en móviles",
          },
        },

        {
          src: "https://res.cloudinary.com/dolmulmgp/image/upload/v1768921297/25_5_Clock_p57sxt.jpg",

          alt: {
            en: "Audio alert integration for session transitions",
            es: "Integración de alertas de audio para los cambios de sesión",
          },
        },

        {
          src: "https://res.cloudinary.com/dolmulmgp/image/upload/v1768921297/25_5_Clock_p57sxt.jpg",

          alt: {
            en: "Accessible timer with keyboard support",
            es: "Temporizador accesible con soporte para teclado",
          },
        },
      ],

      video: {
        url: "https://www.youtube.com/embed/aA_KDpccRz8",

        title: {
          en: "Demo of a 25 + 5 Clock made with React",
          es: "Demostración de un Reloj 25 + 5 hecho con React",
        },
      },
    },

    team: [
      {
        name: "José Alfonzo",

        role: {
          en: "Front-End Developer & Project Lead",
          es: "Desarrollador Front-End y Líder del Proyecto",
        },
      },
    ],
  },

 // Project #2
{
  slug: "advice-generator",

  category: "frontend",

  year: 2025,

  icon: "comment-dots",

  title: {
    en: "Advice Generator App",
    es: "Aplicación Generadora de Consejos",
  },

  heroImage: {
    src: "https://res.cloudinary.com/dolmulmgp/image/upload/v1768921297/advice-desktop-design_plmkvm.jpg",
    alt: {
      en: "Advice Generator App Screenshot",
      es: "Captura de la Aplicación Generadora de Consejos",
    },
  },


  shortSummary:{
en:"Interactive app that fetches random advice with smooth UI transitions.", 
es: "App interactiva que obtiene consejos aleatorios con transiciones de interfaz suaves.",
  },

  summary: {
    en: "A sleek advice generator built for a Frontend Mentor challenge, powered by the Advice Slip API. It fetches random advice and displays it with smooth transitions, responsive layout, and interactive dice-triggered updates. Styled with Manrope font, neon hover effects, and semantic HTML, the app delivers a clean, accessible experience across devices.",
    es: "Una aplicación elegante para generar consejos desarrollada como parte de un desafío de Frontend Mentor, impulsada por la Advice Slip API. Obtiene consejos aleatorios y los muestra con transiciones suaves, diseño responsivo y actualizaciones interactivas activadas por un dado. Estilizada con la fuente Manrope, efectos de neón y HTML semántico, la app ofrece una experiencia limpia y accesible en todos los dispositivos.",
  },


  technologies: ["JavaScript", "API", "Responsive"],

  links: {
    demo: "https://josealfonzo92.github.io/Frontend-Mentor-Advice-Generator-App/",
    code: "https://github.com/JoseAlfonzo92/Frontend-Mentor-Advice-Generator-App.git",
  },

  sections: [
    {
      key: "objectives",

      title: {
        en: "Objectives",
        es: "Objetivos",
      },

      text: {
        en: "Create a responsive advice generator that fetches live data from the Advice Slip API. The app needed to deliver a smooth, interactive experience with animated transitions, semantic structure, and accessibility across devices.",
        es: "Crear una aplicación responsiva para generar consejos que obtenga datos en vivo desde la Advice Slip API. La app debía ofrecer una experiencia interactiva fluida con transiciones animadas, estructura semántica y accesibilidad en todos los dispositivos.",
      },
    },

    {
      key: "challenges",

      title: {
        en: "Challenges Faced",
        es: "Desafíos Encontrados",
      },

      text: {
        en: "Ensuring consistent API responses, handling edge cases in advice rendering, and styling the layout to match the design specification while maintaining responsiveness. Creating a glowing hover effect and positioning the dice button for mobile and desktop views also required precision.",
        es: "Asegurar respuestas consistentes de la API, manejar casos límite en la visualización de consejos y estilizar el diseño para cumplir con la especificación manteniendo la responsividad. Crear el efecto de neón al pasar el cursor y posicionar correctamente el botón del dado en móviles y escritorio también requirió precisión.",
      },
    },

    {
      key: "solutions",

      title: {
        en: "Solutions Implemented",
        es: "Soluciones Implementadas",
      },

      text: {
        en: "Used semantic HTML5 and custom CSS with root variables for styling. Integrated the Advice Slip API using JavaScript fetch logic and dynamic DOM updates. Applied responsive design principles and media queries to adapt the layout across screen sizes. Added hover animations and accessibility improvements for keyboard users.",
        es: "Se utilizó HTML5 semántico y CSS personalizado con variables raíz para el estilo. Se integró la Advice Slip API mediante lógica fetch en JavaScript y actualizaciones dinámicas del DOM. Se aplicaron principios de diseño responsivo y media queries para adaptar el diseño a distintos tamaños de pantalla. También se añadieron animaciones al pasar el cursor y mejoras de accesibilidad para usuarios de teclado.",
      },
    },
  ],

  benefits: [
    {
      icon: "sync-alt",

      text: {
        en: "Live advice fetching via Advice Slip API",
        es: "Obtención de consejos en vivo mediante Advice Slip API",
      },
    },

    {
      icon: "magic",

      text: {
        en: "Neon hover effects and animated transitions",
        es: "Efectos de neón al pasar el cursor y transiciones animadas",
      },
    },

    {
      icon: "mobile-alt",

      text: {
        en: "Responsive layout with mobile-first design",
        es: "Diseño responsive con enfoque mobile-first",
      },
    },

    {
      icon: "universal-access",

      text: {
        en: "Accessible markup and keyboard support",
        es: "Marcado accesible y soporte para teclado",
      },
    },
  ],

  gallery: {
    images: [
      {
        src: "https://res.cloudinary.com/dolmulmgp/image/upload/v1768921297/advice-active-states_rv2spy.jpg",

        alt: {
          en: "Advice card layout with neon styling",
          es: "Tarjeta de consejos con estilo neón",
        },
      },

      {
        src: "https://res.cloudinary.com/dolmulmgp/image/upload/v1768921297/advice-desktop-design_plmkvm.jpg",

        alt: {
          en: "Dice button triggering new advice",
          es: "Botón de dado que genera un nuevo consejo",
        },
      },

      {
        src: "https://res.cloudinary.com/dolmulmgp/image/upload/v1768921298/advice-desktop-preview_y6m8yo.jpg",

        alt: {
          en: "Responsive desktop layout",
          es: "Diseño responsivo en escritorio",
        },
      },

      {
        src: "https://res.cloudinary.com/dolmulmgp/image/upload/v1768921299/advice-mobile-design_pfkfib.jpg",

        alt: {
          en: "Mobile view with Advice Slip API integration",
          es: "Vista móvil con integración de Advice Slip API",
        },
      },
    ],

    video: {
      url: "https://www.youtube.com/embed/2Dx0OsvRXkI",

      title: {
        en: "Demo of an Advice Generator App",
        es: "Demostración de la Aplicación Generadora de Consejos",
      },
    },
  },

  team: [
    {
      name: "José Alfonzo",

      role: {
        en: "Front-End Developer",
        es: "Desarrollador Front-End",
      },
    },
  ],
},

// Project #3
{
  slug: "age-calculator",

  category: "javascript",
  year: 2025,
  icon: "calendar-alt",

  title: {
    en: "Age Calculator App",
    es: "Aplicación Calculadora de Edad",
  },

  heroImage: {
    src: "https://res.cloudinary.com/dolmulmgp/image/upload/v1768921315/age-desktop-design_zthhjm.jpg",
    alt: {
      en: "Age Calculator App Screenshot",
      es: "Captura de la Aplicación Calculadora de Edad",
    },
  },

  shortSummary: {
    en: "Calculates age with custom validation and animated results.",
    es: "Calcula la edad con validación personalizada y resultados animados."
  },

  summary: {
    en: "A responsive age calculator built for a Frontend Mentor challenge. It features semantic HTML, custom form validation, animated results, and accurate age calculations using vanilla JavaScript.",
    es: "Una calculadora de edad responsiva desarrollada para un desafío de Frontend Mentor. Incluye HTML semántico, validación personalizada de formularios, resultados animados y cálculos precisos usando JavaScript puro."
  },

  technologies: ["JavaScript", "Forms", "UI", "Validation"],

  links: {
    demo: "https://josealfonzo92.github.io/age-calculator-app/",
    code: "https://github.com/JoseAlfonzo92/age-calculator-app.git",
  },

  sections: [
    {
      key: "objectives",
      title: {
        en: "Objectives",
        es: "Objetivos"
      },
      text: {
        en: "Build a clean and responsive age calculator that validates user input and displays results with smooth animation. The project follows accessibility best practices and accurately calculates age in years, months, and days.",
        es: "Construir una calculadora de edad limpia y responsiva que valide la entrada del usuario y muestre los resultados con animaciones suaves. El proyecto sigue buenas prácticas de accesibilidad y calcula con precisión la edad en años, meses y días."
      }
    },
    {
      key: "challenges",
      title: {
        en: "Challenges Faced",
        es: "Desafíos Encontrados"
      },
      text: {
        en: "Handling date validation, leap years, invalid dates, and edge cases while maintaining a responsive interface and delivering animated feedback without sacrificing performance.",
        es: "Gestionar la validación de fechas, años bisiestos, fechas inválidas y casos límite mientras se mantenía una interfaz responsiva y una retroalimentación animada sin afectar el rendimiento."
      }
    },
    {
      key: "solutions",
      title: {
        en: "Solutions Implemented",
        es: "Soluciones Implementadas"
      },
      text: {
        en: "Implemented semantic HTML5, modular CSS, and JavaScript logic for validation and calculations. Added smooth number animations, custom validation messages, keyboard accessibility, and responsive layouts across all devices.",
        es: "Se implementó HTML5 semántico, CSS modular y lógica en JavaScript para validaciones y cálculos. Se añadieron animaciones suaves, mensajes de error personalizados, accesibilidad mediante teclado y un diseño responsivo para todos los dispositivos."
      }
    }
  ],

  benefits: [
    {
      icon: "calendar-day",
      text: {
        en: "Accurate age calculation with leap year support",
        es: "Cálculo preciso de edad con soporte para años bisiestos"
      }
    },
    {
      icon: "check-circle",
      text: {
        en: "Custom form validation with instant feedback",
        es: "Validación personalizada con retroalimentación inmediata"
      }
    },
    {
      icon: "magic",
      text: {
        en: "Animated results for improved user experience",
        es: "Resultados animados para mejorar la experiencia de usuario"
      }
    },
    {
      icon: "mobile-alt",
      text: {
        en: "Fully responsive mobile-first design",
        es: "Diseño completamente responsive mobile-first"
      }
    }
  ],

  gallery: {
    images: [
      {
        src: "https://res.cloudinary.com/dolmulmgp/image/upload/v1768921313/age-active-states_f2c8ts.jpg",
        alt: {
          en: "Form with day, month and year fields",
          es: "Formulario con campos de día, mes y año"
        }
      },
      {
        src: "https://res.cloudinary.com/dolmulmgp/image/upload/v1768921313/age-desktop-completed_e5je2p.jpg",
        alt: {
          en: "Completed age calculation with animated output",
          es: "Cálculo de edad completado con resultados animados"
        }
      },
      {
        src: "https://res.cloudinary.com/dolmulmgp/image/upload/v1768921315/age-desktop-design_zthhjm.jpg",
        alt: {
          en: "Desktop interface of the application",
          es: "Interfaz de escritorio de la aplicación"
        }
      },
      {
        src: "https://res.cloudinary.com/dolmulmgp/image/upload/v1768921316/age-desktop-error-empty_udrfkh.jpg",
        alt: {
          en: "Validation for empty required fields",
          es: "Validación de campos obligatorios vacíos"
        }
      },
      {
        src: "https://res.cloudinary.com/dolmulmgp/image/upload/v1768921317/age-desktop-error-invalid_ahpjbd.jpg",
        alt: {
          en: "Validation for invalid dates",
          es: "Validación para fechas inválidas"
        }
      }
    ],

    video: {
      url: "https://www.youtube.com/embed/pVwHc9a-S5A",
      title: {
        en: "Demo of an Age Calculator App",
        es: "Demostración de la Aplicación Calculadora de Edad"
      }
    }
  },

  team: [
    {
      name: "José Alfonzo",
      role: {
        en: "Front-End Developer & Project Lead",
        es: "Desarrollador Front-End y Líder del Proyecto"
      }
    }
  ]
},

// project #4
{
  slug: "construction-company",

  category: "html-css-js",
  year: 2025,
  icon: "hard-hat",

  title: {
    en: "Construction Company Website",
    es: "Sitio Web de Empresa Constructora",
  },

  heroImage: {
    src: "https://res.cloudinary.com/dolmulmgp/image/upload/v1768921334/constructed-website_hy7ndr.jpg",
    alt: {
      en: "Construction Company Website Screenshot",
      es: "Captura del sitio web de la empresa constructora",
    },
  },

  shortSummary: {
    en: "Modern business website showcasing services, projects, and client trust.",
    es: "Sitio web moderno que destaca servicios, proyectos y confianza de clientes."
  },

  summary: {
    en: "A professional, responsive website for a construction company featuring a hero section, animated services, project portfolio, testimonials, and an embedded promotional video. Built with accessibility, performance, and mobile-first principles.",
    es: "Un sitio web profesional y responsivo para una empresa constructora con sección hero, servicios animados, portafolio de proyectos, testimonios y video promocional integrado. Desarrollado con principios de accesibilidad, rendimiento y diseño mobile-first."
  },

  technologies: ["HTML", "CSS", "JavaScript", "Responsive"],

  links: {
    demo: "https://josealfonzo92.github.io/construction-template-page/",
    code: "https://github.com/JoseAlfonzo92/construction-template-page.git",
  },


  sections: [
    {
      key: "objectives",
      title: {
        en: "Objectives",
        es: "Objetivos"
      },
      text: {
        en: "Create a modern construction company website that showcases services, completed projects, testimonials, and contact information while emphasizing trust, professionalism, responsiveness, and an intuitive user experience.",
        es: "Crear un sitio web moderno para una empresa constructora que muestre servicios, proyectos realizados, testimonios e información de contacto, transmitiendo confianza, profesionalismo, diseño responsivo y una experiencia de usuario intuitiva."
      }
    },
    {
      key: "challenges",
      title: {
        en: "Challenges Faced",
        es: "Desafíos Encontrados"
      },
      text: {
        en: "Implementing smooth scroll-triggered animations, building an accessible responsive navigation menu, organizing large amounts of content into a clear layout, and maintaining excellent performance across devices.",
        es: "Implementar animaciones activadas por el desplazamiento, desarrollar un menú responsive accesible, organizar una gran cantidad de contenido de forma clara y mantener un excelente rendimiento en todos los dispositivos."
      }
    },
    {
      key: "solutions",
      title: {
        en: "Solutions Implemented",
        es: "Soluciones Implementadas"
      },
      text: {
        en: "Built the website with semantic HTML5, modular CSS, responsive layouts, and JavaScript for navigation and Intersection Observer animations. Optimized assets, followed accessibility best practices, and structured the project for maintainability and scalability.",
        es: "Se desarrolló el sitio utilizando HTML5 semántico, CSS modular, diseños responsivos y JavaScript para la navegación y las animaciones mediante Intersection Observer. Se optimizaron los recursos, se aplicaron buenas prácticas de accesibilidad y se estructuró el proyecto para facilitar su mantenimiento y escalabilidad."
      }
    }
  ],

  benefits: [
    {
      icon: "mobile-alt",
      text: {
        en: "Responsive mobile-first design",
        es: "Diseño responsive con enfoque mobile-first"
      }
    },
    {
      icon: "tools",
      text: {
        en: "Animated sections powered by Intersection Observer",
        es: "Secciones animadas mediante Intersection Observer"
      }
    },
    {
      icon: "images",
      text: {
        en: "Project portfolio and customer testimonials",
        es: "Portafolio de proyectos y testimonios de clientes"
      }
    },
    {
      icon: "play-circle",
      text: {
        en: "Embedded promotional video",
        es: "Video promocional integrado"
      }
    },
    {
      icon: "code",
      text: {
        en: "Clean, modular and scalable architecture",
        es: "Arquitectura limpia, modular y escalable"
      }
    },
    {
      icon: "universal-access",
      text: {
        en: "Accessibility-focused implementation",
        es: "Implementación enfocada en accesibilidad"
      }
    }
  ],

  gallery: {
    images: [
      {
        src: "https://res.cloudinary.com/dolmulmgp/image/upload/v1768921334/constructed-website_hy7ndr.jpg",
        alt: {
          en: "Homepage with hero section and call-to-action buttons",
          es: "Página principal con sección hero y botones de llamada a la acción"
        }
      },
      {
        src: "https://res.cloudinary.com/dolmulmgp/image/upload/v1768921330/constructed-services-section_hhpt34.jpg",
        alt: {
          en: "Animated services section",
          es: "Sección de servicios animada"
        }
      },
      {
        src: "https://res.cloudinary.com/dolmulmgp/image/upload/v1768921328/constructed-project-section_zog3yv.jpg",
        alt: {
          en: "Construction projects showcase",
          es: "Galería de proyectos de construcción"
        }
      },
      {
        src: "https://res.cloudinary.com/dolmulmgp/image/upload/v1768921332/constructed-testimonial-section_wxxxrh.jpg",
        alt: {
          en: "Customer testimonials section",
          es: "Sección de testimonios de clientes"
        }
      },
      {
        src: "https://res.cloudinary.com/dolmulmgp/image/upload/v1768921333/constructed-video-section_d9fml5.jpg",
        alt: {
          en: "Embedded promotional video",
          es: "Video promocional integrado"
        }
      }
    ],

    video: {
      url: "https://www.youtube.com/embed/8sboPdD-4BU",
      title: {
        en: "Demo of a Construction Company Website",
        es: "Demostración del sitio web de una empresa constructora"
      }
    }
  },

  team: [
    {
      name: "José Alfonzo",
      role: {
        en: "Front-End Developer & Project Lead",
        es: "Desarrollador Front-End y Líder del Proyecto"
      }
    }
  ]
},

// Project #5
{
  slug: "barbershop-website",

  category: "html-css-js",
  year: 2025,
  icon: "cut",

  title: {
    en: "Barbershop Website",
    es: "Sitio Web de Barbería",
  },

  heroImage: {
    src: "https://res.cloudinary.com/dolmulmgp/image/upload/v1769005878/main-image_jbetwv.jpg",
    alt: {
      en: "Barbershop Website Screenshot",
      es: "Captura del sitio web de la barbería",
    },
  },

  shortSummary: {
    en: "Modern business website showcasing services, projects, and client trust.",
    es: "Sitio web moderno que destaca servicios, proyectos y confianza de clientes."
  },

  summary: {
    en: "A modern, responsive barbershop website featuring a bold hero section, service cards, gallery showcase, team profiles, pricing plans, and a contact form. Focused on strong visual identity, smooth navigation, and mobile-first design.",
    es: "Un sitio web moderno y responsivo para una barbería, con una sección principal impactante, servicios en tarjetas, galería de trabajos, perfiles del equipo, planes de precios y formulario de contacto. Enfocado en identidad visual fuerte, navegación fluida y diseño mobile-first."
  },

  technologies: ["HTML", "CSS", "JavaScript", "UX"],

  links: {
    demo: "https://josealfonzo92.github.io/template-website-barber/",
    code: "https://github.com/JoseAlfonzo92/template-website-barber",
  },

  sections: [
    {
      key: "objectives",
      title: {
        en: "Objectives",
        es: "Objetivos"
      },
      text: {
        en: "The goal was to design and develop a visually striking and user-friendly website for a barbershop, highlighting services, pricing, team members, and booking options. It needed to communicate professionalism, style, and trust while ensuring a seamless mobile experience.",
        es: "El objetivo fue diseñar y desarrollar un sitio web atractivo y fácil de usar para una barbería, destacando servicios, precios, equipo y opciones de reserva. Debía transmitir profesionalismo, estilo y confianza, asegurando una experiencia fluida en dispositivos móviles."
      }
    },
    {
      key: "challenges",
      title: {
        en: "Challenges Faced",
        es: "Desafíos Encontrados"
      },
      text: {
        en: "Implementing a responsive navigation system with a hamburger menu, ensuring smooth layout transitions across devices, maintaining visual consistency with strong branding, and organizing multiple sections like services, gallery, and pricing without overwhelming the user.",
        es: "Implementar un sistema de navegación responsive con menú hamburguesa, asegurar transiciones fluidas entre dispositivos, mantener consistencia visual con una marca fuerte y organizar múltiples secciones como servicios, galería y precios sin abrumar al usuario."
      }
    },
    {
      key: "solutions",
      title: {
        en: "Solutions Implemented",
        es: "Soluciones Implementadas"
      },
      text: {
        en: "Built with semantic HTML5, modular CSS, and JavaScript for interactive navigation. Implemented a mobile-first layout, reusable components for services and pricing cards, and optimized images for performance. Accessibility and clear visual hierarchy were prioritized.",
        es: "Construido con HTML5 semántico, CSS modular y JavaScript para navegación interactiva. Se implementó un diseño mobile-first, componentes reutilizables para servicios y precios, y optimización de imágenes para rendimiento. Se priorizó la accesibilidad y jerarquía visual clara."
      }
    }
  ],

  benefits: [
    {
      icon: "mobile-alt",
      text: {
        en: "Fully responsive mobile-first design",
        es: "Diseño completamente responsivo con enfoque mobile-first"
      }
    },
    {
      icon: "bars",
      text: {
        en: "Interactive hamburger navigation menu",
        es: "Menú de navegación interactivo tipo hamburguesa"
      }
    },
    {
      icon: "th-large",
      text: {
        en: "Modular sections for services, gallery, and pricing",
        es: "Secciones modulares para servicios, galería y precios"
      }
    }
  ],

  gallery: {
    images: [
      {
        src: "https://res.cloudinary.com/dolmulmgp/image/upload/v1769005878/main-image_jbetwv.jpg",
        alt: {
          en: "Homepage with hero image and call-to-action buttons",
          es: "Página principal con imagen destacada y botones de llamada a la acción"
        }
      },
      {
        src: "https://res.cloudinary.com/dolmulmgp/image/upload/v1775501672/barber-sample-2_ik3mka.png",
        alt: {
          en: "Services section with animated entrance on scroll",
          es: "Sección de servicios con animaciones al hacer scroll"
        }
      },
      {
        src: "https://res.cloudinary.com/dolmulmgp/image/upload/v1775501672/barber-sample-3_ot0bhy.png",
        alt: {
          en: "Gallery showcasing haircuts and barbershop work",
          es: "Galería mostrando cortes de cabello y trabajos de la barbería"
        }
      },
      {
        src: "https://res.cloudinary.com/dolmulmgp/image/upload/v1775501672/barber-sample-4_i7ddws.png",
        alt: {
          en: "Testimonials section with customer reviews",
          es: "Sección de testimonios con opiniones de clientes"
        }
      },
      {
        src: "https://res.cloudinary.com/dolmulmgp/image/upload/v1775501672/barber-sample-5_ttfx2x.png",
        alt: {
          en: "Testimonials section with customer reviews",
          es: "Sección de testimonios con opiniones de clientes"
        }
      },
      {
        src: "https://res.cloudinary.com/dolmulmgp/image/upload/v1775501671/barber-sample-6_medmu1.png",
        alt: {
          en: "Testimonials section with customer reviews",
          es: "Sección de testimonios con opiniones de clientes"
        }
      },
      {
        src: "https://res.cloudinary.com/dolmulmgp/image/upload/v1775501671/barber-sample-7_pewpkq.png",
        alt: {
          en: "Testimonials section with customer reviews",
          es: "Sección de testimonios con opiniones de clientes"
        }
      },
      {
        src: "https://res.cloudinary.com/dolmulmgp/image/upload/v1775501671/barber-sample-8_nu8zka.png",
        alt: {
          en: "Testimonials section with customer reviews",
          es: "Sección de testimonios con opiniones de clientes"
        }
      }
    ],

    video: {
      url: "https://www.youtube.com/embed/-qY67cmPt2s",
      title: {
        en: "Demo of a barbershop website template",
        es: "Demostración de una plantilla web para barbería"
      }
    }
  },

  team: [
    {
      name: "José Alfonzo",
      role: {
        en: "Front-End Developer & Project Lead",
        es: "Desarrollador Front-End y Líder del Proyecto"
      }
    }
  ]
},


// Project #6
{
  slug: "burger-restaurant",

  category: "html-css-js",
  year: 2025,
  icon: "hamburger",

  title: {
    en: "Burger Restaurant Website",
    es: "Sitio Web de Restaurante de Hamburguesas",
  },

  heroImage: {
    src: "https://res.cloudinary.com/dolmulmgp/image/upload/v1768921325/burger-website_wmfw62.jpg",
    alt: {
      en: "Burger Restaurant Website Screenshot",
      es: "Captura del sitio web del restaurante de hamburguesas",
    },
  },

  shortSummary: {
    en: "Responsive restaurant UI with filtering, video features, and modern UX.",
    es: "Interfaz de restaurante responsive con filtrado, funciones de video y UX moderna."
  },

  summary: {
    en: "A modern, responsive website for a burger restaurant featuring a bold hero section, featured menu items, animated content sections, smooth navigation, customer reviews, and contact information. Built with a mobile-first approach, accessibility, and performance in mind.",
    es: "Un sitio web moderno y responsivo para un restaurante de hamburguesas con una sección principal impactante, productos destacados, secciones animadas, navegación fluida, opiniones de clientes e información de contacto. Desarrollado con un enfoque mobile-first, accesibilidad y rendimiento."
  },

  technologies: ["HTML", "CSS", "JavaScript", "Responsive"],

  links: {
    demo: "https://josealfonzo92.github.io/burger-site/",
    code: "https://github.com/JoseAlfonzo92/burger-site",
  },

  sections: [
    {
      key: "objectives",
      title: {
        en: "Objectives",
        es: "Objetivos"
      },
      text: {
        en: "Develop a modern, responsive website for a burger restaurant that showcases the menu, featured items, and brand identity. The project focused on mobile-first design, intuitive navigation, accessibility, and engaging visual presentation.",
        es: "Desarrollar un sitio web moderno y responsivo para un restaurante de hamburguesas que muestre el menú, productos destacados e identidad de marca. El proyecto se enfocó en un diseño mobile-first, navegación intuitiva, accesibilidad y una presentación visual atractiva."
      }
    },
    {
      key: "challenges",
      title: {
        en: "Challenges Faced",
        es: "Desafíos Encontrados"
      },
      text: {
        en: "Creating a responsive navigation system, implementing smooth scroll-based animations, and organizing multiple content sections while maintaining performance and a consistent user experience across devices.",
        es: "Crear un sistema de navegación responsivo, implementar animaciones fluidas activadas por el desplazamiento y organizar múltiples secciones de contenido manteniendo el rendimiento y una experiencia consistente en distintos dispositivos."
      }
    },
    {
      key: "solutions",
      title: {
        en: "Solutions Implemented",
        es: "Soluciones Implementadas"
      },
      text: {
        en: "Built with semantic HTML5, modular SCSS, and JavaScript for interactive navigation and scroll animations. Applied responsive layouts, optimized media assets, and accessibility best practices to deliver a fast and user-friendly experience.",
        es: "Desarrollado con HTML5 semántico, SCSS modular y JavaScript para navegación interactiva y animaciones durante el desplazamiento. Se aplicaron diseños responsivos, optimización de recursos multimedia y buenas prácticas de accesibilidad para ofrecer una experiencia rápida y fácil de usar."
      }
    }
  ],

  benefits: [
    {
      icon: "mobile",
      text: {
        en: "Responsive mobile-first layout",
        es: "Diseño responsivo con enfoque mobile-first"
      }
    },
    {
      icon: "utensils",
      text: {
        en: "Animated menu and featured sections",
        es: "Secciones animadas para menú y productos destacados"
      }
    },
    {
      icon: "bars",
      text: {
        en: "Interactive navigation with smooth scrolling",
        es: "Navegación interactiva con desplazamiento suave"
      }
    },
    {
      icon: "bolt",
      text: {
        en: "Optimized for performance and accessibility",
        es: "Optimizado para rendimiento y accesibilidad"
      }
    }
  ],

  gallery: {
    images: [
      {
        src: "https://res.cloudinary.com/dolmulmgp/image/upload/v1768921325/burger-website_wmfw62.jpg",
        alt: {
          en: "Homepage with hero section and featured burgers",
          es: "Página principal con sección hero y hamburguesas destacadas"
        }
      },
      {
        src: "https://res.cloudinary.com/dolmulmgp/image/upload/v1768921358/Screenshot_23-9-2025_114456_192.168.1.16_mlo6zp.jpg",
        alt: {
          en: "Animated featured menu section",
          es: "Sección animada de productos destacados"
        }
      },
      {
        src: "https://res.cloudinary.com/dolmulmgp/image/upload/v1768921361/Screenshot_23-9-2025_114951_192.168.1.16_ic6oat.jpg",
        alt: {
          en: "Restaurant menu and food gallery",
          es: "Menú del restaurante y galería de comidas"
        }
      },
      {
        src: "https://res.cloudinary.com/dolmulmgp/image/upload/v1768921361/Screenshot_23-9-2025_115031_192.168.1.16_vursph.jpg",
        alt: {
          en: "Responsive navigation on mobile devices",
          es: "Navegación responsiva en dispositivos móviles"
        }
      }
    ],

    video: {
      url: "https://www.youtube.com/embed/kvzM0-RYLUM",
      title: {
        en: "Demo of the burger restaurant website",
        es: "Demostración del sitio web del restaurante de hamburguesas"
      }
    }
  },

  team: [
    {
      name: "José Alfonzo",
      role: {
        en: "Front-End Developer & Project Lead",
        es: "Desarrollador Front-End y Líder del Proyecto"
      }
    }
  ]
},

 // Project #7
{
  slug: "javascript-calculator",

  category: "react",
  year: 2025,
  icon: "calculator",

  title: {
    en: "JavaScript Calculator",
    es: "Calculadora en JavaScript",
  },

  heroImage: {
    src: "https://res.cloudinary.com/dolmulmgp/image/upload/v1768921347/JavaScript_Calculator_jcwsp4.jpg",
    alt: {
      en: "JavaScript Calculator Screenshot",
      es: "Captura de la Calculadora en JavaScript",
    },
  },

  shortSummary: {
    en: "Retro-style calculator with real-time evaluation and keyboard support.",
    es: "Calculadora de estilo retro con evaluación en tiempo real y soporte para teclado."
  },

  summary: {
    en: "A retro-styled calculator built with React, Babel, and Bootstrap 5, featuring keyboard support, chained operations, and responsive design. Inspired by classic 90s interfaces with modern usability, this project is part of the freeCodeCamp Front End Development Libraries certification.",
    es: "Una calculadora con estilo retro desarrollada con React, Babel y Bootstrap 5, con soporte para teclado, operaciones encadenadas y diseño responsivo. Inspirada en las interfaces clásicas de los años 90 con una experiencia moderna. Este proyecto forma parte de la certificación de freeCodeCamp en Bibliotecas de Desarrollo Front-End."
  },

  technologies: ["React", "Bootstrap", "JavaScript", "Logic"],

  links: {
    demo: "https://codepen.io/JoseAlfonzo92/full/yyNjKyK",
    code: "https://codepen.io/JoseAlfonzo92/pen/yyNjKyK",
  },

  sections: [
    {
      key: "objectives",
      title: {
        en: "Objectives",
        es: "Objetivos"
      },
      text: {
        en: "Build a functional calculator using React and Babel that recreates the look and feel of classic desktop calculators while supporting chained operations, keyboard interaction, responsive layouts, and a smooth user experience.",
        es: "Construir una calculadora funcional usando React y Babel que recree el aspecto de las calculadoras clásicas de escritorio, soportando operaciones encadenadas, interacción por teclado, diseño responsivo y una experiencia de usuario fluida."
      }
    },
    {
      key: "challenges",
      title: {
        en: "Challenges Faced",
        es: "Desafíos Encontrados"
      },
      text: {
        en: "Managing complex input validation, chained mathematical operations, preventing invalid expressions, and synchronizing keyboard input with button interactions while preserving responsive retro styling.",
        es: "Gestionar la validación de entradas complejas, las operaciones matemáticas encadenadas, prevenir expresiones inválidas y sincronizar la entrada por teclado con los botones manteniendo el estilo retro responsivo."
      }
    },
    {
      key: "solutions",
      title: {
        en: "Solutions Implemented",
        es: "Soluciones Implementadas"
      },
      text: {
        en: "Implemented React hooks for state management, Babel for JSX compilation, and Bootstrap 5 for layout. Added keyboard event handling, input sanitization, responsive typography, and custom retro styling using gradients, inset shadows, and classic monospace fonts.",
        es: "Se implementaron hooks de React para la gestión del estado, Babel para compilar JSX y Bootstrap 5 para la estructura del diseño. Se añadieron eventos de teclado, sanitización de entradas, tipografía responsiva y un estilo retro personalizado con degradados, sombras internas y fuentes monoespaciadas clásicas."
      }
    }
  ],

  benefits: [
    {
      icon: "laptop-code",
      text: {
        en: "Built with React, Babel, and Bootstrap 5",
        es: "Construido con React, Babel y Bootstrap 5"
      }
    },
    {
      icon: "keyboard",
      text: {
        en: "Full keyboard support and input validation",
        es: "Soporte completo para teclado y validación de entradas"
      }
    },
    {
      icon: "paint-brush",
      text: {
        en: "Retro-inspired interface with gradients and inset shadows",
        es: "Interfaz inspirada en el estilo retro con degradados y sombras internas"
      }
    },
    {
      icon: "mobile-alt",
      text: {
        en: "Responsive layout optimized for desktop and mobile",
        es: "Diseño responsivo optimizado para escritorio y dispositivos móviles"
      }
    }
  ],

  gallery: {
    images: [
      {
        src: "https://res.cloudinary.com/dolmulmgp/image/upload/v1768921347/JavaScript_Calculator_jcwsp4.jpg",
        alt: {
          en: "Retro calculator interface with gradient buttons",
          es: "Interfaz retro de la calculadora con botones degradados"
        }
      },
      {
        src: "https://res.cloudinary.com/dolmulmgp/image/upload/v1768921347/JavaScript_Calculator_jcwsp4.jpg",
        alt: {
          en: "Responsive calculator layout with adaptive typography",
          es: "Diseño responsivo de la calculadora con tipografía adaptable"
        }
      },
      {
        src: "https://res.cloudinary.com/dolmulmgp/image/upload/v1768921347/JavaScript_Calculator_jcwsp4.jpg",
        alt: {
          en: "Calculator supporting keyboard input and chained operations",
          es: "Calculadora con soporte para teclado y operaciones encadenadas"
        }
      }
    ],

    video: {
      url: "https://www.youtube.com/embed/Yt2g152ND_o",
      title: {
        en: "Demo of a JavaScript Calculator built with React",
        es: "Demostración de una Calculadora en JavaScript hecha con React"
      }
    }
  },

  team: [
    {
      name: "José Alfonzo",
      role: {
        en: "Front-End Developer & Project Lead",
        es: "Desarrollador Front-End y Líder del Proyecto"
      }
    }
  ]
},

// Project #8
{
  slug: "cine-vm",

  category: "javascript",
  year: 2025,
  icon: "clapperboard",

  title: {
    en: "Cine-VM Cinema Website",
    es: "Sitio Web Cine-VM",
  },

  heroImage: {
    src: "https://res.cloudinary.com/dolmulmgp/image/upload/v1769525995/predator-badland-main-4k_tyx7hj.webp",
    alt: {
      en: "Cine-VM hero carousel with featured movie",
      es: "Carrusel principal de Cine-VM con película destacada",
    },
  },

  shortSummary: {
    en: "Immersive streaming-style UI with animations and interactive carousels.",
    es: "UI de estilo de transmisión inmersiva con animaciones y carruseles interactivos."
  },

  summary: {
    en: "A modern cinema website featuring an interactive hero carousel, movie listings, schedules, promotions, and special events. Built with responsive design, GSAP animations, and a modular architecture to deliver an immersive cinematic experience across all devices.",
    es: "Un sitio web moderno para un cine con carrusel interactivo, cartelera de películas, horarios, promociones y eventos especiales. Desarrollado con diseño responsivo, animaciones con GSAP y arquitectura modular para ofrecer una experiencia cinematográfica inmersiva en todos los dispositivos."
  },

  technologies: ["GSAP", "JavaScript", "Animations", "Carousel"],

  links: {
    demo: "https://josealfonzo92.github.io/template-website-cine/",
    code: "https://github.com/JoseAlfonzo92/template-website-cine.git",
  },

  sections: [
    {
      key: "objectives",
      title: {
        en: "Objectives",
        es: "Objetivos"
      },
      text: {
        en: "Design and develop a modern cinema website that showcases movies, schedules, promotions, and events through an immersive interface. The project focused on responsive design, intuitive navigation, and cinematic animations to enhance user engagement.",
        es: "Diseñar y desarrollar un sitio web moderno para un cine que muestre películas, horarios, promociones y eventos mediante una interfaz inmersiva. El proyecto se enfocó en un diseño responsivo, navegación intuitiva y animaciones cinematográficas para mejorar la experiencia del usuario."
      }
    },
    {
      key: "challenges",
      title: {
        en: "Challenges Faced",
        es: "Desafíos Encontrados"
      },
      text: {
        en: "Creating a smooth hero carousel with autoplay and navigation controls, implementing responsive layouts with horizontal scrolling, integrating GSAP animations, and maintaining high performance and accessibility across devices.",
        es: "Crear un carrusel principal fluido con reproducción automática y controles de navegación, implementar diseños responsivos con desplazamiento horizontal, integrar animaciones con GSAP y mantener un alto rendimiento y accesibilidad en todos los dispositivos."
      }
    },
    {
      key: "solutions",
      title: {
        en: "Solutions Implemented",
        es: "Soluciones Implementadas"
      },
      text: {
        en: "Built with semantic HTML5, modular CSS, and JavaScript for carousel functionality, responsive navigation, and dynamic UI components. GSAP and ScrollTrigger were integrated to create smooth animations while responsive techniques ensured a consistent experience on desktop and mobile.",
        es: "Desarrollado con HTML5 semántico, CSS modular y JavaScript para la funcionalidad del carrusel, la navegación responsiva y componentes dinámicos. Se integraron GSAP y ScrollTrigger para crear animaciones fluidas, mientras que técnicas responsive garantizaron una experiencia consistente en escritorio y dispositivos móviles."
      }
    }
  ],

  benefits: [
    {
      icon: "film",
      text: {
        en: "Interactive hero carousel with autoplay and navigation controls",
        es: "Carrusel interactivo con reproducción automática y controles de navegación"
      }
    },
    {
      icon: "mobile-alt",
      text: {
        en: "Responsive design with mobile-first enhancements and horizontal scrolling",
        es: "Diseño responsivo con mejoras mobile-first y desplazamiento horizontal"
      }
    },
    {
      icon: "bolt",
      text: {
        en: "Smooth animations powered by GSAP and ScrollTrigger",
        es: "Animaciones fluidas impulsadas por GSAP y ScrollTrigger"
      }
    },
    {
      icon: "code",
      text: {
        en: "Modular architecture for scalability and maintainability",
        es: "Arquitectura modular para escalabilidad y fácil mantenimiento"
      }
    }
  ],

  gallery: {
    images: [
      {
        src: "https://res.cloudinary.com/dolmulmgp/image/upload/q_auto/f_auto/v1775575656/cine-sample-1_twnudb.png",
        alt: {
          en: "Homepage featuring the interactive hero carousel",
          es: "Página principal con el carrusel interactivo"
        }
      },
      {
        src: "https://res.cloudinary.com/dolmulmgp/image/upload/q_auto/f_auto/v1775575655/cine-sample-2_yf90xb.png",
        alt: {
          en: "Movie listings and schedule section",
          es: "Sección de cartelera y horarios"
        }
      },
      {
        src: "https://res.cloudinary.com/dolmulmgp/image/upload/q_auto/f_auto/v1775575655/cine-sample-3_akzkf9.png",
        alt: {
          en: "Promotions and featured content section",
          es: "Sección de promociones y contenido destacado"
        }
      },
      {
        src: "https://res.cloudinary.com/dolmulmgp/image/upload/q_auto/f_auto/v1775575654/cine-sample-4_cldhqm.png",
        alt: {
          en: "Responsive mobile layout with interactive navigation",
          es: "Diseño móvil responsivo con navegación interactiva"
        }
      }
    ],

    video: {
      url: "https://www.youtube.com/embed/zBpoPxq5VdM",
      title: {
        en: "Demo of the Cine-VM cinema website",
        es: "Demostración del sitio web Cine-VM"
      }
    }
  },

  team: [
    {
      name: "José Alfonzo",
      role: {
        en: "Front-End Developer & Project Lead",
        es: "Desarrollador Front-End y Líder del Proyecto"
      }
    }
  ]
},

// Project #9
{
  slug: "construction-company-website",

  category: "html-css-js",
  year: 2025,
  icon: "hard-hat",

  title: {
    en: "Construction Company Website (Construcciones Cemento)",
    es: "Sitio Web de Construcciones Cemento",
  },

  heroImage: {
    src: "https://res.cloudinary.com/dolmulmgp/image/upload/v1771957027/main-image-workers_x6wygh.png",
    alt: {
      en: "Hero section of construction website showing workers and call-to-action",
      es: "Sección principal del sitio mostrando trabajadores y llamada a la acción",
    },
  },

  shortSummary: {
    en: "Structured layout focused on usability, hierarchy, and clean UI.",
    es: "Diseño estructurado enfocado en usabilidad, jerarquía y UI limpia."
  },

  summary: {
    en: "A modern, SEO-optimized construction company website featuring responsive navigation, a conversion-focused hero section, service pages, project showcase, testimonials, and an accessible contact form. Built with performance, accessibility, and scalability in mind.",
    es: "Un sitio web moderno para una empresa constructora, optimizado para SEO, con navegación responsive, sección principal orientada a la conversión, servicios, proyectos, testimonios y formulario de contacto accesible. Desarrollado con enfoque en rendimiento, accesibilidad y escalabilidad."
  },

  technologies: ["Grid", "Flexbox", "Responsive", "SEO"],

  links: {
    demo: "https://josealfonzo92.github.io/template-construction-worker-website/",
    code: "https://github.com/JoseAlfonzo92/template-construction-worker-website.git",
  },

  sections: [
    {
      key: "objectives",
      title: {
        en: "Objectives",
        es: "Objetivos"
      },
      text: {
        en: "Build a professional construction company website focused on conversions, SEO, and accessibility. The project needed a strong visual hierarchy, responsive design, and intuitive navigation while showcasing services and completed projects effectively.",
        es: "Construir un sitio web profesional para una empresa constructora enfocado en conversión, SEO y accesibilidad. El proyecto debía contar con una jerarquía visual sólida, diseño responsive y navegación intuitiva para presentar servicios y proyectos de forma efectiva."
      }
    },
    {
      key: "challenges",
      title: {
        en: "Challenges Faced",
        es: "Desafíos Encontrados"
      },
      text: {
        en: "Implementing an accessible responsive navigation system, optimizing images and assets for performance, organizing multiple content sections without overwhelming users, and maintaining consistent usability across desktop and mobile devices.",
        es: "Implementar una navegación responsive accesible, optimizar imágenes y recursos para mejorar el rendimiento, organizar múltiples secciones sin sobrecargar al usuario y mantener una experiencia consistente entre escritorio y dispositivos móviles."
      }
    },
    {
      key: "solutions",
      title: {
        en: "Solutions Implemented",
        es: "Soluciones Implementadas"
      },
      text: {
        en: "Developed with semantic HTML5, modular CSS, and JavaScript for interactive navigation. Added ARIA attributes for accessibility, lazy loading and optimized assets for performance, SEO metadata, and reusable components to create a scalable, maintainable architecture.",
        es: "Desarrollado con HTML5 semántico, CSS modular y JavaScript para la navegación interactiva. Se incorporaron atributos ARIA para accesibilidad, lazy loading y recursos optimizados para mejorar el rendimiento, metadatos SEO y componentes reutilizables para una arquitectura escalable y mantenible."
      }
    }
  ],

  benefits: [
    {
      icon: "mobile-alt",
      text: {
        en: "Fully responsive mobile-first design",
        es: "Diseño completamente responsive mobile-first"
      }
    },
    {
      icon: "search",
      text: {
        en: "Advanced SEO implementation with Open Graph and Twitter Cards",
        es: "Implementación SEO avanzada con Open Graph y Twitter Cards"
      }
    },
    {
      icon: "universal-access",
      text: {
        en: "Accessibility-focused navigation using ARIA",
        es: "Navegación accesible utilizando atributos ARIA"
      }
    },
    {
      icon: "bolt",
      text: {
        en: "Performance optimization with lazy loading and optimized assets",
        es: "Optimización del rendimiento con lazy loading y recursos optimizados"
      }
    },
    {
      icon: "code",
      text: {
        en: "Clean, modular, and scalable HTML, CSS, and JavaScript architecture",
        es: "Arquitectura limpia, modular y escalable con HTML, CSS y JavaScript"
      }
    },
    {
      icon: "user-check",
      text: {
        en: "Conversion-focused UI with CTAs and accessible contact form",
        es: "Interfaz orientada a la conversión con CTAs y formulario accesible"
      }
    }
  ],

  gallery: {
    images: [
      {
        src: "https://res.cloudinary.com/dolmulmgp/image/upload/q_auto/f_auto/v1775574575/construction-sample-1_rvc5uu.png",
        alt: {
          en: "Homepage with hero section and primary call-to-action",
          es: "Página principal con sección hero y llamada a la acción"
        }
      },
      {
        src: "https://res.cloudinary.com/dolmulmgp/image/upload/q_auto/f_auto/v1775574575/construction-sample-2_mnwavy.png",
        alt: {
          en: "Construction services section",
          es: "Sección de servicios de construcción"
        }
      },
      {
        src: "https://res.cloudinary.com/dolmulmgp/image/upload/q_auto/f_auto/v1775574575/construction-sample-3_esbtxx.png",
        alt: {
          en: "Completed projects showcase",
          es: "Galería de proyectos realizados"
        }
      },
      {
        src: "https://res.cloudinary.com/dolmulmgp/image/upload/q_auto/f_auto/v1775574575/construction-sample-4_gd6p2o.png",
        alt: {
          en: "Client testimonials section",
          es: "Sección de testimonios de clientes"
        }
      }
    ],

    video: {
      url: "https://www.youtube.com/embed/LleH6Lrly0g",
      title: {
        en: "Demo of the construction company website",
        es: "Demostración del sitio web de la empresa constructora"
      }
    }
  },

  team: [
    {
      name: "José Alfonzo",
      role: {
        en: "Front-End Developer & Project Lead",
        es: "Desarrollador Front-End y Líder del Proyecto"
      }
    }
  ]
},

// Project #10 
{
  slug: "real-estate-website",

  category: "javascript",
  year: 2025,
  icon: "building",

  title: {
    en: "Real Estate Website",
    es: "Sitio Web Inmobiliario",
  },

  heroImage: {
    src: "https://res.cloudinary.com/dolmulmgp/image/upload/v1776967817/real-state-screenshot-1_c9gm8m.png",
    alt: {
      en: "Real estate website hero section with property carousel and listings",
      es: "Sección principal del sitio inmobiliario con carrusel de propiedades y listados",
    },
  },

  shortSummary: {
    en: "Modern real estate platform with property search, carousel, and interactive UI components.",
    es: "Plataforma inmobiliaria moderna con búsqueda de propiedades, carrusel y componentes interactivos."
  },

  summary: {
    en: "A modern real estate platform featuring a dynamic property carousel, advanced property search powered by Fuse.js, responsive navigation, and interactive UI components designed to deliver excellent performance and user engagement.",
    es: "Una plataforma inmobiliaria moderna con carrusel dinámico de propiedades, búsqueda avanzada mediante Fuse.js, navegación responsive y componentes interactivos diseñados para ofrecer alto rendimiento y una excelente experiencia de usuario."
  },

  technologies: ["JavaScript", "CSS", "Responsive Design", "Search"],

  links: {
    demo: "https://josealfonzo92.github.io/real-state-website-template/",
    code: "https://github.com/JoseAlfonzo92/real-state-website-template.git",
  },

  sections: [
    {
      key: "objectives",
      title: {
        en: "Objectives",
        es: "Objetivos"
      },
      text: {
        en: "Develop a modern real estate platform with an intuitive user experience, advanced property search, responsive layouts, and optimized performance across all devices. The website was designed to simplify property discovery while maintaining a clean and engaging interface.",
        es: "Desarrollar una plataforma inmobiliaria moderna con una experiencia de usuario intuitiva, búsqueda avanzada de propiedades, diseño responsive y rendimiento optimizado en todos los dispositivos. El sitio fue diseñado para facilitar la búsqueda de inmuebles manteniendo una interfaz limpia y atractiva."
      }
    },
    {
      key: "challenges",
      title: {
        en: "Challenges Faced",
        es: "Desafíos Encontrados"
      },
      text: {
        en: "Implementing a smooth property carousel, integrating fuzzy search with Fuse.js, organizing multiple interactive sections, and maintaining fast performance while ensuring a consistent experience on desktop and mobile devices.",
        es: "Implementar un carrusel de propiedades fluido, integrar una búsqueda inteligente con Fuse.js, organizar múltiples secciones interactivas y mantener un rendimiento óptimo ofreciendo una experiencia consistente tanto en escritorio como en dispositivos móviles."
      }
    },
    {
      key: "solutions",
      title: {
        en: "Solutions Implemented",
        es: "Soluciones Implementadas"
      },
      text: {
        en: "Built using semantic HTML5, modular CSS, and JavaScript for dynamic interactions. Integrated Fuse.js to provide flexible property searching, optimized images and assets for faster loading, and applied responsive design principles to ensure usability across all screen sizes.",
        es: "Desarrollado con HTML5 semántico, CSS modular y JavaScript para las interacciones dinámicas. Se integró Fuse.js para ofrecer una búsqueda flexible de propiedades, se optimizaron imágenes y recursos para mejorar los tiempos de carga y se aplicaron principios de diseño responsive para garantizar la usabilidad en cualquier dispositivo."
      }
    }
  ],

  benefits: [
    {
      icon: "mobile-alt",
      text: {
        en: "Fully responsive mobile-first design",
        es: "Diseño completamente responsive y mobile-first"
      }
    },
    {
      icon: "search",
      text: {
        en: "Advanced fuzzy property search powered by Fuse.js",
        es: "Búsqueda avanzada e inteligente mediante Fuse.js"
      }
    },
    {
      icon: "images",
      text: {
        en: "Dynamic property carousel with auto-slide functionality",
        es: "Carrusel dinámico de propiedades con desplazamiento automático"
      }
    },
    {
      icon: "bolt",
      text: {
        en: "Performance optimization with lazy loading and optimized assets",
        es: "Optimización del rendimiento con lazy loading y recursos optimizados"
      }
    },
    {
      icon: "code",
      text: {
        en: "Clean, scalable, and modular architecture",
        es: "Arquitectura limpia, escalable y modular"
      }
    },
    {
      icon: "user-check",
      text: {
        en: "Interactive, user-focused interface for property discovery",
        es: "Interfaz interactiva enfocada en facilitar la búsqueda de propiedades"
      }
    }
  ],

  gallery: {
    images: [
      {
        src: "https://res.cloudinary.com/dolmulmgp/image/upload/v1776967817/real-state-screenshot-1_c9gm8m.png",
        alt: {
          en: "Homepage with featured properties and hero carousel",
          es: "Página principal con propiedades destacadas y carrusel principal"
        }
      },
      {
        src: "https://res.cloudinary.com/dolmulmgp/image/upload/v1776967816/real-state-screenshot-2_swuph5.png",
        alt: {
          en: "Property search section with advanced filtering",
          es: "Sección de búsqueda de propiedades con filtrado avanzado"
        }
      },
      {
        src: "https://res.cloudinary.com/dolmulmgp/image/upload/v1776967817/real-state-screenshot-3_b8vhed.png",
        alt: {
          en: "Featured property listings",
          es: "Listado de propiedades destacadas"
        }
      },
      {
        src: "https://res.cloudinary.com/dolmulmgp/image/upload/v1776967817/real-state-screenshot-4_xxm2bj.png",
        alt: {
          en: "Client testimonials and trust section",
          es: "Sección de testimonios y confianza"
        }
      }
    ],

    video: {
      url: "https://www.youtube.com/embed/-51kiP6P4C8",
      title: {
        en: "Demo of the real estate website",
        es: "Demostración del sitio web inmobiliario"
      }
    }
  },

  team: [
    {
      name: "José Alfonzo",
      role: {
        en: "Front-End Developer & Project Lead",
        es: "Desarrollador Front-End y Líder del Proyecto"
      }
    }
  ]
},

];