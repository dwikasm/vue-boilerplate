import store from '../store';

export function checkAccessMiddleware(to, from, next) {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.loggedIn) {
      next({ name: 'login' });
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.guest)) {
    if (store.getters.loggedIn) {
      next({ name: 'home' });
    } else {
      next();
    }
  } else {
    next();
  }
}

export function setPageTitleMiddleware(to, from, next) {
  const pageTitle = to.matched.find(item => item.meta.title);

  if (pageTitle) window.document.title = `${process.env.VUE_APP_TITLE} | ${pageTitle.meta.title}`;
  else window.document.title = process.env.VUE_APP_TITLE;
  next();
}
