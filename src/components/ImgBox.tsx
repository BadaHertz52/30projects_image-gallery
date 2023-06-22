import { CSSProperties } from "react";

type ImgBoxProps = {
  src: string;
  alt: string;
  boxWidth: string;
};
const ImgBox = (props: ImgBoxProps) => {
  const imgStyle: CSSProperties = {
    width: props.boxWidth,
    height: props.boxWidth,
  };
  return (
    <div className="img-box" style={imgStyle}>
      <img src={props.src} alt={props.alt} />
    </div>
  );
};

export default ImgBox;
