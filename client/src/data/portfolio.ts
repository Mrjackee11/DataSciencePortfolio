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

export interface Skill {
  name: string;
  level: number;
  category: 'programming' | 'ml' | 'analysis' | 'visualization';
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  details?: string;
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

export const skills: Skill[] = [
  // Programming
  { name: 'Python', level: 95, category: 'programming' },
  { name: 'R', level: 88, category: 'programming' },
  { name: 'SQL', level: 92, category: 'programming' },
  
  // Machine Learning
  { name: 'Scikit-learn', level: 90, category: 'ml' },
  { name: 'TensorFlow', level: 85, category: 'ml' },
  { name: 'PyTorch', level: 82, category: 'ml' },
  
  // Data Analysis
  { name: 'Pandas', level: 95, category: 'analysis' },
  { name: 'NumPy', level: 93, category: 'analysis' },
  { name: 'Jupyter', level: 98, category: 'analysis' },
  
  // Visualization
  { name: 'Matplotlib', level: 90, category: 'visualization' },
  { name: 'Plotly', level: 87, category: 'visualization' },
  { name: 'Tableau', level: 83, category: 'visualization' }
];

export const education: Education[] = [
  {
    degree: 'Master of Science in Data Science',
    institution: 'University of California, Berkeley',
    period: '2023-2025'
  },
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'UCLA',
    period: '2019-2023',
    details: 'Magna Cum Laude'
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
  name: 'Alex Chen',
  title: 'Data Science Student & Machine Learning Enthusiast',
  description: 'Passionate about transforming data into actionable insights. Currently pursuing Master\'s in Data Science with focus on machine learning, statistical analysis, and data visualization.',
  image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300',
  email: 'alex.chen@email.com',
  linkedin: 'linkedin.com/in/alexchen-ds',
  github: 'github.com/alexchen-ds',
  location: 'San Francisco, CA'
};
