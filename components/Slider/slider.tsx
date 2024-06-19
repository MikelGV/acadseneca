import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';
import { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import styles from '../Slider/slider.module.css';



export default function Slider() {

    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        initial: 0,
        slides: {
            origin: "auto",
            perView: 1,
            spacing: 25,
        },
        slideChanged(s) {
            setCurrentSlide(s.track.details.rel)
        },
        created() {
            setLoaded(true)
        },
  })

    return(
        <>
            <div className={styles.navigation_wrapper}>
                <div ref={sliderRef} className="keen-slider">
                    <div className="keen-slider__slide">
                        <img className={styles.img1} src="/Img/teacherExample.jpg" alt="" />
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod dolore quae nulla, accusamus at eaque recusandae sapiente labore dolorum facilis assumenda eum! Adipisci quibusdam minus exercitationem tempore ex unde libero?</p>
                    </div>
                    <div className="keen-slider__slide">
                        <img className={styles.img1} src="/Img/teacherExample.jpg" alt="" />
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod dolore quae nulla, accusamus at eaque recusandae sapiente labore dolorum facilis assumenda eum! Adipisci quibusdam minus exercitationem tempore ex unde libero?</p>

                    </div>
                    <div className="keen-slider__slide">
                        <img className={styles.img1} src="/Img/teacherExample.jpg" alt="" />
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod dolore quae nulla, accusamus at eaque recusandae sapiente labore dolorum facilis assumenda eum! Adipisci quibusdam minus exercitationem tempore ex unde libero?</p>
                    </div>
                </div>
                {loaded && instanceRef.current && (
                    <>
                        <Arrow
                            left
                            onClick={(e:any) =>
                                e.stopPropagation() || instanceRef.current?.prev()
                            }
                            disabled={currentSlide === 0}
                        />

                        <Arrow
                            onClick={(e:any) =>
                                e.stopPropagation() || instanceRef.current?.next()
                            }
                            disabled={
                                currentSlide ===
                                instanceRef.current.track.details.slides.length - 1
                            }
                        />
                    </>
                )}
            </div>
        </>
    )
}

function Arrow(props: {
    disabled: boolean
    left?: boolean
    onClick: (e:any) => void
}) {
    const disabled = props.disabled ? ` ${styles.arrow__disabled}`:""
    return (
        <svg onClick={props.onClick} className={`${styles.arrow} ${
            props.left ? styles.arrow__left: styles.arrow__right
        } ${disabled}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox='0 0 24 24'>
            {props.left && (
                <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
            )}
            {!props.left && (
                <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
            )}
        </svg>
    )
}