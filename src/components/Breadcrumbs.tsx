// src/components/Breadcrumbs.tsx

import { Link, useLocation } from 'react-router-dom';
import { topics, categoryMeta, isCategoryKey } from '../data/topics';
import { articles } from '../data/articles';

const humanize = (s: string) => s.replace(/-/g, ' ');

type Crumb = { label: string; href: string };

const Breadcrumbs = () => {
  const parts = useLocation().pathname.split('/').filter(Boolean);
  const crumbs: Crumb[] = [];

  if (parts[0] === 'category' && parts[1]) {
    const categoryKey = parts[1];
    crumbs.push({
      label: isCategoryKey(categoryKey) ? categoryMeta[categoryKey].title : humanize(categoryKey),
      href: `/category/${categoryKey}`,
    });

    if (parts[2]) {
      const groupKey = parts[2];
      const groupTopic = topics.find(t => t.category === categoryKey && t.groupKey === groupKey);
      crumbs.push({
        label: groupTopic?.groupTitle ?? humanize(groupKey),
        href: `/category/${categoryKey}/${groupKey}`,
      });

      if (parts[3]) {
        const slug = parts[3];
        const topic = topics.find(t => t.slug === slug);
        crumbs.push({
          label: topic?.title ?? humanize(slug),
          href: `/category/${categoryKey}/${groupKey}/${slug}`,
        });
      }
    }
  } else if (parts[0] === 'article' && parts[1]) {
    const slug = parts[1];
    const article = articles.find(a => a.slug === slug);
    crumbs.push({
      label: article?.title ?? humanize(slug),
      href: `/article/${slug}`,
    });
  } else {
    let href = '';
    parts.forEach(part => {
      href += `/${part}`;
      crumbs.push({ label: humanize(part), href });
    });
  }

  if (crumbs.length === 0) return null;

  return (
    <nav className="text-sm text-neutral-500" aria-label="Breadcrumb">
      <Link to="/" className="hover:text-neutral-700">Home</Link>
      {crumbs.map((crumb, i) => (
        <span key={crumb.href}>
          <span className="mx-1.5">/</span>
          {i === crumbs.length - 1 ? (
            <span className="text-neutral-700 font-medium">{crumb.label}</span>
          ) : (
            <Link to={crumb.href} className="hover:text-neutral-700">{crumb.label}</Link>
          )}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
