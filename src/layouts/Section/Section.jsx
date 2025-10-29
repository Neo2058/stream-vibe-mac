import './Section.scss'
import classNames from 'classnames'

const Section = (props) => {
  const {
    className,
    title,
    titleId,
    description,
    actions,
    children,
  } = props

  return (
    <section
      className={classNames(className, 'section container')}
      arai-label={titleId}
    >
      <header className="section__header">
        <div className="section__info">
          <h2 className="section__title h3"></h2>
        </div>
        {actions && (
          <div className="section__actions">{actions}</div>
        )}
      </header>
      <div className="section__body">
        {children}
      </div>
    </section>
  )
}

export default Section