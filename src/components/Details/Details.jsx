import React, { useMemo } from "react";
import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";

import useTransactions from "../../hooks/useTransactions";

import { Doughnut } from "react-chartjs-2";

import useStyles from "./styles";

const Details = ({ title }) => {
  const classes = useStyles();
  const { total, chartData } = useTransactions(title);
  console.log("RENDERING DETAILS");
  const detailChart = useMemo(() => {
    return (
      <Card style={{maxHeight: '800px', maxWidth: '600px'}} className={title === "Income" ? classes.income : classes.expense}>
        <CardHeader title={title} />
         <CardContent>
          <Typography variant="h5">${total}</Typography>
          {total >0 ? <Doughnut data={chartData} /> : <Typography variant="h5">No Transactions</Typography>}
        </CardContent> 
      </Card>
    );
  }, [total]);
  return <div>{detailChart}</div>;
};

export default Details;
