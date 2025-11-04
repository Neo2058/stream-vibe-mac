import './Categories.scss'
import classNames from 'classnames'
import Section from "@/layouts/Section/index.js";
import CategoryCard from "@/components/CategoryCard/index.js";
import Slider from "@/components/Slider/index.js";
import SliderNavigation from "@/components/Slider/components/SliderNavigation";
import categoryItems from "@/sections/Categories/categoryItems.js";

const Categories = () => {
  const sliderNavigationId = 'categories-slider-navigation'

  return (
    <Section
        title="Explore our wide variety of categories"
        titleId="categories-title"
        description="Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"
      actions={(
            <SliderNavigation
                mode="tile"
                id={sliderNavigationId}
            />
        )}
        isActionsHiddenOnMobile
    >
      <Slider
        navigationTargetElementId={sliderNavigationId}
        isBeyondTheViewportOnMobileS
      >
        {categoryItems.map((categoryItem, index) => (
          <CategoryCard
            {...categoryItem}
            key={index}
          />
        ))}
      </Slider>
    </Section>
  )
}

export default Categories