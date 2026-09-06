import Link from 'next/link'; /* Herramienta exclusiva de next. Usamos Link como cambio instantaneo, más natural. */

export default function BarraNavegacion() { /* export sirve para que todos los archivos del proyecto puedan usar la función */
  return (

    /* ----- INFORMACION ----- */

    /* Se usa nav (navegación) y ul (lista desordenada) para buenas prácticas. Les dice a los lectores que es esactamente */
    /* Se usa className directamente de Tailwind (diseño) para no arbir un archivo CSS separado */

    /* py-6 px-8: Padding o espaciado arriba, abajo y los lados. */
    /* flex justify-between: EMpuja el nombre a la izquierda y enlaces a la derecha. */
    /* hover:text-white transition-colors: Pasando el mouse sobre las letras grises estas se iluminen en blanco. */


    <nav className="fixed w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800 flex flex-col sm:flex-row justify-between items-center px-8 py-4 sm:py-6 gap-4 sm:gap-0">
      
      {/* Logotipo o Nombre del Ingeniero */}
      <div className="text-xl font-bold tracking-widest">
        SEBASTIÁN.
      </div>

      {/* Enlaces de navegación */}
      <ul className="flex gap-8 text-sm font-medium text-zinc-400">
        <li>
          <Link href="/" className="hover:text-white transition-colors duration-300">
            INICIO
          </Link>
        </li>
        <li>
          <Link href="/proyectos" className="hover:text-white transition-colors duration-300">
            PROYECTOS
          </Link>
        </li>
        <li>
          <Link href="/contacto" className="hover:text-white transition-colors duration-300">
            CONTACTO
          </Link>
        </li>
      </ul>

    </nav>
  );
}