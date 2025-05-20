import { useState } from 'react';
import data from './leftBarData.json';
import Toggle from './Toggle';

export default function LeftBar() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (e, idx, hasChildren) => {
    if (hasChildren) {
      e.preventDefault();
      setActiveIndex((prev) => (prev === idx ? null : idx));
    }
  };

  const renderList = (items, parentIndex = '') => (
    <ul className="left-bar__list">
      {items.map((item, idx) => {
        const currentIndex = `${parentIndex}${idx}`;
        const hasChildren = !!item.children;
        const isActive = activeIndex === currentIndex;

        return (
          <li key={currentIndex}>
            <a
              href={hasChildren ? '#' : item.href || '#'}
              onClick={(e) => handleClick(e, currentIndex, hasChildren)}
              className={isActive ? 'is-active' : ''}
            >
              {item.label}
            </a>
            {hasChildren && renderList(item.children, `${currentIndex}-`)}
          </li>
        );
      })}
    </ul>
  );

  return (
    <div className="left-bar">
      <div className="left-bar__utils">
        <Toggle label="Fixed / Floating" />
        <Toggle label="Resize Handler" />
      </div>
      {renderList(data)}
    </div>
  );
}
