class ItemView {
  constructor(data, store) {
    this.data = data;
    this.store = store;

    this.el = document.createElement('li');
    this.el.classList.add('contact-card');
    this.el.innerHTML = `
    <h3 class="name"></h3>
    <p class="street"></p>
    <p class="city-state"></p>
    <button class="delete">Delete</button>
      `;
  }

  mounted() {}

  render() {
    this.el.querySelector('.name').innerText = `${this.data.firstName} ${this.data.lastName}`;
    this.el.querySelector('.street').innerText = this.data.street;
    this.el.querySelector('.city-state').innerText = `${this.data.city} ${this.data.state}`;
  }
}

export default class ListView {
  constructor(el, store) {
    this.el = el;
    this.store = store;
  }

  mounted() {
    // Listen for the snacks list to change...
    this.store.subscribe(() => {
      // Re-Render
      this.render();
    });
  }

  // How do we translate data into UI?
  render() {
    // Clear the grid
    this.el.innerHTML = '';
    const contacts = this.store.getState().contacts;

    // Loop through snacks array
    contacts.forEach((contact) => {
      // Create a new item view...
      const view = new ItemView(contact, this.store);
      view.mounted();
      view.render();

      // Add the view's element into the list element
      this.el.appendChild(view.el);
    });
  }
}
