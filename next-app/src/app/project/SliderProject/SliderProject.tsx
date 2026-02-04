'use client'

import {FC, useEffect, useRef} from "react";
import {Container} from "@/Components/UI/Container/Container";
import style from './SliderProject.module.scss'
import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import {Autoplay, EffectFade, Navigation} from "swiper/modules";
import { clsx } from 'clsx';
import {HomeSliderListType, HomeSliderType} from "@/Api/ProjectsData";
import {ButtonWhite} from "@/Components/UI/ButtonWhite/ButtonWhite";

interface ISliderProjectProps {
    dataSlider: HomeSliderListType[] | any;
    title: string | any;
    positionTopSection: number;
}

export const SliderProject: FC<ISliderProjectProps> = ({dataSlider, title, positionTopSection}) => {

    const swiperRef = useRef<any>(null);

    const handlePrevClick = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    const handleNextClick = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slideNext();
        }
    };

    const resetSlider = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.params.speed = 0;
            swiperRef.current.swiper.slideTo(0);
            swiperRef.current.swiper.update();
            swiperRef.current.swiper.params.speed = 1200;
        }
    }

    useEffect(() => {
        resetSlider()
    }, [dataSlider]);

    return (
        <section className={style.sectionSliderProject}>
            <Container className={style.containerSlider}>
                <Swiper
                    ref={swiperRef}
                    spaceBetween={0}
                    effect={'fade'}
                    navigation={false}
                    pagination={{
                        clickable: true,
                    }}
                    speed={1200}
                    modules={[EffectFade, Navigation, Autoplay]}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false, // Продолжать автопрокрутку после взаимодействия
                    }}
                    className={style.mySwiper}
                >
                    {dataSlider.map((slide: HomeSliderType) =>
                        <SwiperSlide key={slide.id}>
                            <img className={style.swiperImg} src={slide.photo} alt={'slide'}/>
                        </SwiperSlide>
                    )}
                    {dataSlider.length > 1 ?
						<div>
							<div className={clsx(style.customButton, style.customButtonPrev)}
								 onClick={handlePrevClick}></div>
							<div className={clsx(style.customButton, style.customButtonNext)}
								 onClick={handleNextClick}></div>
						</div> : null
                    }

                    <div className={style.content}>
                        <Container className={style.containerSliderContent}>
                            <h1 className={style.title}>
                                {title}
                            </h1>
                            <ButtonWhite text={'Подробнее'} positionTopSection={positionTopSection}/>
                        </Container>
                    </div>

                </Swiper>
            </Container>
        </section>
    )
}