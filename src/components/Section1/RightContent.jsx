import React from "react";
import RightCard from "./RightCard";

const RightContent = (props) => {
  return (
    <div id="right" className="h-full w-2/3 px-10 py-5 gap-3 flex justify-between items-center overflow-x-auto">
      {props.users.map(function (elem, idx) {
        return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag} context={elem.context} />;
      })}
    </div>
  );
};

export default RightContent;
