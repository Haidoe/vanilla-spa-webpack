class Page {
  constructor(title) {
    this.title = title;
    this.setDocumentTitle();
  }

  setDocumentTitle() {
    document.title = `${this.title}`;
  }

  async preload() {}

  async load() {
    return "";
  }

  async mounted() {}

  async close() {
    console.log(`${this.title} Page Closed`);
  }
}

export default Page;
