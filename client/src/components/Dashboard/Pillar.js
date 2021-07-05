import React, { Fragment, useContext, useEffect } from "react";
import PropTypes from "prop-types";

import { FrameworkContext } from "../../context/FrameworkProvider";

import {
  Typography,
  Card,
  CardActions,
  CardContent,
  Grid,
  Button,
  Container,
} from "@material-ui/core";

const DashPillar = ({ classes }) => {
  const { pillar, pillarload, getUserPillar } = useContext(FrameworkContext);

  useEffect(() => {
    getUserPillar("jkobayashi@ataway.com");
  }, [pillarload]);

  return (
    <Fragment>
      <Container maxWidth="md">
        <Typography variant="h2" align="left" color="textPrimary" gutterBottom>
          Pillar
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
                  <Button size="small" color="primary">
                    Select
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Fragment>
  );
};

DashPillar.propTypes = {};

export default DashPillar;
