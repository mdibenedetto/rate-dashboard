// @ts-check
import {
  Grid,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { MoneyOffOutlined as MoneyIcon } from "@material-ui/icons";
import React, { useContext, useState } from "react";

import { SearchButton, SnackBarMessage } from "../../core/components";
import { GlobalContext } from "../../core/context";
import {
  clearTableAction,
  closeSnackbarAction,
  getRateAction,
} from "../../core/store";
import { getTodayDate } from "../../core/utils";
import RateFilter from "./components/RateFilter";
import RateTable from "./components/RateTable";

/**
 * @typedef {import('../../core/model/rate-codes').rateCodes} rateCodes
 */
const useStyles = makeStyles(theme => ({
  root: {
    "flexGrow": 1,
    "& > *": {
      margin: theme.spacing(1),
    },
    "width": "700px",
  },
}));

function Index() {
  const classes = useStyles();
  const { state, dispatch } = useContext(GlobalContext);

  const [baseRate, setBaseRate] =
    /**
     * @type {[keyof rateCodes, (base: keyof rateCodes) => void]}
     */ useState("EUR");
  const [dateRate, setDateRate] = useState(getTodayDate());
  const searchRate = () => {
    dispatch(clearTableAction());
    dispatch(getRateAction(baseRate, dateRate));
  };

  const [tableView, setTableView] = useState([]);

  const filterTable = (value = "") => {
    if (!state?.tableRate) return;
    if (!value) setTableView([]);

    const newTable = state?.tableRate.filter(row => row.name.includes(value));
    setTableView(newTable);
  };

  return (
    <div className={classes.root}>
      {state?.feedback && (
        <SnackBarMessage
          open={!!state.feedback}
          severity={state?.feedback?.severity}
          message={state?.feedback?.message}
          autoHideDuration={state?.feedback?.autoHideDuration}
          onClose={() => dispatch(closeSnackbarAction())}
        />
      )}

      <Typography component="h1" variant="h4" align="center">
        Rate Dashboard
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper>
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={9}>
                <RateFilter
                  defaultBase={baseRate}
                  defaultDate={dateRate}
                  onChangeBase={value => setBaseRate(value)}
                  onChangeDate={value => setDateRate(value)}
                />
              </Grid>
              <Grid item xs={3}>
                <SearchButton label="Load" onClick={searchRate} />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper>
            <TextField
              id="standard-basic"
              label=" Filter by Name"
              onChange={e => filterTable(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MoneyIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <RateTable
            rows={tableView.length > 0 ? tableView : state?.tableRate}
            loading={state?.loading}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default Index;
