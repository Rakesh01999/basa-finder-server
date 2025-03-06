import { Router } from 'express';
import { UserRoutes } from '../modules/User/user.route';
import { AuthRoutes } from '../modules/Auth/auth.route';
import { RentalHouseRoutes } from '../modules/rentalHouse/rentalHouse.route';
import { RentalRequestRoutes } from '../modules/rentalRequest/rentalRequest.route';
import { PaymentRoutes } from '../modules/payment/payment.routes';

const router = Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRoutes, // User registration, login
  },
  {
    // path: '/rental-houses',
    path: '/landlords',
    route: RentalHouseRoutes, // RentalHouseRoutes CRUD operations
  },
  {
    // path: '/rental-request',
    path: '/',
    route: RentalRequestRoutes, // RentalReques Routes CRUD operations
  },
  {
    // path: '/payment',
    path: '/payment',
    route: PaymentRoutes, // RentalReques Routes CRUD operations
  },
  {
    // path: '/users',
    path: '/',
    route: UserRoutes, // Manage customers and admins
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
