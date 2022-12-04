'use client'
import { signOut } from 'next-auth/react'
import MenuIcon from '@mui/icons-material/Menu'

const Header = () => {
  return (
    <header className="border-b">
      <nav className="flex justify-center relative bg-gray-800 w-screen max-w-4xl h-14">
        <button
          type="button"
          className="leading-14 absolute left-2"
          onClick={() => signOut()}
        >
          Sign out
        </button>
        <h3 className="m-0 text-2xl leading-14">Home</h3>
        <button type="button" className="leading-14 absolute right-2">
          <MenuIcon className="text-3xl" />
        </button>
      </nav>
    </header>
  )
}

export default Header
