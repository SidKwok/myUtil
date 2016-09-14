import React from 'react';
import Hello from './components/Hello.jsx';
import logo from './assets/logo.svg';
import './App.css';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {test: 'foo'};
    }
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
            </div>
        );
    }
}
