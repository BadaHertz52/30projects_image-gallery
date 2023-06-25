import React from "react";

const Alert = () => {
  return (
    <div className="alert" data-testid="alert">
      이미지가 없습니다.
      <br />
      이미지를 추가해주세요.
    </div>
  );
};

export default React.memo(Alert);
