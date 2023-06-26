# 🤳Image Gallery

### Index

#### <a href="#introduce">1. 프로젝트 소개</a>

#### <a href="#skill-build">2. 테크 스킬 & 빌드</a>

#### <a href="#study">3. 배운 것 </a>

---

## <div id="introduce">1. 프로젝트 소개</div>

#### 📷 프로젝트 작동 화면

<img alt="image gallery" src="./gallery.gif" width="350px">
<br/>
<br/>

Image Gallery는 이미지를 드래그 앤 드롭을 통해 업로드하고, 삭제할 수 있는 기능을 리액트를 통해 구현한 프로젝트인다.
"30개 프로젝트로 배우는 프론트엔드 with React" 수업 중 하나로, 단순히 수업 내용을 이수하는 것에 그치지 않고
**기능 별로 컴포넌트로 분리**하고, **scss를 사용해** 스타일을 적용했으며 브라우저의 **화면 크기에 따라 이미지의 크기와 스크롤이 적용되는 이미지의 개수가 변경**되도록 했고 이미지에 마우스 포인터가 들어가면 **이미지를 삭제할 수 있는 버튼이 화면에 나타나 유저가 이미지를 삭제**할 수 있도록 기능을 추가했다. 또한 각 컴포넌트들에 대한 테스트 코드도 만들었다.

- 기능
  - 이미지 파일을 드래그 앤 드롭을 통해 업로그 할 수 있다.
  - 여러 장의 이미지 파일을 한번에 업로드 할 수 있다.
  - 브라우저 화면의 크기와 이미지 파일의 개수에 따라 이미지 파일의 크기가 달라지며, 일정한 개수를 넘어갈 경우 스크롤이 화면에 표시된다.
  - 이미지 파일에 마우스를 올리면, 삭제 버튼이 나타나고 이를 통해 이미지 파일을 삭제할 수 있다.

## <div id="skill-build">2. 테크 스킬 & 빌드</div>

### A. 테크 스킬

- HTML, CSS(SCSS),
- Java Script, TypeScript
- React
- react-dropzone

### B. 빌드

#### Installation

```bash
> yarn i
```

#### Run start

```bash
> yarn run start
```

#### Build

```bash
> yarn run build
```

#### Test

```bash
> yarn run test
```

### <div id="study">3. 배운 것 </div>

이번 프로젝트를 통해 ["react-dropzone"](https://react-dropzone.js.org/)을 사용해 봤다.

react-dropzone 은 파일 업로드에 대한 기능을 제공하는 react 라이브러리로, 해당 프로젝트에서는 react-dropzone을 사용해 드래그 앤 드롭으로 이미지 파일을 여는 기능을 구현했다.

- react-dropzone 사용 예시

```js
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

function MyDropzone() {
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag 'n' drop some files here, or click to select files</p>
      )}
    </div>
  );
}
```

getRootProps 는 드래그 앤 드롭 영역을 설정하는 데 사용되고, getInputProps는 파일을 업로드한 input 요소를 설정하는 데 사용된다.
