import './Content.scss'
import classNames from 'classnames'

const Content = (props) => {
  const {
    className,
    children,
  } = props

  return (
    <main
      className={classNames(className, 'content')}
    >
      {children}
    </main>
  )
}

export default Content