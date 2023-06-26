import React from "react";
import ImgBox, { ImgBoxProps } from "../components/ImgBox";
import { fireEvent, render, screen } from "@testing-library/react";

describe("ImgBox", () => {
  const src = "test/testImg.jpg";
  const setImgList = jest.fn();
  const useStateMock: any = (useState: string[] | undefined) => [
    useState,
    setImgList,
  ];
  jest.spyOn(React, "useState").mockImplementation(useStateMock);

  const props: ImgBoxProps = {
    src: src,
    alt: src,
    index: 1,
    boxWidth: "100px",
    setImgList: setImgList,
  };

  test("img box 렌러딩", () => {
    render(<ImgBox {...props} />);
    const imgBoxEl = screen.getByTestId("img-box");
    const btnContainerEl = screen.getByTestId("btn-container");
    expect(imgBoxEl).toBeInTheDocument();
    expect(btnContainerEl.classList.contains("on")).toBeFalsy();
  });
  test("img box :삭제 버튼 토글 ", () => {
    render(<ImgBox {...props} />);
    const btnContainerEl = screen.getByTestId("btn-container");
    fireEvent.mouseEnter(btnContainerEl);
    expect(btnContainerEl.classList.contains("on")).toBeTruthy();

    const deleteBtnEl = screen.getByRole("button");
    expect(deleteBtnEl).toBeInTheDocument();

    fireEvent.click(deleteBtnEl);
    expect(props.setImgList).toBeCalled();
  });
});
