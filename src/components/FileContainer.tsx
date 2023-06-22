import React, {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useCallback,
  useRef,
} from "react";
import { useDropzone } from "react-dropzone";
type FileContainerProps = {
  setImgList: Dispatch<SetStateAction<string[] | undefined>>;
};
const FileContainer = (props: FileContainerProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles[0]) {
      acceptedFiles.forEach((f) => {
        const reader = new FileReader();
        reader.readAsDataURL(f);
        reader.onloadend = (event) => {
          const result = event.target?.result as string;
          props.setImgList((prev) => (!prev ? [result] : [result, ...prev]));
        };
      });
    }
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <div className="file-container" {...getRootProps()}>
      <div
        className={`plus-box ${isDragActive ? "on" : ""}`}
        onClick={() => inputRef.current?.click()}
      >
        <input type="file" ref={inputRef} {...getInputProps()} />
        {isDragActive ? "drop down" : "+"}
      </div>
    </div>
  );
};

export default FileContainer;
