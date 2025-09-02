export const myProjects = [


  {
  id: 1,
  title: "Shoppee - Full-Stack E-Commerce Platform",
 subDescription: [ 
  "Enterprise-grade full-stack responsive e-commerce platform with secure authentication, fast navigation, and robust admin tools.", 
  "Advanced auth with OTP verification, JWT in HttpOnly cookies & Headers, and Redis-powered session & OTP caching.",
   "Role-based access control (user/admin) and session management.", 
   "Rich user experience with product filtering, wishlist, likes, reviews, smart search, cart with live details, and downloadable invoices.", 
   "Admin panel with product CRUD, order management, and real-time sales analytics.", 
   "Fast client-side routing via React Router DOM for smooth, reload-free navigation.", 
   "Scalable architecture with responsive design and optimized performance across devices." 
  ],

  githref: "https://github.com/mhtbtanvir/Shoppee",
  livhref: "https://shoppee-psi.vercel.app/",
  logo: "",
  image: "/assets/projects/Shoppee.png",
  tags: [
    { id: 1, name: "React (Vite)", path: "/assets/logos/react.svg" },
    { id: 2, name: "Redux Toolkit", path: "/assets/logos/redux.svg" },
    { id: 3, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
    { id: 4, name: "Node.js", path: "/assets/logos/nodejs.svg" },
    { id: 5, name: "Express.js", path: "/assets/logos/express.png" },
    { id: 6, name: "MongoDB", path: "/assets/logos/mongodb.jpg" },
    { id: 7, name: "Redis", path: "/assets/logos/redis.png" }
  ],
},

  {
    id: 2,
    title: "Inventory Management System",
    subDescription: [
      "Fully responsive full-stack inventory tracking app with analytics dashboard and dark mode.",
      "Built with Next.js and serverless Express backend hosted on Vercel.",
      "Implemented PostgreSQL via Prisma ORM and hosted it on Railway.",
      "Redux Toolkit handles real-time product state and chart data.",
      "Supports CRUD operations, filtering, sorting, and interactive graphs."
    ],
    githref: "https://github.com/mhtbtanvir/NextInventoryApp",
    livhref: "https://stockit-tm.vercel.app/",
    logo: "",
    image: "/assets/projects/inventory.png",
    tags: [
      { id: 1, name: "Next.js", path: "/assets/logos/nextjs.svg" },
      { id: 2, name: "TypeScript", path: "/assets/logos/typescript.svg" },
      { id: 3, name: "Node.js", path: "/assets/logos/nodejs.svg" },
      { id: 4, name: "PostgreSQL", path: "/assets/logos/postgresql.svg" },
      { id: 5, name: "Prisma", path: "/assets/logos/prisma.svg" }
    ],
  },
  {
    id: 3,
    title: "React Movie Discovery App",
    subDescription: [
      "Fully responsive movie browsing app with real-time search and search analytics Using Supabase.",
      "Integrated TMDB API to fetch trending and searchable movie data.",
      "Built reusable components (cards, search bar, theme toggle, spinner).",
      "Implemented debounced input and search tracking using Supabase.",
      "Designed with responsive layout for mobile-first user experience."
    ],
    githref: "https://github.com/mhtbtanvir/ReactMovieApp",
    livhref: "https://mhtbtanvir.github.io/ReactMovieApp/",
    logo: "",
    image: "/assets/projects/movie-app.png",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "JavaScript", path: "/assets/logos/javascript.svg" },
      { id: 3, name: "TMDB API", path: "/assets/logos/api.svg" },
      { id: 4, name: "Appwrite", path: "/assets/logos/appwrite.svg" },
      { id: 5, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" }
    ],
  },
  {
    id: 4,
    title: "Secure Hotel Booking Platform",
    subDescription: [
      "Fully responsive hotel reservation system with multi-factor authentication and SMS support.",
      "Created a secure booking backend using PHP and MySQL.",
      "Implemented OTP-based two-factor login and session management.",
      "Added spam protection via SMS APIs.",
      "Optimized for admin control, live availability checks, and booking records."
    ],
    githref: "https://github.com/mhtbtanvir/Secure-HMS",
    livhref: "",
    logo: "",
    image: "/assets/projects/hotel-booking.png",
    tags: [
      { id: 1, name: "PHP", path: "/assets/logos/php.svg" },
      { id: 2, name: "MySQL", path: "/assets/logos/mysql.svg" },
      { id: 3, name: "JavaScript", path: "/assets/logos/javascript.svg" },
      { id: 4, name: "HTML", path: "/assets/logos/html5.svg" },
      { id: 5, name: "CSS", path: "/assets/logos/css3.svg" }
    ],
  },
  {

    id: 5,
    title: "Custom Transformer – NLP Project ",
    description:
      "A custom Transformer built in TensorFlow for classifying movie reviews from IMDb with improved attention modeling.",
    subDescription: [
      "Implemented a custom Transformer model using TensorFlow.",
      "Introduced Gaussian-scaled attention to enhance convergence speed.",
      "Trained and evaluated using IMDb dataset with ~87% accuracy.",
      "Focused on optimization, clarity, and performance of model layers."
    ],
    githref: "https://github.com/mhtbtanvir/ATRT-Transformer",
    livhref: "",
    logo: "",
    image: "/assets/projects/nlp-transformer.png",
    tags: [
      { id: 1, name: "Python", path: "/assets/logos/python.svg" },
      { id: 2, name: "TensorFlow", path: "/assets/logos/tensorflow.svg" },
      { id: 3, name: "Keras", path: "/assets/logos/keras.svg" },
      { id: 4, name: "NumPy", path: "/assets/logos/numpy.svg" },
    ],
  },
];


export const mySocials =
[
  {
    name: "WhatsApp",
    href: "https://wa.me/8801946405181",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/tanvir-mahtab-578950177/",
    icon: "/assets/socials/linkedIn.svg",
  },
  // {
  //   name: "Instagram",
  //   href: "https://www.instagram.com/your_username/",
  //   icon: "/assets/socials/instagram.svg",
  // },
  {
    name: "GitHub",
    href: "https://github.com/mhtbtanvir",
    icon: "/assets/socials/github-mark-white.svg",
  },
];


export const experiences = [
  {
    title: "Software Developer",
    job: "Security & Defense Projects",
    date: "2021-2023",
    contents: [
      "Enhanced application security and developed new features, adhering to standards set by the Passive Defense Organization and National Cyberspace Center.",
      "Designed and implemented intuitive map interfaces using MapsUI, enhancing user experience and enabling seamless interactive map integration.",
      "Developed applications for industrial automation, leveraging C++ and the Fatek API for PLC communication.",
      "Enh anced responsiveness and usability of applications using Windows Forms and WPF frameworks.",
      "Executed XML to SVG conversions using X-DOM, ensuring dynamic and efficient data visualization.",
    ],
  },
  {
    title: "Back-End Developer",
    job: "Car Manufacture",
    date: "2023-2024",
    contents: [
      "Engineered systems for large-scale data ingestion and analysis, ensuring efficient data processing and storage.",
      "Developed back-end systems enabling vehicle-to-cloud communication for telemetry, diagnostics, and remote control:",
      "✅ Implemented secure APIs, following ISO 26262 automotive safety standards.",
      "✅ Ensured data privacy for customers and partners through industry-compliant protocols.",
      "✅ Delivered remote features like over-the-air updates, real-time tracking, and remote start capabilities.",
    ],
  },
  {
    title: "Freelance Developer",
    job: "Self-Employed",
    date: "2025-Present",
    contents: [
      "Created a personal portfolio using Three.js, React, Vite, and WebAPI to showcase technical expertise.",
      "Continuously enhancing technical skills and expanding expertise in modern web development and back-end technologies.",
    ],
  },
];
export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];
