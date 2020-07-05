import React, { useContext } from "react";
import { Box } from "@material-ui/core";
import DateFnsUtils from '@date-io/date-fns';
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import Ambeer from '../../context';

import './tex.css';

const PikersDate = () => {
  const { setSelectDate } = useContext(Ambeer);
  return (
    <>
      <Box>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DateTimePicker onChange={setSelectDate}/>
        </MuiPickersUtilsProvider>
      </Box>
    </>
  );
};

export default PikersDate;
