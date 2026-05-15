'use client';

import Image from 'next/image';

export default function FlyerPage() {
  return (
    <main className="h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center px-2 py-2 sm:p-4 overflow-hidden">
      <div className="w-full max-w-2xl h-full max-h-screen overflow-y-auto scrollbar-hide">
        {/* FLYER MEJORADO */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
          
          {/* HEADER PRINCIPAL CON IMAGEN */}
          <div className="relative bg-gradient-to-r from-slate-900 to-slate-800 overflow-hidden">
            <div className="relative w-full h-32 sm:h-48">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1ee5e5a48d262a0c8aa5bb8b33113452-SuMCSto24spzLwc0HSbAXs2OSnMICf.jpg"
                alt="Pollo delicioso a la brasa con papas doradas"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
            </div>

            {/* Título sobre la imagen */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-2">
              <h1 className="text-3xl sm:text-5xl font-black text-red-500 drop-shadow-xl leading-tight" style={{textShadow: '3px 3px 6px rgba(0,0,0,0.7)'}}>
                GRAN POLLADA
              </h1>
              <h2 className="text-2xl sm:text-4xl font-black text-amber-300 drop-shadow-lg">Y TRUCHADA</h2>
            </div>
          </div>

          {/* BENEFICIARIO */}
          <div className="bg-gradient-to-r from-red-600 to-red-500 px-4 sm:px-6 py-2 sm:py-3 text-center">
            <div className="text-xs font-black text-red-100 uppercase tracking-widest mb-1">Apoyemos a la Familia</div>
            <h2 className="text-xl sm:text-2xl font-black text-white drop-shadow-lg">ALVARADO</h2>
          </div>

          {/* CUERPO PRINCIPAL */}
          <div className="p-3 sm:p-4">
            {/* Texto Invitación */}
            <p className="text-xs sm:text-sm leading-snug text-slate-700 font-semibold mb-2">
              ¡Te invitamos a disfrutar de nuestra <span className="text-red-600 font-black">GRAN POLLADA Y TRUCHADA</span> Pro-Salud!
            </p>

            {/* GRID DE DETALLES - Responsivo */}
            <div className="grid grid-cols-3 gap-2 mb-2">
              {/* Fecha */}
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-2 border border-amber-200 text-center">
                <div className="text-lg mb-1">📅</div>
                <span className="text-xs font-black text-slate-600 uppercase tracking-wide block mb-1">Fecha</span>
                <span className="text-xs font-bold text-red-600">23 Mayo</span>
              </div>

              {/* Hora */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-2 border border-blue-200 text-center">
                <div className="text-lg mb-1">🕙</div>
                <span className="text-xs font-black text-slate-600 uppercase tracking-wide block mb-1">Hora</span>
                <span className="text-xs font-black text-blue-600">10:00 AM</span>
              </div>

              {/* Precio */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg p-2 border-2 border-amber-400 text-center">
                <div className="text-lg mb-1">💰</div>
                <span className="text-xs font-black text-slate-300 uppercase tracking-wide block mb-1">Precio</span>
                <span className="text-base font-black text-amber-400">S/ 20</span>
              </div>
            </div>

            

            {/* Menú Destacado */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-2 mb-2 border-2 border-amber-300">
              <span className="text-xs font-black text-slate-800 uppercase tracking-widest block mb-2">Menú: Pollo • Trucha • Papas • Choclo • Ensalada • Chicha</span>
            </div>

            {/* Segunda Imagen */}
            <div className="relative w-full h-24 rounded-lg overflow-hidden mb-2 border-2 border-slate-200 shadow-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/D4m_ncJXoAAvxX4-41haYSI5NlDvdWi0cbE8Xvq5HbwiNT.jpg"
                alt="Deliciosos platos con pescado y guarniciones"
                fill
                className="object-cover"
              />
            </div>

            {/* CTA Principal */}
            <div className="bg-gradient-to-r from-red-600 to-red-500 rounded-lg p-2 text-center mb-2 shadow-lg border border-red-700">
              <span className="text-xs font-black text-white drop-shadow-lg">¡TE ESPERAMOS!</span>
            </div>
          </div>

          {/* CONTACTO */}
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 px-4 sm:px-6 py-2 sm:py-3 border-t border-slate-700">
            <div className="text-center text-xs">
                <span className="text-slate-300 uppercase tracking-wide font-black block mb-1">Comunícate</span>
                <span className="text-amber-400 font-black block text-xs">914790780  •  901 945632755</span>
            </div>
          </div>

          {/* FOOTER */}
          <div className="bg-gradient-to-r from-red-600 to-red-500 px-4 sm:px-6 py-2 sm:py-3 border-t-4 border-red-700">
            <div className="text-center">
              <span className="text-sm font-black text-white drop-shadow-lg block">Apoya a la familia Alvarado</span>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
