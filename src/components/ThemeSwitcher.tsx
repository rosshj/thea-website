'use client';

import { useTheme } from '@/lib/ThemeContext';

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center gap-1">
      <button
        onClick={() => setTheme('system')}
        className={`w-12 h-12 flex items-center justify-center rounded-full transition-all ${
          theme === 'system'
            ? 'bg-gray-200 dark:bg-neutral-700 shadow-sm text-gray-900 dark:text-white'
            : 'text-gray-500 dark:text-neutral-400 hover:text-gray-700 dark:hover:text-neutral-300'
        }`}
        aria-label="System theme"
        title="System"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
          <path d="M9.75 12.75C9.75 12.3358 9.41421 12 9 12C8.58579 12 8.25 12.3358 8.25 12.75V14.5244C7.12269 14.5976 6.19231 14.8241 5.52446 15.0347C5.12941 15.1593 4.91014 15.5805 5.0347 15.9755C5.15926 16.3706 5.58048 16.5898 5.97552 16.4653C6.68077 16.2429 7.72315 16 8.99999 16C9.73958 16 10.8063 16.0819 12.0248 16.4654C12.4199 16.5898 12.841 16.3703 12.9654 15.9752C13.0897 15.5801 12.8703 15.159 12.4752 15.0346C11.446 14.7107 10.511 14.5741 9.75 14.5244V12.75Z" fill="currentColor"></path>
          <path fillRule="evenodd" clipRule="evenodd" d="M1 4.75C1 3.23122 2.23122 2 3.75 2H14.25C15.7688 2 17 3.23122 17 4.75V10.75C17 12.2688 15.7688 13.5 14.25 13.5H3.75C2.23122 13.5 1 12.2688 1 10.75V4.75ZM3.75 3.5C3.05964 3.5 2.5 4.05964 2.5 4.75V10.75C2.5 11.4404 3.05964 12 3.75 12H14.25C14.9404 12 15.5 11.4404 15.5 10.75V4.75C15.5 4.05964 14.9404 3.5 14.25 3.5H3.75Z" fill="currentColor"></path>
        </svg>
      </button>
      
      <button
        onClick={() => setTheme('light')}
        className={`w-12 h-12 flex items-center justify-center rounded-full transition-all ${
          theme === 'light'
            ? 'bg-gray-200 dark:bg-neutral-700 shadow-sm text-gray-900 dark:text-white'
            : 'text-gray-500 dark:text-neutral-400 hover:text-gray-700 dark:hover:text-neutral-300'
        }`}
        aria-label="Light mode"
        title="Light"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
          <line x1="9" y1=".75" x2="9" y2="2.25" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></line>
          <line x1="14.834" y1="3.166" x2="13.773" y2="4.227" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></line>
          <line x1="17.25" y1="9" x2="15.75" y2="9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></line>
          <line x1="14.834" y1="14.834" x2="13.773" y2="13.773" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></line>
          <line x1="9" y1="17.25" x2="9" y2="15.75" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></line>
          <line x1="3.166" y1="14.834" x2="4.227" y2="13.773" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></line>
          <line x1=".75" y1="9" x2="2.25" y2="9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></line>
          <line x1="3.166" y1="3.166" x2="4.227" y2="4.227" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></line>
          <circle cx="9" cy="9" r="4.25" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></circle>
        </svg>
      </button>
      
      <button
        onClick={() => setTheme('dark')}
        className={`w-12 h-12 flex items-center justify-center rounded-full transition-all ${
          theme === 'dark'
            ? 'bg-gray-200 dark:bg-neutral-700 shadow-sm text-gray-900 dark:text-white'
            : 'text-gray-500 dark:text-neutral-400 hover:text-gray-700 dark:hover:text-neutral-300'
        }`}
        aria-label="Dark mode"
        title="Dark"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
          <path d="M13,11.75c-3.452,0-6.25-2.798-6.25-6.25,0-1.352,.433-2.599,1.162-3.622-3.364,.628-5.912,3.575-5.912,7.122,0,4.004,3.246,7.25,7.25,7.25,3.372,0,6.198-2.306,7.009-5.424-.95,.583-2.063,.924-3.259,.924Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
        </svg>
      </button>
    </div>
  );
}
