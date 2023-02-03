import { router, pageTransition } from "./router";
import "./css/normalize.css";
import "./css/global.scss";

//This is For Router
document.body.addEventListener("click", (e) => {
  if (e.target.matches("[data-link]")) {
    e.preventDefault();
    pageTransition(e.target.href);
  }
});

window.addEventListener("popstate", router);

router();
