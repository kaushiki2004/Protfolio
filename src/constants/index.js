const navLinks = [
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Protfolio",
    link: "#portfolio",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Blog",
    link: "#blog",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },  
];

const counterItems = [
  { value: 3, suffix: "+", label: "Years of Experience" },
  { value: 50, suffix: "+", label: "Hours watching The Office" },
  { value: 4, suffix: "+", label: "Satisfied Professors" },
  { value: 10, suffix: "+", label: "API credits overused" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/C# (CSharp).png",
  },
  {
    imgPath: "/images/logos/chat-gpt.png",
  },
  {
    imgPath: "/images/logos/Docker.png",
  },
  {
    imgPath: "/images/logos/FastAPI.png",
  },
  {
    imgPath: "/images/logos/Git.png",
  },
  {
    imgPath: "/images/logos/GitHub.png",
  },
  {
    imgPath: "/images/logos/Java.png",
  },
  {
    imgPath: "/images/logos/Kaggle.png",
  },
  {
    imgPath: "/images/logos/MongoDB.png",
  },
  {
    imgPath: "/images/logos/MySQL.png",
  },
  {
    imgPath: "/images/logos/Node.js.png",
  },
  {
    imgPath: "/images/logos/NPM.png",
  },
  {
    imgPath: "/images/logos/NumPy.png",
  },
  {
    imgPath: "/images/logos/OpenCV.png",
  },
  {
    imgPath: "/images/logos/Pandas.png",
  },
  {
    imgPath: "/images/logos/PostgresSQL.png",
  },
  {
    imgPath: "/images/logos/Python(1).png",
  },
  {
    imgPath: "/images/logos/Reactcopy.png",
  },
  {
    imgPath: "/images/logos/three.png",
  },
  {
    imgPath: "/images/logos/Unity.png",
  },
  {
    imgPath: "/images/logos/Vercel.png",
  },
];

const abilities = [
  {
    imgPath: "/images/deep-learning.png",
    title: "Training and Fine Tuning Models",
    desc: "Training ML models and Fine tuning LLMs .",
  },
  {
    imgPath: "/images/observation.png",
    title: "Computer Vision",
    desc: "Preprocessing data and Training CV models.",
  },
  {
    imgPath: "/images/artificial-intelligence.png",
    title: "RAG Pipelines",
    desc: "Building RAG ingestion, Retrieval and Evaluaiton Pipelines. ",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    
    imgPath: "/images/image.png",
    logoPath: "/images/icons8-chat-96.png",
    title: "Undergraduate Research Assistant",
    date: "October 2025 - Present",
    responsibilities: [
      "Built and deployed a production-grade retrieval-augmented generation system enabling natural language querying across structured and unstructured datasets.",
      "Designed backend pipelines for embedding generation, vector indexing, semantic retrieval, and ranking using PostgreSQL + PGVector.",
      "Indexed and optimized 10,000+ records achieving low-latency semantic search through query tuning and schema optimization.",
      "Improved response relevance by 30% via prompt engineering, chunking strategy tuning, and embedding evaluation.",
      "Evaluated RAG pipeline quality using RAGAS metrics (context precision, faithfulness, answer relevance) to systematically benchmark and optimize model outputs."
    ],
  },
  {
    
    imgPath: "/images/image.png",
    logoPath: "/images/icons8-machine-learning-96.png",
    title: "Instructional Student Assistant",
    date:  "November 2025 - Present",
    responsibilities: [
      "Developed a federated intrusion detection system supporting multi-client training environments with non-IID data while preserving data locality and privacy.",
      "Trained CNN and LSTM architectures across distributed client simulations to benchmark decentralized learning performance and convergence behavior.",
      "Analyzed global vs local model performance trade-offs using aggregation strategies and communication rounds optimization.",
      "Validated predictions with SHAP-based interpretability, quantifying feature influence and improving model transparency for security analysis."
    ],
  },
  {
    
    imgPath: "/images/image copy.png",
    logoPath: "/images/icons8-leader-96.png",
    title: "Student Senator",
    date: "February 2025 - May 2025",
    responsibilities: [
      "Analyzed student engagement datasets using structured metrics to identify accessibility gaps in academic support systems.",
      "Collaborated with administrators to implement data-driven process improvements that optimized resource allocation and service efficiency."
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "GitHub",
    url: "https://www.instagram.com/",
    imgPath: "/images/insta.png",
  },
  
  {
    name: "linkedin",
    url: "https://www.linkedin.com/",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
