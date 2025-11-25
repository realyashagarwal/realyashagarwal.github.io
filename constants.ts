import { Job, Project, SkillCategory, Certification, SocialLink } from './types';

export const PROFILE = {
  name: "Yash Agarwal",
  role: "Researcher & Engineer",
  tagline: "Machine Learning • Control Systems • Computer Vision • Agentic AI",
  bio: "Undergraduate student exploring Machine Learning. ",
  email: "y2907ash@gmail.com",
  location: "Kolkata, West Bengal, India",
  website: "https://github.com/realyashagarwal"
};

export const EDUCATION = {
  institution: "Jadavpur University, Kolkata",
  degree: "Bachelor of Engineering in Instrumentation and Electronics",
  period: "August 2023 – June 2027 (Expected)",
  gpa: "SGPA (Sem 4): 8.10",
  achievements: [
    "WBJEE Rank 902 (Top 0.7% of 125,000+ candidates)",
    "Core Focus: Control Systems, Signal Processing, Statistical Mechanics, Deep Learning."
  ]
};

export const EXPERIENCE: Job[] = [
  {
    company: "Nutrail Analytics",
    role: "Lead AI Engineer",
    period: "October 2025 – Present",
    location: "Hybrid",
    description: [
      "Designed the system architecture for autonomous decision-making agents, integrating deterministic control logic with probabilistic LLM outputs.",
      "Optimized retrieval pipelines (RAG) for information density, reducing context window latency while maintaining semantic precision."
    ]
  },
  {
    company: "1M1B (Salesforce & AICTE)",
    role: "Green Technology Intern",
    period: "August 2025 – October 2025",
    location: "Hybrid/Delhi",
    description: [
      "Selected as top debater to represent the forum at UN India offices, New Delhi (Oct 2025).",
      "Conducted statistical analysis on sustainability datasets to identify latent factors governing resource optimization."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Project ATLAS: RL for Physical Dynamics",
    category: "Research",
    techStack: ["DDPG", "Control Theory", "Physics Simulation", "Gymnasium"],
    description: "Formulated a continuous control task using a Deep Deterministic Policy Gradient (DDPG) agent in a high-dimensional action space. Engineered a custom physics-based simulation environment modeling non-linear fluid dynamics (wake effects). Demonstrated 92.6% efficiency against heuristic baselines through rigorous hyperparameter tuning of the actor-critic network.",
    link: "https://github.com/realyashagarwal/Project-ATLAS"
  },
  {
    title: "Vision Transformer (ViT) from First Principles",
    category: "Research",
    techStack: ["PyTorch Primitives", "Matrix Calculus", "Optimization"],
    description: "Implemented a Vision Transformer architecture from scratch using only raw PyTorch tensor operations (avoiding high-level abstractions). Deconstructed Multi-Head Self-Attention to analyze attention map entropy. Investigated signal propagation dynamics by manually integrating LayerScale and Stochastic Depth, stabilizing convergence in data-constrained regimes.",
    link: "https://github.com/realyashagarwal/vision-transformer-cifar10"
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Mathematical Foundations",
    skills: ["Linear Algebra", "Probability Theory", "Stochastic Processes", "Control Theory", "Digital Signal Processing"]
  },
  {
    category: "Deep Learning & Robotics",
    skills: ["PyTorch (Custom Kernels)", "Gymnasium", "TensorFlow", "Deep Reinforcement Learning", "Computer Vision"]
  },
  {
    category: "Systems & Engineering",
    skills: ["C++", "Python", "Verilog", "Linux (Arch)", "Docker", "Git", "SQL"]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: "Machine Learning & Deep Learning",
    issuer: "NPTEL (IIT Guwahati)",
    details: "Elite + Gold Medal (Top 5% Topper) - Rigorous theoretical curriculum covering statistical learning theory and optimization."
  },
  {
    name: "Deep Learning for Computer Vision",
    issuer: "NPTEL (IIT Hyderabad)",
    details: "Advanced curriculum covering CNN architectures, Object Detection (YOLO, SSD), Semantic Segmentation, and Generative Adversarial Networks (GANs)."
  },
  {
    name: "Complete Data Science, ML, DL, NLP Bootcamp",
    issuer: "Udemy (Instr. Krish Naik)",
    details: "Intensive 99-hour coursework covering end-to-end pipelines, from statistical analysis to deploying transformer architectures."
  },
  {
    name: "Generative AI & Multimodal RAG",
    issuer: "Google Cloud Skills Boost",
    details: "Specializations in Vertex AI, Vector Search, and constructing Multimodal Retrieval-Augmented Generation systems."
  },
  {
    name: "Sustainability Debate Forum & Green Internship",
    issuer: "1M1B (United Nations & Salesforce)",
    details: "Recognized as Top Debater at UN India Offices. Applied ML models to sustainability datasets for resource optimization."
  },
  {
     name: "Tech Contributor - GSSoC 2025",
     issuer: "GirlScript Summer of Code",
     details: "Active open-source contributor to technical repositories."
  }
];

export const SOCIALS: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/realyashagarwal",
    icon: "github"
  },
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/yashagarwal2004",
    icon: "linkedin"
  },
  {
    platform: "Email",
    url: "mailto:y2907ash@gmail.com",
    icon: "mail"
  },
  {
    platform: "Credly",
    url: "https://credly.com/users/yashagarwal2004",
    icon: "credly"
  }
];