import React from 'react';
import ReactDOM from 'react-dom';

const fetchURL = 'http://localhost:3838/bookings'



class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      bookings: null
    }
  }
  componentDidMount(){
    console.log('mounted')
    fetch(fetchURL).then((res)=>{
      res.json().then((data)=>{
        console.log(data);
      })
    })
  }

  render(){
    return <div>{this.state.bookings}</div>
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App/>, rootElement)