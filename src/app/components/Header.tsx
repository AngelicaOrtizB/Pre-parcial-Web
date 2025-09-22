import React from 'react';
import Link from 'next/link';
const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold hover:text-gray-300">Página autores</Link>
        <nav>
          <Link href="/authors" className="px-3 hover:text-gray-300">Autores</Link>
          <Link href="/crear" className="px-3 hover:text-gray-300">Crear</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
