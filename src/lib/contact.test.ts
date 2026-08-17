import { describe, expect, it } from "vitest";
import { getContact } from "./contact";

describe("getContact", () => {
  it("formats the display phone as (DDD) 5-4 digits", () => {
    const contact = getContact("novo");
    expect(contact.PHONE_DISPLAY).toBe("(11) 96801-6550");
  });

  it("builds a tel: link with the full E.164-style digits", () => {
    const contact = getContact("novo");
    expect(contact.CALL_URL).toBe("tel:+5511968016550");
  });

  it("builds a wa.me link with the truck-specific default message", () => {
    const contact = getContact("novo");
    expect(contact.WHATSAPP_URL).toBe(
      "https://wa.me/5511968016550?text=" +
        encodeURIComponent(
          "Olá, meu caminhão quebrou, preciso de guincho. Pode me atender agora?"
        )
    );
  });

  it("returns the same number for both phone keys", () => {
    expect(getContact("novo")).toEqual(getContact("atendimento"));
  });
});
