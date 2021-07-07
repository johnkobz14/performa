import React, { Fragment, useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import { FrameworkContext } from "../../context/FrameworkProvider";

import NavBar from "../Common/NavBar";
import Footer from "../Common/Footer";

import {
  CssBaseline,
  Toolbar,
  AppBar,
  Typography,
  Card,
  CardActions,
  CardContent,
  Grid,
  Button,
  Container,
  CircularProgress,
} from "@material-ui/core";

import useStyles from "../../styles";

const Pillar = (props) => {
  const classes = useStyles();

  const { pillar, pillarload, getPillar } = useContext(FrameworkContext);

  const userStorage = localStorage.getItem("user");
  const user = JSON.parse(userStorage);

  useEffect(() => {
    getPillar();
    localStorage.setItem("pillar", JSON.stringify(pillar[0]));
  }, [getPillar, pillarload]);

  return (
    <Fragment>
      {pillarload || pillar === null ? (
        <CircularProgress />
      ) : (
        <Fragment>
          <CssBaseline />
          <NavBar
            AppBar={AppBar}
            Typography={Typography}
            Toolbar={Toolbar}
            classes={classes}
            user={user}
          />
          <main>
            <div className={classes.container}>
              <Container maxWidth="md">
                <Typography
                  variant="h2"
                  align="left"
                  color="textPrimary"
                  gutterBottom
                >
                  Pillars
                </Typography>
              </Container>
              <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={4}>
                  {pillar.map((item, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4}>
                      <Card className={classes.card}>
                        <CardContent className={classes.cardContent}>
                          <Typography gutterBottom variant="h5">
                            {item.descr}
                          </Typography>
                          <Typography>{item.comment}</Typography>
                        </CardContent>
                        <CardActions>
                          <Button
                            onClick={(e) => {
                              localStorage.setItem(
                                "pillar_cd",
                                JSON.stringify(item.pillar_cd)
                              );
                            }}
                            size="large"
                            color="primary"
                          >
                            <Link
                              to={{
                                pathname: `/competency/${item.pillar_cd}`,
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
              <Container maxWidth="md">
                <Button variant="outlined" size="large" color="secondary">
                  <Link to="/dashboard">Back</Link>
                </Button>
              </Container>
            </div>
          </main>
          <Footer Typography={Typography} classes={classes} />
        </Fragment>
      )}
    </Fragment>
  );
};

Pillar.propTypes = {};

export default Pillar;
