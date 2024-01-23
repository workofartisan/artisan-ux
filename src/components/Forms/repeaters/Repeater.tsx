import React from "react";
import {RepeaterProps} from "./Repeater.types";
import Grid from "@mui/material/Unstable_Grid2";
import RepeaterUnit from "./RepeaterUnit";
import {Button} from "@mui/material";

function Repeater<T>(props: RepeaterProps<T>) {
  const {
    id,
    values,
      blankValue,
      onValuesChange,
      fields
  } = props;

  const onValueChange = (changedIndex: number, newValue: T) => {
    const newValues = values.map((value, index) => {
      return index === changedIndex ? newValue : value;
    })

    onValuesChange(newValues);
  }

  const onBlankValueAdd = () => {
    const newValues = [...values, {...blankValue}];
    onValuesChange(newValues);
  }

  return (
    <Grid container spacing={4}>
      {
        values.map((value, index) => {
          console.log(`${id}_${index}`);

          return (
            <Grid xs={12} key={`${id}_${index}`}>
              <RepeaterUnit
                  index={index}
                  value={value}
                  onChange={onValueChange}
                  fields={fields}
              />
            </Grid>
          )
        })
      }

      <Grid xs={12}>
        <Button
          fullWidth={true}
          color={"primary"}
          variant={"contained"}
          onClick={onBlankValueAdd}
          disableElevation={true}
        >
          Add
        </Button>
      </Grid>
    </Grid>
  )
}

export default Repeater;