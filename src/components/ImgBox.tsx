import { CSSProperties, Dispatch, MouseEvent, SetStateAction } from "react";

export type ImgBoxProps = {
  src: string;
  alt: string;
  index: number;
  boxWidth: string;
  setImgList: Dispatch<SetStateAction<string[] | undefined>>;
};
const ImgBox = (props: ImgBoxProps) => {
  const imgStyle: CSSProperties = {
    width: props.boxWidth,
    height: props.boxWidth,
  };
  const deleteImg = () => {
    props.setImgList((prev) => {
      let newImgList = prev ? [...prev] : undefined;
      newImgList?.splice(props.index, 1);
      return newImgList?.[0] ? newImgList : undefined;
    });
  };
  const toggleClass = (event: MouseEvent) => {
    const currentTarget = event.currentTarget;
    currentTarget.classList.toggle(
      "on",
      !currentTarget.classList.contains("on")
    );
  };

  return (
    <div className="img-box" data-testid="img-box" style={imgStyle}>
      <img src={props.src} alt={props.alt} />
      <div
        className="btn-container"
        data-testid="btn-container"
        onMouseEnter={(event) => toggleClass(event)}
        onMouseLeave={(event) => toggleClass(event)}
      >
        <button className="btn-delete" onClick={deleteImg}>
          <div className="btn-delete__icon">x</div>
        </button>
      </div>
    </div>
  );
};

export default ImgBox;
