// @ts-check

import React from "react";

import { Link as MaterialLink, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

/**
 * @returns {JSX.Element}
 */
const Copyright = () => (
  <Typography variant='body2' color='textSecondary' align='center'>
    {"Copyright © "}
    <MaterialLink component={Link} to='/' color='inherit'>
      Your Website
    </MaterialLink>{" "}
    {new Date().getFullYear()}.
  </Typography>
);

export default Copyright;
