export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'ml' | 'viz' | 'nlp' | 'all';
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  metrics?: string;
}



export interface Education {
  degree: string;
  institution: string;
  period: string;
  details?: string;
  location?: string;
  subjects?: string[];
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description?: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Stock Price Prediction',
    description: 'LSTM neural network model for predicting stock prices using historical data and technical indicators.',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=200',
    category: 'ml',
    technologies: ['Python', 'TensorFlow', 'LSTM'],
    githubUrl: 'https://github.com/alexchen-ds/stock-prediction',
    liveUrl: 'https://stock-predictor-demo.com',
    metrics: 'Accuracy: 85.3%'
  },
  {
    id: '2',
    title: 'COVID-19 Dashboard',
    description: 'Interactive dashboard visualizing COVID-19 trends across different countries and regions.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=200',
    category: 'viz',
    technologies: ['Plotly', 'Dash', 'Pandas'],
    githubUrl: 'https://github.com/alexchen-ds/covid-dashboard',
    liveUrl: 'https://covid-dashboard-demo.com',
    metrics: 'Global Data Coverage'
  },
  {
    id: '3',
    title: 'Sentiment Analysis Tool',
    description: 'NLP model for analyzing sentiment in social media posts using BERT and transformer architecture.',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=200',
    category: 'nlp',
    technologies: ['BERT', 'PyTorch', 'NLP'],
    githubUrl: 'https://github.com/alexchen-ds/sentiment-analysis',
    liveUrl: 'https://sentiment-analyzer-demo.com',
    metrics: 'F1-Score: 91.2%'
  },
  {
    id: '4',
    title: 'Movie Recommender',
    description: 'Collaborative filtering system for movie recommendations using matrix factorization techniques.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=200',
    category: 'ml',
    technologies: ['Scikit-learn', 'NumPy', 'Flask'],
    githubUrl: 'https://github.com/alexchen-ds/movie-recommender',
    liveUrl: 'https://movie-recommender-demo.com',
    metrics: '10K+ Users'
  },
  {
    id: '5',
    title: 'Trading Analytics',
    description: 'Real-time trading analytics platform with technical indicators and portfolio optimization.',
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=200',
    category: 'viz',
    technologies: ['React', 'D3.js', 'WebSocket'],
    githubUrl: 'https://github.com/alexchen-ds/trading-analytics',
    liveUrl: 'https://trading-analytics-demo.com',
    metrics: 'Real-time Data'
  },
  {
    id: '6',
    title: 'Image Classifier',
    description: 'CNN model for classifying medical images with high accuracy using transfer learning techniques.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=200',
    category: 'ml',
    technologies: ['CNN', 'Keras', 'OpenCV'],
    githubUrl: 'https://github.com/alexchen-ds/image-classifier',
    liveUrl: 'https://image-classifier-demo.com',
    metrics: 'Accuracy: 94.7%'
  }
];

// Updated skill categories to match the design
export interface Skill {
  name: string;
  level: number;
  category: 'data-science' | 'frontend' | 'backend';
}

export const skills: Skill[] = [
  // Frontend Development
  { name: 'React / Vue.js', level: 92, category: 'frontend' },
  { name: 'JavaScript / TypeScript', level: 88, category: 'frontend' },
  { name: 'HTML5 / CSS3', level: 95, category: 'frontend' },
  
  // Backend Development
  { name: 'Node.js / Python', level: 85, category: 'backend' },
  { name: 'REST APIs / GraphQL', level: 82, category: 'backend' },
  { name: 'Database Design', level: 78, category: 'backend' },
  
  // DevOps & Tools
  { name: 'Git / GitHub', level: 90, category: 'data-science' },
  { name: 'AWS / Cloud Services', level: 75, category: 'data-science' },
  { name: 'Docker / CI/CD', level: 70, category: 'data-science' }
];

export const education: Education[] = [
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University of Technology',
    period: '2020 - 2024',
    details: 'Specialized in software engineering, web development, and database systems. Graduated Magna Cum Laude.',
    location: 'San Francisco, CA',
    subjects: ['Software Engineering', 'Web Development', 'Database Systems', 'Computer Networks', 'Data Structures']
  },
  {
    degree: 'High School Diploma',
    institution: 'Central High School',
    period: '2016 - 2020',
    details: 'Focused on STEM subjects with honors in Mathematics and Computer Science.',
    location: 'Your City, State',
    subjects: ['Advanced Mathematics', 'Computer Science', 'Physics', 'Chemistry']
  }
];

export const experience: Experience[] = [
  {
    title: 'Data Science Intern',
    company: 'Tech Startup',
    period: 'Summer 2024'
  },
  {
    title: 'Research Assistant',
    company: 'UCLA Data Lab',
    period: '2022-2023'
  }
];

export const additionalTechnologies = [
  'Docker', 'Git', 'AWS', 'MongoDB', 'PostgreSQL', 'Apache Spark', 'Hadoop', 'Linux'
];

export const personalInfo = {
  name: 'Your Name',
  title: 'Full Stack Developer',
  description: 'I build innovative web applications and digital solutions using cutting-edge technologies. Passionate about creating seamless user experiences and scalable backend systems.',
  image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300',
  email: 'your.email@example.com',
  linkedin: 'linkedin.com/in/yourprofile',
  github: 'github.com/yourusername',
  location: 'Your City, Your Country',
  phone: '+1 234 567 8900'
};
