import React from 'react';

export interface Project {
  id: number;
  title: string;
  role: string;
  description: string;
  tags: string[];
  metrics: string[];
  image: string;
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  type: 'IT' | 'Logistics' | 'Operations';
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ElementType;
}