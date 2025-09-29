import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Conoce y crea autores y libros</h1>
      <Image
        src="/autores.png"
        alt="Autores"
        width={400}   
        height={200}
        className="rounded-lg shadow-lg"
      />
    </main>
  );
}



