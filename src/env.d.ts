/// <reference types="astro/client" />

interface Window {
  saEvents: Array<{ name: string; props: Record<string, unknown>; at: string }>;
  saTrack?: (name: string, props?: Record<string, unknown>) => void;
}
