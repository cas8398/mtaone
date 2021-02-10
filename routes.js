import splash from './screens/splash';
import home from './screens/home';
import categories from './screens/categories';
import cari from './screens/cari';
import post from './screens/post'; 
import post2 from './screens/post2/'; 
import kabarmta from './screens/kabarmta/'; 
import mtatv from './screens/mtatv'; 
import persadafm from './screens/persadafm'; 
import salingsapa from './screens/salingsapa'; 
import kajianfull from './screens/kajianfull'; 
import pdf from './screens/pdf'; 
 
const routes = [
  {
    path: '/splash/',
    component: splash
  },
  {
    path: '/home/',
    component: home
  },
  {
    path: '/categories/',
    component: categories
  },
  {
    path: '/cari/',
    name: 'cari',
    component: cari,
  },
  {
    path: '/post/',
    component: post,
  },
  {
    path: '/post2/',
    component: post2,
  },
  {
    path: '/kabarmta/',
    component: kabarmta,
  },
  {
    path: '/mtatv/',
    component: mtatv,
  },
  {
    path: '/persadafm/',
    component: persadafm,
  },
  {
    path: '/salingsapa/',
    component: salingsapa,
  },
  {
    path: '/kajianfull/',
    component: kajianfull,
  },
  {
    path: '/pdf/',
    component: pdf,
  }
];

export default routes;