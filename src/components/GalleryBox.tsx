import React, {
  CSSProperties,
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import Alert from "./Alert";
import FileContainer from "./FileContainer";
import ImgBoxContainer from "./ImgBoxContainer";
export type GalleryBoxProps = {
  imgList?: string[];
  setImgList: Dispatch<SetStateAction<string[] | undefined>>;
};
const GalleryBox = (props: GalleryBoxProps) => {
  const { imgList, setImgList } = props;
  /**
   * plus-box, img-box의 width와 옆의 element와의 gap을 다 합친 너비
   */
  const [totalWidth, setTotalWidth] = useState<number>(200);

  const boxWidth: number = (totalWidth * 2) / 3;
  const gap: number = (totalWidth * 1) / 6;

  const changeTotalWidth = useCallback(() => {
    let newWidth: number = 0;
    const innerWidth = window.innerWidth;
    const galleryBoxWidth = document
      .querySelector(".gallery-box")
      ?.getBoundingClientRect().width;
    const imgLength = imgList?.length;
    if (imgLength && galleryBoxWidth) {
      if (innerWidth > 500) {
        //desk top ver
        newWidth = galleryBoxWidth / (imgLength < 4 ? imgLength + 1 : 5);
      } else {
        //mobile ver
        newWidth = galleryBoxWidth / (imgLength < 2 ? imgLength + 1 : 3);
      }
      setTotalWidth(newWidth);
    }
  }, [imgList]);

  const handleGalleryOverflow = useCallback(() => {
    const galleryBoxEl = document.querySelector(".gallery-box");
    if (galleryBoxEl && imgList) {
      galleryBoxEl.classList.toggle(
        "scroll",
        window.innerWidth > 500 ? imgList.length > 5 : imgList.length > 3
      );
    }
  }, [imgList]);

  window.onresize = () => {
    changeTotalWidth();
    handleGalleryOverflow();
  };
  useEffect(() => {
    changeTotalWidth();
    handleGalleryOverflow();
  }, [imgList]);
  return (
    <div
      className={`gallery-box ${imgList && imgList.length > 0 ? "row" : ""}`}
      data-testid="gallery-box"
      style={{ gap: gap + "px" } as CSSProperties}
    >
      {!imgList && <Alert />}
      <FileContainer setImgList={setImgList} boxWidth={boxWidth + "px"} />
      {imgList && (
        <ImgBoxContainer
          imgList={imgList}
          setImgList={setImgList}
          boxWidth={boxWidth + "px"}
          gap={gap + "px"}
        />
      )}
    </div>
  );
};

export default React.memo(GalleryBox);
