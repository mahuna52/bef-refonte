export default function Header(){
  return (
    <header className="bg-white border-b">
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-4">
          <img src="/assets/logo-placeholder.svg" alt="BEF" className="h-10" />
        </div>
        <nav className="hidden md:flex gap-6 font-medium">
          <a href="#" className="text-sm">ESPACES</a>
          <a href="#" className="text-sm">PROJETS</a>
          <a href="#" className="text-sm">ÉCOSYSTÈME</a>
          <a href="#" className="text-sm">À PROPOS</a>
        </nav>
        <div className="hidden md:block">
          <a href="/signup" className="inline-block bg-bef-500 text-white px-4 py-2 rounded-lg">REJOINDRE BEF</a>
        </div>
      </div>
    </header>
  )
}
