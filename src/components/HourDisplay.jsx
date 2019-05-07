import React from "react";
import Cell from "./Cell.jsx";
import moment from "moment";
import Grid from "@material-ui/core/Grid"

function HourDisplay(props) {
  let hours = [];

  let bgColor = '#66A182';
  hours.push([bgColor, '--'])
  for (var i = 0; i <= props.duration; i++) {
    let hour = moment(props.startTime);
    hours.push([bgColor, hour.format("h:mm A")]);
    props.startTime.add(15, "minutes");
  }

  return (
       <Grid container={true} direction={'column'} alignContent={'flex-start'}>
        {hours.map(item => {
          return <Cell color={item[0]} text={item[1]} align={'center'} booked={null} />;
        })}
      </Grid>
  );
}

export default HourDisplay;