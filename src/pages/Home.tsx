import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <main className="pt-24 bg-neutral-50 relative overflow-hidden">

      {/* LEFT DNA BACKGROUND */}
      <div
        className="absolute top-40 left-[-120px] w-[420px] h-[420px] opacity-[0.18] bg-no-repeat bg-contain"
        style={{ backgroundImage: "url('/images/biology/dna.png')" }}
      />

      {/* RIGHT PROTEIN BACKGROUND */}
      <div
        className="absolute top-52 right-[-120px] w-[420px] h-[420px] opacity-[0.18] bg-no-repeat bg-contain"
        style={{ backgroundImage: "url('/images/biology/protein.png')" }}
      />

      <section className="relative container-custom text-center py-24">

        {/* HERO */}
        <h1 className="text-6xl font-extrabold tracking-tight mb-6 text-neutral-900">
          Decode Life
        </h1>

        <p className="text-2xl text-neutral-700 mb-4">
          Biology meets computation.
        </p>

        <p className="text-lg text-neutral-500 max-w-3xl mx-auto mb-20">
          A visual, beginner-friendly guide to bioinformatics, biotechnology, and biopharma —
          from DNA and RNA fundamentals to real-world genomics and drug discovery.
        </p>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

          {/* BIOINFORMATICS */}
          <Link
            to="/category/bioinformatics"
            className="no-underline hover:no-underline group rounded-2xl p-10
                       shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl
                       bg-gradient-to-br from-emerald-100 to-white
                       border border-emerald-200"
          >
            <div className="text-6xl mb-6 transition-transform duration-300 group-hover:scale-110">
              🧬
            </div>
            <h3 className="text-2xl font-bold text-emerald-700 mb-4">
              Bioinformatics
            </h3>
            <p className="text-neutral-700 leading-relaxed">
              Learn how biological data is transformed into insight using algorithms,
              statistics, and computational thinking.
            </p>
          </Link>

          {/* BIOTECHNOLOGY */}
          <Link
            to="/category/biotechnology"
            className="no-underline hover:no-underline group rounded-2xl p-10
                       shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl
                       bg-gradient-to-br from-purple-100 to-white
                       border border-purple-200"
          >
            <div className="text-6xl mb-6 transition-transform duration-300 group-hover:scale-110">
              🔬
            </div>
            <h3 className="text-2xl font-bold text-purple-700 mb-4">
              Biotechnology
            </h3>
            <p className="text-neutral-700 leading-relaxed">
              Explore how biology and technology combine to build diagnostics,
              engineered systems, and medical innovations.
            </p>
          </Link>

          {/* BIOPHARMA */}
          <Link
            to="/category/biopharma"
            className="no-underline hover:no-underline group rounded-2xl p-10
                       shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl
                       bg-gradient-to-br from-pink-100 to-white
                       border border-pink-200"
          >
            <div className="text-6xl mb-6 transition-transform duration-300 group-hover:scale-110">
              💊
            </div>
            <h3 className="text-2xl font-bold text-pink-700 mb-4">
              Biopharma
            </h3>
            <p className="text-neutral-700 leading-relaxed">
              Understand how drugs, vaccines, and therapies are developed using
              biological data and computational analysis.
            </p>
          </Link>

        </div>
      </section>
    </main>
  );
};

export default Home;
