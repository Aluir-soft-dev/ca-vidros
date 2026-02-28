"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

/** ===== CONFIG ===== */
const IS_DEV = process.env.NODE_ENV === "development";
const DELAY_MS = IS_DEV ? 90 * 1000 : 120 * 1000; // DEV 5s / PROD 1:30
const STORAGE_KEY = "ca_cta_sequence_v12";

const CARD_BLUE = "#1777B3";

const BRAND = {
  name: "CA Vidracaria",
  logoSrc: "/logo.png",
  instagramUrl: "https://www.instagram.com/ca_vidracaria_/",
  whatsappNumber: "5548999516903",
};

type CTAProps = { onClose: () => void };
type CTAItem = { id: string; render: (props: CTAProps) => React.ReactNode };

function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

function IconBubble({ emoji }: { emoji: string }) {
  return (
    <div className="w-11 h-11 rounded-2xl bg-white/15 text-white flex items-center justify-center border border-white/25 shadow-sm">
      <span className="text-lg">{emoji}</span>
    </div>
  );
}

function PrimaryLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full inline-flex items-center justify-center px-5 py-3 rounded-[26px] bg-black text-white font-semibold transition border border-black hover:bg-neutral-800"
    >
      {children}
    </a>
  );
}

function SecondaryButton({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className="w-full inline-flex items-center justify-center px-5 py-3 rounded-[26px] bg-white text-black font-semibold transition border border-black hover:bg-gray-100"
    >
      {children}
    </button>
  );
}

/** ===== MODAL SHELL (MESMO LAYOUT) ===== */
function ModalShell({
  stepLabel,
  title,
  subtitle,
  children,
  onClose,
}: {
  stepLabel: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-md"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative w-full sm:max-w-md bg-white rounded-[34px] border-2 border-black shadow-2xl overflow-hidden">
        <div className="px-6 pt-6 pb-5 border-b-2 border-black">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-3xl bg-white border-2 border-black flex items-center justify-center overflow-hidden">
                <img
                  src={'/assets/logo.png'}
                  alt={BRAND.name}
                  className="w-8 h-8 object-contain"
                />
              </div>

              <div>
                <div className="text-xs font-semibold text-black">
                  {BRAND.name}
                </div>
                <div className="mt-1 text-xs border-2 border-black px-2 py-1 inline-block rounded-full text-black font-semibold">
                  {stepLabel}
                </div>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-9 h-9 border-2 border-black rounded-full flex items-center justify-center text-black hover:bg-gray-100"
              aria-label="Fechar"
              title="Fechar"
            >
              ✕
            </button>
          </div>

          <div className="mt-4">
            <h3 className="text-xl font-extrabold text-black">{title}</h3>
            {subtitle ? (
              <p className="mt-2 text-sm text-black leading-relaxed">
                {subtitle}
              </p>
            ) : null}
          </div>
        </div>

        <div className="px-6 py-6 border-b-2 border-black">{children}</div>

        <div className="px-6 py-4 flex justify-center text-xs text-black">
          <span>Atendimento rapido • orcamento sem compromisso</span>
          
        </div>
      </div>
    </div>
  );
}

/** ===== WhatsApp builder ===== */
function buildWhatsAppLink(message: string) {
  return `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;
}

/** ===== storage helpers ===== */
type StoredState = {
  index: number; // 0..2
  lastClosedAt: number; // timestamp do ultimo fechamento
};

function readStored(): StoredState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (
      typeof parsed?.index === "number" &&
      typeof parsed?.lastClosedAt === "number"
    ) {
      return parsed as StoredState;
    }
    return null;
  } catch {
    return null;
  }
}

function writeStored(state: StoredState) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // ignore
  }
}

/** ================= CTA 1 ================= */
function CTACapturarLead({ onClose }: CTAProps) {
  const message =
  "Ola, vim pelo site e quero um orcamento.\n\n" +
  "Pode me ajudar?";

  return (
    <ModalShell
      stepLabel=""
      title="Solicite seu orcamento agora"
      subtitle="Fale com a gente e receba orientacao rapida para o seu projeto."
      onClose={onClose}
    >
      <div className="space-y-4">
        <div
          className="rounded-[24px] border-2 border-black p-5 text-white"
          style={{ backgroundColor: CARD_BLUE }}
        >
          <div className="flex gap-3">
            
            <div>
              <p className="font-extrabold text-white">
                Atendimento rapido no WhatsApp
              </p>
              <p className="text-sm text-white/90 mt-1">
                Envie tipo de servico, medidas e bairro para agilizar o orcamento.
              </p>
            </div>
          </div>
        </div>

        <PrimaryLink href={buildWhatsAppLink(message)}>
          Quero meu orcamento
        </PrimaryLink>
        
      </div>
    </ModalShell>
  );
}

/** ================= CTA 2 ================= */
function CTAInstagram({ onClose }: CTAProps) {
  return (
    <ModalShell
      stepLabel=""
      title="Acompanhe nossos trabalhos"
      subtitle="Siga o Instagram para ver obras reais, antes e depois e novidades."
      onClose={onClose}
    >
      <div className="space-y-4">
        <div
          className="rounded-[24px] border-2 border-black p-5 text-white"
          style={{ backgroundColor: CARD_BLUE }}
        >
          <div className="flex gap-3">
            
            <div>
              <p className="font-extrabold text-white">Conteudo e referencias</p>
              <p className="text-sm text-white/90 mt-1">
                Veja modelos, acabamentos e ideias para o seu ambiente.
              </p>
            </div>
          </div>
        </div>

        <PrimaryLink href={BRAND.instagramUrl}>Seguir no Instagram</PrimaryLink>
        
      </div>
    </ModalShell>
  );
}

/** ================= CTA 3 ================= */
function CTAAnaliseGratuita({ onClose }: CTAProps) {
  const message =
  "Ola, vim pelo site e quero um orcamento.\n\n" +
  "Pode me ajudar?";

  return (
    <ModalShell
      stepLabel=""
      title="Ainda esta com duvida?"
      subtitle="Peca uma analise gratuita e a gente te orienta no melhor caminho."
      onClose={onClose}
    >
      <div className="space-y-4">
        <div
          className="rounded-[24px] border-2 border-black p-5 text-white"
          style={{ backgroundColor: CARD_BLUE }}
        >
          <div className="flex gap-3">
            
            <div>
              <p className="font-extrabold text-white">Analise gratuita</p>
              <p className="text-sm text-white/90 mt-1">
                A gente avalia seu caso e indica a melhor solucao.
              </p>
            </div>
          </div>
        </div>

        <PrimaryLink href={buildWhatsAppLink(message)}>
          Quero analise gratuita
        </PrimaryLink>
        
      </div>
    </ModalShell>
  );
}

/** ================= ORQUESTRADOR (CORRIGIDO) ================= */
export default function CTASequence() {
  const ctas: CTAItem[] = useMemo(
    () => [
      { id: "cta1", render: (p) => <CTACapturarLead {...p} /> },
      { id: "cta2", render: (p) => <CTAInstagram {...p} /> },
      { id: "cta3", render: (p) => <CTAAnaliseGratuita {...p} /> },
    ],
    []
  );

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const timerRef = useRef<number | null>(null);
  const initRef = useRef(false); // ✅ trava StrictMode duplicando

  function clearTimer() {
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }

  function scheduleOpen(ms: number, targetIndex: number) {
    clearTimer();
    timerRef.current = window.setTimeout(() => {
      setIndex(targetIndex);
      setOpen(true);
    }, ms);
  }

  useEffect(() => {
    // ✅ evita agendar duas vezes no DEV (StrictMode)
    if (initRef.current) return;
    initRef.current = true;

    const stored = readStored();

    // se nao existe, inicia do 0 e agenda
    if (!stored) {
      writeStored({ index: 0, lastClosedAt: Date.now() });
      scheduleOpen(DELAY_MS, 0);
      return () => clearTimer();
    }

    // se passou do fim, reinicia no 0
    const safeIndex =
      stored.index >= ctas.length ? 0 : Math.max(0, Math.min(ctas.length - 1, stored.index));

    // calcula quanto falta pra completar o delay desde o ultimo fechamento
    const elapsed = Date.now() - stored.lastClosedAt;
    const remaining = Math.max(0, DELAY_MS - elapsed);

    setIndex(safeIndex);
    scheduleOpen(remaining, safeIndex);

    return () => clearTimer();
  }, [ctas.length]);

  function closeCurrent() {
    setOpen(false);

    const nextIndex = index + 1;

    // salva progresso + timestamp
    writeStored({
      index: nextIndex >= ctas.length ? 0 : nextIndex, // se terminou, reinicia
      lastClosedAt: Date.now(),
    });

    // agenda proximo (ou reinicio)
    const target = nextIndex >= ctas.length ? 0 : nextIndex;
    scheduleOpen(DELAY_MS, target);
  }

  if (!open) return null;

  const current = ctas[index];
  if (!current) return null;

  return <>{current.render({ onClose: closeCurrent })}</>;
}