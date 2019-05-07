import React from 'react';
import ReactDOM from 'react-dom';

import moment from 'moment';

import Grid from '@material-ui/core/Grid'
import HourDisplay from './components/HourDisplay.jsx'
import RoomDisplay from './components/RoomDisplay.jsx'

const bookingsURL = 'http://localhost:3838/bookings'
const roomsURL = 'http://localhost:3838/rooms'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      bookings: [],
      rooms: []
    }
  }

  componentDidMount(){
    fetch(bookingsURL).then((res)=>{
      res.json().then((data)=>{
        this.setState({
          bookings: data
        })
      })
    })
    fetch(roomsURL).then((res)=>{
      res.json().then((data)=>{
        this.setState({
          rooms: data
        })
      })
    })
  }

  generateRooms(){
    return this.state.rooms.map( (room)=>{
      let roomBookings = [];
      this.state.bookings.forEach((booking)=>{
        if (booking.room === room.name){
          roomBookings.push(booking);
        }
      })
      return <Grid item={true}> <RoomDisplay startTime={moment(room.openHours.start)} duration={8*4} currentBookings={roomBookings} roomName={room.name}/> </Grid>
    })
  }
  render(){
    return (
        <Grid container={true}>
          <Grid item={true}><HourDisplay startTime={moment({hours: 10})} duration={8*4}/></Grid>
          {this.generateRooms()}
        </Grid>
    )
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App/>, rootElement)