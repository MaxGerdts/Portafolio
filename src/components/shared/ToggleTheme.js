import React, { useEffect } from 'react';

export const ToggleTheme = () => {
  useEffect(() => {
    const theme = document.getElementById('themeToggle');
    theme.addEventListener('change', () => {
      const theme = document.body.classList.toggle('light');
      theme
        ? localStorage.setItem('theme', 'light')
        : localStorage.setItem('theme', 'dark');
    });
    (() => {
      const getTheme = localStorage.getItem('theme');
      if (getTheme === 'light') {
        document.body.classList.add('light');
        document.getElementById('themeToggle').checked = true;
      }
    })();
  });

  return (
    <>
      <label className='switch'>
        <input type='checkbox' className='themeToggle' id='themeToggle' />
        <span className='slider round'></span>
      </label>
    </>
  );
};
