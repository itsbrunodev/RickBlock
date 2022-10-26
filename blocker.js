(() => {
  const youtubeIds = [
    "dQw4w9WgXcQ",
    "-51AfyMqnpI",
    "oHg5SJYRHA0",
    "cvh0nX08nRw",
    "V-_O7nl0Ii0",
    "2ocykBzWDiM",
    "j5a0jTc9S10",
    "HPk-VhRjNI8",
    "lYBUbBu4W08",
    "C0vQ7QuI9NQ",
    "3Y4syv7et5s",
    "Kiz3PM387FI",
    "ikFZLI4HLpQ",
    "s0akG-V_Y30",
    "SsiHLiXBlcM",
    "whE6Zi1Oelg",
    "iiUIi5b9RlE",
    "9oxRDJjAQKI",
    "LjQZaD9EEJ0",
    "E458nb_pPmk",
    "oJl25bABYac",
    "HUU3kOhjFfg",
    "JkcHqN6YswU",
    "INbRpclIFsE",
    "GjyUk_Ebb4o",
    "bCh5IlXTckA",
    "sSSOG8g7PFg",
    "-pHhb4biR9k",
    "RvBwypGUkPo",
    "dRV6NaciZVk",
    "LWErcuHm_C4",
    "ub82Xb1C8os",
    "iik25wqIuFo",
    "j8PxqgliIno",
    "GteS0QLf_EA",
    "tzYPr9w22VU",
    "ll-mQPDCn-U",
    "6-HUgzYPm9g",
    "qXCitbKV754",
    "d0tGBCCE0lc",
    "OWWu05YYbNI",
    "QB7ACr7pUuE",
    "_3wkyerSBpw",
    "AyOqGRjVtls",
    "IO9XlQrEt2Y",
    "N9w1lCZfaWI",
    "rTga41r3a4s",
    "8ybW48rKBME",
    "-CbxUk8QX9M",
    "RgzSBh6w_tM",
    "IC5YozmvPpM",
    "50qKHsRCr9Y",
    "f-tLr7vONmc",
    "Dzv7NfPz1Yc",
    "kp6hkCl0eEk",
    "ZFWO60WqBzI",
    "xCmkDzYkLXo",
    "bmvH_xKYIC0",
    "fabiBsQWDTY",
    "ZVZRO9_l_a4",
    "hNfDNORPU4Y",
    "EE-xtCF3T94",
    "V-_O7nl0Ii0",
    "8O_ifyIIrN4",
    "0SoNH07Slj0",
    "xfr64zoBTAQ",
    "cqF6M25kqq4",
    "u1EJFE2u3Ng",
    "m_DstBaSBvM",
    "Y_0Ef3ftoek",
    "Y5zbaF097lQ",
    "SO4c1NlGCpY",
    "MLWUSH-YNUk",
    "kzMah7dC5h8",
    "Uj1ykZWtPYI",
    "ne_FZGQYLSU",
    "Tt7bzxurJ1I",
    "0EY98EsPXs8",
    "gQDEDh23cK8",
    "OisqGC0M2t0",
    "2rP6TcIPUpE",
    "eBsIpefmXvE",
    "IDWPIHeyxdM",
    "QQePqf21Mi4",
    "Gx8NzIq_99M",
    "XsNjQ8A_9uU",
    "HPk-VhRjNI8",
    "KyJfb035uQ4",
    "J_DsOPcPiR0",
    "dPmZqsQNzGA",
    "ID_L0aGI9bg",
    "REWyCy_m39Q",
    "nQGsT44rVjk",
    "nHRbZW097Uk",
    "SWejvNI7WlM",
    "N3MKlU5_Gs0",
    "_sWG4uhLiWo",
    "PibwQR9nRus",
    "vkbQmH5MPME",
    "s99hC5WUwjo",
    "cH1NLToRz_o",
    "-lmhJOhQHWc",
    "gidHrKbTpog",
    "soq9cLVa5Xo",
    "OYpwAtnywTk",
    "klqi_h9FElc",
    "fZi4JxbTwPo",
    "DIs7dtlMCP0",
    "Q53-mWHvxJo",
    "fMnIpIMuBJI",
    "2bfNgekJG4M",
    "6vBnqJhP7f8",
    "Dh-CW22axyY",
    "VSa2IqDwnQ8",
    "lOxgTIp5_TA",
    "kczWpSN6emg",
    "cAN30xJp2Cs",
    "6RyOsIseJbk",
    "ZO8n_vfsxKg",
    "ckhlhIy7NqY",
    "jCA5eCQnycU",
    "HR36RgcwpZY",
    "_h0kLUU-Gxs",
    "WZ-bMsTNao0",
    "WAAQjMggfhw",
    "5U4R6fW-P0s",
    "ruP6vRuIqzo",
    "tXzng395qq0",
    "-ioFOx_pE6w",
    "Wlv0Jyb4zx8",
    "HV8IxKtAlrA",
    "TCUPeAlpDVE",
    "88_U32dKr2Y",
    "_IorroidPS8",
    "s_Ec4YjaWbs",
    "_m9Lu56Ss4Y",
    "Mdq6sQPKYqQ",
    "Wz8kxRx1y_s",
    "G9oNT78xsLY",
    "VZrDxD0Za9I",
    "iadFGiLRgFo",
    "QKr_0DMYV5g",
    "MAM--whuMcU",
    "06pBzAlItwI",
    "lHyeAtiiL18",
    "3KANI2dpXLw",
    "0Z0i-nimHkU",
    "a9kX1tVP_Sc",
    "GfmYJpKYeJY",
    "IwkVluxrtrQ",
    "qVyxdugkk_s",
    "7nLQI78HCtE",
    "U5qh3E9JmkU",
    "2EkXa0GMH1w",
    "3-csLHSLS-k",
    "6hlTj-cK7XU",
    "doEqUhFiQS4",
    "DLzxrzFCyOs",
    "h8WiyX21A1c",
    "o-YBDTqX_ZU",
    "BKCPCHLCTJU",
    "vnIGrETLFKg",
    "34Ig3X59_qA",
    "xm3YgoEiEDc",
    "rTgj1HxmUbg",
    "HIcSWuKMwOw",
    "4WYEkGNQMPg",
    "wgL-a-5k1lY",
    "8-WdnXLSFso",
    "6_b7RDuLwcI",
    "eBGIQ7ZuuiU",
    "VbUuB1aN2DA",
    "MO7bRMa9bmA",
    "T14DQkV0fEQ",
    "QMW4AqbuSGg",
    "H8ZH_mkfPUY",
    "aYsgsSo1aow",
  ];

  const urls = [
    "https://rickrolled.com/",
    "https://www.latlmes.com/",
    "https://rr.noordstar.me/",
    "https://www.sanfransentinel.com/",
    "https://www.thisworldthesedays.com/",
    "https://www.tomorrowtides.com/",
  ];

  chrome.storage.local.get(["disabled", "bypassed", "total"], (res) => {
    let lastUrl = location.href;

    new MutationObserver(() => {
      const url = location.href;
      if (url !== lastUrl) {
        lastUrl = url;
        onUrlChange();
      }
    }).observe(document, { subtree: true, childList: true });

    const checkRickRoll = (locationHref) => {
      if (
        (!res.disabled &&
          youtubeIds.find((i) => {
            return locationHref.includes(i);
          })) ||
        (!res.disabled &&
          urls.find((i) => {
            return locationHref.includes(i);
          }))
      ) {
        chrome.storage.local.set({ total: (res["total"] || 0) + 1 });

        if (!res.bypassed) {
          location =
            chrome.runtime.getURL("warn/warn.html") + "?" + locationHref;
        } else {
          chrome.storage.local.set({ bypassed: false });
        }
      }
    };

    function onUrlChange() {
      checkRickRoll(location.href);
    }

    checkRickRoll(location.href);
  });
})();
