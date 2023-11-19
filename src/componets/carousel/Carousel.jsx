import { Carousel } from 'react-bootstrap';

const CarouselComponent = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={"https://suplementos.b-cdn.net/blog/best-protein-vs-iso-100.webp"}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={"https://usasuplementos.co/wp-content/uploads/2023/07/banner-usa-24072023-1080x540-1.webp"}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={"https://acdn.mitiendanube.com/stores/952/114/themes/cubo/1-slide-1694621553127-1850633242-4201a16bd881224979481b51c336e8f71694621554-1024-1024.png?1099164675"}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;