import './Logo.scss'
import classNames from 'classnames'

const Logo = (props) => {
  const title = 'Home'

  const {
    className,
    loading = 'lazy',
  } = props

  return (
    <a
      className={classNames(className, 'logo')}
      href="/"
      title={title}
      aria-label={title}
    >
      <img
        src="/Logo.svg"
        alt=""
        className="logo__img"
        width={199}
        height={60}
        loading={loading}
      />
    </a>
  )
}

export default Logo