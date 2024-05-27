import React from "react";
import "./Index.css";

function Photo({ photo }) {
  return (
    <div className="photo__div">
      <div className="row">
        <div className="img__main">
          <div className="img__div">
            <img
              src={photo.urls.small}
              alt=""
            />
            <h3>{photo.alt_description}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Photo;
