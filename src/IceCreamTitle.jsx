import React from "react";
import "./style.css";

function IceCreamTitle(props) {
  return (
    <article>
      <h1>{props.title}</h1>
      <h3 className={props.feedback.rating <= 3.5 ? "red" : "green"}>
        {props.feedback.rating} from {props.feedback.reviews} reviews
      </h3>
    </article>
  );
}

export default IceCreamTitle;
