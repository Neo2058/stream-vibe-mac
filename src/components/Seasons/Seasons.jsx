import './Seasons.scss'
import AccordionGroup from "@/components/AccordionGroup/index.js";
import seasonItems from "@/components/Seasons/seasonitems.js";
import Accordion from "@/components/Accordion/index.js";

const Seasons = () => {


  return (
    <AccordionGroup
      className="seasons"
      mode="dark"
      isOrderedList={false}
    >
      {seasonItems.map(( { title, subTitle, episodes }, index) => (
        <Accordion
          title={title}
          titleLevelClassName="h4"
          subtitle={subTitle}
          id={`season-${index}`}
          name="seasons"
          isOpen={index === 0}
          key={index}
          isArrowButton
        >
          <ul className="seasons__list">
            {episodes.map((episodeItem, index) => (
              <li
                className="seasons__item"
                key={index}
              >
                {episodeItem.title}
              </li>
            ))}
          </ul>
        </Accordion>
      ))}
    </AccordionGroup>
  )
}

export default Seasons