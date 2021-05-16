import React from "react";

import { Grid } from "@material-ui/core";
import Detals from "./components/Details/Details";
import useStyles from './styles'

const App = () => {
    const classes = useStyles()
  return (
    <div>
        <Grid className={classes.grid} container spacing={0} alignItems="center" justify="center" style={{ height: '100vh'}}>
            <Grid item xs={12} sm={4}>
                <Detals title='Income'/>
            </Grid>
            <Grid item xs={12} sm={4}>
                Main
            </Grid>
            <Grid item xs={12} sm={4}>
                <Detals title='Expense' />
            </Grid>
        </Grid>
    </div>
    );
};

export default App;
