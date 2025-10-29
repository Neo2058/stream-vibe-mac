import './Header.scss'
import classNames from 'classnames'
import Logo from "@/components/Logo/index.js";
import Button from "@/components/Button/index.js";
import BurgerButton from "@/components/BurgerButton/index.js";

const Header = (props) => {
  const menuItems = [
    {
      label: 'Home',
      href: '/'
    },
    {
      label: 'Movies & Shows',
      href: '/movies'
    },
    {
      label: 'Support',
      href: '/support'
    },
    {
      label: 'Subscriptions',
      href: '/subscriptions'
    },
  ]

  const {
    className,
    url,
    isFixed,
  } = props

  return (
    <header
      className={classNames('header', {
        'is-fixed': isFixed,
      })}
    >
      <div
        className="header__inner container"
        data-js-overlay-menu=""
      >
        <Logo
          className="header__logo"
          loading="eager"
        />
        <dialog
          className="header__overlay-menu-dialog"
          data-js-overlay-menu-dialog=""
        >
          <nav className="header__menu">
            <ul className="header__menu-list">
              {menuItems.map(({label, href}, index) => (
                <li
                  className="header__menu-item"
                  key={index}
                >
                  <a
                    href={href}
                    className={classNames('header__menu-link', {
                      'is-active': href === url
                    })}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="header__actions">
            <Button
              className="header__button"
              label="Search"
              mode='transparent'
              isLabelHidden
              iconName="search"
            />
            <Button
              className="header__button"
              label="Notifications"
              mode='transparent'
              isLabelHidden
              iconName="notifications"
            />
          </div>
        </dialog>
        <BurgerButton
          className="header__burger-button visible-tablet"
          extraAttrs={{
            'data-js-overlay-menu-burger-button': '',
          }}
        />
      </div>
    </header>
  )
}

export default Header