import React from 'react';

export interface TechnologyIcon {
  value: string;
  style?: React.CSSProperties;
}

export interface Technology {
  name: string;
  icon: TechnologyIcon;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: Technology[];
  websiteUrl?: string;
  repositoryUrls?: string[];
}
