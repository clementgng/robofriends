import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import App from './App';
// Card is default, dont need to destructure it
// export default [THING GOES HERE] uses capitalized word
// robots is not default, need to destructure it
// robots is an array of objects
// imports that aren't single, use lowercase

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
