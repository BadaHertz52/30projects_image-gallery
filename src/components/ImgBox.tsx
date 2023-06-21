type ImgBoxProps = {
  src: string;
  alt: string;
};
const ImgBox = (props: ImgBoxProps) => {
  return (
    <div className="img-box">
      <img src={props.src} alt={props.alt} />
    </div>
  );
};

export default ImgBox;
