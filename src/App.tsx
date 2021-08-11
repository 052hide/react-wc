import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <wc-button html-type="button" disabled={false} loading={true} theme="primary" size="base" block={true}>
        Button
      </wc-button>
    </div>
  );
}

export default App;
