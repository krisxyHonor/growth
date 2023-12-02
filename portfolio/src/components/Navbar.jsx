import { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import useMediaQuery from '../hooks/useMediaQuery'
import MenuIcon from '@/assets/menu-icon.svg'
import { Menu } from '../constants/index'
import { useEffect } from 'react'

const Link = ({ page, selectedPage, setSelectedPage }) => {
  const isSelected = page.toLowerCase() === selectedPage
  const clickHandler = event => {
    event.stopPropagation()
    setSelectedPage(page.toLowerCase())
  }

  return (
    <AnchorLink
      className={`${
        isSelected ? 'text-yellow' : ''
      } hover:text-yellow transition duration-500 select-none`}
      href={`#${page.toLowerCase()}`}
      onClick={event => clickHandler(event)}
    >
      {page}
    </AnchorLink>
  )
}

const Navbar = ({ isScrolledTop, selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false)
  const isDesktop = useMediaQuery('(min-width: 768px)')

  useEffect(() => {
    if (!isDesktop) {
      const menuDrawHandler = () => setIsMenuToggled(false)
      window.addEventListener('click', menuDrawHandler)
      return () => window.removeEventListener('click', menuDrawHandler)
    }
  }, [isDesktop])

  const handleMenuButtonClick = event => {
    event.stopPropagation()
    setIsMenuToggled(true)
  }

  return (
    <nav
      className={`${
        !isScrolledTop &&
        'bg-gradient-to-t from-violet-500/50 to-fuchsia-500/75'
      } z-40 w-full fixed top-0 py-6`}
    >
      <div className="flex items-center justify-between mx-auto w-5/6">
        <h4 className="font-playfair text-3xl font-bold select-none">XS</h4>
        {isDesktop ? (
          <div
            className={`flex justify-between gap-16 font-opensans text-sm font-semibold`}
          >
            {Menu.map(menuItem => (
              <Link
                key={menuItem}
                page={menuItem}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            ))}
          </div>
        ) : (
          <div>
            <button
              className="rounded-full bg-red p-2 select-none"
              onClick={event => handleMenuButtonClick(event)}
            >
              <img src={MenuIcon} alt="menu-icon" />
            </button>
          </div>
        )}
        {!isDesktop && (
          <div
            onClick={event => event.stopPropagation()}
            className={`transition-all duration-500 ${
              isMenuToggled ? 'right-0' : 'right-[-268px]'
            } fixed bottom-0 h-full w-[268px] z-50 rounded-l-lg bg-gradient-to-r from-violet-500 to-fuchsia-500`}
          >
            <div className="flex flex-col gap-10 text-2xl text-deep-blue ml-[26%] mt-[70px]">
              {Menu.map(menuItem => (
                <Link
                  key={menuItem}
                  page={menuItem}
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
