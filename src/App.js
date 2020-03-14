import React from 'react';
import Search from "./components/Search";
import {Provider} from 'react-redux';
import './App.css';
import configureStore from "./store";

const store = configureStore();

function App() {
    return (
        <Provider store={store}>
            <div className='app-wrapper'>
                <Search/>
            </div>
        </Provider>
    );
}

export default App;
