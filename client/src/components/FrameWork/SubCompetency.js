import React, { Fragment, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { FrameworkContext } from "../../context/FrameworkProvider";

import NavBar from "../Common/NavBar";
import Footer from "../Common/Footer";
import EmpAssessment from "./EmpAssessment";

import {
  CssBaseline,
  Toolbar,
  AppBar,
  Typography,
  Tab,
  Tabs,
  Button,
  Container,
  Box,
  CircularProgress,
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
          <Typography component={"span"}>{children}</Typography>
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
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const SubCompetency = (props) => {
  const classes = useStyles();

  const {
    subcompetency,
    subcompetencyload,
    getSubCompetency,
    cycleperiod,
    getCyclePeriod,
  } = useContext(FrameworkContext);

  const pillarCdStorage = localStorage.getItem("pillar_cd");
  const pillar_cd = JSON.parse(pillarCdStorage);

  const pillarStorage = localStorage.getItem("pillar");
  const pillar = JSON.parse(pillarStorage);

  const userStorage = localStorage.getItem("user");
  const user = JSON.parse(userStorage);

  const competency_cd = props.match.params.id;

  useEffect(() => {
    getSubCompetency(competency_cd);
  }, []);

  useEffect(() => {
    getCyclePeriod(pillar.business_unit, pillar.cycle_cd);
  }, []);

  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Fragment>
      {subcompetencyload || subcompetency === null ? (
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
                  <Tab
                    key={index}
                    label={item.descr}
                    {...a11yProps(0)}
                    // onClick={(e) => console.log("JK")}
                  />
                ))}
              </Tabs>
              {subcompetency.map((item, index) => (
                <TabPanel key={index} value={value} index={index}>
                  <EmpAssessment
                    useremail={user.email}
                    cycleperiod={cycleperiod}
                    item={item}
                    classes={classes}
                  />
                </TabPanel>
              ))}
              <Container maxWidth="md">
                <Button variant="outlined" size="large" color="secondary">
                  <Link
                    to={{
                      pathname: "/competency/" + pillar_cd,
                    }}
                  >
                    Back
                  </Link>
                </Button>
              </Container>
              <Footer Typography={Typography} classes={classes} />
            </Container>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

SubCompetency.propTypes = {};

export default SubCompetency;
