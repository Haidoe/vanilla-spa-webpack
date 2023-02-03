import Page from "../../js/classes/Page";

class NotFound extends Page {
  constructor() {
    super("Page not Found");
  }

  async load() {
    return `
      <h2> Page not Found </h2>
      <div>
        <a href="/" data-link>Go Back to Home Page </a>
      </div>
    `;
  }
}

export default NotFound;
