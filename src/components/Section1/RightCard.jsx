import React from "react";
import RightCardContent from "./RightCardContent";

const RightCard = (props) => {
  return (
    <div
      id="RightCard"
      className="h-full w-full rounded-4xl overflow-hidden relative shrink-0 transition-all duration-500 ease-in-out"
    >
      <img
        className="h-full w-full object-cover"
        src={props.img}
        alt="Working Professionals"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

      <RightCardContent tag={props.tag} id={props.id} context={props.context} />
    </div>
  );
};

export default RightCard;
