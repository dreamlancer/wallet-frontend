import { Box } from "@mui/material";
import React from "react";

const Video = ({ setYoutube }) => {
  return (
    <Box
      onClick={() => {
        setYoutube(false);
      }}
      sx={{
        position: "fixed",
        zIndex: "999",
        width: "100vw",
        top: "0",
        left: "0",
        height: "100vh",
        background: "rgba(33, 33, 33, 0.7)",
        backdropFilter: "blur(6px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/RDV3Z1KCBvo`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </Box>
  );
};

export default Video;
