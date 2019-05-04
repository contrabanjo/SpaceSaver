import React from "react";
import TableCell from '@material-ui/core/TableCell'


class Cell extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      booked: false
    }
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount(){
    this.setState({
      booked: this.props.booked,
      text: this.props.text
    })
  }

  onClick(){
    if (this.state.booked === false){
      let name = window.prompt('Please enter name for reservation: ')
      if (name){
        //post request to server
        this.setState({
          booked: true,
          text: name
        })
      }
    } else if (this.state.booked===true){
      let cancel = window.confirm('Cancel reservation?')
      if (cancel){
        //delete request to server

        this.setState({
          booked: false,
          text: 'available'
        })
      }
    } else {
      //do nothing
    }
  }

  render(){
    return <TableCell onClick={this.onClick} padding='none' align={this.props.align} style={{ background: this.state.booked ? '#92D177' : this.props.color}}>{this.state.text}</TableCell>;
  }
}

export default Cell;
