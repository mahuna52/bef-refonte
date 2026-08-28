import ProjectCard from './ProjectCard'
const sample = [
  { slug:'ndjoy', name:'NDJOY', sector:'Transports & Tourisme', location:'Cotonou', image:'/assets/ndjoy.webp', short:'Voyagez confortablement entre Porto‑Novo et Cotonou.' },
  { slug:'couture', name:'Atelier Couture', sector:'Mode & Artisanat', location:'Porto‑Novo', image:'/assets/couture.webp', short:'Atelier d’apprentissage et production locale.' },
  { slug:'coiffure', name:'Salon Espoir', sector:'Services', location:'Cotonou', image:'/assets/coiffure.webp', short:'Salon de coiffure et formation de jeunes coiffeurs.' }
]
export default function ProjectsGrid(){
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {sample.map(p => <ProjectCard key={p.slug} project={p} />)}
    </div>
  )
}
