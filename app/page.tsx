import LoginForm from '@/components/LoginForm'

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-4 py-20">
      <h1 className="text-3xl font-bold">Login</h1>
      <LoginForm />
    </main>
  )
}
