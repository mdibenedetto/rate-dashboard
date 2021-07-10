// @ts-check
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import PropTypes from "prop-types";
import React from "react";

/**
 * @param {{
 *  message: string;
 *  severity: import('@material-ui/lab/Alert').Color | string;
 *  open: boolean;
 *  autoHideDuration?: number | null;
 *  onClose: () => void;
 * }} props
 * @returns {JSX.Element}
 */
function Index({ message, severity, open, autoHideDuration = 6000, onClose }) {
  return (
    <Snackbar open={open} autoHideDuration={autoHideDuration} onClose={onClose}>
      <MuiAlert
        // @ts-ignore
        severity={/** @type{Color} */ severity}
        elevation={6}
        variant="filled"
        onClose={onClose}
      >
        {message}
      </MuiAlert>
    </Snackbar>
  );
}

Index.propTypes = {
  message: PropTypes.string,
  severity: PropTypes.oneOf(["success", "info", "warning", "error"]),
  open: PropTypes.bool,
  autoHideDuration: PropTypes.number,
  onClose: PropTypes.func,
};

export default Index;
