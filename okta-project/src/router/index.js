import { createRouter, createWebHistory } from 'vue-router'
import { LoginCallback, navigationGuard } from '@okta/okta-vue'
import LoggedOutComponent from '@/components/LoggedOut'
import LoggedInComponent from '@/components/LoggedIn'
import Profile from '@/components/Profile'
// import Home from '@/components/Hello'
import RecipeProd from '@/components/RecipeProd'
// import Auth from '@okta/okta-vue'


// Vue.use(Auth, {
//   issuer: 'https://dev-96776781.okta.com/oauth2/default',
//   client_id: '0oa7x23ivcWOq6d1G5d7',
//   redirect_uri: 'http://localhost:8080/login/callback',
//   scope: 'openid profile email app-role'
// }) // credentials for okta

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
  {
    path: '/loggedOut',
    name: 'LoggedOut',
    component: LoggedOutComponent
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/recipe',
    name: 'RecipeProd',
    component: RecipeProd
  },
  // {
  //   path: '/home',
  //   name: 'Home',
  //   component: Home,
  //   meta: {
  //     requiresAuth: true
  //   }
  // },
  {
    path: '/login/callback',
    component: LoginCallback
  },
  {
    path: '/',
    name: 'LoggedIn',
    component: LoggedInComponent,

  },
] 
})

router.beforeEach(navigationGuard)

export default router
