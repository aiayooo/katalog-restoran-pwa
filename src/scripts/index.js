import 'regenerator-runtime'; /* for async await transpile */
import '../styles/style.css';
import '../styles/responsive.css';
import './views/custom-elemen/hero';
import App from './views/app';
import swRegister from './utils/sw-register';

const skipToContent = document.querySelector('.skip-link');
const maincontent = document.querySelector('#maincontent');

// eslint-disable-next-line no-unused-vars
const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#drawer'),
  hero: document.querySelector('hero-section'),
  content: document.querySelector('#maincontent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

skipToContent.addEventListener('keypress', (event) => {
  event.preventDefault();
  if (event.key === 'Enter') {
    maincontent.focus();
  }
});
