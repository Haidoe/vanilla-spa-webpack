import Page from "../../js/classes/Page";

class Posting extends Page {
  constructor({ id }) {
    super("Test Page for Pages with Slug");
    this.id = id;
  }

  async load() {
    return `
      <div class="posting-page"> 
        <h2> Welcome to Posting Page with an id of ${this.id}@@ </h2>
      </div>
    `;
  }
}

export default Posting;
