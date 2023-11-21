import React from "react";
import "./index.css";
function slideEffect() {
  const scrollRight = document.getElementById("scrollRight");
  const productListContainer = document.querySelector(".product-list-container");

  console.log("Initial Scroll Left:", productListContainer.scrollLeft);

  scrollRight.addEventListener("click", function () {
    console.log("Clicked!");
    productListContainer.scrollBy({
      top: 0,
      left: 620,
      behavior: "smooth",
    });
    console.log("Scroll Left After:", productListContainer.scrollLeft);
  });
}
const Carousel = ({ imageUrl }) => {
  return (
    <div className="d-flex row gap card-container">
      <div className="icon before d-flex center"> &lt;</div>
      <div className="d-flex row product-list-container">
        <div className="card">
          <div>
            <img src={imageUrl} alt="" />
          </div>
          <div>title</div>
        </div>
        <div className="card">
          <div>
            <img src={imageUrl} alt="" />
          </div>
          <div>title</div>
        </div>
        <div className="card">
          <div>
            <img src={imageUrl} alt="" />
          </div>
          <div>title</div>
        </div>
        <div className="card">
          <div>
            <img src={imageUrl} alt="" />
          </div>
          <div>title</div>
        </div>
        <div className="card">
          <div>
            <img src={imageUrl} alt="" />
          </div>
          <div>title</div>
        </div>
        <div className="card">
          <div>
            <img src={imageUrl} alt="" />
          </div>
          <div>title</div>
        </div>
      </div>
      <div className="icon after d-flex center" id="scrollRight">
        {" "}
        &gt;
      </div>
    </div>
  );
};

export default Carousel;
