import React, { useState } from "react";
import "./github.styles.css";
import Button from "@mui/material/Button";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import GitHubIcon from "@mui/icons-material/GitHub";
import {
  TextField,
  Checkbox,
  FormControlLabel,
  FormGroup,
  IconButton,
} from "@mui/material";

// import SampleImg from "../../assets/home/home-illustration.jpg";

function Github() {
  //   const [image, setImage] = useState(Illustration);
  const [username, setusername] = useState("");
  const [file, setFile] = useState("");
  const [repo, setRepo] = useState("");
  const [tested, setTested] = useState(false);
  const [checked, setChecked] = useState(false);
  console.log(username);
  const [invalidURL, setInvalidURL] = useState({});
  const [invalidFile, setInvalidFile] = useState({});
  const [invalidRepo, setInvalidRepo] = useState({});
  const [outputURL, setOutputURL] = useState(
    "https://media.istockphoto.com/photos/hot-air-balloons-with-landscape-mountain-picture-id1141810286?k=20&m=1141810286&s=612x612&w=0&h=LjwaFPtDGSrM10tVKqQ20F2i4Lx6VLsaYUqMeLXvwj0="
  );
  const handleURL = (e) => {
    const { value } = e.target;
    invalidURL.status = false;
    invalidURL.helper = "";
    setInvalidURL({ ...invalidURL });
    setusername(value);
  };
  const handleFile = (e) => {
    const { value } = e.target;
    invalidFile.status = false;
    invalidFile.helper = "";
    setInvalidFile({ ...invalidFile });
    setFile(value);
  };
  const handleRepo = (e) => {
    const { value } = e.target;
    invalidRepo.status = false;
    invalidRepo.helper = "";
    setInvalidRepo({ ...invalidRepo });
    setRepo(value);
  };
  const validate = () => {
    if (!username && !checked) {
      invalidURL.status = true;
      invalidURL.helper = "Enter URL";
      setInvalidURL({ ...invalidURL });
    }
    if (!invalidFile) {
      invalidFile.status = true;
      invalidFile.helper = "Enter URL";
      setInvalidFile({ ...invalidFile });
    }
    if (!invalidRepo) {
      invalidRepo.status = true;
      invalidRepo.helper = "Enter URL";
      setInvalidRepo({ ...invalidRepo });
    }
    return username;
  };
  const handleSubmit = () => {
    const route = checked ? "gr" : "g";
    const repoRoute = checked ? `/${repo}` : "";
    if (validate()) {
      setOutputURL(
        `${process.env.REACT_APP_BACKEND_URL}/${route}/${username}${repoRoute}/${file}`
      );
      setTested(true);
      console.log(
        `${process.env.REACT_APP_BACKEND_URL}/${route}/${username}${repoRoute}/${file}`
      );
    }
    console.log(
      `${process.env.REACT_APP_BACKEND_URL}/${route}/${username}${repoRoute}/${file}`
    );
  };
  const handleChecked = () => {
    setChecked(!checked);
    if (!checked) {
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
    <div className="github">
      <div className="github-right">
        <div className="github-heading">
          Lightening fast with Github! <GitHubIcon color="black" />
        </div>
        <div className="github-subtext">
          Create customised image URLs directly from your Github repository.
        </div>
        <div className="dashboard">
          <div className="dashboard-row">
            <TextField
              id="outlined-basic"
              label="Enter Github Username"
              className="dashboard-option input-url"
              variant="outlined"
              required
              value={username}
              onChange={handleURL}
              error={invalidURL.status}
              helperText={invalidURL.helper}
            />
          </div>
          <div className="dashboard-row">
            <FormGroup>
              <FormControlLabel
                control={<Checkbox />}
                label="Not a default repository?"
                checked={checked}
                onChange={handleChecked}
              />
            </FormGroup>
            {checked ? (
              <TextField
                id="outlined-basic"
                label="Enter Repository name"
                className="dashboard-option input-url"
                variant="outlined"
                required
                value={repo}
                onChange={handleRepo}
                error={invalidRepo.status}
                helperText={invalidRepo.helper}
                disabled={!checked}
              />
            ) : (
              ""
            )}
          </div>

          <TextField
            id="outlined-basic"
            label="Enter Image file name"
            className="dashboard-option input-url"
            variant="outlined"
            required
            value={file}
            onChange={handleFile}
            error={invalidFile.status}
            helperText={invalidFile.helper}
          />

          <Button
            variant="contained"
            className="github-submit"
            onClick={handleSubmit}
          >
            Generate
          </Button>
          <div className="output-container">
            {!tested ? "" : OutputContainer()}
          </div>
        </div>
      </div>
      <img src={outputURL} alt="" className="github-left github-img" />
    </div>
  );
}

export default Github;
