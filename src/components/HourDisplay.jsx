import React from "react";
import Cell from "./Cell.jsx";
import moment from "moment";
import TableRow from "@material-ui/core/TableRow"

function HourDisplay(props) {
  let hours = [];

  let bgColor = '#66A182';
  hours.push([bgColor, ''])
  for (var i = 0; i <= props.duration; i++) {
    let hour = moment(props.startTime);
    hours.push([bgColor, hour.format("hh:mm A")]);
    props.startTime.add(1, "hour");
  }

  return (
       <TableRow>
        {hours.map(item => {
          return <Cell color={item[0]} text={item[1]} align={'center'} booked={null} />;
        })}
      </TableRow>
  );
}

export default HourDisplay;