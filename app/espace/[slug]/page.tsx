import Link from 'next/link'
import JoinButton from '@/components/JoinButton'
import Image from 'next/image'

export default function EspacePage({ params }: { params: { slug: string } }) {
  const { slug } = params
  const titleMap: Record<string,string> = {
    entreprendre: 'ENTREPRENDRE',
    travailler: 'TRAVAILLER',
    apprendre: 'APPRENDRE & CHERCHER',
    echanger: 'ÉCHANGER'
  }
  const title = titleMap[slug] || slug

  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="relative h-64 rounded-lg overflow-hidden shadow">
          <Image src="/assets/space-placeholder.webp" alt={`${title} — BEF`} fill className="object-cover" />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute left-6 bottom-6 text-white">
            <h1 className="text-2xl font-semibold">{title}</h1>
            <p className="mt-1 text-sm opacity-90">Explorez les opportunités et ressources pour <strong>{title}</strong>.</p>
          </div>
        </div>

        <div className="space-y-4 bg-white p-6 rounded-lg shadow-sm">
          <p className="text-sm text-muted">Page de présentation de l'espace. Contenu à compléter : description, filtres, projets associés, ressources et parcours d'adhésion.</p>

          <div className="flex flex-col sm:flex-row gap-3">
            <JoinButton />
            <Link href="/" className="text-bef-500 self-start">← Retour à l’accueil</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
