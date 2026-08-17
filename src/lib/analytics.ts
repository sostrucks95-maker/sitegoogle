/* ==========================================================================
   SOS Truck — Tracking leve de cliques nos CTAs
   - Envia um evento para o dataLayer (se existir).
   - Dispara a conversão "clique para ligar" do Google Ads nos links de
     telefone, SE o site tiver o gtag.js do SOS Truck instalado.
   Nunca bloqueia a navegação do link.
   ========================================================================== */

import type { MouseEvent } from "react";
import { logClick } from "./clickLog";

// IDs de conversão do Google Ads DO SOS TRUCK. Ficam vazios até o cliente
// ter a própria conta e você criar as ações de conversão "clique para
// ligar" e "contato via WhatsApp" nela. Não reaproveitar o
// AW-17555344928 do template original — é de outro cliente da agência.
const CALL_CONVERSION_SEND_TO = "";
const WHATSAPP_CONVERSION_SEND_TO = "";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Handler para onClick de um link/botão de CTA.
 * - Lê o atributo data-cta do próprio elemento e registra em window.dataLayer.
 * - Se o CTA for de telefone/WhatsApp e houver um ID de conversão
 *   configurado, dispara a conversão do Google Ads.
 * A navegação do link segue normalmente em qualquer cenário.
 */
export function trackCtaClick(event: MouseEvent<HTMLAnchorElement>): void {
  const ctaName = event.currentTarget.dataset.cta;
  if (!ctaName) return;

  logClick(ctaName);

  if (
    typeof window !== "undefined" &&
    Array.isArray(window.dataLayer) &&
    typeof window.dataLayer.push === "function"
  ) {
    window.dataLayer.push({ event: "cta_click", cta_name: ctaName });
  }

  if (typeof window.gtag === "function") {
    if (ctaName.startsWith("telefone") && CALL_CONVERSION_SEND_TO) {
      window.gtag("event", "conversion", {
        send_to: CALL_CONVERSION_SEND_TO,
        value: 1.0,
        currency: "BRL",
      });
    } else if (ctaName.startsWith("whatsapp") && WHATSAPP_CONVERSION_SEND_TO) {
      window.gtag("event", "conversion", {
        send_to: WHATSAPP_CONVERSION_SEND_TO,
        value: 1.0,
        currency: "BRL",
      });
    }
  }
}
