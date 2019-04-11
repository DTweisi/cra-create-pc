
import CommonLayout  from '../layout/commonLayout';
import Home from '../pages/home';

const routerConf = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path: '/home',
    layout: null,
    component: Home
  }
  // {
  //  path:'/login',
  //  layout: null,
  //  component: Login,
  // },
  // {
  //   path:'/register',
  //   layout: null,
  //   component: Register,
  //  },
	// 	{
	// 	path: '*',
  //   layout: MainLayout,
  //   component: Page404,
  // }
];

export default routerConf;
