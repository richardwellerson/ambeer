import React, { useContext } from "react";
import { Box } from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  KeyboardTimePicker,
} from "@material-ui/pickers";
import Ambeer from "../../context";

import "./tex.css";

const PikersDate = () => {
  const { selectDate, setSelectDate } = useContext(Ambeer);
  return (
    <>
      <Box className="calendario">
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="dd/MM/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Selecione a data"
            value={selectDate}
            onChange={setSelectDate}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
          <KeyboardTimePicker
            margin="normal"
            id="time-picker"
            label="Selecione o horário"
            value={selectDate}
            onChange={setSelectDate}
            KeyboardButtonProps={{
              "aria-label": "change time",
            }}
          />
        </MuiPickersUtilsProvider>
      </Box>
    </>
  );
};

export default PikersDate;
