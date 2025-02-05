import {useSwiper} from "swiper/react";
import {useEffect, useState} from "react";
import { ReactComponent as RightArrow} from "../../Assests/Right-arrow.svg";
import styles from './Carousel.module.css';

const CarouselRightNavigation = () => {

    const swiper = useSwiper();
    const [isEnd, setIsEnd] = useState(swiper.isEnd);

    useEffect(() => {
        swiper.on("slideChange", function() {
            setIsEnd(swiper.isEnd);
        })
    }, [isEnd, swiper, swiper.isEnd]);
    return (
        <div className={styles.RightNavigation}>
            {!isEnd && <RightArrow onClick={() => swiper.slideNext()}/>}
        </div>
    )
}

export default CarouselRightNavigation;