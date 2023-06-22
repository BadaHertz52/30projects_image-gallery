import React, { CSSProperties, useEffect, useRef, useState } from "react";
import "./assets/App.css";
import ImgBoxContainer from "./components/ImgBoxContainer";
import Alert from "./components/Alert";
import FileContainer from "./components/FileContainer";

function App() {
  const [imgList, setImgList] = useState<string[]>();
  /**
   * plus-box, img-box의 width와 옆의 element와의 gap을 다 합친 너비
   */
  const [totalWidth, setTotalWidth] = useState<number>(200);
  const boxWidth: number = (totalWidth * 2) / 3;
  const gap: number = (totalWidth * 1) / 6;
  const galleryRef = useRef<HTMLDivElement>(null);
  const handleGalleryOverflow = () => {
    if (galleryRef.current && imgList) {
      galleryRef.current.classList.toggle(
        "scroll",
        window.innerWidth > 500 ? imgList.length > 5 : imgList.length > 4
      );
    }
  };
  const changeTotalWidth = () => {
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
  };
  window.onresize = () => {
    changeTotalWidth();
    handleGalleryOverflow();
  };
  useEffect(() => {
    changeTotalWidth();
    handleGalleryOverflow();
  }, [imgList]);
  return (
    <div className="container">
      <div
        className={`gallery-box ${imgList && imgList.length > 0 ? "row" : ""}`}
        ref={galleryRef}
        style={{ gap: gap + "px" } as CSSProperties}
      >
        {!imgList && <Alert />}
        <FileContainer setImgList={setImgList} boxWidth={boxWidth + "px"} />
        {imgList && (
          <ImgBoxContainer
            imgList={imgList}
            boxWidth={boxWidth + "px"}
            gap={gap + "px"}
          />
        )}
      </div>
    </div>
  );
}

export default App;
