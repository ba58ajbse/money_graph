'use client'

import { signIn, useSession } from 'next-auth/react'
import { ReactNode } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

const AuthorizedLayout = ({ children }: { children: ReactNode }) => {
  const { data: session } = useSession()

  if (!session || !session.user) {
    return (
      <>
        <div className="h-screen flex flex-col justify-center items-center">
          <div className="">
            <h2 className="text-2xl">Not Signed in.</h2>
            <br />
            <div className="flex justify-center">
              <button
                className="px-10 py-4 font-semibold text-xl border-solid border-2 border-slate-400 rounded-md"
                onClick={() => signIn()}
              >
                Log in
              </button>
            </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default AuthorizedLayout
