import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import './i18n';

jest.mock('react-ga4', () => ({
  initialize: jest.fn(),
  send: jest.fn()
}));

test('renders the application shell', async () => {
  render(
    <HelmetProvider>
      <MemoryRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <App />
      </MemoryRouter>
    </HelmetProvider>
  );

  expect(await screen.findByRole('heading', { level: 1 })).toBeInTheDocument();
});
