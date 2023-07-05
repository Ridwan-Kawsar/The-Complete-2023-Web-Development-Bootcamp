import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
const picsumImg = "https://picsum.photos";

root.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My Favourite Foods
    </h1>
    <div>
      <img
        className="food-img"
        src="https://thealmondeater.com/wp-content/uploads/2023/04/healthy-fettuccine-alfredo_web-6.jpg.webp"
        alt="Chicken Alfredo"
      />
      <img
        className="food-img"
        src="https://www.thegoodbite.co.uk/wp-content/uploads/2022/11/Image-49-1200x800.jpg"
        alt="Crispy Chilli Beef with Fried Rice"
      />
      <img
        className="food-img"
        src="https://www.wholesomeyum.com/wp-content/uploads/2022/03/wholesomeyum-Creamy-Tuscan-Salmon-1.jpg"
        alt="Creamy Salmon Tuscan"
      />
      <img src={picsumImg + "/200/300?grayscale&blur=1"} alt="Auto generated" />
    </div>
  </div>
);
