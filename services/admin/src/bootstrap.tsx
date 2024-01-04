import { createRoot } from 'react-dom/client';
import { App } from '@/components/App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LazyAbout } from '@/pages/About/About.lazy';
import { Suspense } from 'react';
import { router } from './router/Router';

const root = document.getElementById('root');

if (!root) {
  throw new Error('root not found');
}

const countainer = createRoot(root);

countainer.render(<RouterProvider router={router} />);
