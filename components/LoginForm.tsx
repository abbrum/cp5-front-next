'use client'

import { useEffect, useState, type FormEvent } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginForm() {
  const router = useRouter()
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    if (localStorage.getItem('token')) {
      router.push('/cards')
    }
  }, [router])

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError('')

    try {
      const request = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user, password }),
      })
      const data = await request.json()

      if (!request.ok) {
        setError(data.message)
        return
      }

      localStorage.setItem('token', data.token)
      router.push('/cards')
    } catch {
      setError('Erro ao conectar com o servidor.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 bg-white p-6 rounded shadow w-80">
      <label htmlFor="user">Usuário:</label>
      <input
        className="border p-2 rounded"
        type="text"
        id="user"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        required
      />

      <label htmlFor="password">Senha:</label>
      <input
        className="border p-2 rounded"
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      {error && <p className="text-red-600">{error}</p>}

      <button className="bg-red-600 text-white px-4 py-2 rounded" type="submit">
        Entrar
      </button>
    </form>
  )
}
