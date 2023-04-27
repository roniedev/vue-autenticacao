import { route } from 'quasar/wrappers';
import authService from 'src/services/auth.service';
import {
  createMemoryHistory,
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router';

import routes from './routes';

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : (process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory);

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,
    history: createHistory(process.env.VUE_ROUTER_BASE),
  });

  Router.beforeEach((to, from, next) => {
    const estaAutenticado = authService.estaAutenticado();

    if (to.matched.some(record => record.meta.requiresAuth)) {
      if (!estaAutenticado) {
        next({
          path: '/login',
          query: { redirect: to.fullPath }
        })
      }
    }

    next();
  });

  return Router;
});
