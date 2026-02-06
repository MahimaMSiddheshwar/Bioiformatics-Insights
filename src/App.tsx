import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import TopicPage from './pages/TopicPage';
import ArticlePage from './pages/ArticlePage';
import SearchPage from './pages/SearchPage';
import GlossaryPage from './pages/GlossaryPage';

const App: React.FC = () => {
  return (
    <Router>
      {/* flex-col layout prevents footer overlap */}
      <div className="min-h-screen bg-neutral-50 flex flex-col">
        <Header />

        {/* pt-20/24 gives space for fixed header */}
        <main className="flex-1 pt-20">
          <Routes>
            <Route path="/" element={<Home />} />

            {/* category list */}
            <Route path="/category/:category" element={<CategoryPage />} />

            {/* topic detail page (your 500-word content + figures) */}
            <Route path="/category/:category/:section" element={<TopicPage />} />

            <Route path="/article/:slug" element={<ArticlePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/glossary" element={<GlossaryPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
