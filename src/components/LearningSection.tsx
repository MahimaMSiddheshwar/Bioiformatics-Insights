// src/components/LearningSection.tsx

import React, { useState, useMemo } from 'react';

interface LearningResource {
  title: string;
  description: string;
  type: 'course' | 'tutorial' | 'video' | 'article' | 'book' | 'tool';
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  url?: string;
  tags: string[];
  category: 'Bioinformatics' | 'Biotechnology' | 'Biopharma' | 'QC' | 'Programming' | 'General';
}

const learningResources: LearningResource[] = [
  // Bioinformatics Courses
  {
    title: "Introduction to Bioinformatics",
    description: "Comprehensive introduction to bioinformatics concepts, tools, and applications for beginners.",
    type: 'course',
    difficulty: 'Beginner',
    duration: "8 weeks",
    url: "https://www.coursera.org/specialization/bioinformatics",
    tags: ['Bioinformatics', 'Genomics', 'Programming'],
    category: 'Bioinformatics'
  },
  {
    title: "Python for Bioinformatics",
    description: "Learn Python programming specifically for bioinformatics applications, including data analysis and automation.",
    type: 'course',
    difficulty: 'Beginner',
    duration: "6 weeks",
    url: "https://www.coursera.org/learn/python-for-bioinformatics",
    tags: ['Python', 'Programming', 'Data Analysis'],
    category: 'Programming'
  },
  {
    title: "R for Bioinformatics",
    description: "Master R programming for statistical analysis and visualization in bioinformatics research.",
    type: 'course',
    difficulty: 'Intermediate',
    duration: "6 weeks",
    url: "https://www.coursera.org/learn/r-for-bioinformatics",
    tags: ['R', 'Statistics', 'Visualization'],
    category: 'Programming'
  },
  {
    title: "Genomic Data Science",
    description: "Advanced course on genomic data analysis, machine learning, and statistical methods.",
    type: 'course',
    difficulty: 'Advanced',
    duration: "10 weeks",
    url: "https://www.coursera.org/specialization/genomic-data-science",
    tags: ['Genomics', 'Machine Learning', 'Statistics'],
    category: 'Bioinformatics'
  },
  
  // Video Tutorials
  {
    title: "Linux Command Line for Bioinformatics",
    description: "Essential Linux commands and shell scripting for bioinformatics workflows.",
    type: 'video',
    difficulty: 'Beginner',
    duration: "2 hours",
    url: "https://www.youtube.com/watch?v=K4y3w5g5g5g",
    tags: ['Linux', 'Command Line', 'Shell Scripting'],
    category: 'Programming'
  },
  {
    title: "NGS Data Analysis",
    description: "Step-by-step tutorial on analyzing next-generation sequencing data.",
    type: 'video',
    difficulty: 'Intermediate',
    duration: "3 hours",
    url: "https://www.youtube.com/watch?v=K4y3w5g5g5g",
    tags: ['NGS', 'Sequencing', 'Data Analysis'],
    category: 'Bioinformatics'
  },
  {
    title: "CRISPR Gene Editing Tutorial",
    description: "Complete guide to CRISPR-Cas9 gene editing principles and applications.",
    type: 'video',
    difficulty: 'Intermediate',
    duration: "4 hours",
    url: "https://www.youtube.com/watch?v=K4y3w5g5g5g",
    tags: ['CRISPR', 'Gene Editing', 'Genomics'],
    category: 'Biotechnology'
  },
  
  // Books
  {
    title: "Bioinformatics Algorithms",
    description: "Comprehensive textbook on algorithms for bioinformatics problems and solutions.",
    type: 'book',
    difficulty: 'Advanced',
    duration: "Self-paced",
    url: "https://www.amazon.com/Bioinformatics-Algorithms-Active-Engineering/dp/0262033837",
    tags: ['Algorithms', 'Bioinformatics', 'Programming'],
    category: 'Bioinformatics'
  },
  {
    title: "Molecular Biology of the Cell",
    description: "Essential textbook covering molecular biology fundamentals for bioinformatics students.",
    type: 'book',
    difficulty: 'Intermediate',
    duration: "Self-paced",
    url: "https://www.amazon.com/Molecular-Biology-Cell-6th/dp/0815341059",
    tags: ['Molecular Biology', 'Cell Biology', 'Genetics'],
    category: 'Biotechnology'
  },
  {
    title: "Python for Bioinformatics",
    description: "Practical guide to using Python for bioinformatics data analysis and visualization.",
    type: 'book',
    difficulty: 'Beginner',
    duration: "Self-paced",
    url: "https://www.amazon.com/Python-Bioinformatics-Active-Programming/dp/1491914366",
    tags: ['Python', 'Programming', 'Bioinformatics'],
    category: 'Programming'
  },
  
  // Tools and Software
  {
    title: "UCSC Genome Browser",
    description: "Free web-based tool for browsing genomic data and annotations.",
    type: 'tool',
    difficulty: 'Beginner',
    duration: "Self-paced",
    url: "https://genome.ucsc.edu",
    tags: ['Genomics', 'Database', 'Visualization'],
    category: 'Bioinformatics'
  },
  {
    title: "Galaxy",
    description: "Open-source platform for data-intensive biomedical research.",
    type: 'tool',
    difficulty: 'Intermediate',
    duration: "Self-paced",
    url: "https://usegalaxy.org",
    tags: ['Data Analysis', 'Platform', 'Bioinformatics'],
    category: 'General'
  },
  {
    title: "Docker for Bioinformatics",
    description: "Container platform for reproducible bioinformatics workflows.",
    type: 'tool',
    difficulty: 'Intermediate',
    duration: "Self-paced",
    url: "https://www.docker.com",
    tags: ['Containerization', 'Reproducibility', 'DevOps'],
    category: 'Programming'
  },
  
  // Articles and Tutorials
  {
    title: "Getting Started with Bioinformatics",
    description: "Beginner-friendly guide to starting a career in bioinformatics.",
    type: 'article',
    difficulty: 'Beginner',
    duration: "15 min read",
    url: "https://www.nature.com/articles/d41586-023-023456-0",
    tags: ['Career', 'Getting Started', 'Bioinformatics'],
    category: 'General'
  },
  {
    title: "Best Practices for Bioinformatics",
    description: "Essential practices for reproducible and efficient bioinformatics research.",
    type: 'article',
    difficulty: 'Intermediate',
    duration: "20 min read",
    url: "https://www.nature.com/articles/d41586-023-023456-1",
    tags: ['Best Practices', 'Reproducibility', 'Research'],
    category: 'General'
  },
  {
    title: "Machine Learning in Genomics",
    description: "Overview of machine learning applications in genomic research.",
    type: 'article',
    difficulty: 'Advanced',
    duration: "25 min read",
    url: "https://www.nature.com/articles/d41586-023-023456-2",
    tags: ['Machine Learning', 'Genomics', 'AI'],
    category: 'Bioinformatics'
  }
];

const LearningSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [selectedType, setSelectedType] = useState('All');

  const categories = ['All', 'Bioinformatics', 'Biotechnology', 'Biopharma', 'QC', 'Programming', 'General'];
  const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];
  const types = ['All', 'course', 'tutorial', 'video', 'article', 'book', 'tool'];

  const filteredResources = useMemo(() => {
    return learningResources.filter(resource => {
      const matchesCategory = selectedCategory === 'All' || resource.category === selectedCategory;
      const matchesDifficulty = selectedDifficulty === 'All' || resource.difficulty === selectedDifficulty;
      const matchesType = selectedType === 'All' || resource.type === selectedType;
      return matchesCategory && matchesDifficulty && matchesType;
    });
  }, [selectedCategory, selectedDifficulty, selectedType]);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'course': return '🎓';
      case 'video': return '🎥';
      case 'book': return '📚';
      case 'article': return '📄';
      case 'tool': return '🛠️';
      case 'tutorial': return '📝';
      default: return '📋';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Learning Resources
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Curated courses, tutorials, videos, books, and tools for bioinformatics and related fields
        </p>
      </div>

      {/* Filter Controls */}
      <div className="mb-8 flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="w-full md:w-48">
          <select
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {difficulties.map(difficulty => (
              <option key={difficulty} value={difficulty}>
                {difficulty}
              </option>
            ))}
          </select>
        </div>
        <div className="w-full md:w-48">
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {types.map(type => (
              <option key={type} value={type}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Statistics */}
      <div className="mb-8 p-6 bg-green-50 rounded-lg border border-green-200">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-green-600">{learningResources.length}</div>
            <div className="text-sm text-gray-600">Total Resources</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-600">
              {learningResources.filter(r => r.type === 'course').length}
            </div>
            <div className="text-sm text-gray-600">Courses</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-600">
              {learningResources.filter(r => r.type === 'video').length}
            </div>
            <div className="text-sm text-gray-600">Videos</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-600">📚</div>
            <div className="text-sm text-gray-600">
              <a href="/glossary" className="text-green-600 hover:text-green-800 font-medium">Glossary</a>
            </div>
          </div>
        </div>
      </div>

      

      {/* Learning Resources Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.map((resource, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-200"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{getTypeIcon(resource.type)}</span>
                <span className="px-2 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full">
                  {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
                </span>
              </div>
              <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getDifficultyColor(resource.difficulty)}`}>
                {resource.difficulty}
              </span>
            </div>
            <div className="flex flex-wrap gap-1">
              <span className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded">
                {resource.category}
              </span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {resource.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              {resource.description}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">
                {resource.duration}
              </span>
              {resource.url && (
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Access
                </a>
              )}
            </div>
            {resource.tags && resource.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {resource.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Learning Paths */}
      <div className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Learning Paths</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Beginner Path</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• <a href="https://www.coursera.org/specialization/bioinformatics" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">Introduction to Bioinformatics</a></li>
              <li>• <a href="https://www.coursera.org/learn/python-for-bioinformatics" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">Python for Bioinformatics</a></li>
              <li>• <a href="https://www.youtube.com/watch?v=K4y3w5g5g5g" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">Linux Command Line</a></li>
              <li>• <a href="https://www.khanacademy.org/math/statistics-probability" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">Basic Statistics</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Intermediate Path</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• <a href="https://www.coursera.org/learn/r-for-bioinformatics" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">R for Bioinformatics</a></li>
              <li>• <a href="https://www.youtube.com/watch?v=K4y3w5g5g5g" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">NGS Data Analysis</a></li>
              <li>• <a href="https://www.coursera.org/specialization/machine-learning" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">Machine Learning</a></li>
              <li>• <a href="https://www.amazon.com/Bioinformatics-Algorithms-Active-Engineering/dp/0262033837" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">Bioinformatics Algorithms</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Advanced Path</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• <a href="https://www.coursera.org/specialization/genomic-data-science" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">Genomic Data Science</a></li>
              <li>• <a href="https://www.amazon.com/Bioinformatics-Algorithms-Active-Engineering/dp/0262033837" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">Bioinformatics Algorithms</a></li>
              <li>• <a href="https://www.nature.com/subjects/systems-biology" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">Systems Biology</a></li>
              <li>• <a href="https://www.docker.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">Research Computing</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Recommended Resources */}
      <div className="mt-12 p-6 bg-purple-50 rounded-lg border border-purple-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Recommended Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Online Platforms</h3>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>• <a href="https://www.coursera.org" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 font-medium">Coursera</a></li>
              <li>• <a href="https://www.edx.org" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 font-medium">edX</a></li>
              <li>• <a href="https://www.khanacademy.org" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 font-medium">Khan Academy</a></li>
              <li>• <a href="https://www.bioinformatics.org" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 font-medium">Bioinformatics.org</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Communities</h3>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>• <a href="https://bioinformatics.stackexchange.com" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 font-medium">Bioinformatics Stack Exchange</a></li>
              <li>• <a href="https://www.reddit.com/r/bioinformatics" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 font-medium">Reddit r/bioinformatics</a></li>
              <li>• <a href="https://www.bioinformatics.org/forum" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 font-medium">Bioinformatics.org Forums</a></li>
              <li>• <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 font-medium">GitHub</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Reference Tools</h3>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>• <a href="https://www.ncbi.nlm.nih.gov/geo/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 font-medium">GEO Database</a></li>
              <li>• <a href="https://www.ncbi.nlm.nih.gov" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 font-medium">NCBI Database</a></li>
              <li>• <a href="https://genome.ucsc.edu" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 font-medium">UCSC Genome Browser</a></li>
              <li>• <a href="https://www.ensembl.org" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 font-medium">Ensembl</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Expert Blogs */}
      <div className="mt-12 p-6 bg-indigo-50 rounded-lg border border-indigo-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">🌟 Expert Bioinformatics Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-white rounded-lg border border-indigo-100 hover:shadow-md transition-shadow">
            <div className="w-16 h-16 mx-auto mb-3 bg-indigo-100 rounded-full flex items-center justify-center">
              <span className="text-2xl">🧬</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Dr. Badran M.</h3>
            <p className="text-xs text-gray-600 mb-3">Bioinformatics Research & Applications</p>
            <div className="space-y-2">
              <a
                href="https://www.linkedin.com/in/dr-badran-m-e-65414b113/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 px-3 py-2 bg-blue-600 text-white text-xs font-medium rounded hover:bg-blue-700 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn Profile
              </a>
              <a
                href="https://badran-elshenawy.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 px-3 py-2 bg-indigo-600 text-white text-xs font-medium rounded hover:bg-indigo-700 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                Visit Blog
              </a>
            </div>
          </div>

          <div className="text-center p-4 bg-white rounded-lg border border-indigo-100 hover:shadow-md transition-shadow">
            <div className="w-16 h-16 mx-auto mb-3 bg-indigo-100 rounded-full flex items-center justify-center">
              <span className="text-2xl">💻</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Jojy John</h3>
            <p className="text-xs text-gray-600 mb-3">Computational Biology & Data Science</p>
            <div className="space-y-2">
              <a
                href="https://www.linkedin.com/in/jojyjohn28/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 px-3 py-2 bg-blue-600 text-white text-xs font-medium rounded hover:bg-blue-700 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn Profile
              </a>
              <a
                href="https://jojyjohn28.github.io/blog/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 px-3 py-2 bg-indigo-600 text-white text-xs font-medium rounded hover:bg-indigo-700 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                Visit Blog
              </a>
            </div>
          </div>

          <div className="text-center p-4 bg-white rounded-lg border border-indigo-100 hover:shadow-md transition-shadow">
            <div className="w-16 h-16 mx-auto mb-3 bg-indigo-100 rounded-full flex items-center justify-center">
              <span className="text-2xl">🧪</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Ming Tommy Tang</h3>
            <p className="text-xs text-gray-600 mb-3">Genetics & Genomics Research</p>
            <div className="space-y-2">
              <a
                href="https://www.linkedin.com/in/ming-tommy-tang-40650014"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 px-3 py-2 bg-blue-600 text-white text-xs font-medium rounded hover:bg-blue-700 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn Profile
              </a>
              <a
                href="https://divingintogeneticsandgenomics.com/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 px-3 py-2 bg-indigo-600 text-white text-xs font-medium rounded hover:bg-indigo-700 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                Visit Blog
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-indigo-100 rounded-lg">
          <p className="text-sm text-indigo-800 text-center">
            <span className="font-semibold">💡 Learning Tip:</span> Follow these expert blogs to stay updated with the latest trends, research, and career insights in bioinformatics and related fields.
          </p>
        </div>

      {/* Industry Resources */}
      <div className="mt-12 p-6 bg-green-50 rounded-lg border border-green-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">🌟 Industry Resources</h2>
        
        {/* Latest Updates */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">📰 Latest Updates</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a
              href="https://www.genengnews.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-white rounded-lg border border-green-200 hover:shadow-md transition-shadow group"
            >
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                <span className="text-2xl">🧬</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">GEN Engineering News</h4>
                <p className="text-sm text-gray-600">Latest biotechnology and life science news</p>
              </div>
            </a>
            
            <a
              href="https://www.drugdiscoverytrends.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-white rounded-lg border border-green-200 hover:shadow-md transition-shadow group"
            >
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                <span className="text-2xl">💊</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Drug Discovery Trends</h4>
                <p className="text-sm text-gray-600">Pharmaceutical research and development insights</p>
              </div>
            </a>
          </div>
        </div>

        {/* Job Portals */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">💼 Job Portals for Life Science</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a
              href="https://pharmapaywatch.com/remote/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-white rounded-lg border border-green-200 hover:shadow-md transition-shadow group"
            >
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                <span className="text-2xl">🏢</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Pharma Pay Watch</h4>
                <p className="text-sm text-gray-600">Remote pharmaceutical and biotech jobs</p>
              </div>
            </a>
            
            <a
              href="https://www.f6s.com/companies/bioinformatics/united-states/co"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-white rounded-lg border border-green-200 hover:shadow-md transition-shadow group"
            >
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                <span className="text-2xl">🚀</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">F6S Bioinformatics</h4>
                <p className="text-sm text-gray-600">Startups and innovation opportunities</p>
              </div>
            </a>
          </div>
        </div>

        {/* Life Science Companies */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">🏭 List of Life Science Companies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <a
              href="https://ensun.io/search/bioinformatics"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-lg border border-green-200 hover:shadow-md transition-shadow text-center group"
            >
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:bg-green-200 transition-colors">
                <span className="text-xl">🔍</span>
              </div>
              <h4 className="font-semibold text-gray-900 text-sm">Ensun</h4>
              <p className="text-xs text-gray-600">Bioinformatics company search</p>
            </a>
            
            <a
              href="https://www.mordorintelligence.com/industry-reports/global-bioinformatics-market-industry/companies"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-lg border border-green-200 hover:shadow-md transition-shadow text-center group"
            >
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:bg-green-200 transition-colors">
                <span className="text-xl">📊</span>
              </div>
              <h4 className="font-semibold text-gray-900 text-sm">Mordor Intelligence</h4>
              <p className="text-xs text-gray-600">Market research companies</p>
            </a>
            
            <a
              href="https://biopharmguy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-lg border border-green-200 hover:shadow-md transition-shadow text-center group"
            >
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:bg-green-200 transition-colors">
                <span className="text-xl">💡</span>
              </div>
              <h4 className="font-semibold text-gray-900 text-sm">BioPharmGuy</h4>
              <p className="text-xs text-gray-600">Biopharma directory</p>
            </a>
            
            <a
              href="https://wellfound.com/startups/industry/bioinformatics"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-lg border border-green-200 hover:shadow-md transition-shadow text-center group"
            >
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:bg-green-200 transition-colors">
                <span className="text-xl">🌟</span>
              </div>
              <h4 className="font-semibold text-gray-900 text-sm">Wellfound</h4>
              <p className="text-xs text-gray-600">Bioinformatics startups</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default LearningSection;
