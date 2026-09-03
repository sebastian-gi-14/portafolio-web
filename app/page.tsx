export default function Inicio() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white flex items-center justify-center px-8 pt-1">
      
      {/* Contenedor principal: divide la pantalla en 1 columna en celulares y 2 en computadoras (md:grid-cols-2) */}
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Columna Izquierda: Textos y Botones */}
        <div className="flex flex-col gap-6">
          
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Ingeniero en TI especializado en <span className="text-[#D4AF37]">Desarrollo Multiplataforma</span> e <span className="text-[#D4AF37]">Infraestructura</span>.
          </h1>

          <p className="text-zinc-400 text-lg leading-relaxed">
            Transformo ideas en soluciones eficientes. Domino entornos móviles (Android Studio, Xcode) y web (React, Next.js, Node), integrándolos con bases de datos y Docker. Además, diseño y optimizo arquitecturas de red corporativas. Mi enfoque es resolver problemas complejos con código limpio y sistemas robustos.
          </p>

          <div className="flex flex-wrap gap-4 mt-4">
            {/* Botón Primario: Dorado sólido */}
            <a 
              href="/cv.pdf" 
              target="_blank" 
              className="bg-[#D4AF37] text-zinc-950 font-bold px-6 py-3 rounded-md hover:bg-[#b5952f] transition-colors duration-300"
            >
              Descargar CV
            </a>
            
            {/* Botón Secundario: Borde dorado, fondo transparente */}
            <a 
              href="https://github.com/sebastian-gi-14" 
              target="_blank" 
              className="border-2 border-[#D4AF37] text-[#D4AF37] font-bold px-6 py-3 rounded-md hover:bg-[#D4AF37] hover:text-zinc-950 transition-colors duration-300"
            >
              Mi GitHub
            </a>
          </div>
        </div>

        {/* Columna Derecha: Fotografía Profesional */}
        <div className="flex justify-center md:justify-end">
          {/* Contenedor de la foto con borde dorado tenue y un ligero resplandor (sombra) */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-[#D4AF37]/30 overflow-hidden shadow-[0_0_40px_rgba(212,175,55,0.15)]">
            <img
              src="/perfil.jpg"
              alt="Sebastián - Ingeniero en TI"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </main>
  );
}