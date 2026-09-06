import { FaJava, FaNetworkWired, FaServer, FaProjectDiagram, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiNextdotjs, SiReact, SiTailwindcss, SiJavascript, SiSwift, SiXcode, SiAndroidstudio, SiDocker, SiCisco, SiNodedotjs, SiMysql, SiSqlite, SiPhp } from "react-icons/si";

export default function Inicio() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white flex flex-col items-center pt-20 lg:pt-24 px-8 pb-20">

      {/* Contenedor principal: divide la pantalla en 1 columna en celulares y 2 en computadoras (md:grid-cols-2) */}
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center">

        {/* Columna Izquierda: Textos y Botones */}
        <div className="flex flex-col gap-6 lg:col-span-7">
          
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Ingeniero en TI: <span className="text-[#D4AF37]">Desarrollo Multiplataforma </span> & <span className="text-[#D4AF37]">Arquitectura de Red</span>.
          </h1>

          <p className="text-zinc-400 text-lg leading-relaxed text-justify">
            Soy un Ingeniero en Tecnologías de la Información con pasión en la resolución de problemas tecnológicos que logren un alto impacto, con experiencia básica (recién egresado) buscando el aprendizaje continuo de nuevas tecnologías, herramientas y soluciones para mantenerme a nivel en el área laboral.
          </p>

          <p className="text-zinc-400 text-lg leading-relaxed text-justify">
            Con un enfoque doble, me especializo en el desarrollo de aplicaciones móviles y web con la utilización de tecnologías como Next.js, React y nativas como Swift, Android.     Permitiendome agregar la configuración de bases de datos con MySQL y contenedores Dockers VLANs, enrutamiento y VoIP. Permitiendome agregar la configuración de bases de datos con MySQL y contenedores Docker.
          </p>

          <p className="text-zinc-400 text-lg leading-relaxed text-justify">
            Mi valor agregado y objetivo principal es crear productos efectivos y escalables, que no solo cumplan con los requisitos técnicos, sino que ofrezcan al usuario una experiencia llamativa, intuitiva y funcional.
          </p>

          <div className="flex flex-wrap gap-4 mt-4">
            {/* Botón CV Desarrollo */}
            <a 
              href="/cv-desarrollo.pdf" 
              target="_blank" 
              className="bg-[#D4AF37] text-zinc-950 font-bold px-6 py-3 rounded-md hover:bg-[#b5952f] transition-all duration-300 flex items-center gap-2 shadow-[0_0_15px_rgba(212,175,55,0.4)]"
            >
              CV Software / Web
            </a>
            
            {/* Botón CV Redes */}
            <a 
              href="/cv-redes.pdf" 
              target="_blank" 
            className="bg-[#D4AF37] text-zinc-950 font-bold px-6 py-3 rounded-md hover:bg-[#b5952f] transition-all duration-300 flex items-center gap-2 shadow-[0_0_15px_rgba(212,175,55,0.4)]"            >
              CV Infraestructura
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
        <div className="flex justify-center lg:justify-end lg:col-span-5">
          {/* Contenedor de la foto con borde dorado tenue y un ligero resplandor (sombra) */}
          <div className="relative w-72 h-72 lg:w-[400px] lg:h-[400px] rounded-full border-4 border-[#D4AF37]/30 overflow-hidden shadow-[0_0_40px_rgba(212,175,55,0.15)]">
            <img
              src="/perfil.jpg"
              alt="Sebastián - Ingeniero en TI"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>

      {/* Sección de Habilidades Tecnológicas */}
      <div className="max-w-6xl w-full mt-32 mb-20">
        <h2 className="text-3xl font-bold mb-8 text-white">
          Habilidades <span className="text-[#D4AF37]">Tecnológicas</span>
        </h2>
        
        {/* Cuadrícula Bento UI para Habilidades */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Tarjeta 1: Web & Frontend */}
          <div className="group bg-zinc-900/30 backdrop-blur-md rounded-3xl p-8 border border-zinc-800 hover:border-[#D4AF37]/50 hover:shadow-[0_0_30px_rgba(212,175,55,0.1)] transition-all duration-500">
            <h3 className="text-lg tracking-widest text-zinc-400 mb-6 font-bold group-hover:text-zinc-200 transition-colors">WEB & FRONTEND</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-zinc-950/50 p-3 rounded-xl border border-zinc-800/50 flex items-center gap-3">
                <SiNextdotjs className="text-xl text-zinc-500 group-hover:text-white transition-colors" />
                <span className="text-sm font-semibold text-zinc-300">Next.js</span>
              </div>
              <div className="bg-zinc-950/50 p-3 rounded-xl border border-zinc-800/50 flex items-center gap-3">
                <SiReact className="text-xl text-zinc-500 group-hover:text-[#61DAFB] transition-colors" />
                <span className="text-sm font-semibold text-zinc-300">React</span>
              </div>
              <div className="bg-zinc-950/50 p-3 rounded-xl border border-zinc-800/50 flex items-center gap-3">
                <SiTailwindcss className="text-xl text-zinc-500 group-hover:text-[#06B6D4] transition-colors" />
                <span className="text-sm font-semibold text-zinc-300">Tailwind</span>
              </div>
              <div className="bg-zinc-950/50 p-3 rounded-xl border border-zinc-800/50 flex items-center gap-3">
                <SiJavascript className="text-xl text-zinc-500 group-hover:text-[#F7DF1E] transition-colors" />
                <span className="text-sm font-semibold text-zinc-300">JavaScript</span>
              </div>
              <div className="bg-zinc-950/50 p-3 rounded-xl border border-zinc-800/50 flex items-center gap-3">
                <FaHtml5 className="text-xl text-zinc-500 group-hover:text-[#E34F26] transition-colors" />
                <span className="text-sm font-semibold text-zinc-300">HTML5</span>
              </div>
              <div className="bg-zinc-950/50 p-3 rounded-xl border border-zinc-800/50 flex items-center gap-3">
                <FaCss3Alt className="text-xl text-zinc-500 group-hover:text-[#1572B6] transition-colors" />
                <span className="text-sm font-semibold text-zinc-300">CSS3</span>
              </div>
            </div>
          </div>

          {/* Tarjeta 2: Desarrollo Móvil */}
          <div className="group bg-zinc-900/30 backdrop-blur-md rounded-3xl p-8 border border-zinc-800 hover:border-[#D4AF37]/50 hover:shadow-[0_0_30px_rgba(212,175,55,0.1)] transition-all duration-500">
            <h3 className="text-lg tracking-widest text-zinc-400 mb-6 font-bold group-hover:text-zinc-200 transition-colors">DESARROLLO MÓVIL</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-zinc-950/50 p-3 rounded-xl border border-zinc-800/50 flex items-center gap-3">
                <SiSwift className="text-xl text-zinc-500 group-hover:text-[#F05138] transition-colors" />
                <span className="text-sm font-semibold text-zinc-300">SwiftUI</span>
              </div>
              <div className="bg-zinc-950/50 p-3 rounded-xl border border-zinc-800/50 flex items-center gap-3">
                <SiXcode className="text-xl text-zinc-500 group-hover:text-[#157EFB] transition-colors" />
                <span className="text-sm font-semibold text-zinc-300">Xcode</span>
              </div>
              <div className="bg-zinc-950/50 p-3 rounded-xl border border-zinc-800/50 flex items-center gap-3">
                <FaJava className="text-xl text-zinc-500 group-hover:text-[#5382A1] transition-colors" />
                <span className="text-sm font-semibold text-zinc-300">Java</span>
              </div>
              <div className="bg-zinc-950/50 p-3 rounded-xl border border-zinc-800/50 flex items-center gap-3">
                <SiAndroidstudio className="text-xl text-zinc-500 group-hover:text-[#3DDC84] transition-colors" />
                <span className="text-sm font-semibold text-zinc-300">Android</span>
              </div>
            </div>
          </div>

          {/* Tarjeta 3: Redes e Infraestructura */}
          <div className="group bg-zinc-900/30 backdrop-blur-md rounded-3xl p-8 border border-zinc-800 hover:border-[#D4AF37]/50 hover:shadow-[0_0_30px_rgba(212,175,55,0.1)] transition-all duration-500 lg:row-span-2">
            <h3 className="text-lg tracking-widest text-zinc-400 mb-6 font-bold group-hover:text-zinc-200 transition-colors">REDES & INFRAESTRUCTURA</h3>
            <div className="grid grid-cols-1 gap-3">
              <div className="bg-zinc-950/50 p-3 rounded-xl border border-zinc-800/50 flex items-center gap-3">
                <FaNetworkWired className="text-xl text-zinc-500 group-hover:text-[#D4AF37] transition-colors" />
                <span className="text-sm font-semibold text-zinc-300">Ruteo & Switching</span>
              </div>
              <div className="bg-zinc-950/50 p-3 rounded-xl border border-zinc-800/50 flex items-center gap-3">
                <SiCisco className="text-xl text-zinc-500 group-hover:text-[#1BA0D7] transition-colors" />
                <span className="text-sm font-semibold text-zinc-300">VLANs & VoIP</span>
              </div>
              <div className="bg-zinc-950/50 p-3 rounded-xl border border-zinc-800/50 flex items-center gap-3">
                <SiDocker className="text-xl text-zinc-500 group-hover:text-[#2496ED] transition-colors" />
                <span className="text-sm font-semibold text-zinc-300">Docker</span>
              </div>
              <div className="bg-zinc-950/50 p-3 rounded-xl border border-zinc-800/50 flex items-center gap-3">
                <FaProjectDiagram className="text-xl text-zinc-500 group-hover:text-[#D4AF37] transition-colors" />
                <span className="text-sm font-semibold text-zinc-300">Packet Tracer</span>
              </div>
              <div className="bg-zinc-950/50 p-3 rounded-xl border border-zinc-800/50 flex items-center gap-3">
                <FaServer className="text-xl text-zinc-500 group-hover:text-white transition-colors" />
                <span className="text-sm font-semibold text-zinc-300">FileZilla Server</span>
              </div>
              <div className="bg-zinc-950/50 p-3 rounded-xl border border-zinc-800/50 flex items-center gap-3">
                <FaServer className="text-xl text-zinc-500 group-hover:text-[#183A61] transition-colors" />
                <span className="text-sm font-semibold text-zinc-300">VirtualBox</span>
              </div>
            </div>
          </div>

          {/* Tarjeta 4: Backend & Datos */}
          <div className="group bg-zinc-900/30 backdrop-blur-md rounded-3xl p-8 border border-zinc-800 hover:border-[#D4AF37]/50 hover:shadow-[0_0_30px_rgba(212,175,55,0.1)] transition-all duration-500 md:col-span-2 lg:col-span-2">
            <h3 className="text-lg tracking-widest text-zinc-400 mb-6 font-bold group-hover:text-zinc-200 transition-colors">BACKEND & DATOS</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="bg-zinc-950/50 p-3 rounded-xl border border-zinc-800/50 flex items-center gap-3">
                <SiNodedotjs className="text-xl text-zinc-500 group-hover:text-[#339933] transition-colors" />
                <span className="text-sm font-semibold text-zinc-300">Node.js</span>
              </div>
              <div className="bg-zinc-950/50 p-3 rounded-xl border border-zinc-800/50 flex items-center gap-3">
                <SiMysql className="text-xl text-zinc-500 group-hover:text-[#4479A1] transition-colors" />
                <span className="text-sm font-semibold text-zinc-300">MySQL</span>
              </div>
              <div className="bg-zinc-950/50 p-3 rounded-xl border border-zinc-800/50 flex items-center gap-3">
                <SiSqlite className="text-xl text-zinc-500 group-hover:text-[#003B57] transition-colors" />
                <span className="text-sm font-semibold text-zinc-300">SQLite / Room</span>
              </div>
              <div className="bg-zinc-950/50 p-3 rounded-xl border border-zinc-800/50 flex items-center gap-3">
                <SiPhp className="text-xl text-zinc-500 group-hover:text-[#777BB4] transition-colors" />
                <span className="text-sm font-semibold text-zinc-300">PHP / Apache</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}