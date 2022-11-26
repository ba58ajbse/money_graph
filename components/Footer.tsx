'use client'

import HomeIcon from '@mui/icons-material/Home'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'
import CurrencyYenIcon from '@mui/icons-material/CurrencyYen'

const Footer = () => {
  return (
    <footer className="w-full h-14 flex justify-around items-center border-t absolute bottom-0">
      <button type="button" className="w-1/3 border-r-2">
        <HomeIcon />
      </button>
      <button type="button" className="w-1/3 border-r-2">
        <AccountBalanceIcon />
      </button>
      <button type="button" className="w-1/3">
        <CurrencyYenIcon />
      </button>
    </footer>
  )
}

export default Footer
