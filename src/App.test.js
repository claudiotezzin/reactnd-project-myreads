import React from 'react';
import ReactDOM from 'react-dom';
import App from 'containers/App';

/**
 This course is not designed to teach Test Driven Development.
 Feel free to use this file to test your application, but it
 is not required.
**/
//browserMocks.js
var localStorageMock = (function() {
	var store = {};

	return {
		getItem: function(key) {
			return store[key] || null;
		},
		setItem: function(key, value) {
			store[key] = value.toString();
		},
		clear: function() {
			store = {};
		}
	};
})();

Object.defineProperty(window, 'localStorage', {
	value: localStorageMock
});

xit('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<App />, div);
});
