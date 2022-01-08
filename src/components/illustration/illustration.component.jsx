import React, { useState } from "react";
import "./illustration.styles.css";
import Button from "@mui/material/Button";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import {
  TextField,
  MenuItem,
  Checkbox,
  FormControlLabel,
  FormGroup,
  IconButton,
} from "@mui/material";

// import fetchURL from "../../api/process";
// import SampleImg from "../../assets/home/home-illustration.jpg";

function Illustration() {
  //   const [image, setImage] = useState(Illustration);
  const [inputURL, setInputURL] = useState("");
  const [tested, setTested] = useState(false);
  const [trial, setTrial] = useState(0);
  const [random, setRandom] = useState(false);
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [rot, setRotation] = useState("");
  const [quality, setQuality] = useState("");
  const [format, setFormat] = useState("jpeg");
  const formatOptions = [
    {
      value: "jpeg",
      label: "jpeg",
    },
    {
      value: "png",
      label: "png",
    },
    {
      value: "bmp",
      label: "bmp",
    },
  ];
  const handleChange = (event) => {
    setFormat(event.target.value);
  };
  console.log(inputURL);
  const [invalidURL, setInvalidURL] = useState({});
  //   const [image, setImage] = useState(
  //     "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fwallpaper%2F&psig=AOvVaw11ccCX6Hksbj41t7OIybcW&ust=1641730687735000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIinicWRovUCFQAAAAAdAAAAABAD"
  //   );
  const [outputURL, setOutputURL] = useState(
    "https://media.istockphoto.com/photos/hot-air-balloons-with-landscape-mountain-picture-id1141810286?k=20&m=1141810286&s=612x612&w=0&h=LjwaFPtDGSrM10tVKqQ20F2i4Lx6VLsaYUqMeLXvwj0="
  );
  const handleURL = (e) => {
    const { value } = e.target;
    invalidURL.status = false;
    invalidURL.helper = "";
    setInvalidURL({ ...invalidURL });
    setInputURL(value);
    console.log(value);
  };
  const handleWidth = (e) => {
    const { value } = e.target;
    setWidth(value);
  };
  const handleHeight = (e) => {
    const { value } = e.target;
    setHeight(value);
  };
  const handleRotation = (e) => {
    const { value } = e.target;
    setRotation(value);
  };

  const handleQuality = (e) => {
    const { value } = e.target;
    setQuality(value);
  };
  const validate = () => {
    if (!inputURL && !random) {
      invalidURL.status = true;
      invalidURL.helper = "Enter URL";
      setInvalidURL({ ...invalidURL });
    }
    console.log(
      `${process.env.REACT_APP_BACKEND_URL}/?img=${inputURL}&w=${width}&h=${height}&rot=${rot}&f=${format}&q=${quality}`
    );
    return true;
  };
  const handleSubmit = () => {
    if (validate()) {
      setTested(true);
    }
    setOutputURL(
      `${process.env.REACT_APP_BACKEND_URL}/?img=${inputURL}&w=${width}&h=${height}&rot=${rot}&f=${format}&q=${quality}`
    );
    setTrial(trial + 1);
  };
  const handleRandom = () => {
    setRandom(!random);
    if (!random) {
      invalidURL.status = false;
      invalidURL.helper = "";
      setInvalidURL({ ...invalidURL });
    }
  };
  // eslint-disable-next-line react/no-unstable-nested-components
  function OutputContainer() {
    return (
      <div className="output">
        <div className="output-link">{outputURL}</div>
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="span"
          className="copy-btn"
          onClick={() => {
            navigator.clipboard.writeText(outputURL);
          }}
        >
          <ContentCopyIcon />
        </IconButton>
      </div>
    );
  }
  return (
    <div className="illustration">
      <img
        src={outputURL}
        alt=""
        className="illustration-left illustration-img"
      />
      <div className="illustration-right">
        <div className="illustration-heading">
          Fasten your dev process! <InsertLinkIcon color="black" />
        </div>
        <div className="illustration-subtext">
          Paste an image URL and customize it to your needs. We will generate a
          URL back that you can use in your projects.
        </div>
        <div className="dashboard">
          <TextField
            id="outlined-basic"
            label="Enter image URL"
            className="dashboard-option input-url"
            variant="outlined"
            required
            value={inputURL}
            onChange={handleURL}
            disabled={random}
          />
          <FormGroup>
            <FormControlLabel
              control={<Checkbox />}
              label="Random"
              checked={random}
              onChange={handleRandom}
            />
          </FormGroup>

          <div className="dashboard-row">
            <TextField
              id="outlined-basic"
              label="Width"
              className="dashboard-option"
              variant="outlined"
              value={width}
              onChange={handleWidth}
            />
            <TextField
              id="outlined-basic"
              label="Height"
              className="dashboard-option"
              variant="outlined"
              value={height}
              onChange={handleHeight}
            />
          </div>
          <TextField
            id="outlined-basic"
            label="Rotation"
            variant="outlined"
            className="dashboard-option"
            value={rot}
            onChange={handleRotation}
          />
          <TextField
            id="outlined-select-format"
            className="dashboard-option"
            select
            label="Select"
            value={format}
            onChange={handleChange}
          >
            {formatOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            id="outlined-basic"
            label="Quality"
            variant="outlined"
            value={quality}
            onChange={handleQuality}
            className="dashboard-option"
          />

          <Button
            variant="contained"
            className="illustration-submit"
            onClick={handleSubmit}
          >
            Generate
          </Button>
          <div className="output-container">
            {!tested ? "" : OutputContainer()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Illustration;
