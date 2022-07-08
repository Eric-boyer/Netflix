import Carousel from "./Carousel";

const Section = ({ mainCategory }) => {
  //   console.log(props)
  return (
    <div >
      <p className="title">{mainCategory.category}</p>

      <Carousel images={mainCategory.images} />
    </div>
  );
};

export default Section;
