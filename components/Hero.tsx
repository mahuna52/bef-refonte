'use client'
import Image from 'next/image'
import Link from 'next/link'
import JoinButton from './JoinButton'

export default function Hero(){
  return (
    <header className="relative h-[52vh] min-h-[420px] md:h-[68vh] flex items-center">
      <div className="absolute inset-0 -z-10">
        <Image src="/assets/hero-composite.webp" alt="Écosystème économique béninois" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/35" />
      </div>
      <div className="container text-white px-4">
        <div className="max-w-2xl">
          <Image src="/assets/logo-placeholder.svg" alt="BEF" width={160} height={48} className="mb-6" />
          <h1 className="text-3xl md:text-5xl leading-tight font-display font-semibold">LES BÉNINOIS, PAR SOLIDARITÉ NATIONALE, FINANCENT LES BÉNINOIS</h1>
          <p className="mt-4 text-lg md:text-xl opacity-90">Une plateforme solidaire pour identifier, renforcer et financer les entrepreneurs béninois.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link href="/signup" aria-label="Je rejoins BEF" className="w-full sm:w-auto">
              <span className="inline-flex items-center justify-center bg-bef-500 hover:bg-bef-600 text-white rounded-lg px-6 py-3 text-sm font-medium">JE REJOINS BEF</span>
            </Link>
            <a href="#model" aria-label="Découvrir le modèle" className="w-full sm:w-auto">
              <span className="inline-flex items-center justify-center border border-white text-white rounded-lg px-6 py-3 text-sm font-medium bg-white/10">DÉCOUVRIR LE MODÈLE</span>
            </a>
          </div>
          <p className="mt-6 text-sm bg-white/10 inline-block px-3 py-1 rounded">UNE COMMUNAUTÉ EN CONSTRUCTION — REJOIGNEZ LES PREMIERS MEMBRES</p>
        </div>
      </div>
    </header>
  )
}
