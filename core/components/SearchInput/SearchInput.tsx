import { MdSearch } from 'react-icons/md'
import AbstractInput from '../AbstractInput'

type SearchInputProps = {}

const SearchInput = ({}: SearchInputProps) => {
  return (
    <div className="mt-1 relative rounded-md shadow-sm">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <MdSearch className="h-5 w-5 text-white" aria-hidden="true" />
      </div>
      <AbstractInput className="pl-10" />
    </div>
  )
}

SearchInput.displayName = 'SearchInput'

export default SearchInput
export type { SearchInputProps }
