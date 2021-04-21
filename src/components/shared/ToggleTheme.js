import React, { useEffect } from 'react';

export const ToggleTheme = () => {
  useEffect(() => {
    const theme = document.getElementById('themeToggle');
    theme.addEventListener('change', () => {
      document.body.classList.toggle('light');
    });
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
