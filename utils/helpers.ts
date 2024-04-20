export const getLocalDynamicImageUrl = (rootPath: string, name: string) => {

  return new URL(`/assets/${rootPath}/${name}`, import.meta.url).href

}