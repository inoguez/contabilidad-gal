'use client';

import { useEffect, useState } from 'react';

export const ToggleTheme = () => {
  console.log('aa');
  const [theme, setTheme] = useState('');
  console.log(theme);
  const activateDarkMode = () => {
    console.log('aa');
  };
  useEffect(() => {
    console.log('aa');
    const html = document.documentElement;
    const themeSetting = window.localStorage.getItem('themeSetting');
    if (!theme && themeSetting) return setTheme(themeSetting);
    window.localStorage.setItem('themeSetting', theme);
    const darkModePreference = window.matchMedia(
      '(prefers-color-scheme: dark)'
    );

    // recommended method for newer browsers: specify event-type as first argument
    darkModePreference.addEventListener(
      'change',
      (e) => e.matches && activateDarkMode()
    );
  }, [theme]);

  return (
    <div className='text-white'>
      <label htmlFor='switch-theme'>Tema</label>
      <button onClick={() => setTheme('dark')}>DARK</button>
      <button onClick={() => setTheme('light')}>LIGHT</button>
      <button onClick={() => setTheme('system')}>SYSTEM</button>
    </div>
  );
};
