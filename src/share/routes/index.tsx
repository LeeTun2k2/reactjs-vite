import { createBrowserRouter } from 'react-router-dom';
import { v1Routes } from '@/v1/routes';

const router = createBrowserRouter([v1Routes]);

export { router };
