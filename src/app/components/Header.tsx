import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-pink-600 to-pink-800 shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/"className="text-xl font-bold text-white hover:text-pink-200 transition">
          Página autores
        </Link>
        <nav className="flex gap-4">
          <Link href="/authors" className="text-white hover:text-pink-200 transition">
            Autores
          </Link>
          <Link href="/crear" className="text-white hover:text-pink-200 transition">
            Crear Autores
          </Link>
          <Link href="/books" className="text-white hover:text-pink-200 transition">
            Libros
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
