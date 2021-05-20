import React, { useRef, useEffect } from "react";
import { Grid } from "@material-ui/core";
import {
  PushToTalkButton,
  PushToTalkButtonContainer,
} from "@speechly/react-ui";
import { SpeechState, useSpeechContext } from "@speechly/react-client";

import Details from "./components/Details/Details";
import Main from "./components/Main/Main";
import useStyles from "./styles";

const App = () => {
  const classes = useStyles();
  const { speechState } = useSpeechContext();
  const main = useRef(null);

  const executeScroll = () => {
    main.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (speechState === SpeechState.Recording) {
      executeScroll();
    }
  }, [speechState]);

  return (
    <div>
      <Grid
        className={classes.grid}
        container
        spacing={0}
        alignItems="center"
        justify="center"
        style={{ height: "100vh", textAlign: "center" }}
      >
        <Grid
          style={{ width:'auto', maxWidth: "600px" }}
          item
          xs={12}
          sm={4}
          className={classes.mobile}
        >
          <Details title="Income" />
        </Grid>
        <Grid
          justify="center"
          item
          xs={12}
          sm={3}
          ms={4}
          ref={main}
          className={classes.main}
        >
          <Main />
        </Grid>
        <Grid
          style={{ width:'auto', maxWidth: "600px" }}
          item
          xs={12}
          sm={4}
          className={classes.desktop}
        >
          <Details title="Income" />
        </Grid>
        <Grid
          style={{ width:'auto', maxWidth: "600px" }}
          justify="center"
          item
          xs={12}
          sm={4}
          className={classes.last}
        >
          <Details title="Expense" />
        </Grid>
      </Grid>
      <PushToTalkButtonContainer>
        <PushToTalkButton />
      </PushToTalkButtonContainer>
    </div>
  );
};

export default App;
