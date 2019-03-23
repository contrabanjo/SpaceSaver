import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{

  render(){
    return <div>it's an app all right</div>
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App/>, rootElement)