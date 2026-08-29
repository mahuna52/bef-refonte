import Link from 'next/link'
import Image from 'next/image'
export default function ProjectCard({ project }){
  return (
    <Link href={`/projets/${project.slug}`} className="block rounded-lg overflow-hidden shadow-sm hover:shadow-md">
      <div className="h-48 bg-gray-100 relative">
        <Image src={project.image || '/assets/project-placeholder.webp'} alt={project.name} fill className="object-cover" />
      </div>
      <div className="p-4 bg-white">
        <h3 className="font-semibold">{project.name}</h3>
        <p className="text-sm text-muted">{project.sector} • {project.location || '—'}</p>
        <p className="mt-2 text-sm text-muted">{project.short}</p>
        <div className="mt-4">
          <span className="text-bef-500 font-medium">DÉCOUVRIR →</span>
        </div>
      </div>
    </Link>
  )
}
