import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  StylesProvider,
} from "@material-ui/core";
import CountUp from "react-countup";
import cs from 'classnames'

import styles from "./Cards.module.css";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "loading";
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item component={Card} xs={12} md={3} className={cs(styles.card, styles.infected)}>
          <Typography color="textSecondary" gutterBottom>
            Infected
          </Typography>
          <Typography variant="h5">
            <CountUp start={0} end={confirmed.value} separator="," />
          </Typography>
          <Typography color="textSecondary">{new Date(lastUpdate).toDateString() }</Typography>
          <Typography variant="body2">
            Number of active cases of covid-19
          </Typography>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={cs(styles.card, styles.recovered)}>
          <Typography color="textSecondary" gutterBottom>
            Recovered
          </Typography>
          <Typography variant="h5">
            <CountUp start={0} end={recovered.value} separator="," />
          </Typography>
          <Typography color="textSecondary">{new Date(lastUpdate).toDateString() }</Typography>
          <Typography variant="body2">
            Number of recoveries from covid-19
          </Typography>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={cs(styles.card, styles.deaths)}>
          <Typography color="textSecondary" gutterBottom>
            Deaths
          </Typography>
          <Typography variant="h5">
            <CountUp start={0} end={deaths.value} separator="," />
          </Typography>
          <Typography color="textSecondary">{new Date(lastUpdate).toDateString() }</Typography>
          <Typography variant="body2">Number of deaths of covid-19</Typography>
        </Grid>{" "}
      </Grid>
    </div>
  );
};

export default Cards;
