// @ts-check
import LinearProgress from "@material-ui/core/LinearProgress";
import Paper from "@material-ui/core/Paper";
import { DataGrid, GridOverlay } from "@material-ui/data-grid";
import PropTypes from "prop-types";
import React from "react";

function CustomLoadingOverlay() {
  return (
    <GridOverlay>
      <div style={{ position: "absolute", top: 0, width: "100%" }}>
        <LinearProgress />
      </div>
    </GridOverlay>
  );
}

/** @type {import('@material-ui/data-grid').GridColDef[]} */
const columns = [
  { field: "name", headerName: "Name", width: 150 },
  { field: "symbol", headerName: "Symbol", width: 150 },
  { field: "base", headerName: "Code", width: 150 },
  { field: "value", headerName: "value", width: 150 },
];

/**
 *
 * @param {{
 *    loading: boolean
 *    rows: import('../../../../core/model/rate').RateTableRow []
 * }} props
 * @returns {JSX.Element}
 */
function Index({ rows = [], loading = false }) {
  return (
    <Paper>
      <div style={{ height: "70vh" }}>
        <DataGrid
          columns={columns}
          rows={rows}
          loading={loading}
          autoPageSize
          components={{
            LoadingOverlay: CustomLoadingOverlay,
          }}
          pagination
          pageSize={5}
        />
      </div>
    </Paper>
  );
}

Index.propTypes = {
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      symbol: PropTypes.string,
      base: PropTypes.string,
      value: PropTypes.number,
    })
  ),
  loading: PropTypes.bool,
};

export default Index;
