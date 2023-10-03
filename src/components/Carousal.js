import  Slider  from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carousal.css'


const Carousel = () =>{
    return (
      <div style={{margin:'30px'}}>
        <h1 className="title_image2">Frequently repurchased</h1>
        <Slider>
          <div className="image_horiz">
            <img
              className="image"
              src="https://m.media-amazon.com/images/I/61J0e7d0GEL._AC_SY200_.jpg"
              alt="/"
              style={{ width: "100%", height: "50vh" }}
            />
          </div>
          <div className="image_horiz">
            <img
              className="image"
              src="https://images-na.ssl-images-amazon.com/images/I/61mzlX3ucxL._AC_UL160_SR160,160_.jpg"
              alt="/"
              style={{ width: "100%", height: "50vh" }}
            ></img>
          </div>

          <div className="image_horiz">
            <a className="image_link" href="/">
              <img
                className="image"
                src="https://m.media-amazon.com/images/I/51lcVe0BpuL._SY500__AC_SY200_.jpg"
                alt="/"
                style={{ width: "100%", height: "50vh" }}
              ></img>
            </a>
          </div>
        </Slider>
      </div>
    );
}

export default Carousel;