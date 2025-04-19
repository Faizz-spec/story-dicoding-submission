import HomePage from '../pages/home/home-page';
import AboutPage from '../pages/about/about-page';
import AddStoryPage from '../pages/add-story/add-story-page';
import Favorite from '../pages/favorite';
import LoginPage from '../pages/login-page';
import RegisterPage from '../pages/register-page';



const routes = {
  '/': HomePage, 
  '/about': AboutPage,
  "/add-story": AddStoryPage, 
  '/favorite': Favorite, 
  '/login': LoginPage, 
  '/register': RegisterPage, // ⬅️ tambahkan ini



};

export default routes;
