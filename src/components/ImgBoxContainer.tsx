import React, { CSSProperties } from "react";
import ImgBox from "./ImgBox";

const ImgBoxContainer = (props: {
  imgList: string[];
  boxWidth: string;
  gap: string;
}) => {
  const imgBoxContainerStyle: CSSProperties = {
    gap: props.gap,
  };
  return (
    <div className="img-box-container" style={imgBoxContainerStyle}>
      {props.imgList.map((v, i) => (
        <ImgBox
          key={`image_${i}`}
          src={v}
          alt={`image_${i}`}
          boxWidth={props.boxWidth}
        />
      ))}
    </div>
  );
};

export default React.memo(ImgBoxContainer);
