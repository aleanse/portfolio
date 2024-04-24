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
          <div class='tokenInfo'>
            <div class="price">
              <ins>◘</ins>
              <p>0.031 ETH</p>
            </div>
            <div class="duration">
              <ins>◷</ins>
              <p>11 days left</p>
            </div>
          </div>
          <hr />
          <div class='creator'>
            <div class='wrapper'>
              <img src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80" alt="Creator" />
            </div>
            <p><ins>Creation of</ins> Kiberbash</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
