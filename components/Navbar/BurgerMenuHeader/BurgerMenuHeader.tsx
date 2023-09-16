//  Assets
import CloseIcon from '@/core/assets/icons/system/close.svg'
import SetLogoInverted from '@/core/assets/logos/logo_set_inverted.svg'

type BurgerMenuHeaderProps = {
  menuId: string
  handleClose: () => void
}

const BurgerMenuHeader = ({ menuId, handleClose }: BurgerMenuHeaderProps) => {
  return (
    <div className="flex flex-wrap items-center justify-between px-8 py-4 bg-transparent">
      <SetLogoInverted aria-hidden className="w-28 h-auto" />
      <CloseIcon
        role="button"
        stroke="white"
        fill="white"
        aria-controls={menuId}
        className="flex-none ml-4"
        onClick={() => handleClose()}
      />
    </div>
  )
}

BurgerMenuHeader.displayName = 'BurgerMenuHeader'

export default BurgerMenuHeader
export type { BurgerMenuHeaderProps }
