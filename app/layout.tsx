@import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata = {
  title: 'BÉNIN EQUITY FUNDING (BEF)',
  description: 'Les Béninois financent les Béninois — plateforme solidaire'
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="bg-white text-gray-900 antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
