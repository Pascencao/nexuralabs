"use client";

import { useEffect, useRef, useState } from "react";

export type SubmitStatus = "idle" | "sending" | "success" | "error";

/**
 * Envía un formulario como JSON a `endpoint` y expone su estado.
 * Agrega `elapsedMs` (tiempo desde el montaje) para el filtro anti-bots del servidor.
 * `onSuccess` queda para conectar los eventos de medición (etapa E).
 */
export function useFormSubmit<TErrors>(
  endpoint: string,
  options: { onSuccess?: (payload: Record<string, unknown>) => void } = {},
) {
  const mountedAt = useRef(0);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [serverErrors, setServerErrors] = useState<TErrors | null>(null);

  useEffect(() => {
    mountedAt.current = Date.now();
  }, []);

  async function submit(payload: Record<string, unknown>): Promise<void> {
    setStatus("sending");
    setServerErrors(null);
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, elapsedMs: Date.now() - mountedAt.current }),
      });
      const json: { ok?: boolean; errors?: TErrors } = await response.json().catch(() => ({}));
      if (response.ok && json.ok) {
        setStatus("success");
        options.onSuccess?.(payload);
        return;
      }
      if (response.status === 400 && json.errors) {
        setServerErrors(json.errors);
        setStatus("idle");
        return;
      }
      setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  return { status, serverErrors, submit };
}
