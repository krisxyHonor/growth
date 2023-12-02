import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Menu } from '../constants'

const DotGroup = ({ selectedPage, setSelectedPage }) => {
  const selectedStyles = `relative bg-yellow before:absolute before:w-6 before:h-6 before:rounded-full
    before:border-2 before:border-yellow before:left-[-50%] before:top-[-50%]`

  return (
    <div className="flex flex-col gap-6 fixed top-[60%] right-7">
      {Menu.map(menuItem => (
        <AnchorLink
          key={menuItem}
          href={`#${menuItem.toLocaleLowerCase()}`}
          className={`${
            selectedPage === menuItem.toLocaleLowerCase()
              ? selectedStyles
              : 'bg-dark-grey'
          } w-3 h-3 rounded-full`}
          onClick={() => setSelectedPage(menuItem.toLocaleLowerCase())}
        />
      ))}
    </div>
  )
}

export default DotGroup
