import Page from "../../js/classes/Page";
import "./home.scss";

class Home extends Page {
  constructor() {
    super("Home");
  }

  async load() {
    return `
    <div class="home-page">
      <h2> Welcome to Home page </h2>

      sample list of route with slug:

      <ul>
        <li>
          <a href="/post/sample_slug" data-link>
            Lorem, ipsum dolor.
          </a>
        </li>

        <li>
          <a href="/post/another_one" data-link>
            Just a random route with slug
          </a>
        </li>
      </ul>

      <div class="content">
        <button id="alertBtn">Alert Something</button>
      </div>
    </div>
    `;
  }

  async mounted() {
    alertBtn.addEventListener("click", (e) => {
      e.preventDefault();
      alert("Something.");
    });
  }
}

export default Home;
