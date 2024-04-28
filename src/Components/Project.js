import React from "react";
import { div } from "three/examples/jsm/nodes/Nodes.js";
import "./styles.css"

function Project({ title, image, description, techstack, previewLink, githubLink }) {
  return (
    <>
      <div class="nft">
        <div class='main'>
        <img src={image} alt="" loading="lazy" />
          <h2>{title}</h2>
          <p class='description'>{description}.</p>
        </div>
      </div>
    </>
  );
}

export default Project;
