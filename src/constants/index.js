import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  weatherapp,
  iotaccident,
  ecommerceProfessional,
  faceAttendancesystem,
  filesystem,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "work",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Python & SQL Developer",
    icon: javascript,
  },
  {
    title: "Data Visualization (Tableau,Power BI,Excel)",
    icon: mongodb,
  },
  {
    title: "Machine Learning & Fine Tuning",
    icon: web,
  },
  {
    title: "Gen AI, Agentic AI, RAG,LLM",
    icon: mobile,
  },
];

const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "React JS", icon: reactjs },
  { name: "Supabase", icon: mongodb }, // using mongodb icon for supabase
  { name: "Photoshop", icon: figma }, // using figma icon for photoshop
  { name: "Git", icon: git },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Windows", icon: web }, // using web icon for Windows
  { name: "RHEL/CENTOS", icon: backend }, // using backend icon for Linux
];

const experiences = [
  {
    title: " Data Science Master Virtual Internship ",
    company_name: "ALTAIR Academy",
    icon: backend,
    iconBg: "#383E56",
    date: "Jan 2025 – Mar 2025",
    points: [
      "Gained hands-on experience in analyzing structured datasets using Excel, SQL, and Power BI.",
      "Built interactive dashboards and reports to extract statistical insights and support business decisions.",
    ],
  },
  {
    title: " AI-ML Virtual Internship ",
    company_name: "Amazon Web Services Academy",
    icon: web,
    iconBg: "#E6DEDD",
    date: "Apr 2025 – June 2025",
    points: [
      "Completed a virtual internship focused on AI and Machine Learning fundamentals through Amazon Web Services Academy .",
      "Worked on guided assignments and mini-projects involving data preprocessing, exploratory data analysis  (EDA),using Python, Pandas, NumPy, and Matplotlib .",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Genrative AI Financial News Research ",
    description:
      "Built a Generative AI platform with RAG (FAISS + OpenAI embeddings) for real-time financial news analysis, summarization, and equity research via a Streamlit interface.",
    tags: [
      { name: "RAG", color: "blue-text-gradient" },
      { name: "Langchain", color: "green-text-gradient" },
      { name: "Streamlit", color: "pink-text-gradient" },
    ],
    image: iotaccident,
    source_code_link: "https://github.com/mdshajie720/NEWS_RESEARCH_GENAI_LLM_RAG",
    live_preview_link: "https://github.com/mdshajie720/NEWS_RESEARCH_GENAI_LLM_RAG", // truncated for syntax
  },
  {
    name: " Interactive E-Commerce Sales Dashboard",
    description:
      " Performed sales analysis using SQL and Python with EDA and segmentation to uncover trends; built a Power BI dashboard highlighting KPIs like AOV, LTV, and churn for strategic insights..",
    tags: [
      { name: "SQL", color: "blue-text-gradient" },
      { name: "Power BI", color: "green-text-gradient" },
    ],
    image: ecommerceProfessional, // placeholder
    source_code_link: "https://github.com/mdshajie720/ECOMMERCE_SALES_ANALYSIS_POWERBI_SQL?tab=readme-ov-file",
    live_preview_link: "https://app.powerbi.com/view?r=eyJrIjoiNWNhYWVlMmYtOTA3NS00OGIzLTg2OWYtODlkYWRlYWIzZDA5IiwidCI6IjE4ZWM4YzczLTEyNTktNDkwMC1iNTFiLWU5N2ZiZmMzYTY5NiJ9",
  },
  {
    name: "Agentic Gen AI Chatbot with Document RAG|",
    description:
      "Built an Agentic AI chatbot with RAG, using Google Drive ingestion, chunking, Pinecone indexing, and LLM for smart, PDF-based Q&A..",
    tags: [
      { name: "n8n", color: "blue-text-gradient" },
      { name: "Google Gemini", color: "green-text-gradient" },
      { name: "Pinecone", color: "pink-text-gradient" },
    ],
    image: filesystem, // You can replace this with a relevant image if available
    source_code_link: "https://github.com/mdshajie720/AGENTIC-AI-RAG-CHATBOT-N8N-",
  },
  {
    name: "AI Fake News Analysis",
    description:
      "It is a Generative AI-powered platform that summarizes and analyzes news from video, audio, and text sources and Classifies them as Fake or Real.",
    tags: [
      { name: "Gen AI", color: "blue-text-gradient" },
      { name: "python", color: "green-text-gradient" },
      { name: "LLM", color: "pink-text-gradient" },
    ],
    image: weatherapp,
    source_code_link: "https://github.com/mdshajie720/AI_FAKE_NEWS_ANALYSIS?tab=readme-ov-file",
    live_preview_link: "https://github.com/mdshajie720/AI_FAKE_NEWS_ANALYSIS?tab=readme-ov-file",
  },
  {
    name: "Fraud Detection System for Banking Transactions using Machine Learning",
    description:
      "Built a machine learning model for fraud detection in banking using XGBoost and Random Forest and Achieved high accuracy in identifying suspicious transactions.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "Machine Learning", color: "green-text-gradient" },
      { name: "XG Boost", color: "pink-text-gradient" },
    ],
    image: faceAttendancesystem, // professional image
    source_code_link: "https://github.com/mdshajie720/Fraud_Detection_Banking-Using-Ml-Algo",
  },
];

export { services, technologies, experiences, testimonials, projects };
