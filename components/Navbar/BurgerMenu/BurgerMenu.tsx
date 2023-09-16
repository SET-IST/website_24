import cn from 'classnames'
import { useEffect, useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
//  Components
import Backdrop from '../../../core/components/Backdrop/Backdrop'
import BurgerMenuMain from '../BurgerMenuMain/BurgerMenuMain'
import BurgerMenuHeader from '../BurgerMenuHeader/BurgerMenuHeader'
//  Styles
import styles from './BurgerMenu.module.css'
//  Types
import type { HTMLAttributes } from 'react'

type BurgerMenuProps = Omit<HTMLAttributes<HTMLDivElement>, 'id'> & {
  id: string
  title?: string
  handleClose: () => void
  isMenuDisplayed: boolean
}

const BurgerMenu = ({
  isMenuDisplayed,
  handleClose,
  className,
  id,
  ...props
}: BurgerMenuProps) => {
  const burgerMenuEl = useRef(null)

  useEffect(() => {
    const handleResize = () => window.innerWidth > 1024 && handleClose()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      {isMenuDisplayed && <Backdrop onClick={() => handleClose()} />}
      <CSSTransition
        nodeRef={burgerMenuEl}
        in={isMenuDisplayed}
        timeout={200}
        mountOnEnter
        unmountOnExit
        classNames={{
          enter: styles.enter,
          enterActive: styles.enterActive,
          exit: styles.exit,
          exitActive: styles.exitActive,
        }}
      >
        <section
          ref={burgerMenuEl}
          role="menu"
          className={cn(
            className,
            'lg:hidden flex flex-col fixed inset-y-0 right-0 w-screen z-50 bg-primary-500'
          )}
          {...props}
        >
          <BurgerMenuHeader menuId={id} handleClose={handleClose} />
          <BurgerMenuMain onClose={handleClose}/>
        </section>
      </CSSTransition>
    </>
  )
}

BurgerMenu.displayName = 'BurgerMenu'

export default BurgerMenu
export type { BurgerMenuProps }
