import Header from '@/components/Header'

export default function CardsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="max-w-5xl mx-auto p-6">{children}</main>
    </>
  )
}
