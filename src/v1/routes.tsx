import { RouteObject } from 'react-router-dom';
import Counter from '@/v1/pages/counter';
import Version1 from '.';
import Error404Page from './pages/errors/404';

const v1Routes: RouteObject = {
  path: '/v1',
  element: <Version1 />,
  errorElement: <Error404Page />,
  children: [
    {
      path: '/v1',
      element: <Counter />,
    },
  ],
};

export { v1Routes };
