import Vue from 'vue';
import Router from 'vue-router';
import { routes } from './routes';
import { checkAccessMiddleware, setPageTitleMiddleware } from './middlewares';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(checkAccessMiddleware);
router.beforeEach(setPageTitleMiddleware);

export default router;
