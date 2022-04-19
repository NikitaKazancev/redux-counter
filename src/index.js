import './index.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';

import reducer from './redux/reducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Provider>
);
