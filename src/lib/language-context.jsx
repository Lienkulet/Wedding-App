"use client";

import { createContext, useContext, useMemo, useState } from "react";

import { DEFAULT_LANGUAGE, getWeddingContent, SUPPORTED_LANGUAGES } from "@/lib/i18n";

const LanguageContext = createContext(undefined);

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(DEFAULT_LANGUAGE);

  const value = useMemo(() => {
    const content = getWeddingContent(language);

    return {
      language,
      setLanguage,
      content,
      languages: SUPPORTED_LANGUAGES,
    };
  }, [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}
