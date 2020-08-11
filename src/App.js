import React from 'react';
import './App.css';
import Panel from "./components/Panel/Panel";

function App() {
  return (
    <div className="App">
        <Panel items={[
            {text:'123'},
            {text:'456'},
            {text:'789'},
        ]}/>
    </div>
  );
}

export default App;
