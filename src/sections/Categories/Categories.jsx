import './Categories.scss'
import classNames from 'classnames'
import Section from "@/layouts/Section/index.js";

const Categories = (props) => {
  return (
    <Section
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