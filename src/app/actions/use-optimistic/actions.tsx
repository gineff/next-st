'use server';

import { readFile, writeFile } from 'fs/promises';
import path from 'path';

// Определяем путь до файла genres.json
const __dirname = path.dirname(new URL(import.meta.url).pathname);
const genresFilePath = path.join(__dirname, 'genres.json');

// Получение списка жанров
export const getGenresAction = async (): Promise<string[]> => {
  try {
    const file = await readFile(genresFilePath, 'utf8');
    return JSON.parse(file) || [];
  } catch (error) {
    console.error('Failed to read genres file:', error);
    return [];
  }
};

// Запись списка жанров в файл
export const writeFileAction = async (content: string) => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await writeFile(genresFilePath, content, 'utf-8');
  } catch (error) {
    console.error('Failed to write genres file:', error);
    throw error;
  }
};

export async function deliverMessage(message: string) {
  await new Promise((res) => setTimeout(res, 1000));
  return message;
}
