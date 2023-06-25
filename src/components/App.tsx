import { useCallback, useEffect, useState } from "react";
import "../assets/App.css";
import GalleryBox from "./GalleryBox";

function App() {
  const [imgList, setImgList] = useState<string[]>();

  return (
    <div className="container">
      <GalleryBox imgList={imgList} setImgList={setImgList} />
    </div>
  );
}

export default App;
