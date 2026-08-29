'use client'
import Image from 'next/image'
import JoinButton from './JoinButton'

export default function Hero(){
  return (
    <header className="relative h-[52vh] min-h-[420px] md:h-[68vh] flex items-center">
      <div className="absolute inset-0 -z-10">
        <img src="/assets/hero-composite.webp" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/35" />
      </div>
      <div className="container text-white px-4">
        <div className="max-w-2xl">
          <img src="/assets/logo-placeholder.svg" alt="BEF" className="h-12 mb-6" />
          <h1 className="text-3xl md:text-5xl leading-tight font-display font-semibold">LES BÉNINOIS, PAR SOLIDARITÉ NATIONALE, FINANCENT LES BÉNINOIS</h1>
          <p className="mt-4 text-lg md:text-xl opacity-90">Une plateforme solidaire pour identifier, renforcer et financer les entrepreneurs béninois.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="/signup" className="inline-block">
              <button className="bg-bef-500 hover:bg-bef-600 text-white rounded-lg px-6 py-3 text-sm font-medium w-full sm:w-auto">JE REJOINS BEF</button>
            </a>
            <a href="#model" className="inline-block">
              <button className="border border-white text-white rounded-lg px-6 py-3 text-sm font-medium w-full sm:w-auto bg-white/10">DÉCOUVRIR LE MODÈLE</button>
            </a>
          </div>
          <p className="mt-6 text-sm bg-white/10 inline-block px-3 py-1 rounded">UNE COMMUNAUTÉ EN CONSTRUCTION — REJOIGNEZ LES PREMIERS MEMBRES</p>
        </div>
      </div>
    </header>
  )
}
