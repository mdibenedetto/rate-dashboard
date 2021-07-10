// @ts-check
import { Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import PropTypes from "prop-types";
import React from "react";

/**
 * @param {{
 *    label: string
 *    onClick: () =>  void
 * }} props
 * @returns {JSX.Element}
 */
function Index({ onClick, label }) {
  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={<SearchIcon />}
      fullWidth
      onClick={onClick}
    >
      {label}
    </Button>
  );
}

Index.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
};

export default Index;
