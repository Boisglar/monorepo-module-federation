import { App } from '@/components/App';
import Shop from '@/pages/Shop/Shop';
import { LazyShop } from '@/pages/Shop/Shop.lazy';
import { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { UserCard } from '@packages/shared/src/components/UserCard';

const routes = [
  {
    path: '/shop',
    element: <App />,
    children: [
      {
        path: '/shop/main',
        element: (
          <Suspense fallback={'...loading'}>
            <LazyShop />
          </Suspense>
        ),
      },
      {
        path: '/shop/second',
        element: (
          <Suspense fallback={'...loading'}>
            <div>
              <h1>second page</h1>
              <UserCard userName="From shop" />
            </div>
          </Suspense>
        ),
      },
    ],
  },
];

export const router = createBrowserRouter(routes);

export default routes;
