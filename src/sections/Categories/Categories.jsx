import './Categories.scss'
import classNames from 'classnames'
import Section from "@/layouts/Section/index.js";

const Categories = (props) => {
  return (
    <Section
        title="Explore our wide variety of categories"
        titleId="categories-title"
        description="Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"
      actions={(
        <div>
          <button>Назад</button>
          <button>Вперёд</button>
        </div>
      )}
    >
      CATEGORIES
    </Section>
  )
}

export default Categories