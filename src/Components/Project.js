import React from "react";
import "./styles.css"

function Project({ title, image, description, techstack, previewLink, githubLink }) {
  return (
    <>
      <div class="nft">
        <div class='main'>
          <a href={githubLink}><img src={image} loading="lazy" class="tokenImage" /></a>
          <a href={githubLink}><h2 class='titulo'>{title}</h2></a>
          <p class='description'>{description}</p>
        </div>
      </div>
    </>
  );
}

export default Project;
