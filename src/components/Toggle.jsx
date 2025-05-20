import { useState } from 'react';

export default function Toggle({ label }) {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <button
      className={`toggle ${isActive ? 'is-active' : ''}`}
      onClick={handleClick}
    >
      <span className="toggle__switch"></span>
      {label}
    </button>
  );
}
