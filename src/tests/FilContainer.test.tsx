import React from "react";
import FileContainer, { FileContainerProps } from "../components/FileContainer";
import { render, screen } from "@testing-library/react";

describe("FileContainer", () => {
  const setImgList = jest.fn();
  const useStateMock: any = (useState: string[] | undefined) => [
    useState,
    setImgList,
  ];
  jest.spyOn(React, "useState").mockImplementation(useStateMock);

  const props: FileContainerProps = {
    setImgList: setImgList,
    boxWidth: "100px",
  };
  test("FileContainer 렌더링", () => {
    render(<FileContainer {...props} />);
    const fileContainerEl = screen.getByTestId("file-container");
    expect(fileContainerEl).toBeInTheDocument();
    const plusBoxEl = screen.getByTestId("plus-box");
    const inputEl = screen.getByTestId("input-file") as HTMLInputElement;
    expect(plusBoxEl).toBeInTheDocument();
    expect(plusBoxEl.classList.contains("on")).toBeFalsy();
    expect(plusBoxEl.textContent).toBe("+");
    expect(inputEl).toBeInTheDocument();
  });
});
