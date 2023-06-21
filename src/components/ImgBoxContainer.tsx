import React from "react";
import ImgBox from "./ImgBox";

const ImgBoxContainer = (props: { imgList: string[] }) => {
  return (
    <div className="img-box-container">
      {props.imgList.map((v, i) => (
        <ImgBox key={`image_${i}`} src={v} alt={`image_${i}`} />
      ))}
    </div>
  );
};

export default React.memo(ImgBoxContainer);
