export default function Contacto() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white pt-32 px-8 pb-20 flex items-center justify-center">
      
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Columna Izquierda: Mensaje de invitación */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Empecemos a <span className="text-[#D4AF37]">construir.</span></h1>
          <p className="text-zinc-400 text-lg leading-relaxed mb-8">
            Actualmente estoy abierto a nuevas oportunidades laborales, roles de entrada (entry-level) o proyectos freelance. Si tu equipo busca un desarrollador versátil, o si tienes un problema de infraestructura que resolver, hablemos.
          </p>
        </div>

        {/* Columna Derecha: Tarjetas de Contacto */}
        <div className="flex flex-col gap-4">
          
          {/* Tarjeta de Correo Electrónico */}
          <a 
            href="mailto:sgi_03@hotmail.com" 
            className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 hover:border-[#D4AF37] transition-all duration-300 group"
          >
            <h3 className="text-xs tracking-widest text-zinc-500 mb-2 font-bold">CORREO ELECTRÓNICO</h3>
            <p className="text-lg text-white group-hover:text-[#D4AF37] transition-colors">
              sgi_03@hotmail.com
            </p>
          </a>

          {/* Tarjeta de Ubicación */}
          <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
            <h3 className="text-xs tracking-widest text-zinc-500 mb-2 font-bold">UBICACIÓN</h3>
            <p className="text-lg text-white">
              Coacalco de Berriozábal, Estado de México
            </p>
          </div>

          {/* Tarjeta de LinkedIn (Puedes actualizar el enlace de href más tarde) */}
          <a 
            href="https://linkedin.com/" 
            target="_blank"
            className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 hover:border-[#D4AF37] transition-all duration-300 group"
          >
            <h3 className="text-xs tracking-widest text-zinc-500 mb-2 font-bold">LINKEDIN</h3>
            <p className="text-lg text-white group-hover:text-[#D4AF37] transition-colors">
              Conectar profesionalmente
            </p>
          </a>

        </div>
      </div>

    </main>
  );
}