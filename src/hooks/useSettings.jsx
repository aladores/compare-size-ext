import { useState, useEffect } from "react";

function useSettings() {
  const [settings, setSettings] = useState({
    sizes: {
      Tops: ["S/44-46", "M/48-50", "L/52-54"],
      Bottoms: ["30", "32", "34"],
      Outerwear: ["S/44-46", "M/48-50", "L/52-54"],
    },
  });

  function handleSizeUpdate(newSizes) {
    setSettings((prevSettings) => {
      return { ...prevSettings, sizes: newSizes };
    });
  }

  useEffect(() => {
    chrome.storage.local.get("settings", (result) => {
      if (result.settings) {
        setSettings(result.settings);
      } else {
        chrome.storage.local.set({ settings });
      }
    });
  }, []);

  useEffect(() => {
    chrome.storage.local.set({ settings }, () => {});
  }, [settings]);
  return [settings, handleSizeUpdate];
}

export default useSettings;
