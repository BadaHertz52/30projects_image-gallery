import React, { CSSProperties, Dispatch, SetStateAction } from "react";
import ImgBox from "./ImgBox";

const ImgBoxContainer = (props: {
  imgList: string[];
  setImgList: Dispatch<SetStateAction<string[] | undefined>>;
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
          index={i}
          boxWidth={props.boxWidth}
          setImgList={props.setImgList}
        />
      ))}
    </div>
  );
};

export default React.memo(ImgBoxContainer);
