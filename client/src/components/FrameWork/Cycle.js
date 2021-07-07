import React, { Fragment, useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import { FrameworkContext } from "../../context/FrameworkProvider";

import {
  Typography,
  Card,
  CardActions,
  CardContent,
  Grid,
  Button,
  Container,
  CircularProgress,
} from "@material-ui/core";

const Cycles = ({ classes, user }) => {
  const { cycle, cycleload, getCycle } = useContext(FrameworkContext);

  useEffect(() => {
    getCycle();
  }, [getCycle, cycleload]);

  const curlist = cycle.filter((item) => item.status === "A");
  const prevlist = cycle.filter((item) => item.status !== "A");

  return (
    <Fragment>
      {cycleload ? (
        <CircularProgress />
      ) : (
        <Fragment>
          <Container maxWidth="md">
            <Typography
              variant="h2"
              align="left"
              color="textPrimary"
              gutterBottom
            >
              Performance Period
            </Typography>
          </Container>
          <Container className={classes.cardGrid} maxWidth="md">
            <Typography
              variant="h5"
              align="left"
              color="textPrimary"
              gutterBottom
            >
              Current Period
            </Typography>
            <Grid container spacing={4}>
              {curlist.map((item, index) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5">
                        {item.cycle_cd}
                      </Typography>
                      <Typography>{item.descr}</Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="large" color="primary">
                        <Link
                          to={{
                            pathname: `/pillar`,
                          }}
                        >
                          Select
                        </Link>
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
          <Container className={classes.cardGrid} maxWidth="md">
            <Typography
              variant="h5"
              align="left"
              color="textSecondary"
              gutterBottom
            >
              Past Period
            </Typography>
            <Grid container spacing={4}>
              {prevlist.map((item, index) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>
                      <Typography
                        gutterBottom
                        variant="h5"
                        color="textSecondary"
                      >
                        {item.cycle_cd}
                      </Typography>
                      <Typography variant="h6" color="textSecondary">
                        {item.descr}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="large" color="primary">
                        View
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Fragment>
      )}
    </Fragment>
  );
};

Cycles.propTypes = {};

export default Cycles;
