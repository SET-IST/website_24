import classNames from 'classnames'
import { Suspense, lazy, useId, useState } from 'react'
//  Assets
import BurgerIcon from '../../../core/assets/icons/system/burger.svg'
//  Types
import type { HTMLAttributes } from 'react'

const BurgerMenu = lazy(() => import('../BurgerMenu'))

type BurgerMenuNavItemProps = HTMLAttributes<HTMLDivElement> & {
  isInverted: boolean
}

const BurgerMenuNavItem = ({
  className,
  isInverted,
  ...props
}: BurgerMenuNavItemProps) => {
  const menuId = useId()
  const [isMenuDisplayed, setIsMenuDisplayed] = useState(false)

  const displayMenu = () => {
    setIsMenuDisplayed(true)
  }

  const closeMenu = () => {
    setIsMenuDisplayed(false)
  }

  return (
    <>
      <BurgerIcon
        role="button"
        aria-haspopup="menu"
        aria-controls={menuId}
        aria-expanded={isMenuDisplayed}
        fill={isInverted ? '#fafafa' : 'rgb(0 145 218)'}
        stroke={isInverted ? '#fafafa' : 'rgb(0 145 218)'}
        className={classNames(className, 'flex-none m-2 cursor-pointer')}
        onClick={() => {
          displayMenu()
        }}
      />
      <Suspense>
        <BurgerMenu
          id={menuId}
          isMenuDisplayed={isMenuDisplayed}
          handleClose={() => closeMenu()}
          {...props}
        />
      </Suspense>
    </>
  )
}

BurgerMenuNavItem.displayName = 'BurgerMenuNavItem'

export default BurgerMenuNavItem
export type { BurgerMenuNavItemProps }
