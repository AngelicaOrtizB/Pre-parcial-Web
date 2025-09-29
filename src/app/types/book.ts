import { Autor} from "./author";
 export interface Book 
 { id: number; 
name: string; 
isbn: string; 
image: string; 
publishingDate: string; 
description: string;
editorial: Editorial; 
reviews: Review[]; 
authors: Autor[]; }

export type Editorial = {
  id: number;
  name: string;
};

export type Review = {
  id: number;
  name: string;
  source: string;
  description: string;
};