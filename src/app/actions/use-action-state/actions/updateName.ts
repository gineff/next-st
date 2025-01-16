'use server';

export const updateName = async (prevState: string, queryData: FormData): Promise<string> => {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
  return Array.from(queryData.get('name') as string)
    .reverse()
    .join('');
};
