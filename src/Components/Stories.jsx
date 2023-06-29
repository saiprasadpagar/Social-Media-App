import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState, useEffect } from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const Stories = () => {
  const [width, setWidth] = useState(window.innerWidth);

  function handleResize() {
    setWidth(window.innerWidth);
  }

  const PrevArrow = ({ currentSlide, slideCount, ...arrowProps }) => (
    <ArrowBackIosIcon {...arrowProps} />
  );

  const NextArrow = ({ currentSlide, slideCount, ...arrowProps }) => (
    <ArrowForwardIosIcon {...arrowProps} />
  );

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: width < 400 ? 4 : width < 768 ? 5 : 7,
    slidesToScroll: width < 400 ? 3 : width < 768 ? 4 : 5,
    autoplay: false,
    prevArrow: width < 770 ? <></> : <PrevArrow />,
    nextArrow: width < 770 ? <></> : <NextArrow />
  };

  return (
    <Container {...settings}>
      <UserStory>
        <img
          src="https://p.favim.com/orig/2018/10/31/site-model-girls-aesthetic-Favim.com-6467724.jpg"
          alt="user"
        />
        <p>Add Story</p>
      </UserStory>
      <UserStory>
        <img
          src="https://p.favim.com/orig/2019/01/16/site-model-girl-icons-site-model-icon-site-model-girl-Favim.com-6800644.jpg"
          alt="user"
        />
        <p>Lovey</p>
      </UserStory>
      <UserStory>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjsFflF5Mcjev_RYHnVXOynnnsEU4X7FxGXQ&usqp=CAU"
          alt="user"
        />
        <p>Margaret</p>
      </UserStory>
      <UserStory>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmDrogT0nZ1NeyMBu6u2tlDeFTmpXQ9iUqDQ&usqp=CAU"
          alt="user"
        />
        <p>Lisa</p>
      </UserStory>
      <UserStory>
        <img
          src="https://1409791524.rsc.cdn77.org/data/images/full/575483/jennie.jpg"
          alt="user"
        />
        <p>Jennie</p>
      </UserStory>
      <UserStory>
        <img
          src="https://media.istockphoto.com/id/182823312/photo/happy-golden-retriever-puppy-smiling-at-camera.jpg?s=612x612&w=0&k=20&c=msErOc7-muTJhpjzXccr5cF5SyATMfexJbUe-SY93LQ="
          alt="user"
        />
        <p>Goldy</p>
      </UserStory>
      <UserStory></UserStory>
    </Container>
  );
};

const Container = styled(Slider)`
  border: 1px solid hsl(147, 7%, 75%);
  border-radius: 4px;
  width: 45%;
  margin: 20px 0 20px 200px;
  padding: 10px 0;

  svg {
    color: rgba(0, 0, 0, 0.6);
  }

  @media (max-width: 768px) {
    width: 100%;
    margin: 20px auto;
  }
`;

const UserStory = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: min-content;
  font-size: 11px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  margin-left: 7px;

  img {
    max-width: 50px;
    max-height: 50px;
    border-radius: 50%;
    border: 3px solid #8134af;
  }
`;

export default Stories;
