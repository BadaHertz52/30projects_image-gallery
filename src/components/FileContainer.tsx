import { ChangeEvent, Dispatch, SetStateAction, useRef } from "react";
type FileContainerProps = {
  setImgList: Dispatch<SetStateAction<string[] | undefined>>;
};
const FileContainer = (props: FileContainerProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const onchangeInput = (event: ChangeEvent) => {
    const files = (event.target as HTMLInputElement).files;
    if (files?.[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onloadend = (event) => {
        const result = event.target?.result as string;
        props.setImgList((prev) => (!prev ? [result] : [result, ...prev]));
      };
    }
  };
  return (
    <div className="file-container">
      <input type="file" ref={inputRef} onChange={onchangeInput} />
      <div className="plus-box" onClick={() => inputRef.current?.click()}>
        +
      </div>
    </div>
  );
};

export default FileContainer;
