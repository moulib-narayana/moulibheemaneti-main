import { useDateFormat } from "@vueuse/core";

export const formatDate = (date: Date): string => {

  return useDateFormat(date, "MMMM DD, YYYY").value;

}
