// @ts-check
import {
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

import { rateCodesList } from "../../../../core/model";

/**
 *
 * @param {{
 * defaultBase: string
 * defaultDate: string
 * onChangeDate: (_) => void
 * onChangeBase: (_) => void
 * }} props
 * @returns {JSX.Element}
 */
function Index({
  defaultBase,
  defaultDate,
  onChangeDate = _ => null,
  onChangeBase = _ => null,
}) {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={6}>
        <InputLabel id="base-rate-label">Base Rate</InputLabel>
        <Select
          labelId="base-rate-label"
          id="base-rate-select"
          label="Base Rate"
          fullWidth
          required
          value={defaultBase}
          onChange={e => onChangeBase(String(e.target.value))}
        >
          {rateCodesList.map(code => (
            <MenuItem key={code} value={code}>
              {code}
            </MenuItem>
          ))}
        </Select>
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <TextField
          id="date"
          label="Date Rate"
          type="date"
          fullWidth
          required
          defaultValue={defaultDate}
          onChange={e => onChangeDate(String(e.target.value))}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
    </Grid>
  );
}

Index.propTypes = {
  defaultBase: PropTypes.string,
  defaultDate: PropTypes.string,
  onChangeDate: PropTypes.func,
  onChangeBase: PropTypes.func,
};

export default Index;
