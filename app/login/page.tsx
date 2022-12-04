'use client'

import { useState } from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

const Login = () => {
  const [id, setId] = useState('')
  const [password, setPassword] = useState('')

  const handlerSubmit = () => {
    console.log('call submit')
  }
  return (
    <main className="flex justify-center h-full w-screen">
      <div className="mt-8">
        <form onSubmit={handlerSubmit}>
          <div>
            <TextField id="id" label="id" variant="standard" />
          </div>
          <br />
          <div>
            <TextField
              id="id"
              type="password"
              label="password"
              autoComplete="current-password"
              variant="standard"
            />
          </div>
          <br />
          <div>
            <Button type="submit">Log in</Button>
          </div>
        </form>
      </div>
    </main>
  )
}

export default Login
