import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import { Provider } from 'react-redux';
import store from './redux/store';

import GlobalStyles from './styles/globalStyles';

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyles/>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);