import {useSwiper} from "swiper/react";
import {useEffect, useState} from "react";
import { ReactComponent as LeftArrow} from "../../Assests/Left-arrow.svg";
import styles from './Carousel.module.css';

const CarouselLeftNavigation = () => {

    const swiper = useSwiper();
    const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);

    useEffect(() => {
        swiper.on("slideChange", function() {
            setIsBeginning(swiper.isBeginning);
        })
    }, [isBeginning, swiper, swiper.isBeginning]);
    return (
        <div className={styles.LeftNavigation}>
            {!isBeginning && <LeftArrow onClick={() => swiper.slidePrev()}/>}
        </div>
    )
}

export default CarouselLeftNavigation;