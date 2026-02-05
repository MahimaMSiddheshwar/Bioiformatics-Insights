import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <main className="pt-28">
      <section className="container-custom text-center">
        <h1 className="text-5xl font-bold mb-6">
          Learn <span className="text-gradient-primary">Bioinformatics</span> Visually
        </h1>
        <p className="text-xl text-neutral-600 max-w-3xl mx-auto mb-12">
          From DNA and RNA fundamentals to real-world genomics pipelines — explained clearly for everyone.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <Link to="/category/bioinformatics" className="card p-6">
            🧬 Bioinformatics
          </Link>
          <Link to="/category/biotechnology" className="card p-6">
            🔬 Biotechnology
          </Link>
          <Link to="/category/biopharma" className="card p-6">
            💊 Biopharma
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
