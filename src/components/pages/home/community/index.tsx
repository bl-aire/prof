import Slider from "react-slick";

//@: Styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from "./community.module.scss";

//@: Assets

export default function CommunityList() {
    const settings = {
        dots: false,
        vertical: true,
        verticalSwiping: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: true,
        speed: 10_000,
        autoPlaySpeed: 10_000,
        cssEase: "linear",

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }
        ]
    }

    return (
        <div className={classes.community}>
            <Slider {...settings} className={classes.community__slider}>
                <div className={classes.community__slider__box1} id="v1">
                    <div className={classes.community__slider__box1__content}>
                        <div className={classes.community__slider__box1__content__text}>
                            <p></p>
                        </div>
                    </div>
                </div>
                <div className={classes.community__slider__box2} id="v2">
                    <div className={classes.community__slider__box2__content}>
                        <div className={classes.community__slider__box2__content__text}>
                            <p></p>
                        </div>
                    </div>
                </div>
                <div className={classes.community__slider__box3} id="v3">
                    <div className={classes.community__slider__box3__content}>
                        <div className={classes.community__slider__box3__content__text}>
                            <p></p>
                        </div>
                    </div>
                </div>
                <div className={classes.community__slider__box4} id="v4">
                    <div className={classes.community__slider__box4__content}>
                        <div className={classes.community__slider__box4__content__text}>
                            <p></p>
                        </div>
                    </div>
                </div>
                <div className={classes.community__slider__box5} id="v5">
                    <div className={classes.community__slider__box5__content}>
                        <div className={classes.community__slider__box5__content__text}>
                            <p></p>
                        </div>
                    </div>
                </div>
                <div className={classes.community__slider__box6} id="v6">
                    <div className={classes.community__slider__box6__content}>
                        <div className={classes.community__slider__box6__content__text}>
                            <p></p>
                        </div>
                    </div>
                </div>
                <div className={classes.community__slider__box7} id="v7">
                    <div className={classes.community__slider__box7__content}>
                        <div className={classes.community__slider__box7__content__text}>
                            <p></p>
                        </div>
                    </div>
                </div>
                <div className={classes.community__slider__box8} id="v8">
                    <div className={classes.community__slider__box8__content}>
                        <div className={classes.community__slider__box8__content__text}>
                            <p></p>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    )
}