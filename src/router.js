import { getParams, pathToRegex } from "./js/utils";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Post from "./pages/Posting";

//Will hold the class instance of the active page
let activePage = null;

//Entry point
const mainApp = document.querySelector("#app");

const parser = new DOMParser();

//List of pages
const routes = [
  {
    path: "/",
    page: Home,
  },
  {
    path: "/post/:id",
    page: Post,
  },
];

export const router = async () => {
  //This is where you unsubscribe things from the previous active page
  if (activePage) {
    activePage.close();
  }

  //Adding a result property and it will create an object if path matches the current location
  //Will will have a result property with null if didn't met
  const transformedRoutes = routes.map((route) => ({
    ...route,
    result: location.pathname.match(pathToRegex(route.path)),
  }));

  //This is to get the active route
  let activeRoute = transformedRoutes.find((route) => route.result !== null);

  activePage = activeRoute
    ? new activeRoute.page(getParams(activeRoute))
    : new PageNotFound();

  //Converting the String to DomElements
  const pageContent = await activePage.load();
  const parsedPageElement = parser.parseFromString(pageContent, "text/html");

  //Removing the content of the mainApp
  while (mainApp.firstChild) mainApp.removeChild(mainApp.firstChild);

  //Inserting the Page
  mainApp.appendChild(parsedPageElement.body);

  //Execute mounted
  activePage.mounted();
};

export const pageTransition = (url) => {
  history.pushState(null, null, url);
  router();
};
