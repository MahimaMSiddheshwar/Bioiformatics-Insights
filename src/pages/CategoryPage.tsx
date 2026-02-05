import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { articles } from '../data/mockData';
import { Clock, User, ArrowLeft, Beaker, BookOpen, Cog, Lightbulb, Building, Sparkles } from 'lucide-react';

const CategoryPage: React.FC = () => {
  const { category, section } = useParams<{ category?: string; section?: string }>();
  
  const categoryData = {
    bioinformatics: {
      name: 'Bioinformatics',
      description: 'Computational analysis of biological data, genomics, and proteomics',
      icon: Beaker,
      color: 'from-blue-500 to-cyan-500',
      sections: [
        {
          id: 'overview',
          name: 'Introduction & Overview',
          description: 'What the field is and why it matters',
          icon: BookOpen
        },
        {
          id: 'fundamentals',
          name: 'Fundamentals & Core Concepts',
          description: 'Biological and technical foundations',
          icon: Cog
        },
        {
          id: 'techniques',
          name: 'Techniques, Data & Workflows',
          description: 'Experimental or computational workflows',
          icon: Lightbulb
        },
        {
          id: 'applications',
          name: 'Applications & Use Cases',
          description: 'Research, healthcare, drug discovery, real-world examples',
          icon: Sparkles
        },
        {
          id: 'industry',
          name: 'Industry & Career Context',
          description: 'Common roles and skill expectations',
          icon: Building
        },
        {
          id: 'future',
          name: 'Future Trends & AI Integration',
          description: 'Role of AI, automation, and emerging technologies',
          icon: Sparkles
        }
      ]
    },
    biotechnology: {
      name: 'Biotechnology',
      description: 'Genetic engineering, molecular biology, and bioprocessing',
      icon: Beaker,
      color: 'from-green-500 to-emerald-500',
      sections: [
        {
          id: 'overview',
          name: 'Introduction & Overview',
          description: 'What the field is and why it matters',
          icon: BookOpen
        },
        {
          id: 'fundamentals',
          name: 'Fundamentals & Core Concepts',
          description: 'Biological and technical foundations',
          icon: Cog
        },
        {
          id: 'techniques',
          name: 'Techniques, Data & Workflows',
          description: 'Experimental or computational workflows',
          icon: Lightbulb
        },
        {
          id: 'applications',
          name: 'Applications & Use Cases',
          description: 'Research, healthcare, drug discovery, real-world examples',
          icon: Sparkles
        },
        {
          id: 'industry',
          name: 'Industry & Career Context',
          description: 'Common roles and skill expectations',
          icon: Building
        },
        {
          id: 'future',
          name: 'Future Trends & AI Integration',
          description: 'Role of AI, automation, and emerging technologies',
          icon: Sparkles
        }
      ]
    },
    biopharma: {
      name: 'Biopharma',
      description: 'Pharmaceutical biotechnology, drug development, and quality control',
      icon: Beaker,
      color: 'from-purple-500 to-pink-500',
      sections: [
        {
          id: 'overview',
          name: 'Introduction & Overview',
          description: 'What the field is and why it matters',
          icon: BookOpen
        },
        {
          id: 'fundamentals',
          name: 'Fundamentals & Core Concepts',
          description: 'Biological and technical foundations',
          icon: Cog
        },
        {
          id: 'techniques',
          name: 'Techniques, Data & Workflows',
          description: 'Experimental or computational workflows',
          icon: Lightbulb
        },
        {
          id: 'applications',
          name: 'Applications & Use Cases',
          description: 'Research, healthcare, drug discovery, real-world examples',
          icon: Sparkles
        },
        {
          id: 'industry',
          name: 'Industry & Career Context',
          description: 'Common roles and skill expectations',
          icon: Building
        },
        {
          id: 'future',
          name: 'Future Trends & AI Integration',
          description: 'Role of AI, automation, and emerging technologies',
          icon: Sparkles
        }
      ]
    }
  };

  const currentCategory = category && categoryData[category as keyof typeof categoryData];
  
  if (!category || !currentCategory) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-neutral-900 mb-4">Category Not Found</h1>
          <p className="text-neutral-600 mb-6">The category you're looking for doesn't exist.</p>
          <Link to="/" className="btn btn-primary">Return Home</Link>
        </div>
      </div>
    );
  }

  const filteredArticles = articles.filter(article => {
    const matchesCategory = article.category === category;
    const matchesSection = !section || article.section === section;
    return matchesCategory && matchesSection;
  });

  const currentSection = section && currentCategory.sections.find(s => s.id === section);
  const IconComponent = currentCategory.icon;

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'bg-green-100 text-green-800';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'advanced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-neutral-100 text-neutral-800';
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <div className={`bg-gradient-to-br ${currentCategory.color} py-16`}>
        <div className="container-custom">
          <div className="text-center text-white">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <IconComponent className="w-10 h-10" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{currentCategory.name}</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">{currentCategory.description}</p>
          </div>
        </div>
      </div>

      <div className="container-custom py-8">
        {/* Navigation */}
        <Link to="/" className="inline-flex items-center text-neutral-600 hover:text-primary-600 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        {/* Section Navigation */}
        {!section && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">Learning Path</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {currentCategory.sections.map((sectionData) => {
                const SectionIcon = sectionData.icon;
                const articleCount = articles.filter(
                  a => a.category === category && a.section === sectionData.id
                ).length;

                return (
                  <Link
                    key={sectionData.id}
                    to={`/category/${category}/${sectionData.id}`}
                    className="card p-6 hover:shadow-lg transition-all hover:scale-105"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <SectionIcon className="w-6 h-6 text-primary-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-neutral-900 mb-1">{sectionData.name}</h3>
                        <p className="text-sm text-neutral-600 mb-2">{sectionData.description}</p>
                        <span className="text-xs text-neutral-500">{articleCount} articles</span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        {/* Current Section Header */}
        {currentSection && (
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-3xl font-bold text-neutral-900 mb-2">{currentSection.name}</h2>
                <p className="text-neutral-600">{currentSection.description}</p>
              </div>
              <Link 
                to={`/category/${category}`}
                className="btn btn-secondary"
              >
                View All Sections
              </Link>
            </div>
          </div>
        )}

        {/* Articles Grid */}
        <div>
          <h3 className="text-xl font-semibold text-neutral-900 mb-6">
            {section && currentSection ? `${currentSection.name} Articles` : 'All Articles'}
          </h3>
          
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((article) => (
                <Link
                  key={article.id}
                  to={`/article/${article.slug}`}
                  className="card p-6 hover:shadow-lg transition-shadow group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${getDifficultyColor(article.difficulty)}`}>
                      {article.difficulty}
                    </span>
                    <span className="text-sm text-neutral-500">{article.readTime}</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-neutral-600 text-sm mb-3 line-clamp-3">{article.summary}</p>
                  
                  <div className="flex items-center text-xs text-neutral-500">
                    <User className="w-3 h-3 mr-1" />
                    {article.author} • {article.publishDate}
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-neutral-400" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">No articles yet</h3>
              <p className="text-neutral-600 mb-4">
                {section 
                  ? `No articles available in this section yet. Check back soon!`
                  : `No articles available in this category yet. Check back soon!`
                }
              </p>
              <Link to="/" className="btn btn-primary">Explore Other Categories</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;