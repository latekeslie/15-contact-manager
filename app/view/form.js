export default class FormView {
  constructor(el, store) {
    this.el = el;
    this.store = store;
  }

  mounted() {
    // Listen for submit events...
    this.el.addEventListener('submit', (event) => {
      // Stop the browser's default behavior
      event.preventDefault();

      // Collect the form data
      const data = {
        firstName: this.el.querySelector('.first-name__input').value,
        lastName: this.el.querySelector('.last-name__input').value,
        street: this.el.querySelector('.street__input').value,
        city: this.el.querySelector('.city__input').value,
        state: this.el.querySelector('.state__input').value,
      };

      this.store.dispatch({ type: 'CONTACT@CREATE', data });


    });
  }
}
