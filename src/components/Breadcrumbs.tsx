// src/components/Breadcrumbs.tsx

import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
  const parts = useLocation().pathname.split('/').filter(Boolean);

  return (
    <nav className="text-sm text-neutral-500">
      {parts.map((p, i) => (
        <span key={i}>
          <Link to={'/' + parts.slice(0, i + 1).join('/')}>{p}</Link>
          {i < parts.length - 1 && ' / '}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
