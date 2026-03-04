export const SUPPORTED_LANGUAGES = [
  { code: "en", label: "EN" },
  { code: "ro", label: "RO" },
  { code: "ru", label: "RU" },
];

export const DEFAULT_LANGUAGE = "en";

const ASSETS = {
  logo: "/LOGO.svg",
  heroImage: "https://www.figma.com/api/mcp/asset/01a06b5a-4524-4079-b8f0-50cbbb2fd636",
  featureDreamMain: "https://www.figma.com/api/mcp/asset/6cc5ff6d-a012-4990-a005-70bd87047bee",
  featureDreamAccent: "https://www.figma.com/api/mcp/asset/e440e862-88cd-48d5-a3bd-50026902a328",
  featureCateringMain: "https://www.figma.com/api/mcp/asset/f5d1c12e-c907-4479-abc0-1541f99b3d0e",
  featureCateringAccent:
    "https://www.figma.com/api/mcp/asset/7b0bf9e8-fa67-4715-bf88-bd309f3e3849",
  featureDetailsMain: "https://www.figma.com/api/mcp/asset/5bafc430-b2bb-40fe-b3bb-38918e82c6e4",
  featureDetailsAccent:
    "https://www.figma.com/api/mcp/asset/4862f5b4-3e0c-41e1-ab13-b4d61829575d",
  featureMasterMain: "https://www.figma.com/api/mcp/asset/d2ca953d-a27a-42a5-bc58-05dc4939b7f6",
  contactImage: "https://www.figma.com/api/mcp/asset/55c414df-69f7-4fa9-a09f-b216b580672f",
  galleryImages: [
    "https://www.figma.com/api/mcp/asset/fc27be90-7af1-4319-b341-a8f935d49dd1",
    "https://www.figma.com/api/mcp/asset/8e60b17e-933b-4f72-ab09-22a2d122dc29",
    "https://www.figma.com/api/mcp/asset/8fe82991-c1d6-4774-a637-69c9f2243293",
  ],
  blogImages: [
    "https://www.figma.com/api/mcp/asset/8ee741d6-8400-4c76-94d9-d583f191aea9",
    "https://www.figma.com/api/mcp/asset/8e60b17e-933b-4f72-ab09-22a2d122dc29",
    "https://www.figma.com/api/mcp/asset/8fe82991-c1d6-4774-a637-69c9f2243293",
  ],
};

export const WEDDING_CONTENT = {
  en: {
    metaTitle: "Enchanted Weddings",
    metaDescription: "Luxury wedding planning tailored around your vision.",
    logo: ASSETS.logo,
    nav: ["Home", "About", "Services", "Blog", "Contact"],
    navButton: "Book",
    hero: {
      eyebrow: "Life is an event",
      title: "Creating the Best Day Ever",
      description:
        "Elegant wedding planning tailored to your story, with thoughtful details and flawless execution from first concept to final dance.",
      cta: "Explore",
      image: ASSETS.heroImage,
    },
    features: [
      {
        id: "dream",
        eyebrow: "We create . You celebrate",
        title: "We build your dream around you",
        description:
          "From venue curation to floral architecture and timelines, we craft every element to feel effortless and deeply personal.",
        cta: "Explore",
        imageMain: ASSETS.featureDreamMain,
        imageAccent: ASSETS.featureDreamAccent,
      },
      {
        id: "catering",
        eyebrow: "Elite catering",
        title: "We plan your day to perfection",
        description:
          "Seasonal menus, elevated presentation, and curated guest experiences designed to delight every table.",
        cta: "Explore",
        imageMain: ASSETS.featureCateringMain,
        imageAccent: ASSETS.featureCateringAccent,
        reverse: true,
        menu: [
          { name: "Pulled jackfruit", price: "$50" },
          { name: "Wedding wreath", price: "$68" },
          { name: "Macaroons", price: "$23" },
        ],
      },
      {
        id: "details",
        eyebrow: "It's all in the details",
        title: "Planning your perfect wedding is our passion",
        description:
          "Lighting, styling, and hospitality teams aligned around one goal: a seamless celebration that feels unmistakably yours.",
        cta: "Explore",
        imageMain: ASSETS.featureDetailsMain,
        imageAccent: ASSETS.featureDetailsAccent,
      },
      {
        id: "master",
        eyebrow: "Design . Plan . Love",
        title: "Event True Master",
        description:
          "Our planners combine creative direction and operational precision to produce celebrations that are timeless and memorable.",
        cta: "Explore",
        imageMain: ASSETS.featureMasterMain,
        reverse: true,
      },
    ],
    gallery: {
      eyebrow: "The wedding party",
      title: "Our Gallery",
      cta: "Explore",
      images: [...ASSETS.galleryImages],
    },
    contact: {
      eyebrow: "Ready to get in touch?",
      title: "We will plan your day, your way.",
      cta: "Explore",
      image: ASSETS.contactImage,
      fields: ["Your name", "Your phone", "Your email", "Your events"],
    },
    blog: {
      eyebrow: "News & blog",
      title: "Only the good news only for you",
      cta: "View all",
      readMoreLabel: "Read more",
      cards: [
        {
          date: "September 10, 2022",
          title: "Firework of emotions for any event you make",
          image: ASSETS.blogImages[0],
        },
        {
          date: "September 8, 2022",
          title: "Better planning tips for weddings & more ideas",
          image: ASSETS.blogImages[1],
        },
        {
          date: "December 8, 2022",
          title: "Benefits of hiring the best event technologist",
          image: ASSETS.blogImages[2],
        },
      ],
    },
    footer: {
      title: "Our wedding planners will leave you breathless on your special day.",
      sitemap: ["Home", "About", "Services", "Blog", "Contact Us"],
      copyright: "Copyright Lienku",
      terms: "Terms of Use",
      privacy: "Privacy Policy",
      newsletterLabel: "Newsletter",
      newsletterPlaceholder: "enter you email address",
      newsletterAction: "Subscribe",
    },
  },
  ro: {
    metaTitle: "Nunți Fermecate",
    metaDescription: "Planificare premium pentru o nuntă memorabilă.",
    logo: ASSETS.logo,
    nav: ["Acasă", "Despre", "Servicii", "Blog", "Contact"],
    navButton: "Rezervă",
    hero: {
      eyebrow: "Viața este un eveniment",
      title: "Creăm cea mai frumoasă zi",
      description:
        "Planificare elegantă de nuntă, adaptată poveștii voastre, cu detalii atent gândite și execuție impecabilă de la concept la ultimul dans.",
      cta: "Explorează",
      image: ASSETS.heroImage,
    },
    features: [
      {
        id: "dream",
        eyebrow: "Noi creăm . Voi sărbătoriți",
        title: "Construim visul vostru în jurul vostru",
        description:
          "De la alegerea locației la design floral și timeline, modelăm fiecare detaliu pentru o experiență naturală și personală.",
        cta: "Explorează",
        imageMain: ASSETS.featureDreamMain,
        imageAccent: ASSETS.featureDreamAccent,
      },
      {
        id: "catering",
        eyebrow: "Catering de elită",
        title: "Planificăm ziua voastră la perfecție",
        description:
          "Meniuri sezoniere, prezentare premium și experiențe culinare create pentru a impresiona fiecare invitat.",
        cta: "Explorează",
        imageMain: ASSETS.featureCateringMain,
        imageAccent: ASSETS.featureCateringAccent,
        reverse: true,
        menu: [
          { name: "Jackfruit tras", price: "$50" },
          { name: "Coroană de nuntă", price: "$68" },
          { name: "Macarons", price: "$23" },
        ],
      },
      {
        id: "details",
        eyebrow: "Totul stă în detalii",
        title: "Pasiunea noastră este nunta perfectă",
        description:
          "Lumini, decor și echipe de ospitalitate sincronizate pentru o celebrare impecabilă, exact pe stilul vostru.",
        cta: "Explorează",
        imageMain: ASSETS.featureDetailsMain,
        imageAccent: ASSETS.featureDetailsAccent,
      },
      {
        id: "master",
        eyebrow: "Design . Plan . Love",
        title: "Maeștri în organizare",
        description:
          "Planificatorii noștri combină direcție creativă și precizie operațională pentru evenimente memorabile.",
        cta: "Explorează",
        imageMain: ASSETS.featureMasterMain,
        reverse: true,
      },
    ],
    gallery: {
      eyebrow: "Petrecerea nunții",
      title: "Galeria noastră",
      cta: "Explorează",
      images: [...ASSETS.galleryImages],
    },
    contact: {
      eyebrow: "Sunteți gata să discutăm?",
      title: "Vă planificăm ziua așa cum vă doriți.",
      cta: "Explorează",
      image: ASSETS.contactImage,
      fields: ["Numele vostru", "Telefon", "Email", "Tip eveniment"],
    },
    blog: {
      eyebrow: "Noutăți și blog",
      title: "Doar veștile bune pentru voi",
      cta: "Vezi tot",
      readMoreLabel: "Citește mai mult",
      cards: [
        {
          date: "10 Septembrie 2022",
          title: "Emoții autentice pentru fiecare eveniment",
          image: ASSETS.blogImages[0],
        },
        {
          date: "8 Septembrie 2022",
          title: "Idei utile pentru nunți mai bine planificate",
          image: ASSETS.blogImages[1],
        },
        {
          date: "8 Decembrie 2022",
          title: "Avantajele unui event technologist profesionist",
          image: ASSETS.blogImages[2],
        },
      ],
    },
    footer: {
      title: "Wedding plannerii noștri vă lasă fără cuvinte în ziua voastră specială.",
      sitemap: ["Acasă", "Despre", "Servicii", "Blog", "Contact"],
      copyright: "Copyright Lienku",
      terms: "Termeni de utilizare",
      privacy: "Politica de confidențialitate",
      newsletterLabel: "Newsletter",
      newsletterPlaceholder: "introdu adresa de email",
      newsletterAction: "Abonează-te",
    },
  },
  ru: {
    metaTitle: "Enchanted Weddings RU",
    metaDescription: "Премиальная организация свадьбы для вашей истории.",
    logo: ASSETS.logo,
    nav: ["Главная", "О нас", "Услуги", "Блог", "Контакты"],
    navButton: "Бронь",
    hero: {
      eyebrow: "Жизнь — это событие",
      title: "Создаём ваш идеальный день",
      description:
        "Элегантное планирование свадьбы, созданное под вашу историю, с точной реализацией каждой детали от идеи до финального танца.",
      cta: "Смотреть",
      image: ASSETS.heroImage,
    },
    features: [
      {
        id: "dream",
        eyebrow: "Мы создаём . Вы празднуете",
        title: "Строим свадьбу вокруг вас",
        description:
          "От выбора площадки до флористики и тайминга мы собираем каждый элемент в гармоничный и личный формат.",
        cta: "Смотреть",
        imageMain: ASSETS.featureDreamMain,
        imageAccent: ASSETS.featureDreamAccent,
      },
      {
        id: "catering",
        eyebrow: "Премиум кейтеринг",
        title: "Планируем ваш день идеально",
        description:
          "Сезонное меню, высокая подача и гастрономия, которые радуют каждого гостя.",
        cta: "Смотреть",
        imageMain: ASSETS.featureCateringMain,
        imageAccent: ASSETS.featureCateringAccent,
        reverse: true,
        menu: [
          { name: "Томлёный джекфрут", price: "$50" },
          { name: "Свадебный венок", price: "$68" },
          { name: "Макаруны", price: "$23" },
        ],
      },
      {
        id: "details",
        eyebrow: "Всё в деталях",
        title: "Идеальная свадьба — наша страсть",
        description:
          "Свет, декор и сервис работают как одна система, чтобы ваше торжество прошло безупречно.",
        cta: "Смотреть",
        imageMain: ASSETS.featureDetailsMain,
        imageAccent: ASSETS.featureDetailsAccent,
      },
      {
        id: "master",
        eyebrow: "Design . Plan . Love",
        title: "Мастера событий",
        description:
          "Наши координаторы сочетают креатив и операционную точность для событий, которые помнят годами.",
        cta: "Смотреть",
        imageMain: ASSETS.featureMasterMain,
        reverse: true,
      },
    ],
    gallery: {
      eyebrow: "Свадебная вечеринка",
      title: "Наша галерея",
      cta: "Смотреть",
      images: [...ASSETS.galleryImages],
    },
    contact: {
      eyebrow: "Готовы обсудить проект?",
      title: "Спланируем ваш день в вашем стиле.",
      cta: "Смотреть",
      image: ASSETS.contactImage,
      fields: ["Ваше имя", "Телефон", "Email", "Формат события"],
    },
    blog: {
      eyebrow: "Новости и блог",
      title: "Только хорошие новости для вас",
      cta: "Все статьи",
      readMoreLabel: "Читать",
      cards: [
        {
          date: "10 сентября 2022",
          title: "Яркие эмоции для любого мероприятия",
          image: ASSETS.blogImages[0],
        },
        {
          date: "8 сентября 2022",
          title: "Лучшие советы по планированию свадьбы",
          image: ASSETS.blogImages[1],
        },
        {
          date: "8 декабря 2022",
          title: "Плюсы работы с event-technologist",
          image: ASSETS.blogImages[2],
        },
      ],
    },
    footer: {
      title: "Наши свадебные планеры сделают ваш особенный день незабываемым.",
      sitemap: ["Главная", "О нас", "Услуги", "Блог", "Контакты"],
      copyright: "Copyright Lienku",
      terms: "Условия использования",
      privacy: "Политика конфиденциальности",
      newsletterLabel: "Newsletter",
      newsletterPlaceholder: "введите ваш email адрес",
      newsletterAction: "Подписаться",
    },
  },
};

export function isSupportedLanguage(value) {
  return SUPPORTED_LANGUAGES.some((language) => language.code === value);
}

export function getWeddingContent(language) {
  return WEDDING_CONTENT[language];
}
