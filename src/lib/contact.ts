export type PhoneKey = "novo" | "atendimento";

// Mesmo número nos dois perfis por enquanto — trocar "atendimento" aqui
// se/quando o cliente tiver um segundo número para rastrear campanhas
// separadamente.
const PHONES: Record<PhoneKey, { ddi: string; ddd: string; number: string }> = {
  novo: { ddi: "55", ddd: "11", number: "968016550" },
  atendimento: { ddi: "55", ddd: "11", number: "968016550" },
};

const WHATSAPP_DEFAULT_MESSAGE =
  "Olá, meu caminhão quebrou, preciso de guincho. Pode me atender agora?";

export interface Contact {
  PHONE_DISPLAY: string;
  WHATSAPP_URL: string;
  CALL_URL: string;
}

export function getContact(key: PhoneKey): Contact {
  const { ddi, ddd, number } = PHONES[key];
  const digits = `${ddi}${ddd}${number}`;

  return {
    PHONE_DISPLAY: `(${ddd}) ${number.slice(0, 5)}-${number.slice(5)}`,
    WHATSAPP_URL: `https://wa.me/${digits}?text=${encodeURIComponent(WHATSAPP_DEFAULT_MESSAGE)}`,
    CALL_URL: `tel:+${digits}`,
  };
}
