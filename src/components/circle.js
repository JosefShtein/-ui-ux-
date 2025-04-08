import React from 'react';

class Circle extends React.Component {
  render() {
    const circleStyle = {
      width: '100px',
      height: '100px',
      borderRadius: '50%',
      backgroundColor: 'blue',
      display: 'inline-block',
    };

    return (
      <div style={circleStyle}></div>
    );
  }
}

class App extends React.Component {
  render() {
    const containerStyle = {
      width: '220px',
      textAlign: 'center',
    };

    return (
      <div style={containerStyle}>
        <Circle />
        <Circle />
      </div>
    );
  }
}

export default App;
