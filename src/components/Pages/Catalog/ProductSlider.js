import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SimpleCarousel = (props) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        pauseOnHover: true
    };

    return (
        <Slider {...settings}>
            <div className='slider__image -ibg'>
                <img src={'./img/products/' + props.item.photo[0]} alt={props.item.title} />
            </div>
            <div className='slider__image -ibg'>
                <img src={'./img/products/' + props.item.photo[1]} alt={props.item.title} />
            </div >
            <div className='slider__image -ibg'>
                <img src={'./img/products/' + props.item.photo[2]} alt={props.item.title} />
            </div>
        </Slider>
    );
};


export default SimpleCarousel;