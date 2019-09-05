import React from 'react';
import ReactDOM from 'react-dom';
import Form from './components/Form';
import * as serviceWorker from './serviceWorker';
import $ from 'jquery';

// generic scroll function
window.scroll_to = function(id) {
  $([document.documentElement, document.body]).animate({
    scrollTop: $(id).offset().top - 20
  }, 1000);
};

ReactDOM.render(<Form />, document.getElementById('app'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
