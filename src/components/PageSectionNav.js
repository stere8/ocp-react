import React from 'react';
import '../Styles/PageSectionNav.css';

const PageSectionNav = ({ items, topId }) => (
  <nav className="page-section-nav" aria-label="Page section navigation">
    {items.map((item) => (
      <a key={item.id} href={`#${item.id}`} className="page-section-nav__link">
        {item.label}
      </a>
    ))}
    <a
      href={`#${topId}`}
      className="page-section-nav__link page-section-nav__link--top"
      aria-label="Back to top"
    >
      ↑
    </a>
  </nav>
);

export default PageSectionNav;
