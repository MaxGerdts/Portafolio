import React, { useEffect } from 'react';

export const ToggleTheme = () => {
  useEffect(() => {
    (() => {
      const getTheme = localStorage.getItem('theme');
      if (getTheme === 'light') {
        document.body.classList.add('light');
        document.getElementById('themeToggle').checked = true;
      }
    })();
  });
  const toggleTheme = () => {
    const theme = document.body.classList.toggle('light');
    theme
      ? localStorage.setItem('theme', 'light')
      : localStorage.setItem('theme', 'dark');
  };

  return (
    <>
      <label className='switch'>
        <input
          type='checkbox'
          className='themeToggle'
          id='themeToggle'
          onClick={toggleTheme}
        />
        <span className='slider round'></span>
      </label>
    </>
  );
};
