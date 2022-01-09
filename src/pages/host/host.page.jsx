import React, { useEffect } from "react";
import "./host.styles.css";
import Aos from "aos";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { IconButton } from "@mui/material";
import "aos/dist/aos.css";
import CheckList from "../../assets/host/checklist.svg";

import CodeWindow from "../../assets/host/Placeholder.svg";

const useCaseLIST = [
  { id: 1, text: "Dockerised cointainer for deployment" },
  { id: 2, text: "Image cacheing for faster load and bandwidth reduction" },
  { id: 3, text: "Too large? Try out the compression!" },
  { id: 4, text: "A all in one place to host images and link alias" },
];
function HostPage() {
  useEffect(() => {
    Aos.init({ duration: 2800 });
  }, []);
  const Points = () =>
    useCaseLIST.map((point) => (
      <div className="points-container" data-aos="fade-up">
        <img src={CheckList} alt="" className="points-checklist" />
        <div className="point">{point.text}</div>
      </div>
    ));
  return (
    <div className="selfhost-container" data-aos="fade-up">
      <div className="selfhost-heading">
        Open Source Image Handling Microservice
      </div>
      <div className="selfhost-subtext">
        An easily deployable docker microservice to abstract out all the Image
        related processing from your code.
      </div>
      <div className="selfhost-guide">
        <img
          src={CodeWindow}
          className="selfhost-guide-left"
          alt=""
          data-aos="flip-left"
        />
        <div className="selfhost-guide-right">
          <div className="selfhost-guide-heading">Handle images with ease</div>
          {Points()}
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
            className="copy-btn"
            onClick={() => {
              navigator.clipboard.writeText("ans29hul/goimg1:latest");
            }}
          >
            <ContentCopyIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default HostPage;
