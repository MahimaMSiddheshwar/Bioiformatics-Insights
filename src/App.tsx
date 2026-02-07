// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import SectionPage from './pages/SectionPage';
import TopicPage from './pages/TopicPage';
import ArticlePage from './pages/ArticlePage';
import SearchPage from './pages/SearchPage';
import GlossaryPage from './pages/GlossaryPage';
import LearningsPage from './pages/LearningsPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-neutral-50 flex flex-col">
        <Header />

        {/* header is fixed */}
        <main className="flex-1 pt-20">
          <Routes>
            <Route path="/" element={<Home />} />

            {/* Category hierarchy */}
            <Route path="/category/:category" element={<CategoryPage />} />
            <Route path="/category/:category/:section" element={<SectionPage />} />
            <Route
              path="/category/:category/:section/:slug"
              element={<TopicPage />}
            />

            {/* Content */}
            <Route path="/article/:slug" element={<ArticlePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/glossary" element={<GlossaryPage />} />

            {/* Learnings */}
            <Route path="/learnings" element={<LearningsPage />} />
            <Route
              path="/learning-paths"
              element={<Navigate to="/learnings" replace />}
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
