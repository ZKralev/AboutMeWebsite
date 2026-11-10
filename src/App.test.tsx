import { render, screen } from '@testing-library/react';
import App from './App';

beforeAll(() => {
  // jsdom has no matchMedia; ThemeProvider needs it
  window.matchMedia = window.matchMedia || ((q: string) => ({ matches: false, media: q, addListener() {}, removeListener() {}, addEventListener() {}, removeEventListener() {}, dispatchEvent: () => false, onchange: null } as MediaQueryList));
});

test('renders the menu', () => {
  render(<App />);
  expect(screen.getByText('My Stack')).toBeInTheDocument();
});

test('renders when localStorage throws', () => {
  const spy = vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => { throw new Error('blocked'); });
  const set = vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => { throw new Error('blocked'); });
  render(<App />);
  expect(screen.getByText('My Stack')).toBeInTheDocument();
  spy.mockRestore();
  set.mockRestore();
});

test('sets the tab title for the stack page', () => {
  window.history.pushState({}, '', '/stack');
  render(<App />);
  expect(document.title).toBe('My Stack | Zdravko Kralev');
  window.history.pushState({}, '', '/');
});

test('theme-color meta follows theme', () => {
  const meta = document.createElement('meta');
  meta.name = 'theme-color';
  document.head.appendChild(meta);
  localStorage.setItem('theme', 'light');
  render(<App />);
  expect(meta.content).toBe('#f5f5f7');
});

test('about page image alt text', () => {
  window.history.pushState({}, '', '/about');
  render(<App />);
  expect(screen.getByAltText('Zdravko Kralev')).toBeInTheDocument();
  expect(screen.getByText('Download CV')).toHaveAttribute('href', '/Zdravko-CV.pdf');
  window.history.pushState({}, '', '/');
});

test('stack menu link is marked current', () => {
  window.history.pushState({}, '', '/stack');
  render(<App />);
  expect(screen.getByText('My Stack').closest('a')).toHaveAttribute('aria-current', 'page');
  expect(screen.getByText('Home').closest('a')).not.toHaveAttribute('aria-current');
  window.history.pushState({}, '', '/');
});

test('reduced motion shows welcome text at once', () => {
  const orig = window.matchMedia;
  window.matchMedia = ((q: string) => ({ ...orig(q), matches: q.includes('reduce') })) as typeof window.matchMedia;
  render(<App />);
  expect(screen.getByText('Hello and welcome to my website')).toBeInTheDocument();
  window.matchMedia = orig;
});
