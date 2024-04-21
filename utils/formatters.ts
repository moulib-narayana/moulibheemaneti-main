import { useDateFormat } from "@vueuse/core";

export const formatDate = (date: Date): string => {

  return useDateFormat(date, "MMMM DD, YYYY").value;

}

export const camelToPascalWithSpaces = (str: string): string => {

  const pascalCase = str.replace(/([A-Z])/g, " $1");

  return pascalCase.charAt(0).toUpperCase() + pascalCase.slice(1);

};
