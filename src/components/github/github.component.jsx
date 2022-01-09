import React, { useState, useEffect } from "react";
import "./github.styles.css";
import Aos from "aos";
import "aos/dist/aos.css";
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
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
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
    "https://c4.wallpaperflare.com/wallpaper/764/505/66/baby-groot-4k-hd-superheroes-wallpaper-preview.jpg"
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
        `http://www.goimg.me/${route}/${username}${repoRoute}/${file}`
      );
      setTested(true);
      console.log(
        `http://www.goimg.me/${route}/${username}${repoRoute}/${file}`
      );
    }
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
    <div className="github" data-aos="fade-up">
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
      <img
        src={outputURL}
        alt=""
        className="github-left github-img"
        data-aos="fade-left"
      />
    </div>
  );
}

export default Github;
