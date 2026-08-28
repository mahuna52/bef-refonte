export default function Cycle(){
  const steps = ['IDÉE','ACCOMPAGNEMENT','FINANCEMENT','CONSTRUCTION','CROISSANCE','AUTONOMIE','SORTIE']
  return (
    <section aria-labelledby="cycle-title" className="py-8">
      <h2 id="cycle-title" className="text-2xl font-display mb-6">LE CYCLE BÉNINOIS DE CRÉATION DE VALEUR</h2>
      <div className="overflow-x-auto">
        <ol className="flex gap-6 items-center min-w-[900px]">
          {steps.map((s, i) => (
            <li key={s} className="flex-shrink-0 w-44 text-center">
              <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                <div className="text-sm font-semibold">{s}</div>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <p className="mt-4 text-sm text-muted">IDÉE → ACCOMPAGNEMENT → FINANCEMENT → CONSTRUCTION DE L'ENTREPRISE → CROISSANCE → AUTONOMIE → SORTIE PROGRESSIVE DE BEF</p>
    </section>
  )
}
