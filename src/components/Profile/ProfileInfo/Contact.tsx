
import React from "react";

export const Contact: React.FC<any> = ({ contactTitle, contactValue }) => {
  return (
    <div>
      <b>{contactTitle}</b>:{contactValue}
    </div>
  );
};