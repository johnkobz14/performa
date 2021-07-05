import React, { Fragment, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { FrameworkContext } from "../../context/FrameworkProvider";

import NavBar from "../Common/NavBar";
import Footer from "../Common/Footer";

// import SubCompPanel from "./SubCompPanel";

import {
  CssBaseline,
  Toolbar,
  AppBar,
  Typography,
  Tab,
  Tabs,
  makeStyles,
  Grid,
  Button,
  Container,
  Box,
} from "@material-ui/core";

import useStyles from "../../styles";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    key: index,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const SubCompetency = (props) => {
  //   const classes = useStyles();

  const { subcompetency, subcompetencyload, getSubCompetency } =
    useContext(FrameworkContext);

  const userStorage = localStorage.getItem("user");
  const user = JSON.parse(userStorage);

  const competency_cd = props.match.params.id;

  useEffect(() => {
    getSubCompetency(competency_cd);
  }, [getSubCompetency, subcompetencyload, competency_cd]);

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
              Sub Competency
            </Typography>
          </Container>
          <Container className={classes.cardGrid} maxWidth="md">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
            >
              {subcompetency.map((item, index) => (
                <Tab label={item.descr} {...a11yProps(index)} />
              ))}
            </Tabs>
            {subcompetency.map((item, index) => (
              <TabPanel value={value} index={index}>
                {item.subcomp_cd}
              </TabPanel>
            ))}
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

SubCompetency.propTypes = {};

export default SubCompetency;
