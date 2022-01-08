// import React from "react";
import goImageAPI from "./config";

const fetchURL = (img, w, h, rot, f, q) =>
  new Promise((resolve, reject) => {
    goImageAPI
      .get("/", {
        params: {
          img,
          w,
          h,
          rot,
          f,
          q,
        },
        responseType: "arraybuffer",
      })
      .then((res) => {
        resolve(res);
        console.log("response", res);
        const base64 = btoa(
          new Uint8Array(res.data).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            ""
          )
        );
        return `data:;base64,${base64}`;
      })
      .catch((err) => {
        reject(err);
        console.log(encodeURIComponent(img), img);
      });
  });

export default fetchURL;
