import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _368361e4 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
const _138d885a = () => import('../pages/detail/_id.vue' /* webpackChunkName: "pages/detail/_id" */).then(m => m.default || m)



const scrollBehavior = function(to, from, savedPosition) {
      // if the returned position is falsy or an empty object,
      // will retain current scroll position.
      let position = false;

      // if no children detected
      if (to.matched.length < 2) {
        // scroll to the top of the page
        position = { x: 0, y: 0 };
      } else if (
        to.matched.some((r) => r.components.default.options.scrollToTop)
      ) {
        // if one of the children has scrollToTop option set to true
        position = { x: 0, y: 0 };
      }

      // savedPosition is only available for popstate navigations (back button)
      if (savedPosition) {
        position = savedPosition;
      }

      return new Promise((resolve) => {
        // wait for the out transition to complete (if necessary)
        console.log(position,'promise');
        setTimeout(()=>{
          console.log('timeout');
          resolve(position);
        },5000)
        window.$nuxt.$once("triggerScroll", () => {
          console.log(position,'triggerscroll');
          // coords will be used if no selector is provided,
          // or if the selector didn't match any element.
          if (to.hash && document.querySelector(to.hash)) {
            // scroll to anchor by returning the selector
            position = { selector: to.hash };
          }
          resolve(position);
        });
      });
    }


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/",
			component: _368361e4,
			name: "index"
		},
		{
			path: "/detail/:id?",
			component: _138d885a,
			name: "detail-id"
		}
    ],
    
    
    fallback: false
  })
}
