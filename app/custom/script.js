import { useEffect } from 'react';

const Script = () => {
  useEffect(() => {
    const toggleModeButton = document.querySelector('.toggle-mode');
    toggleModeButton.addEventListener('click', () => {
      const body = document.body;
      body.classList.toggle('dark-mode');
    });
  }, []);

  return null;
};

export default Script;