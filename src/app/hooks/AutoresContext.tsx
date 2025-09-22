"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { Autor } from "@/app/types/author";
import { fetchAuthor } from "@/app/services/authorService";

export type AutoresContextType = {
  autores: Autor[];
  addAutor: (autor: Autor) => void;
  updateAutor: (id: number, autor: Autor) => void;
  eliminateAutor:(id:number)=>void;
};

const AutoresContext = createContext<AutoresContextType | undefined>(undefined);

export function AutoresProvider({ children }: { children: React.ReactNode }) {
  const [autores, setAutores] = useState<Autor[]>([]);
  
    useEffect(() => {
    const loadAutores = async () => {
    const data = await fetchAuthor();
    setAutores(data);
    };
    loadAutores();
  }, []);
     
  const addAutor = (autor: Autor) => {
    setAutores((prev) => [...prev, autor]);
  };

  const updateAutor = (id: number, updated: Autor) => {
    setAutores((prev) =>
      prev.map((a) => {
      if (a.id === id) {
      return { ...a, ...updated, id };
    } else {
      return a;
    }})
    );
  };

  const eliminateAutor = (id: number) => {
    setAutores((prev) => prev.filter((a) => a.id !== id));
  };
  
  return (
    <AutoresContext.Provider value={{ autores, addAutor, updateAutor, eliminateAutor}}>
      {children}
    </AutoresContext.Provider>
  );
}

export function useAutoresContext() {
  const ctx = useContext(AutoresContext);
  if (!ctx) throw new Error("useAutoresContext debe usarse dentro de AutoresProvider");
  return ctx;
}