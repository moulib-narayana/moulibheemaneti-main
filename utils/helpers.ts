export const getLocalDynamicImageUrl = (rootPath: string, name: string) => {

  return new URL(`/assets/${rootPath}/${name}`, import.meta.url).href

}

export const delay = (ms: number): Promise<void> => new Promise((res) => setTimeout(res, ms));
