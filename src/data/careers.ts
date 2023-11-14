export type Career = {
  rol: string;
  companies: Company[];
  startDate: string;
  endDate: string;
  current: boolean;
  app: App;
};

export type Company = {
  name: string;
  link: string;
};

export type App = {
  name: string;
  link: string;
  description: string;
  img: string;
};

export const careers: Career[] = [
  {
    rol: "Senior iOS Developer",
    companies: [
      {
        name: "BCNC Group",
        link: "https://bcncgroup.com/",
      },
      {
        name: "Telefonica",
        link: "https://www.telefonica.com/es/",
      },
    ],
    startDate: "feb. 2023",
    endDate: "present",
    current: true,
    app: {
      name: "Smart Wifi",
      link: "https://apps.apple.com/es/app/smart-wifi-de-movistar/id1138713745",
      description:
        "The Movistar Smart WiFi app empowers users to manage their home connectivity efficiently.It offers control over connected devices, optimization tools, password customization, and security features for worry free browsing.",
      img: "/assets/apps/logo-smart-wifi.webp",
    },
  },
  {
    rol: "Senior iOS Developer",
    companies: [
      {
        name: "Sngular",
        link: "https://www.sngular.com/",
      },
    ],
    startDate: "feb. 2022",
    endDate: "feb. 2023",
    current: false,
    app: {
      name: "Torcal",
      link: "https://apps.apple.com/es/app/torcal-autoescuelas/id1588217480",
      description:
        "The Torcal app revolutionizes driver education, offering flexible theoretical training and easy booking for practical lessons. Master the theory at your pace, access test materials, and get personalized support. Reserve, track progress, and choose instructors seamlessly for practical sessions.",
      img: "/assets/apps/logo-torcal.webp",
    },
  },
  {
    rol: "Analyst iOS developer",
    companies: [
      {
        name: "Alten",
        link: "https://www.alten.es/",
      },
      {
        name: "Telefonica",
        link: "https://www.telefonica.com/es/",
      },
    ],
    startDate: "sept. 2020",
    endDate: "feb. 2022",
    current: false,
    app: {
      name: "Movistar TV",
      link: "https://apps.apple.com/pe/app/movistar-tv-app-perú/id1054940261",
      description:
        "Movistar TV is a mobile application that allows you to watch TV (live and on demand) and movies on your mobile device.",
      img: "/assets/apps/logo-movistar-tv.webp",
    },
  },
  {
    rol: "iOS app developer",
    companies: [
      {
        name: "Redsys Servicios de Procesamiento S. L.",
        link: "http://www.redsys.es/",
      },
    ],
    startDate: "jul. 2019",
    endDate: "sept. 2020",
    current: false,
    app: {
      name: "Bizum",
      link: "https://bizum.es/",
      description:
        "Bizum is a mobile payment service that allows you to send and receive money from your mobile phone. It is a service that is available to all Spanish banks and is free for users.",
      img: "/assets/apps/logo-bizum.webp",
    },
  },
];
