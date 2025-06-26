import {FC, useRef} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper-bundle.css';
import style from './SwiperSliderBusiness.module.scss';
import {Container} from "../../../UI/Container/Container.tsx";
import {EffectFade, Navigation, EffectCreative, Autoplay} from 'swiper/modules'; // Import modules
import slideImg_1 from '../../../../assets/img/sliderBusiness/slider-business-slide-1-1920x800.jpg';
import slideImg_2 from '../../../../assets/img/sliderBusiness/slider-business-slide-2-1920x800.jpg';
import cx from "classnames";
import {ButtonBlue} from "../../../UI/ButtonBlue/ButtonBlue.tsx";


export const SwiperSliderBusiness: FC = () => {
    const swiperRef = useRef<any>(null);

    const handleNext = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slideNext();
        }
    };

    const handlePrev = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    return (
        <Container className={style.containerSlider}>
            <Swiper
                ref={swiperRef}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                speed={1200}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
                grabCursor={true}
                navigation={false}
                pagination={{clickable: true}}
                modules={[EffectFade, EffectCreative, Navigation, Autoplay]}
                creativeEffect={{
                    prev: {
                        shadow: true,
                        translate: [0, 0, -400],
                    },
                    next: {
                        translate: ['100%', 0, 0],
                    },
                }}
                effect="creative"
                autoplay={{
                    delay: 9000,
                    disableOnInteraction: false, // Продолжать автопрокрутку после взаимодействия
                }}
                className={style.customSwiper}
            >
                <SwiperSlide className={style.swiperSlide}>
                    <Container className={style.containerSlide}>
                        <img className={style.swiperSlide__img} src={slideImg_1} alt="slide_1"/>
                        <div className={style.swiperSlide__inner}>
                            <div className={style.swiperSlide__caption}>
                                <h6 className={style.swiperSlide__title}>
                                    <span className={cx(style.swiperSlide__wow, style.slideInUp)}>
                                        18 тысяч семей живут в наших домах
                                    </span>
                                </h6>
                                <h2 className={style.swiperSlide__subTitle}>
                                    <span className={cx(style.swiperSlide__subTitleText, style.slideInDown)}>
                                        Управляем 22 многоквартирными домами с 2010 года
                                    </span>
                                </h2>
                                <div className={cx(style.swiperSlide__captionText, style.swiperCaptionTextSm)}>
                                    <div className={cx(style.swiperSlide__swiperCaptionTextDecoration, style.scaleInVertical)}></div>
                                    <div className={style.swiperSlide__swiperCaptionTextInner}>
                                        <p className={cx(style.swiperSlide__wow, style.slideInLeft)}>
                                            Ни один из наших объектов за это время не сменил управляющую компанию.
                                        </p>
                                    </div>
                                </div>
                                <ButtonBlue className={style.moreDetails} text={'Узнать подробнее'} />
                            </div>
                        </div>
                    </Container>
                </SwiperSlide>

                <SwiperSlide className={style.swiperSlide}>
                    <Container className={style.containerSlide}>
                        <img className={style.swiperSlide__img} src={slideImg_2} alt="slide_2"/>
                        <div className={style.swiperSlide__inner}>
                            <div className={style.swiperSlide__caption}>
                                <h6 className={style.swiperSlide__title}>
                                    <span className={cx(style.swiperSlide__wow, style.slideInUp)}>Мы на связи 24/7</span>
                                </h6>
                                <h2 className={style.swiperSlide__subTitle}>
                                    <span className={cx(style.swiperSlide__subTitleText, style.slideInDown)}>
                                        Реагируем на аварию или срочный вызов за 30 минут
                                    </span>
                                </h2>
                                <div className={cx(style.swiperSlide__captionText, style.swiperCaptionTextSm)}>
                                    <div className={cx(style.swiperSlide__swiperCaptionTextDecoration, style.scaleInVertical)}></div>
                                    <div className={style.swiperSlide__swiperCaptionTextInner}>
                                        <p className={cx(style.swiperSlide__wow, style.slideInLeft)}>
                                            Единая диспетчерская служба — один номер телефона на все случаи жизни.
                                        </p>
                                    </div>
                                </div>
                                <ButtonBlue className={style.moreDetails} text={'Узнать подробнее'} />
                            </div>
                        </div>
                    </Container>
                </SwiperSlide>
            </Swiper>

            <Container className={style.customNavigationContainer}>
                <div className={style.customNavigation}>
                    <button onClick={handlePrev} className='swiper-button-prev'></button>
                    <button onClick={handleNext} className='swiper-button-next'></button>
                </div>
            </Container>

        </Container>
    );
};