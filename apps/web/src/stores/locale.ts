import { createSignal } from "solid-js";

import type { Locale } from "@/i18n/types";

const defaultLocale = (() => {
  if (typeof window === "undefined") return "en";

  const saved = localStorage.getItem("locale") as Locale | null;

  return saved ?? "en";
})();

const [locale, setLocale] = createSignal<Locale>(defaultLocale);

export function useLocale() {
  const changeLocale = (value: Locale) => {
    localStorage.setItem("locale", value);

    setLocale(value);
  };

  return {
    locale,
    setLocale: changeLocale,
  };
}
