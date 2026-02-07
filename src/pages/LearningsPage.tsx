// src/pages/LearningsPage.tsx
import React from 'react';

const LearningsPage: React.FC = () => {
  return (
    <main className="bg-neutral-50">
      <section className="container-custom py-10">
        <h1 className="text-4xl font-extrabold text-neutral-900">Learnings</h1>
        <p className="mt-2 text-neutral-600 max-w-3xl">
          A single place to understand how Bioinformatics, Biotechnology, Biopharma, and Quality connect —
          and how to plan your learning without confusion.
        </p>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-neutral-200 bg-white p-6">
            <h2 className="text-xl font-extrabold text-neutral-900">Overview</h2>
            <p className="mt-2 text-neutral-600">
              How the three fields connect, what each one focuses on, and how to bridge skills from one to another.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white p-6">
            <h2 className="text-xl font-extrabold text-neutral-900">Learning Paths</h2>
            <p className="mt-2 text-neutral-600">
              Beginner → Intermediate → Advanced paths across biology, computation, and industry skills.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white p-6">
            <h2 className="text-xl font-extrabold text-neutral-900">People & Resources</h2>
            <p className="mt-2 text-neutral-600">
              Add links to blogs, researchers, educators, and courses you want beginners to follow.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white p-6">
            <h2 className="text-xl font-extrabold text-neutral-900">Interview Prep</h2>
            <p className="mt-2 text-neutral-600">
              Common interview questions, how to answer, and how to present projects confidently.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white p-6 lg:col-span-2">
            <h2 className="text-xl font-extrabold text-neutral-900">Weekly Updates</h2>
            <p className="mt-2 text-neutral-600">
              A section where you can post what you learned this week, new topics added, and small milestones.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LearningsPage;
