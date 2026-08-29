import Link from 'next/link'
import Image from 'next/image'
import JoinButton from '@/components/JoinButton'

export default function ProjectDetail({ params }: { params: { slug: string } }){
  const { slug } = params

  // Placeholder data — replace with real fetch to CMS or API
  const project = {
    name: slug.replace(/-/g, ' ').toUpperCase(),
    sector: 'Secteur non défini',
    location: '—',
    description: 'Description du projet à venir. Cette page est un squelette pour recevoir les données détaillées du projet (objectifs, besoins, montant recherché, calendrier, photos, contacts, etc.).'
  }

  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="relative h-64 rounded-lg overflow-hidden shadow">
          <Image src="/assets/project-placeholder.webp" alt={project.name} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h1 className="text-2xl font-semibold">{project.name}</h1>
          <p className="text-sm text-muted">{project.sector} • {project.location}</p>
          <p className="mt-4 text-sm">{project.description}</p>

          <div className="mt-6 flex gap-3">
            <JoinButton />
            <Link href="/" className="text-bef-500">← Retour</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
