import React, { useState } from "react";
import "./assets/App.css";
import ImgBoxContainer from "./components/ImgBoxContainer";
import Alert from "./components/Alert";
import FileContainer from "./components/FileContainer";

function App() {
  const [imgList, setImgList] = useState<string[]>();

  return (
    <div className="container">
      <div
        className={`gallery-box ${imgList && imgList.length > 0 ? "row" : ""}`}
      >
        {!imgList && <Alert />}
        <FileContainer setImgList={setImgList} />
        {imgList && <ImgBoxContainer imgList={imgList} />}
      </div>
    </div>
  );
}

export default App;
