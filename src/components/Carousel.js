const Carousel = ({ images }) => {
  return (
    <div className="line">
      {images.map((imageUrl, indexOfImage) => {
        return <img key={indexOfImage} src={imageUrl} alt="" />;
      })}
    </div>
  );
};

export default Carousel;
