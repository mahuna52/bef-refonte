import Hero from '../components/Hero'
import FourSpaces from '../components/FourSpaces'
import Cycle from '../components/Cycle'
import ProjectsGrid from '../components/ProjectsGrid'
import JoinButton from '../components/JoinButton'

export default function Home() {
  return (
    <div className="space-y-12">
      <Hero />
      <section className="container">
        <FourSpaces />
      </section>
      <section className="bg-bg py-12">
        <div className="container">
          {/* how it works placeholder */}
        </div>
      </section>
      <section className="container py-12">
        <Cycle />
      </section>
      <section className="container py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-display">Projets en focus</h2>
          <JoinButton />
        </div>
        <ProjectsGrid />
      </section>
    </div>
  )
}
