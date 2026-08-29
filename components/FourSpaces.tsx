'use client'
import Link from 'next/link'

const spaces = [
  { id: 'entreprendre', label: 'ENTREPRENDRE', icon: '🚀', img: '/assets/couture.webp', desc: 'Projets et entreprises' },
  { id: 'travailler', label: 'TRAVAILLER', icon: '💼', img: '/assets/commerce.webp', desc: 'Offres et emplois' },
  { id: 'apprendre', label: 'APPRENDRE & CHERCHER', icon: '🎓', img: '/assets/apprendre.webp', desc: 'Formation & savoir' },
  { id: 'echanger', label: 'ÉCHANGER', icon: '🛒', img: '/assets/echanger.webp', desc: 'Marché & échange' }
]

export default function FourSpaces(){
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {spaces.map(s => (
        <Link key={s.id} href={`/espace/${s.id}`} className="group block rounded-lg overflow-hidden shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-bef-500">
          <div className="relative h-44 sm:h-40">
            <img src={s.img} alt={s.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
            <div className="absolute left-4 bottom-4 text-white">
              <div className="text-2xl">{s.icon}</div>
              <h3 className="font-semibold text-lg">{s.label}</h3>
              <p className="text-sm opacity-90">{s.desc}</p>
              <span className="mt-3 inline-block bg-white/10 px-3 py-1 rounded text-sm">ENTRER</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
