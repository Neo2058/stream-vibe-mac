import 'swiper/css'
import './Slider.scss'
import classNames from 'classnames'
import SliderNavigation
  from "@/components/Slider/components/SliderNavigation/index.js";

const defaultSliderParams = {
    slidesPerView: 5,
    slidesPerGroup: 5,
    spaceBetween: 30,
}

const Slider = (props) => {
  const {
    className,
    children,
    navigationTargetElementId = null,
    sliderParams = defaultSliderParams,
  } = props

  return (
    <div
      className={classNames(className, 'slider')}
      data-js-slider={JSON.stringify({
          sliderParams,
          navigationTargetElementId,
      })}
    >
      <div
          className="slider-swiper swiper"
          data-js-slider-swiper=""
      >
        <ul className="slider-list swiper-wrapper">
          {children.map((slide, index) => (
            <li className="slider__item swiper-slide" key={index}>
              {slide}
            </li>
          ))}
        </ul>
      </div>
        {!navigationTargetElementId && (
        <SliderNavigation
          className="slider__navigation"
        />
      )}
    </div>
  )
}

export default Slider