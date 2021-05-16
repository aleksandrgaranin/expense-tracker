import React, { useContext } from "react";
import {
  List as MUIList,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  ListItemSecondaryAction,
  IconButton,
  Slide,
} from "@material-ui/core";
import { Delete, MoneyOff } from "@material-ui/icons";

import { ExpenseTrackerContext } from "../../../context/context";

import useStyles from "./styles";

const List = () => {
  const classes = useStyles();
  const { deleteTransaction, transactions } = useContext(ExpenseTrackerContext);
  // console.log(deleteTransaction);

  // const transactions = [
  //   {
  //     id: 1,
  //     type: "Income",
  //     category: "Salary",
  //     amount: 50,
  //     date: "Sun May 16 2021",
  //   },
  //   {
  //     id: 2,
  //     type: "Expense",
  //     category: "Coffe",
  //     amount: 5,
  //     date: "Sun May 16 2021",
  //   },
  //   {
  //     id: 3,
  //     type: "Income",
  //     category: "Salary",
  //     amount: 150,
  //     date: "Sun May 16 2021",
  //   },
  // ];
  const deleteHandler = (trId) => {
    deleteTransaction(trId)
  }

  return (
    <MUIList dense={false} className={classes.list}>
      {transactions.map((transaction) => (
        <Slide
          direction="down"
          in
          mountOnEnter
          unmountOnExit
          key={transaction.id}
        >
          <ListItem>
            <ListItemAvatar>
              <Avatar
                className={
                  transaction.type === "Income"
                    ? classes.avatarIncome
                    : classes.avatarExpense
                }
              >
                <MoneyOff />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={transaction.category}
              secondary={`$${transaction.amount} - ${transaction.date}`}
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick={()=> deleteHandler(transaction.id)}>
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </Slide>
      ))}
    </MUIList>
  );
};

export default List;
