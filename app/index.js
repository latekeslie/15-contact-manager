// import 'whatwg-fetch';

import AppController from './controllers/app';
import store from './store';

const el = document.querySelector('.root');

const controller = new AppController(el, store);

controller.created()


// Hook up the store to the "view"

// Import the create contact action creator
// e.g. import { createContact } from './actions'

// Create a variable for the form
// Add an event listener on form submission.
// When the form is submitted, take all the form data...
// Fire the "create contact" action w/ the form data


// Create a variable for all contact items
