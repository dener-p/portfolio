import { createMemo } from "solid-js";

import { en } from "./en";
import { pt } from "./pt";

import type { Locale } from "./types";

const translations = {
  pt,
  en,
};

export function useTranslation(locale: () => Locale) {
  return createMemo(() => translations[locale()]);
}
