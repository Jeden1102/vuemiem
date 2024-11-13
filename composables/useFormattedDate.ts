import { ref } from "vue";

export function useFormattedDate(dateString: string) {
  const formattedDate = ref("");

  try {
    const date = new Date(dateString);

    const formatter = new Intl.DateTimeFormat("pl-PL", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    formattedDate.value = formatter.format(date);
  } catch (error) {
    console.error("Niepoprawny format daty:", error);
    formattedDate.value = "Niepoprawna data";
  }

  return formattedDate;
}
