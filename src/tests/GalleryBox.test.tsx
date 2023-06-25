import React from "react";
import { render, screen } from "@testing-library/react";
import GalleryBox, { GalleryBoxProps } from "../components/GalleryBox";

describe("GalleryBox", () => {
  const setImgList = jest.fn();
  const useStateMock: any = (useState: string[] | undefined) => [
    useState,
    setImgList,
  ];
  jest.spyOn(React, "useState").mockImplementation(useStateMock);
  const getProps = (imgList: string[] | undefined): GalleryBoxProps => ({
    imgList: imgList,
    setImgList: setImgList,
  });

  test("GalleryBox : 처음 화면", () => {
    render(<GalleryBox {...getProps(undefined)} />);
    const alertEl = screen.getByTestId("alert");
    const fileContainerEl = screen.getByTestId("file-container");
    const galleryBoxEl = screen.getByTestId("gallery-box");
    expect(alertEl).toBeInTheDocument();
    expect(fileContainerEl).toBeInTheDocument();
    expect(galleryBoxEl.classList.contains("row")).toBeFalsy();
  });

  test("업로드된 사진이 있을 경우", () => {
    render(<GalleryBox {...getProps(["test1.jpg"])} />);
    const galleryBoxEl = screen.getByTestId("gallery-box");
    const imgBoxContainerEl = screen.getByTestId("img-box-container");
    expect(galleryBoxEl.classList.contains("row")).toBeTruthy();
    expect(galleryBoxEl.classList.contains("scroll")).toBeFalsy();
    expect(imgBoxContainerEl).toBeInTheDocument();
  });

  test("업로든 된 사진의 개수가 테스크톱 화면 기준으로 5개 이상일 경우, 스크롤 적용", () => {
    const newImgList = [
      "test1.jpg",
      "test2.jpg",
      "test3.jpg",
      "test4.jpg",
      "test5.jpg",
      "test6.jpg",
    ];
    render(<GalleryBox {...getProps(newImgList)} />);
    const galleryBoxEl = screen.getByTestId("gallery-box");

    expect(galleryBoxEl.classList.contains("scroll")).toBeTruthy();
  });
});
