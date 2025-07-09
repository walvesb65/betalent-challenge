import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";

export const formatDate = (dateString: string): string => {
  try {
    const date = parseISO(dateString);
    return format(date, "dd/MM/yyyy", { locale: ptBR });
  } catch (error) {
    console.error("Erro ao formatar data:", dateString, error);
    return "--/--/----";
  }
};

export const formatPhone = (phone: string): string => {
  if (!phone) return "--";
  const cleaned = phone.replace(/\D/g, "");
  const hasCountryCode = cleaned.startsWith("55");
  const countryCode = hasCountryCode ? cleaned.substring(0, 2) : "55";
  const ddd = cleaned.substring(hasCountryCode ? 2 : 0, hasCountryCode ? 4 : 2);
  const firstPart = cleaned.substring(
    hasCountryCode ? 4 : 2,
    hasCountryCode ? 9 : 7
  );
  const secondPart = cleaned.substring(hasCountryCode ? 9 : 7);

  return `+${countryCode} (${ddd}) ${firstPart}-${secondPart}`;
};
