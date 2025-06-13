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
    title: 'Customer Churn Prediction Model',
    description: 'Built a machine learning model to predict customer churn using ensemble methods, achieving 92% accuracy and helping reduce customer attrition by 25%.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&w=800&h=600&fit=crop',
    category: 'ml',
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'XGBoost', 'Flask'],
    githubUrl: 'https://github.com/username/churn-prediction',
    metrics: '92% accuracy, 25% churn reduction'
  },
  {
    id: '2',
    title: 'Sales Analytics Dashboard',
    description: 'Interactive dashboard for real-time sales analytics with predictive forecasting. Processes 100K+ daily transactions with automated reporting.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&w=800&h=600&fit=crop',
    category: 'viz',
    technologies: ['Power BI', 'SQL', 'Python', 'Azure', 'DAX'],
    liveUrl: 'https://app.powerbi.com/dashboard',
    metrics: '100K+ daily transactions'
  },
  {
    id: '3',
    title: 'Sentiment Analysis Engine',
    description: 'NLP system for analyzing customer feedback sentiment across multiple channels. Deployed as microservice handling 50K+ texts daily.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&w=800&h=600&fit=crop',
    category: 'nlp',
    technologies: ['BERT', 'Transformers', 'FastAPI', 'Docker', 'AWS'],
    githubUrl: 'https://github.com/username/sentiment-engine',
    metrics: '50K+ texts processed daily'
  },
  {
    id: '4',
    title: 'Supply Chain Optimization',
    description: 'ML-powered optimization system for inventory management and demand forecasting, reducing costs by 18% and improving delivery times.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&w=800&h=600&fit=crop',
    category: 'ml',
    technologies: ['TensorFlow', 'Apache Spark', 'Kafka', 'MongoDB', 'Kubernetes'],
    githubUrl: 'https://github.com/username/supply-chain-ml',
    metrics: '18% cost reduction'
  },
  {
    id: '5',
    title: 'Financial Risk Assessment',
    description: 'Deep learning model for credit risk assessment with explainable AI features. Improved loan approval accuracy by 35%.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&w=800&h=600&fit=crop',
    category: 'ml',
    technologies: ['PyTorch', 'SHAP', 'MLflow', 'PostgreSQL', 'Redis'],
    githubUrl: 'https://github.com/username/risk-assessment',
    metrics: '35% accuracy improvement'
  },
  {
    id: '6',
    title: 'Market Research Automation',
    description: 'Automated web scraping and analysis pipeline for market research, generating weekly reports from 500+ data sources.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&w=800&h=600&fit=crop',
    category: 'viz',
    technologies: ['Beautiful Soup', 'Selenium', 'Airflow', 'Tableau', 'MySQL'],
    liveUrl: 'https://tableau.public.com/market-analysis',
    metrics: '500+ sources analyzed weekly'
  }
];

export interface Skill {
  name: string;
  level: number;
  category: 'data-science' | 'frontend' | 'backend';
}

export const skills: Skill[] = [
  // Data Science & ML
  { name: 'Python', level: 95, category: 'data-science' },
  { name: 'Machine Learning', level: 90, category: 'data-science' },
  { name: 'Deep Learning', level: 85, category: 'data-science' },
  { name: 'Statistical Analysis', level: 88, category: 'data-science' },
  { name: 'Data Visualization', level: 92, category: 'data-science' },
  { name: 'SQL', level: 90, category: 'data-science' },
  { name: 'TensorFlow/PyTorch', level: 85, category: 'data-science' },
  { name: 'Scikit-learn', level: 90, category: 'data-science' },
  { name: 'Pandas/NumPy', level: 95, category: 'data-science' },
  { name: 'NLP', level: 80, category: 'data-science' },
  { name: 'Computer Vision', level: 75, category: 'data-science' },
  { name: 'A/B Testing', level: 85, category: 'data-science' },
  
  // Frontend
  { name: 'React', level: 85, category: 'frontend' },
  { name: 'JavaScript/TypeScript', level: 88, category: 'frontend' },
  { name: 'D3.js', level: 80, category: 'frontend' },
  { name: 'Plotly/Dash', level: 85, category: 'frontend' },
  { name: 'HTML/CSS', level: 90, category: 'frontend' },
  { name: 'Streamlit', level: 85, category: 'frontend' },
  
  // Backend & Infrastructure
  { name: 'FastAPI/Flask', level: 88, category: 'backend' },
  { name: 'Django', level: 82, category: 'backend' },
  { name: 'Docker', level: 85, category: 'backend' },
  { name: 'Apache Spark', level: 80, category: 'backend' },
  { name: 'Apache Kafka', level: 75, category: 'backend' },
  { name: 'PostgreSQL/MongoDB', level: 85, category: 'backend' },
  { name: 'AWS/Azure', level: 80, category: 'backend' },
  { name: 'MLOps', level: 78, category: 'backend' },
  { name: 'Git/CI/CD', level: 85, category: 'backend' }
];

export const education: Education[] = [
  {
    degree: 'Bachelor of Science in Data Science',
    institution: 'DG Vaishnav College',
    period: '2023 - Present',
    details: 'Specialized in machine learning, statistical modeling, and big data analytics. Focus on practical applications of AI in business contexts.',
    location: 'Chennai, India',
    subjects: ['Machine Learning', 'Statistical Methods', 'Data Mining', 'Deep Learning', 'Business Analytics', 'Database Systems']
  },
  {
    degree: 'Higher Secondary Education (Science)',
    institution: 'Govt Boys High School',
    period: '2021 - 2023',
    details: 'Concentrated on mathematics and computer science with honors in advanced statistics.',
    location: 'Alanganallur, Madurai',
    subjects: ['Advanced Mathematics', 'Computer Science', 'Physics', 'Chemistry', 'Statistics']
  }
];

export const experience: Experience[] = [
  {
    title: 'Data Science Intern',
    company: 'Shamgar Software Solutions',
    period: 'June 2024 - August 2024',
    description: 'Developed predictive models for customer behavior analysis and created automated reporting dashboards. Worked with cross-functional teams to implement ML solutions in production.'
  },
  {
    title: 'Research Assistant',
    company: 'DG Vaishnav College',
    period: 'January 2024 - Present',
    description: 'Assisting in research projects focused on machine learning applications in healthcare. Published findings in college journal and presented at student research symposium.'
  },
  {
    title: 'Freelance Data Analyst',
    company: 'Self-Employed',
    period: 'September 2023 - Present',
    description: 'Providing data analysis and visualization services to small businesses. Created custom dashboards and performed statistical analysis for decision-making support.'
  }
];

export const additionalTechnologies = [
  'Jupyter Notebooks',
  'Google Colab',
  'Tableau',
  'Power BI',
  'Excel/VBA',
  'R Programming',
  'MATLAB',
  'Apache Airflow',
  'MLflow'
];

export const personalInfo = {
  name: 'Mahesh R',
  title: 'Data Science Student & AI Enthusiast',
  email: 'maheshr12117@gmail.com',
  phone: '+91 9677870887',
  location: 'Chennai, India',
  bio: 'Passionate data science student with hands-on experience in machine learning, statistical analysis, and data visualization. Dedicated to leveraging data-driven insights to solve real-world problems and drive business value.',
  interests: ['Machine Learning', 'Deep Learning', 'Data Visualization', 'Statistical Modeling', 'MLOps', 'Open Source'],
  languages: ['English (Fluent)', 'Tamil (Native)', 'Hindi (Conversational)'],
  description: 'Building intelligent solutions through data science and machine learning',
  github: 'https://github.com/alexmorgan',
  linkedin: 'https://linkedin.com/in/alexmorgan'
};