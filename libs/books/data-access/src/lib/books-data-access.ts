import { SharedBook } from '@cfsboom/shared-models';

export async function getBooks(): Promise<SharedBook[]> {
  const data = await fetch('http://localhost:3333/api/books');
  return data.json();
}
