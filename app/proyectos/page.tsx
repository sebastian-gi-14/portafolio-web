export default function Proyectos() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white pt-32 px-8 pb-20">
      
      {/* Contenedor centralizado */}
      <div className="max-w-6xl mx-auto w-full">
        
        <h1 className="text-4xl font-bold mb-4">Mis Proyectos</h1>
        <p className="text-zinc-400 mb-12 text-lg">
          Una colección de soluciones multiplataforma, desarrollo nativo y arquitectura web.
        </p>

        {/* Cuadrícula Bento UI (CSS Grid) */}
        {/* En móvil es 1 columna. En pantallas medianas (md) se divide en 3 columnas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          
          {/* Tarjeta 1: Ludofracc (Destacado: Ocupa 2 columnas) */}
          <div className="md:col-span-2 bg-zinc-900 rounded-3xl p-8 border border-zinc-800 hover:border-[#D4AF37] transition-all duration-300 flex flex-col justify-between group">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-[#D4AF37] transition-colors">
                Ludofracc
              </h2>
              <p className="text-zinc-400 line-clamp-3">
                Aplicación nativa para el ecosistema Apple. Desarrollada completamente con SwiftUI, integrando lógica de vistas, modelos de datos y almacenamiento de progreso en el dispositivo.
              </p>
            </div>
            {/* Etiquetas de tecnología */}
            <div className="flex gap-2 mt-4 flex-wrap">
              <span className="px-3 py-1 bg-zinc-950 border border-zinc-800 text-xs rounded-full text-zinc-300">SwiftUI</span>
              <span className="px-3 py-1 bg-zinc-950 border border-zinc-800 text-xs rounded-full text-zinc-300">Xcode</span>
              <span className="px-3 py-1 bg-zinc-950 border border-zinc-800 text-xs rounded-full text-zinc-300">iOS</span>
            </div>
          </div>

          {/* Tarjeta 2: Portafolio Web (Normal: 1 columna) */}
          <div className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800 hover:border-[#D4AF37] transition-all duration-300 flex flex-col justify-between group">
            <div>
              <h2 className="text-xl font-bold text-white mb-2 group-hover:text-[#D4AF37] transition-colors">
                Portafolio Personal
              </h2>
              <p className="text-zinc-400 line-clamp-3">
                Arquitectura web moderna y responsiva utilizando Server Components y diseño minimalista.
              </p>
            </div>
            <div className="flex gap-2 mt-4 flex-wrap">
              <span className="px-3 py-1 bg-zinc-950 border border-zinc-800 text-xs rounded-full text-zinc-300">Next.js</span>
              <span className="px-3 py-1 bg-zinc-950 border border-zinc-800 text-xs rounded-full text-zinc-300">React</span>
              <span className="px-3 py-1 bg-zinc-950 border border-zinc-800 text-xs rounded-full text-zinc-300">Tailwind</span>
            </div>
          </div>

          {/* Tarjeta 3: Oganigastos (Normal: 1 columna) */}
          <div className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800 hover:border-[#D4AF37] transition-all duration-300 flex flex-col justify-between group">
            <div>
              <h2 className="text-xl font-bold text-white mb-2 group-hover:text-[#D4AF37] transition-colors">
                Oganigastos
              </h2>
              <p className="text-zinc-400 line-clamp-3">
                Gestor de finanzas y gastos personales. Implementación de bases de datos locales para persistencia de información.
              </p>
            </div>
            <div className="flex gap-2 mt-4 flex-wrap">
              <span className="px-3 py-1 bg-zinc-950 border border-zinc-800 text-xs rounded-full text-zinc-300">Java</span>
              <span className="px-3 py-1 bg-zinc-950 border border-zinc-800 text-xs rounded-full text-zinc-300">Android Studio</span>
              <span className="px-3 py-1 bg-zinc-950 border border-zinc-800 text-xs rounded-full text-zinc-300">SQLite / Room</span>
            </div>
          </div>

          {/* Tarjeta 4: Proyecto Futuro (Destacado: Ocupa 2 columnas) */}
          <div className="md:col-span-2 bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-3xl p-8 border border-dashed border-zinc-700 flex flex-col justify-center items-center text-center group hover:border-[#D4AF37]/50 transition-all duration-300">
            <h2 className="text-xl font-bold text-[#D4AF37] mb-3">
              En Desarrollo: Escáner de Coleccionables
            </h2>
            <p className="text-zinc-400 max-w-lg">
              Aplicación móvil para inventario de modelos a escala mediante reconocimiento óptico (OCR) y estados de colección.
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}