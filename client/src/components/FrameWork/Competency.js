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
} from "@material-ui/core";

import useStyles from "../../styles";

const Competency = (props) => {
  const classes = useStyles();

  const { competency, competencyload, getCompetency } =
    useContext(FrameworkContext);

  const userStorage = localStorage.getItem("user");
  const user = JSON.parse(userStorage);

  const pillar_cd = props.match.params.id;

  useEffect(() => {
    getCompetency(pillar_cd);
  }, [getCompetency, competencyload, pillar_cd]);

  return (
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
              Competency
            </Typography>
          </Container>
          <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
              {competency.map((item, index) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5">
                        {item.descr}
                      </Typography>
                      {/* <Typography>{item.comment}</Typography> */}
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="primary">
                        <Link
                          to={{
                            pathname: `/subcompetency/${item.competency_cd}`,
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
            <Button size="small" color="secondary">
              <Link to="/pillar">Back</Link>
            </Button>
          </Container>
        </div>
      </main>
      <Footer Typography={Typography} classes={classes} />
    </Fragment>
  );
};

Competency.propTypes = {};

export default Competency;
