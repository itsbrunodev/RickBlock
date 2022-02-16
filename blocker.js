(() => {
  const IDs = [
    "dQw4w9WgXcQ",
    "-51AfyMqnpI",
    "oHg5SJYRHA0",
    "cvh0nX08nRw",
    "V-_O7nl0Ii0",
    "2ocykBzWDiM",
    "j5a0jTc9S10",
    "HPk-VhRjNI8",
  ];

  chrome.storage.local.get(["disabled", "bypassed", "total"], (res) => {
    if (
      !res.disabled &&
      IDs.find((i) => {
        return (
          location.href.includes(i) ||
          location.pathname.includes(i) ||
          location.search.includes(i)
        );
      })
    ) {
      chrome.storage.local.set({ total: (res["total"] || 0) + 1 });

      if (!res.bypassed) {
        location =
          chrome.runtime.getURL("warn/warn.html") + "?" + location.href;
      } else {
        chrome.storage.local.set({ bypassed: false });
      }
    }
  });
})();
