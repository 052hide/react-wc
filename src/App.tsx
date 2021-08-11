import React, { useState } from 'react';
import './App.css';

function App() {
  const [clickedCount, setClickedCount] = useState<number>(0)

  const onClick = () => {
    setClickedCount(clickedCount + 1)
  }

  return (
    <div className="App">
      <div style={ {display: 'flex', flexDirection: 'column', gap: '1rem'} }>
        <wc-button
          html-type="button"
          disabled={false}
          loading={false}
          theme="primary"
          size="base"
          block={true}
          onClick={onClick}
        >Click Me!</wc-button>
        <p>clicked count: { clickedCount }</p>
      </div>
    </div>
  );
}

export default App;
