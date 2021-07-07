import React, { Fragment, useContext, useState, useEffect } from "react";

import { FrameworkContext } from "../../context/FrameworkProvider";

import {
  Typography,
  Grid,
  Container,
  TextField,
  Paper,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Button,
  CircularProgress,
  Snackbar,
} from "@material-ui/core";

import MuiAlert from "@material-ui/lab/Alert";

const EmpAssessment = ({
  useremail,
  cycleperiod,
  item: { framework_id, descr },
  classes,
}) => {
  const {
    empdata,
    empdataload,
    clrAssessment,
    getEmpAssessment,
    modEmpAssessment,
  } = useContext(FrameworkContext);

  const initialState = {
    email: useremail,
    framework_id: framework_id,
    pr_rating1: " ",
    pr_comment1: " ",
    pr_rating2: " ",
    pr_comment2: " ",
    pr_rating3: " ",
    pr_comment3: " ",
    ap_rating: " ",
    ap_comment: " ",
  };

  const [formData, setFormData] = useState(initialState);

  const {
    pr_rating1,
    pr_comment1,
    pr_rating2,
    pr_comment2,
    pr_rating3,
    pr_comment3,
    ap_rating,
    ap_comment,
  } = formData;

  useEffect(() => {
    clrAssessment();
    console.log("clear " + framework_id);
  }, []);

  useEffect(() => {
    console.log("load " + framework_id);
    // console.log(empdata);
    getEmpAssessment(useremail, framework_id);
    if (empdata.length > 0) {
      setFormData(empdata[0]);
    } else {
      setFormData(initialState);
    }
  }, [empdataload]);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    setOpen(true);
    modEmpAssessment(formData);
  };

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Fragment>
      {empdataload || empdata === null ? (
        <CircularProgress />
      ) : (
        <Fragment>
          <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
              Changes Saved!
            </Alert>
          </Snackbar>

          <form onSubmit={onSubmit}>
            <Container maxWidth="md" className={classes.container}>
              <div className={classes.root}>
                <Grid container spacing={3}>
                  <Grid item sm={10}>
                    <Paper className={classes.paper}>
                      <Typography
                        variant="h5"
                        align="center"
                        color="textPrimary"
                        gutterBottom
                      >
                        {descr}
                      </Typography>
                    </Paper>
                  </Grid>
                  <Grid item sm={2}>
                    <Paper className={classes.paper}>
                      <Container className={classes.centerBox} maxWidth="md">
                        <Button
                          onClick={(e) => onSubmit(e)}
                          variant="contained"
                          color="primary"
                        >
                          Save
                        </Button>
                      </Container>
                    </Paper>
                  </Grid>
                  <Grid item sm={12}>
                    <Paper className={classes.paper}>
                      <div>
                        <Typography
                          variant="h6"
                          align="left"
                          color="textPrimary"
                          gutterBottom
                        >
                          Initial Review
                        </Typography>
                      </div>
                      <Grid container spacing={1}>
                        <Grid item sm={3}>
                          <FormControl
                            variant="outlined"
                            className={classes.formControl}
                          >
                            <InputLabel id="demo-simple-select-outlined-label">
                              Level
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-outlined-label"
                              id="demo-simple-select-outlined"
                              name="pr_rating1"
                              value={pr_rating1}
                              onChange={(e) => onChange(e)}
                              label="Level"
                            >
                              <MenuItem value=" ">
                                <em>Please select</em>
                              </MenuItem>
                              <MenuItem value="A">Not Developed</MenuItem>
                              <MenuItem value="B">Under Developed</MenuItem>
                              <MenuItem value="C">Developed</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item sm={9}>
                          <TextField
                            id="outlined-multiline-static"
                            label="Comments"
                            name="pr_comment1"
                            value={pr_comment1}
                            onChange={(e) => onChange(e)}
                            multiline
                            fullWidth
                            rows={3}
                            variant="outlined"
                          />
                        </Grid>
                      </Grid>
                    </Paper>
                  </Grid>

                  <Grid item sm={12}>
                    <Paper className={classes.paper}>
                      <div>
                        <Typography
                          variant="h6"
                          align="left"
                          color="textPrimary"
                          gutterBottom
                        >
                          MidYear Review
                        </Typography>
                      </div>
                      <Grid container spacing={1}>
                        <Grid item sm={3}>
                          <FormControl
                            variant="outlined"
                            className={classes.formControl}
                          >
                            <InputLabel id="demo-simple-select-outlined-label">
                              Level
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-outlined-label"
                              id="demo-simple-select-outlined"
                              name="pr_rating2"
                              value={pr_rating2}
                              onChange={(e) => onChange(e)}
                              label="Level"
                            >
                              <MenuItem value=" ">
                                <em>Please select</em>
                              </MenuItem>
                              <MenuItem value="A">Not Developed</MenuItem>
                              <MenuItem value="B">Under Developed</MenuItem>
                              <MenuItem value="C">Developed</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item sm={9}>
                          <TextField
                            id="outlined-multiline-static"
                            label="Comments"
                            name="pr_comment2"
                            value={pr_comment2}
                            onChange={(e) => onChange(e)}
                            multiline
                            fullWidth
                            rows={3}
                            variant="outlined"
                          />
                        </Grid>
                      </Grid>
                    </Paper>
                  </Grid>

                  <Grid item sm={12}>
                    <Paper className={classes.paper}>
                      <div>
                        <Typography
                          variant="h6"
                          align="left"
                          color="textPrimary"
                          gutterBottom
                        >
                          YearEnd Review
                        </Typography>
                      </div>
                      <Grid container spacing={1}>
                        <Grid item sm={3}>
                          <FormControl
                            variant="outlined"
                            className={classes.formControl}
                          >
                            <InputLabel id="demo-simple-select-outlined-label">
                              Level
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-outlined-label"
                              id="demo-simple-select-outlined"
                              name="pr_rating3"
                              value={pr_rating3}
                              onChange={(e) => onChange(e)}
                              label="Level"
                            >
                              <MenuItem value=" ">
                                <em>Please select</em>
                              </MenuItem>
                              <MenuItem value="A">Not Developed</MenuItem>
                              <MenuItem value="B">Under Developed</MenuItem>
                              <MenuItem value="C">Developed</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item sm={9}>
                          <TextField
                            id="outlined-multiline-static"
                            label="Comments"
                            name="pr_comment3"
                            value={pr_comment3}
                            onChange={(e) => onChange(e)}
                            multiline
                            fullWidth
                            rows={3}
                            variant="outlined"
                          />
                        </Grid>
                      </Grid>
                    </Paper>
                  </Grid>

                  <Grid item sm={12}>
                    <Paper className={classes.paper}>
                      <div>
                        <Typography
                          variant="h6"
                          align="left"
                          color="textPrimary"
                          gutterBottom
                        >
                          Final Appraiser Review
                        </Typography>
                      </div>
                      <Grid container spacing={1}>
                        <Grid item sm={3}>
                          <FormControl
                            variant="outlined"
                            className={classes.formControl}
                          >
                            <InputLabel id="demo-simple-select-outlined-label">
                              Level
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-outlined-label"
                              id="demo-simple-select-outlined"
                              name="ap_rating"
                              value={ap_rating}
                              onChange={(e) => onChange(e)}
                              label="Level"
                            >
                              <MenuItem value=" ">
                                <em>Please select</em>
                              </MenuItem>
                              <MenuItem value="A">Not Developed</MenuItem>
                              <MenuItem value="B">Under Developed</MenuItem>
                              <MenuItem value="C">Developed</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item sm={9}>
                          <TextField
                            id="outlined-multiline-static"
                            label="Comments"
                            name="ap_comment"
                            value={ap_comment}
                            onChange={(e) => onChange(e)}
                            multiline
                            fullWidth
                            rows={5}
                            variant="outlined"
                          />
                        </Grid>
                      </Grid>
                    </Paper>
                  </Grid>
                </Grid>
              </div>
              {/* <Container className={classes.cardGrid} maxWidth="md">
                <pre>{JSON.stringify(formData, null, 2)}</pre> 
                <Button
                  type="submit"
                  variant="contained"
                  align="right"
                  color="primary"
                >
                  Save
                </Button>
              </Container> */}
            </Container>
          </form>
        </Fragment>
      )}
    </Fragment>
  );
};

EmpAssessment.propTypes = {};

export default EmpAssessment;
