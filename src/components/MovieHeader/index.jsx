import React from "react";
import bg from "../../images/bg-movie.jpg";

const MovieHeader = () => {
  const style = {
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <>
      <div style={style}></div>
      <div className="text-white d-flex center ">eloozz</div>
    </>
  );
};

export default MovieHeader;
