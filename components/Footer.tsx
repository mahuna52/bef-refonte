export default function Footer(){
  return (
    <footer className="border-t bg-white mt-12">
      <div className="container py-6 text-sm text-muted">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} Bénin Equity Funding — Tous droits réservés.</div>
          <div className="flex gap-4">
            <a href="#" className="text-bef-500">Mentions</a>
            <a href="#" className="text-bef-500">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
