export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritise client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a Captions Generator with React and Next.js",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "MyAwesomeBlog",
    des: "Explore a dynamic blog space, where stories unfold seamlessly with Django, HTML, CSS, JavaScript and Bootstrap.",
    img: "/p1.png",
    iconLists: ["/dj.svg", "/html.svg", "/tail.svg", "/js.svg", "/bstrap.svg"],
    link: "https://github.com/AaryanProthi/MyAwesomeBlog",
  },
  {
    id: 2,
    title: "TravelScapes - A Travelogue Platform",
    des: "Experience a full-stack adventure with MERN. Authenticated users can manage and explore their visited places, powered by Google Maps API and securely stored in MongoDB Atlas.",
    img: "/p2.png",
    iconLists: [
      "/re.svg",
      "/node.svg",
      "/mongodb.svg",
      "/bstrap.svg",
      "/gmap.svg",
    ],
    link: "https://github.com/AaryanProthi/TravelScapes",
  },
  {
    id: 3,
    title: "Convertify - A File Format Converter",
    des: "Experience fast, serverless file format conversion with Convertify, a Next.js project powered by ffmpeg and Shadcn UI. Perform efficient conversions directly on the client side, streamlining your file management with ease.",
    img: "/fc.png",
    iconLists: ["/next.svg", "/tail.svg", "/shad.png", "/ffmpeg.png"],
    link: "https://github.com/AaryanProthi/file_converter",
  },
  {
    id: 4,
    title: "DineEase - A Restaurant Management System",
    des: "Manage your restaurant effortlessly with this Python GUI project. Store and handle employee and customer data, menu items, orders, and billing—all powered by MySQL Connector for database connectivity and PySimpleGUI for a user-friendly interface.",
    img: "/p3.png",
    iconLists: ["/py.svg", "/mysql.svg"],
    link: "https://github.com/AaryanProthi/Restaurant-Management-System-GUI",
  },
];

export const testimonials = [
  {
    quote:
      "I had the pleasure of directly overseeing Aaryan's work as a Software Engineering Intern at NextGen Ventures for several months. Aaryan has consistently demonstrated remarkable skills, dedication, and a strong work ethic that set him apart as an outstanding contributor to our team. I was particularly impressed with Aaryan's proactiveness, independence, high level of productivity, as well as his ability to quickly learn any new programming language or framework.",
    name: "Nadeem Anjum",
    title: "Head of AI/ML, Instagram Creators, Meta",
  },
  {
    quote:
      "Aaryan was entrusted with the challenging task of developing a scalable system to crawl the web, parse relevant data, and store it as a structured database. His ability to create a sophisticated system from scratch is a testament to his technical prowess and problem-solving capabilities. Aaryan's project management skills were exemplary, ensuring that the development process remained organized and efficient throughout. He demonstrated strong knowledge of Python and databases in this project.",
    name: "Jayanth Induri",
    title: "Software Engineer, Microsoft",
  },
  {
    quote:
      "I had the privilege of mentoring Aaryan during his time at our company, where he made significant contributions to our projects with his technical skills and proactive approach. Aaryan worked with a variety of technologies, including Python, ReactJS, Puppeteer, and ElectronJS, and consistently delivered exceptional results. His dedication and problem-solving skills made him an invaluable member of our team.",
    name: "Shrashti Singhal",
    title: "Principal Data Scientist, Culinda",
  },
];

export const companies = [
  {
    id: 1,
    name: "culinda",
    img: "/culinda.png",
    nameImg: "/culindaName.svg",
  },
  {
    id: 2,
    name: "nextgen",
    img: "/NextGen.png",
    nameImg: "/nextgenName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Full Stack Development Intern",
    desc: "Assisted in the development of a web-based recruitment platform using React.js and FastAPI, enhancing interactivity and performance.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Software Engineering Intern",
    desc: "Engineered a robust authentication system using Microsoft Azure, boosting user data security by 40%. Also programmed a web scraper that automated 95% of data collection for MongoDB integration.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  // {
  //   id: 3,
  //   title: "Freelance App Dev Project",
  //   desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
  //   className: "md:col-span-2", // change to md:col-span-2
  //   thumbnail: "/exp3.svg",
  // },
  // {
  //   id: 4,
  //   title: "Lead Frontend Developer",
  //   desc: "Developed and maintained user-facing features using modern frontend technologies.",
  //   className: "md:col-span-2",
  //   thumbnail: "/exp4.svg",
  // },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    name: "GitHub",
    link: "https://github.com/AaryanProthi",
  },
  {
    id: 2,
    img: "/link.svg",
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/aaryan-prothi-55603122b/",
  },
  {
    id: 3,
    img: "/insta.svg",
    name: "Instagram",
    link: "https://www.instagram.com/aaryanpro_2647/",
  },
];
