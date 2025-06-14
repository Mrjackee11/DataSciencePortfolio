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
    title: 'Credit Card Risk Analysis',
    description: 'Comprehensive machine learning model for assessing credit card default risk. Analyzed customer payment histories, credit utilization patterns, and demographic factors to predict default probability with high accuracy.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&w=800&h=600&fit=crop',
    category: 'ml',
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'Random Forest', 'Logistic Regression', 'SMOTE', 'Matplotlib', 'Seaborn'],
    githubUrl: 'https://github.com/maheshr/credit-card-risk-analysis',
    metrics: '87% accuracy, 0.82 AUC score'
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
  { name: 'Statistical Analysis', level: 88, category: 'data-science' },
  { name: 'Data Visualization', level: 92, category: 'data-science' },
  { name: 'SQL', level: 90, category: 'data-science' },
  { name: 'Scikit-learn', level: 90, category: 'data-science' },
  { name: 'Pandas/NumPy', level: 95, category: 'data-science' },
  { name: 'Computer Vision', level: 75, category: 'data-science' },
  
  // Frontend
  { name: 'React', level: 85, category: 'frontend' },
  { name: 'JavaScript/TypeScript', level: 88, category: 'frontend' },
  { name: 'HTML/CSS', level: 90, category: 'frontend' },
  { name: 'Streamlit', level: 85, category: 'frontend' },
  
  // Backend & Infrastructure
  { name: 'FastAPI/Flask', level: 88, category: 'backend' },
  { name: 'Apache Spark', level: 80, category: 'backend' },
  { name: 'PostgreSQL', level: 85, category: 'backend' },
  { name: 'AWS/Azure', level: 80, category: 'backend' },
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