import { FaGithub, FaExternalLinkAlt, FaTools } from "react-icons/fa";

export default function Proyectos() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white pt-32 px-8 pb-20 flex flex-col items-center">
      
      <div className="max-w-6xl w-full">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Proyectos <span className="text-[#D4AF37]">Destacados.</span>
        </h1>
        <p className="text-zinc-400 text-lg mb-12 max-w-2xl">
          Una selección de mi trabajo abarcando desarrollo de software nativo, plataformas web escalables y arquitectura de infraestructura de red.
        </p>

        {/* Cuadrícula de Proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* 1. Propedéuticos (Web) */}
          <div className="bg-zinc-900/30 backdrop-blur-md rounded-3xl p-8 border border-zinc-800 hover:border-[#D4AF37]/50 hover:shadow-[0_0_30px_rgba(212,175,55,0.1)] transition-all duration-500 flex flex-col h-full">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-white">Plataforma Propedéutica</h3>
              <span className="bg-zinc-800 text-[#D4AF37] text-xs font-bold px-3 py-1 rounded-full">Full-Stack</span>
            </div>
            <p className="text-zinc-400 text-sm mb-6 flex-grow ">
              Sistema web de gestión académica con roles de usuario (alumno, profesor, admin) para nivelación en ciencias básicas. Integración de vistas modernas con backend relacional.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="text-xs bg-zinc-950 border border-zinc-800 px-2 py-1 rounded-md text-zinc-300">Next.js</span>
              <span className="text-xs bg-zinc-950 border border-zinc-800 px-2 py-1 rounded-md text-zinc-300">PHP</span>
              <span className="text-xs bg-zinc-950 border border-zinc-800 px-2 py-1 rounded-md text-zinc-300">MySQL</span>
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-zinc-500 hover:text-[#D4AF37] transition-colors"><FaGithub size={20} /></a>
            </div>
          </div>

          {/* 2. LudoFrac (iOS) */}
          <div className="bg-zinc-900/30 backdrop-blur-md rounded-3xl p-8 border border-zinc-800 hover:border-[#D4AF37]/50 hover:shadow-[0_0_30px_rgba(212,175,55,0.1)] transition-all duration-500 flex flex-col h-full">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-white">LudoFrac</h3>
              <span className="bg-zinc-800 text-[#157EFB] text-xs font-bold px-3 py-1 rounded-full">iOS Nativo</span>
            </div>
            <p className="text-zinc-400 text-sm mb-6 flex-grow">
              Aplicación móvil educativa para el aprendizaje de matemáticas mediante interactividad y multimedia. Arquitectura nativa orientada a la fluidez y experiencia de usuario.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="text-xs bg-zinc-950 border border-zinc-800 px-2 py-1 rounded-md text-zinc-300">SwiftUI</span>
              <span className="text-xs bg-zinc-950 border border-zinc-800 px-2 py-1 rounded-md text-zinc-300">Xcode</span>
              <span className="text-xs bg-zinc-950 border border-zinc-800 px-2 py-1 rounded-md text-zinc-300">Firebase</span>
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-zinc-500 hover:text-[#D4AF37] transition-colors"><FaGithub size={20} /></a>
            </div>
          </div>

          {/* 3. AutoFid (Android) */}
          <div className="bg-zinc-900/30 backdrop-blur-md rounded-3xl p-8 border border-zinc-800 hover:border-[#D4AF37]/50 hover:shadow-[0_0_30px_rgba(212,175,55,0.1)] transition-all duration-500 flex flex-col h-full">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-white">AutoFid</h3>
              <span className="bg-zinc-800 text-[#3DDC84] text-xs font-bold px-3 py-1 rounded-full">Android</span>
            </div>
            <p className="text-zinc-400 text-sm mb-6 flex-grow">
              Aplicación móvil de geolocalización y servicios automotrices que conecta usuarios con talleres mecánicos. Gestión de citas y consumo de Web Services para sincronización de datos.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="text-xs bg-zinc-950 border border-zinc-800 px-2 py-1 rounded-md text-zinc-300">Java</span>
              <span className="text-xs bg-zinc-950 border border-zinc-800 px-2 py-1 rounded-md text-zinc-300">Android Studio</span>
              <span className="text-xs bg-zinc-950 border border-zinc-800 px-2 py-1 rounded-md text-zinc-300">REST APIs</span>
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-zinc-500 hover:text-[#D4AF37] transition-colors"><FaGithub size={20} /></a>
            </div>
          </div>

          {/* 4. Red Empresarial (Infraestructura) */}
          <div className="bg-zinc-900/30 backdrop-blur-md rounded-3xl p-8 border border-zinc-800 hover:border-[#D4AF37]/50 hover:shadow-[0_0_30px_rgba(212,175,55,0.1)] transition-all duration-500 flex flex-col h-full">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-white">Red Corporativa</h3>
              <span className="bg-zinc-800 text-[#06B6D4] text-xs font-bold px-3 py-1 rounded-full">Networking</span>
            </div>
            <p className="text-zinc-400 text-sm mb-6 flex-grow">
              Simulación integral de infraestructura de red empresarial. Despliegue de direccionamiento IP con VLSM, segmentación con VLANs, telefonía VoIP y protocolos de enrutamiento OSPF/EIGRP.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="text-xs bg-zinc-950 border border-zinc-800 px-2 py-1 rounded-md text-zinc-300">Cisco</span>
              <span className="text-xs bg-zinc-950 border border-zinc-800 px-2 py-1 rounded-md text-zinc-300">VLANs</span>
              <span className="text-xs bg-zinc-950 border border-zinc-800 px-2 py-1 rounded-md text-zinc-300">VoIP</span>
            </div>
          </div>

          {/* 5. Auditoría SQL (Bases de Datos) */}
          <div className="bg-zinc-900/30 backdrop-blur-md rounded-3xl p-8 border border-zinc-800 hover:border-[#D4AF37]/50 hover:shadow-[0_0_30px_rgba(212,175,55,0.1)] transition-all duration-500 flex flex-col h-full">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-white">Auditoría de Datos</h3>
              <span className="bg-zinc-800 text-[#F7DF1E] text-xs font-bold px-3 py-1 rounded-full">Database</span>
            </div>
            <p className="text-zinc-400 text-sm mb-6 flex-grow">
              Análisis estructural y normalización de bases de datos relacionales. Identificación de vulnerabilidades, corrección de llaves foráneas y garantía de cumplimiento hasta la Tercera Forma Normal (3NF).
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="text-xs bg-zinc-950 border border-zinc-800 px-2 py-1 rounded-md text-zinc-300">SQL</span>
              <span className="text-xs bg-zinc-950 border border-zinc-800 px-2 py-1 rounded-md text-zinc-300">Arquitectura</span>
              <span className="text-xs bg-zinc-950 border border-zinc-800 px-2 py-1 rounded-md text-zinc-300">Normalización</span>
            </div>
          </div>

          {/* 6. Hot Wheels (En Desarrollo) */}
          <div className="bg-zinc-900/30 backdrop-blur-md rounded-3xl p-8 border border-zinc-800 border-dashed hover:border-[#D4AF37] hover:shadow-[0_0_30px_rgba(212,175,55,0.1)] transition-all duration-500 flex flex-col h-full relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#D4AF37] text-zinc-950 text-[10px] font-bold px-8 py-1 rotate-45 translate-x-6 translate-y-3 shadow-md">
              EN DESARROLLO
            </div>
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-white">Catálogo Seguro</h3>
              <span className="bg-zinc-800 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-2"><FaTools /> Activo</span>
            </div>
            <p className="text-zinc-400 text-sm mb-6 flex-grow">
              Plataforma web familiar para la gestión de inventario de colección. Implementación de capas de ciberseguridad, inicio de sesión encriptado y arquitectura moderna para evitar vulnerabilidades.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="text-xs bg-zinc-950 border border-zinc-800 px-2 py-1 rounded-md text-zinc-300">Next.js</span>
              <span className="text-xs bg-zinc-950 border border-zinc-800 px-2 py-1 rounded-md text-zinc-300">Auth Security</span>
              <span className="text-xs bg-zinc-950 border border-zinc-800 px-2 py-1 rounded-md text-zinc-300">Docker</span>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}