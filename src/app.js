import React, { useState, useEffect } from "react";
import {
  Container,
  AppBar,
  Typography,
  Grow,
  Grid,
  Button,
} from "@material-ui/core";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch } from "react-redux";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Quality, Quantity, Rate, EmployeName } from "./data/data";

import { getPosts } from "./action/index";
import useStyles from "./styles";
import { PdfDocument } from "./pdfviewr/pdfViewr";
import { Axios } from "axios";
export const API_KEY = "c0ae854ba8255b07b83c94d52ed26ea4";


const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const [employeName, setEmployName] = React.useState("");
  const [quality, setQuality] = React.useState("");
  const [quantity, setQuantity] = React.useState("");
  const [rate, setRate] = React.useState("");
  const [damage, setDamage] = React.useState(0);
  const [movieDetails, setDetails] = useState([]);
  const [year, setYear] = useState("");
  const [show, setHide] = useState(false);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  const handleChange = (event) => {
    setEmployName(event.target.value);
  };
  const handleChange1 = (event) => {
    setQuality(event.target.value);
  };
  const handleChange2 = (event) => {
    setQuantity(event.target.value);
  };
  const handleChange3 = (event) => {
    setRate(event.target.value);
  };
  const handleChange4 = (event) => {
    setDamage(event.target.value);
  };
  const submitFormData = () => {
    let total = 0;
    total = quantity * rate;
    total = total - damage;
    console.log("employeName", total);
  };

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          KK Brothers
        </Typography>
      </AppBar>

      <Grow in>
        <Container>
          <Grid container alignItems="stretch" spacing={3}>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  EmployeName
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={employeName}
                  label="employeName"
                  onChange={handleChange}
                >
                  <MenuItem value="Ajher">Ajher Shekeh </MenuItem>
                  <MenuItem value="Raman">Raman ALoke</MenuItem>
                  <MenuItem value="Ashoke">Ashoke Tayde</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Quality</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={quality}
                  label="quality"
                  onChange={handleChange1}
                >
                  <MenuItem value={1}>{"(50*60/40*39)*22"}</MenuItem>
                  <MenuItem value={2}>{"(50*60/40*39)*22"}</MenuItem>
                  <MenuItem value={3}>{"(50*60/40*39)*22"}</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Quantity</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={quantity}
                  label="Quantity"
                  onChange={handleChange2}
                >
                  <MenuItem value={12}>12</MenuItem>
                  <MenuItem value={25}>25</MenuItem>
                  <MenuItem value={40}>40</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Rate</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={rate}
                  label="Rate"
                  onChange={handleChange3}
                >
                  <MenuItem value={30}>30</MenuItem>
                  <MenuItem value={50}>50</MenuItem>
                  <MenuItem value={12}>12</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Damage</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={damage}
                  label="Damage"
                  onChange={handleChange4}
                >
                  <MenuItem value={100}>100</MenuItem>
                  <MenuItem value={300}>300</MenuItem>
                  <MenuItem value={500}>500</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <div className="flex justify-between " >
            <Button
              className="bg-dark text-light mt-4"
              onClick={submitFormData}
            >
              Click
            </Button>
            <Button
              className="bg-dark text-light mt-4 ml-4"
              onClick={submitFormData}
            >

        <PDFDownloadLink
          document={<PdfDocument data={movieDetails} />}
          fileName="movielist.pdf"
          style={{
            textDecoration: "none",
            padding: "10px",
            color: "#4a4a4a",
            backgroundColor: "#f2f2f2",
            border: "1px solid #4a4a4a"
          }}
        >
          {({ blob, url, loading, error }) =>
            loading ? "Loading document..." : "Download Pdf"
          }

        </PDFDownloadLink>
            </Button>
          </div>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;


