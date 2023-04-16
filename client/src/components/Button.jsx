import React from "react";

export default function Button(props) { 
  const { className } = props;
  
  return (
    <div className="button-container">
      <button className="to-post">
        Hoge Hoge
      </button>
    </div>
  )
}