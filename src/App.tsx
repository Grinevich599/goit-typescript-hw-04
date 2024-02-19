import React from "react";
import logo from "./logo.svg";
import "./App.css";
import RequestComponent from "./homework/2";
import { Observer } from "./homework/1";
import { FormComponent } from "./homework/3";
import { ComponentApp } from "./homework/4";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
            <Observer onContentEndVisible={() => alert("Happy End")}>
                <RequestComponent />
                <FormComponent />
                <ComponentApp />
            </Observer>
        </div>
    );
}

export default App;
