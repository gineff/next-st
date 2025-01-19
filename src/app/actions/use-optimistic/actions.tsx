'use server';
import { readFile, writeFile } from 'fs/promises';
import path from 'path';
const __dirname = path.dirname(new URL(import.meta.url).pathname);

export const getGenresAction = async (): Promise<string[]> => {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
  const name = path.join(__dirname, 'genres.json')
  const file = await readFile(name, 'utf8');
  const data = JSON.parse(file);
  return data || [];
};

export const writeFileAction = async (content) => {
  await writeFile(path.join(process.cwd(), 'genres.json'), content, 'utf-8');
};

export async function deliverMessage(message) {
  await new Promise((res) => setTimeout(res, 1000));
  return message;
}
