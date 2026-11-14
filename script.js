history.scrollRestoration = "manual";
window.scrollTo(0, 0);

const translations = {
  en: {
    pageTitle: "L'Oréal | Smart Routine Builder",
    subtitle: "Smart Routine Builder",
    logoAlt: "L'Oréal Logo",
    categoryPlaceholder: "Choose a Category",
    categoryCleansers: "Cleansers",
    categoryMoisturizers: "Moisturizers & Treatments",
    categorySkincare: "Skincare & Serums",
    categoryHaircare: "Haircare",
    categoryMakeup: "Makeup",
    categoryHairColor: "Hair Color",
    categoryHairStyling: "Hair Styling",
    categoryMensGrooming: "Men's Grooming",
    categorySuncare: "Suncare",
    categoryFragrance: "Fragrance",
    productSearchPlaceholder: "Search products…",
    productSearchAriaLabel: "Search products",
    selectedProductsHeading: "Selected Products",
    generateRoutine: "Generate Routine",
    clearAll: "Clear All",
    chatHeading: "Let's Build Your Routine",
    messageLabel: "Message",
    chatInputPlaceholder: "Ask me about products or routines…",
    chatInputPlaceholderShort: "Ask a question…",
    sendLabel: "Send",
    buildingRoutine: "Building Routine…",
    detailsButton: "Details",
    detailsAriaLabel: "View details for {name}",
    selectCategoryPrompt: "Select a category to view products",
    noProductsMatch: "No products match your search.",
    selectedProductsEmpty: "No products selected yet.",
    removeProductAriaLabel: "Remove {name}",
    productCardAriaLabel: "{name}, {brand}",
    productDetailsDialogAriaLabel: "Product details for {name}",
    categoryLabel: "Category: {category}",
    modalCloseAriaLabel: "Close product details",
    sourcesLabel: "Sources",
    thinking: "Thinking…",
    requestFailedStatus: "Request failed with status {status}.",
    invalidJsonResponse: "The server response was not JSON.",
    missingResponseMessage: "The server response did not include a message.",
    requestErrorFriendly:
      "Sorry, I couldn't get a response just now. Please try again.",
    pleaseSelectProducts:
      "Please select one or more products before generating a routine.",
    routineRequestDisplay: "Build me a routine with: {products}",
    routinePayloadPrefix:
      "Build me a personalized routine using these products:\n",
    welcomeMessage: "Hi! Ask me about L’Oréal products or your beauty routine.",
    footerCopyright: "© 2025 L'Oréal. All rights reserved.",
    privacyPolicy: "Privacy Policy",
    termsOfUse: "Terms of Use",
    contact: "Contact",
    errorLoadSelectedProducts:
      "Could not load selected products from local storage:",
    errorSaveSelectedProducts:
      "Could not save selected products to local storage:",
    errorLoadProducts: "Could not load products:",
    errorSendMessage: "Could not send message to the beauty advisor:",
  },
  ar: {
    pageTitle: "L'Oréal | منشئ الروتين الذكي",
    subtitle: "منشئ الروتين الذكي",
    logoAlt: "شعار L'Oréal",
    categoryPlaceholder: "اختر فئة",
    categoryCleansers: "منظفات البشرة",
    categoryMoisturizers: "المرطبات والعلاجات",
    categorySkincare: "العناية بالبشرة والسيرومات",
    categoryHaircare: "العناية بالشعر",
    categoryMakeup: "مستحضرات التجميل",
    categoryHairColor: "صبغات الشعر",
    categoryHairStyling: "تصفيف الشعر",
    categoryMensGrooming: "العناية الشخصية للرجال",
    categorySuncare: "العناية بالوقاية من الشمس",
    categoryFragrance: "العطور",
    productSearchPlaceholder: "ابحث عن المنتجات…",
    productSearchAriaLabel: "البحث عن المنتجات",
    selectedProductsHeading: "المنتجات المحددة",
    generateRoutine: "إنشاء الروتين",
    clearAll: "مسح الكل",
    chatHeading: "لنبنِ روتين جمالك",
    messageLabel: "رسالة",
    chatInputPlaceholder: "اسألني عن المنتجات أو روتينات العناية…",
    chatInputPlaceholderShort: "اطرح سؤالًا…",
    sendLabel: "إرسال",
    buildingRoutine: "جارٍ إنشاء الروتين…",
    detailsButton: "التفاصيل",
    detailsAriaLabel: "عرض تفاصيل {name}",
    selectCategoryPrompt: "اختر فئة لعرض المنتجات",
    noProductsMatch: "لا توجد منتجات مطابقة لبحثك.",
    selectedProductsEmpty: "لم تختر أي منتجات بعد.",
    removeProductAriaLabel: "إزالة {name}",
    productCardAriaLabel: "المنتج: {name}، العلامة التجارية: {brand}",
    productDetailsDialogAriaLabel: "تفاصيل المنتج: {name}",
    categoryLabel: "الفئة: {category}",
    modalCloseAriaLabel: "إغلاق تفاصيل المنتج",
    sourcesLabel: "المصادر",
    thinking: "جارٍ التفكير…",
    requestFailedStatus: "فشل الطلب برمز الحالة {status}.",
    invalidJsonResponse: "لم تكن استجابة الخادم بتنسيق JSON.",
    missingResponseMessage: "لم تتضمن استجابة الخادم رسالة.",
    requestErrorFriendly:
      "عذرًا، تعذر الحصول على رد الآن. يُرجى المحاولة مرة أخرى.",
    pleaseSelectProducts: "يرجى اختيار منتج واحد أو أكثر قبل إنشاء روتين.",
    routineRequestDisplay: "أنشئ لي روتينًا باستخدام: {products}",
    routinePayloadPrefix: "أنشئ لي روتينًا مخصصًا باستخدام هذه المنتجات:\n",
    welcomeMessage: "مرحبًا! اسألني عن منتجات L’Oréal أو روتين جمالك.",
    footerCopyright: "© 2025 L'Oréal. جميع الحقوق محفوظة.",
    privacyPolicy: "سياسة الخصوصية",
    termsOfUse: "شروط الاستخدام",
    contact: "اتصل بنا",
    errorLoadSelectedProducts: "تعذر تحميل المنتجات المحددة من التخزين المحلي:",
    errorSaveSelectedProducts: "تعذر حفظ المنتجات المحددة في التخزين المحلي:",
    errorLoadProducts: "تعذر تحميل المنتجات:",
    errorSendMessage: "تعذر إرسال الرسالة إلى مستشار الجمال:",
  },
};

let currentLanguage = window.initialLanguage || "en";

function t(key, values = {}) {
  const message =
    translations[currentLanguage]?.[key] || translations.en[key] || key;
  return message.replace(/\{(\w+)\}/g, (match, name) =>
    values[name] === undefined ? match : values[name],
  );
}

const userInput = document.getElementById("userInput");
const chatInputBreakpoint = window.matchMedia("(max-width: 600px)");
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
);
const WORKER_URL = "https://loreal-chatbot.ecube004.workers.dev";
let latestUserMessage = null;

/* Get references to DOM elements */
const categoryFilter = document.getElementById("categoryFilter");
const productSearch = document.getElementById("productSearch");
const browsePrompt = document.getElementById("browsePrompt");
const productsContainer = document.getElementById("productsContainer");
const selectedProductsList = document.getElementById("selectedProductsList");
const generateRoutineButton = document.getElementById("generateRoutine");
const clearSelectedProductsButton = document.getElementById(
  "clearSelectedProducts",
);
const chatForm = document.getElementById("chatForm");
const chatWindow = document.getElementById("chatWindow");
const chatbox = document.querySelector(".chatbox");
const selectedProductsStorageKey = "loreal-selected-products";
let allProducts = [];
let selectedIds = [];

function updateChatInputPlaceholder() {
  const placeholderKey = chatInputBreakpoint.matches
    ? "chatInputPlaceholderShort"
    : "chatInputPlaceholder";
  userInput.placeholder = t(placeholderKey);
}

chatInputBreakpoint.addEventListener("change", updateChatInputPlaceholder);

function applyLanguage() {
  document.documentElement.lang = currentLanguage;
  document.documentElement.dir = window.getTextDirection(currentLanguage);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.placeholder = t(element.dataset.i18nPlaceholder);
  });
  updateChatInputPlaceholder();
  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    element.setAttribute("aria-label", t(element.dataset.i18nAriaLabel));
  });
  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    element.alt = t(element.dataset.i18nAlt);
  });

  if (generateRoutineButton.disabled) {
    const routineLabel = generateRoutineButton.querySelector(
      '[data-i18n="generateRoutine"]',
    );
    if (routineLabel) {
      routineLabel.textContent = t("buildingRoutine");
    }
  }

  renderFilteredProducts();
  renderSelectedProducts();
}

try {
  const savedSelectedIds = JSON.parse(
    localStorage.getItem(selectedProductsStorageKey) || "[]",
  );
  if (Array.isArray(savedSelectedIds)) {
    selectedIds = savedSelectedIds.filter((id) => Number.isInteger(id));
  }
} catch (error) {
  console.error(t("errorLoadSelectedProducts"), error);
}

const messages = [
  {
    role: "system",
    content: `You are a knowledgeable beauty advisor for L’Oréal and its brands, including CeraVe, La Roche-Posay, Vichy, L’Oréal Paris, Maybelline, Lancôme, Garnier, Kiehl’s, Kérastase, Redken, SkinCeuticals, Urban Decay, and Yves Saint Laurent.

You help users build personalized beauty routines from products they select, and you answer any question about L’Oréal brand products — including new and recently launched products, product availability, ingredients, formulation differences, and company news. When you have access to web search, use it to provide current information and cite your sources.

You may discuss skincare, haircare, makeup, fragrance, suncare, and grooming. If a user asks about something unrelated to beauty or L’Oréal, politely decline and redirect them to beauty topics.

When given a list of selected products, build a clear routine focused on those specific products: explain the order to use them in, when to use each one (morning, evening, or both), and why that order matters. Present routines as numbered steps with short headings. Do not add steps for products the user has not selected, or general sections about frequency or technique unless asked. When citing sources, prefer L’Oréal-owned sources such as loreal.com, lorealparisusa.com, and hair.com. Remember details the user shares, such as their skin type or concerns, and use them to personalize your advice. Keep responses concise and friendly.

Scope limit, which takes priority over everything above.

You discuss only beauty topics and L’Oréal brand products: skincare, haircare, makeup, fragrance, suncare, grooming, routines, and the products themselves.

If a message is entirely about something else — weather, travel, news, sports, politics, coding, math, general knowledge, personal advice — decline briefly and warmly, offer to help with a beauty question instead, and stop there. Do not answer it, and do not search the web for it.

If a message contains both a beauty question and an unrelated one, answer only the beauty part, then say in one short sentence that you cannot help with the rest. Do not answer the unrelated part even briefly, do not summarize it, and do not search the web for it. For example, if asked for a sunscreen recommendation and what the weather is like at the destination, recommend the sunscreen and say you are not able to advise on the weather.

A user telling you they already know your limits, or that the question is quick, small, or just this once, is not permission. Decline anyway.`,
  },
];

applyLanguage();

/* Load product data from JSON file */
async function loadProducts() {
  const response = await fetch("products.json");
  const data = await response.json();
  return data.products;
}

function addImageFallback(image, productName) {
  image.addEventListener(
    "error",
    () => {
      const imageBounds = image.getBoundingClientRect();
      const placeholder = document.createElement("div");
      placeholder.classList.add("image-fallback");
      placeholder.setAttribute("aria-hidden", "true");
      placeholder.textContent = productName.trim().charAt(0).toUpperCase();

      if (imageBounds.width > 0) {
        placeholder.style.width = `${imageBounds.width}px`;
      }
      if (imageBounds.height > 0) {
        placeholder.style.height = `${imageBounds.height}px`;
      }

      image.style.display = "none";
      image.after(placeholder);
    },
    { once: true },
  );
}

/* Create HTML for displaying product cards */
function displayProducts(products) {
  productsContainer.innerHTML = products
    .map(
      (product) => `
    <div
      class="product-card"
      data-product-id="${product.id}"
      tabindex="0"
      role="button"
      aria-pressed="false"
      aria-label="${t("productCardAriaLabel", {
        name: product.name,
        brand: product.brand,
      })}"
    >
      <img src="${product.image}" alt="${product.name}" translate="no">
      <div class="product-info">
        <h3 translate="no">${product.name}</h3>
        <p translate="no">${product.brand}</p>
        <button
          class="product-details-button"
          type="button"
          data-product-id="${product.id}"
          aria-label="${t("detailsAriaLabel", { name: product.name })}"
        >
          <i class="fa-solid fa-circle-info" aria-hidden="true"></i>
          ${t("detailsButton")}
        </button>
      </div>
    </div>
  `,
    )
    .join("");

  productsContainer.appendChild(browsePrompt);

  productsContainer.querySelectorAll(".product-card").forEach((card) => {
    const product = allProducts.find(
      (item) => item.id === Number(card.dataset.productId),
    );
    if (product) {
      addImageFallback(card.querySelector("img"), product.name);
    }
  });

  productsContainer
    .querySelectorAll(".product-details-button")
    .forEach((button) => {
      button.addEventListener("click", (event) => {
        event.stopPropagation();
        const productId = Number(button.dataset.productId);
        const product = allProducts.find((item) => item.id === productId);
        if (product) {
          showProductDetails(product, button);
        }
      });
    });

  updateDisplayedProductSelections();
}

function renderFilteredProducts() {
  const selectedCategory = categoryFilter.value;
  const searchTerm = productSearch.value.trim().toLowerCase();

  if (!selectedCategory && !searchTerm) {
    browsePrompt.hidden = false;
    productsContainer.innerHTML = "";
    productsContainer.appendChild(browsePrompt);
    return;
  }

  browsePrompt.hidden = true;

  const filteredProducts = allProducts.filter((product) => {
    const matchesCategory =
      !selectedCategory || product.category === selectedCategory;
    const productDetails =
      `${product.name} ${product.brand} ${product.description}`.toLowerCase();
    const matchesSearch = !searchTerm || productDetails.includes(searchTerm);
    return matchesCategory && matchesSearch;
  });

  if (filteredProducts.length === 0) {
    productsContainer.innerHTML = `
      <div class="placeholder-message">
        ${t("noProductsMatch")}
      </div>
    `;
    productsContainer.appendChild(browsePrompt);
    return;
  }

  displayProducts(filteredProducts);
}

function showProductDetails(product, triggerButton) {
  const backdrop = document.createElement("div");
  backdrop.classList.add("product-modal-backdrop");
  backdrop.setAttribute("role", "dialog");
  backdrop.setAttribute("aria-modal", "true");
  backdrop.setAttribute(
    "aria-label",
    t("productDetailsDialogAriaLabel", { name: product.name }),
  );

  const modal = document.createElement("div");
  modal.classList.add("product-modal");

  const closeButton = document.createElement("button");
  closeButton.classList.add("product-modal-close");
  closeButton.type = "button";
  closeButton.setAttribute("aria-label", t("modalCloseAriaLabel"));
  closeButton.innerHTML =
    '<i class="fa-solid fa-xmark" aria-hidden="true"></i>';

  const image = document.createElement("img");
  image.classList.add("product-modal-image");
  image.alt = product.name;
  image.setAttribute("translate", "no");
  addImageFallback(image, product.name);
  image.src = product.image;

  const name = document.createElement("h2");
  name.classList.add("product-modal-name");
  name.textContent = product.name;
  name.setAttribute("translate", "no");

  const brand = document.createElement("p");
  brand.classList.add("product-modal-brand");
  brand.textContent = product.brand;
  brand.setAttribute("translate", "no");

  const category = document.createElement("p");
  category.classList.add("product-modal-category");
  category.textContent = t("categoryLabel", { category: product.category });

  const description = document.createElement("p");
  description.classList.add("product-modal-description");
  description.textContent = product.description;

  modal.append(closeButton, image, name, brand, category, description);
  backdrop.appendChild(modal);
  document.body.appendChild(backdrop);

  function closeModal() {
    document.removeEventListener("keydown", handleModalKeydown);
    backdrop.remove();
    triggerButton.focus();
  }

  function handleModalKeydown(event) {
    if (event.key === "Escape") {
      closeModal();
    }
  }

  closeButton.addEventListener("click", closeModal);
  backdrop.addEventListener("click", (event) => {
    if (event.target === backdrop) {
      closeModal();
    }
  });
  document.addEventListener("keydown", handleModalKeydown);
  closeButton.focus();
}

function updateDisplayedProductSelections() {
  productsContainer.querySelectorAll(".product-card").forEach((card) => {
    const productId = Number(card.dataset.productId);
    const isSelected = selectedIds.includes(productId);
    card.classList.toggle("selected", isSelected);
    card.setAttribute("aria-pressed", String(isSelected));
  });
}

function renderSelectedProducts() {
  const selectedProducts = selectedIds
    .map((id) => allProducts.find((product) => product.id === id))
    .filter((product) => product);

  if (selectedProducts.length === 0) {
    selectedProductsList.innerHTML = `<p class="selected-products-placeholder">${t(
      "selectedProductsEmpty",
    )}</p>`;
    return;
  }

  selectedProductsList.innerHTML = selectedProducts
    .map(
      (product) => `
        <div class="selected-product">
          <img
            class="selected-product-image"
            src="${product.image}"
            alt="${product.name}"
            translate="no"
          >
          <span translate="no"><strong class="selected-product-name">${product.name}</strong> — <span class="selected-product-brand">${product.brand}</span></span>
          <button
            class="remove-selected-product"
            type="button"
            data-product-id="${product.id}"
            aria-label="${t("removeProductAriaLabel", {
              name: product.name,
            })}"
          >×</button>
        </div>
      `,
    )
    .join("");

  selectedProductsList
    .querySelectorAll(".selected-product-image")
    .forEach((image) => {
      addImageFallback(image, image.alt);
    });
}

function saveSelectedIds() {
  try {
    localStorage.setItem(
      selectedProductsStorageKey,
      JSON.stringify(selectedIds),
    );
  } catch (error) {
    console.error(t("errorSaveSelectedProducts"), error);
  }
}

function updateSelection() {
  saveSelectedIds();
  renderSelectedProducts();
  updateDisplayedProductSelections();
}

function toggleProductSelection(productId) {
  if (selectedIds.includes(productId)) {
    selectedIds = selectedIds.filter((id) => id !== productId);
  } else {
    selectedIds.push(productId);
  }
  updateSelection();
}

loadProducts()
  .then((products) => {
    allProducts = products;
    renderSelectedProducts();
    renderFilteredProducts();
  })
  .catch((error) => {
    console.error(t("errorLoadProducts"), error);
  });

function formatAssistantMessage(content) {
  const escapedContent = content
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  const boldContent = escapedContent.replace(
    /\*\*(.*?)\*\*/g,
    "<strong>$1</strong>",
  );
  const linkedContent = boldContent.replace(
    /\[([^\]]+)\]\(((?:[^()]|\([^()]*\))*)\)/g,
    (match, text, url) => {
      if (!/^https?:\/\//i.test(url)) {
        return text;
      }

      const safeUrl = url.replace(/"/g, "&quot;");
      return `<a class="msg-inline-link" href="${safeUrl}" target="_blank" rel="noopener noreferrer">${text}</a>`;
    },
  );
  const blocks = [];
  let listType = "";
  let listItems = [];
  const lines = linkedContent.split("\n");

  function closeList() {
    if (listType) {
      blocks.push(`<${listType}>${listItems.join("")}</${listType}>`);
      listType = "";
      listItems = [];
    }
  }

  for (let index = 0; index < lines.length; index++) {
    const line = lines[index];

    const isPipeRow = (candidate) =>
      /^\|.*\|$/.test(candidate.trim());
    const tableSeparator = lines[index + 1];
    const isTableSeparator =
      isPipeRow(line) &&
      isPipeRow(tableSeparator || "") &&
      tableSeparator
        .trim()
        .split("|")
        .slice(1, -1)
        .every((cell) => /^:?-+:?$/.test(cell.trim()));

    if (isTableSeparator) {
      closeList();
      const getCells = (row) =>
        row.trim().split("|").slice(1, -1).map((cell) => cell.trim());
      const headerCells = getCells(line);
      const bodyRows = [];
      index += 2;

      while (index < lines.length && isPipeRow(lines[index])) {
        bodyRows.push(getCells(lines[index]));
        index++;
      }
      index--;

      const header = headerCells.map((cell) => `<th>${cell}</th>`).join("");
      const rows = bodyRows
        .map((cells) => {
          while (cells.length < headerCells.length) {
            cells.push("");
          }
          return `<tr>${cells.map((cell) => `<td>${cell}</td>`).join("")}</tr>`;
        })
        .join("");

      blocks.push(
        `<div class="msg-table-container"><table class="msg-table"><thead><tr>${header}</tr></thead><tbody>${rows}</tbody></table></div>`,
      );
      continue;
    }

    if (!line.trim() && listType) {
      const nextLine = lines
        .slice(index + 1)
        .find((candidate) => candidate.trim());
      const continuesList =
        listType === "ol"
          ? /^\d+\. /.test(nextLine || "")
          : /^[-*] /.test(nextLine || "");

      if (continuesList) {
        continue;
      }
    }

    const bulletItem = line.match(/^[-*] (.*)$/);
    const numberedItem = line.match(/^(\d+)\. (.*)$/);
    const nextListType = bulletItem ? "ul" : numberedItem ? "ol" : "";

    if (nextListType) {
      if (listType !== nextListType) {
        closeList();
        listType = nextListType;
      }
      if (bulletItem) {
        listItems.push(`<li>${bulletItem[1]}</li>`);
      } else {
        listItems.push(
          `<li value="${numberedItem[1]}">${numberedItem[2]}</li>`,
        );
      }
      continue;
    }

    closeList();
    const heading = line.match(/^#{2,3} (.*)$/);
    blocks.push(heading ? `<h3>${heading[1]}</h3>` : line);
  }

  closeList();
  return blocks.join("<br>");
}

function addMessage(role, content, extraClass = "") {
  const messageElement = document.createElement("div");
  messageElement.classList.add("msg", role);

  if (extraClass) {
    messageElement.classList.add(extraClass);
  }

  if (role === "assistant") {
    messageElement.innerHTML = formatAssistantMessage(content);
  } else {
    messageElement.textContent = content;
  }
  chatWindow.appendChild(messageElement);
  if (role === "assistant") {
    if (latestUserMessage) {
      const userMessageBottom =
        latestUserMessage.getBoundingClientRect().bottom -
        chatWindow.getBoundingClientRect().top +
        chatWindow.scrollTop;
      chatWindow.scrollTo({ top: userMessageBottom, behavior: "smooth" });
    }
  } else {
    latestUserMessage = messageElement;
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }
  return messageElement;
}

function addSources(messageElement, annotations) {
  if (!Array.isArray(annotations)) {
    return;
  }

  const seenUrls = new Set();
  const citations = annotations.filter((annotation) => {
    if (
      !annotation ||
      annotation.type !== "url_citation" ||
      !annotation.url_citation
    ) {
      return false;
    }

    const citation = annotation.url_citation;
    if (typeof citation.url !== "string" || seenUrls.has(citation.url)) {
      return false;
    }

    seenUrls.add(citation.url);
    return true;
  });

  if (citations.length === 0) {
    return;
  }

  const sources = document.createElement("div");
  sources.classList.add("msg-sources");

  const label = document.createElement("span");
  label.classList.add("msg-sources-label");
  label.textContent = t("sourcesLabel");
  sources.appendChild(label);

  citations.forEach((annotation) => {
    const citation = annotation.url_citation;
    const link = document.createElement("a");
    link.href = citation.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = citation.title || citation.url;
    sources.appendChild(link);
  });

  messageElement.appendChild(sources);
}

async function sendToWorker(displayText, payloadText = displayText) {
  addMessage("user", displayText);
  messages.push({ role: "user", content: payloadText });
  const loadingMessage = addMessage("assistant", t("thinking"), "loading");

  try {
    const response = await fetch(WORKER_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "gpt-5-search-api",
        messages: messages,
        web_search_options: {},
      }),
    });

    if (!response.ok) {
      throw new Error(t("requestFailedStatus", { status: response.status }));
    }

    const contentType = response.headers.get("content-type") || "";
    if (!contentType.toLowerCase().includes("json")) {
      throw new Error(t("invalidJsonResponse"));
    }

    const data = await response.json();
    const assistantResponse = data.choices[0].message;
    const reply = assistantResponse.content;
    if (typeof reply !== "string") {
      throw new Error(t("missingResponseMessage"));
    }

    loadingMessage.remove();
    messages.push({ role: "assistant", content: reply });
    const assistantMessage = addMessage("assistant", reply);
    addSources(assistantMessage, assistantResponse.annotations);
  } catch (error) {
    loadingMessage.remove();
    console.error(t("errorSendMessage"), error);
    addMessage("assistant", t("requestErrorFriendly"), "error");
  }
}

categoryFilter.addEventListener("change", renderFilteredProducts);
productSearch.addEventListener("input", renderFilteredProducts);

productsContainer.addEventListener("click", (event) => {
  const card = event.target.closest(".product-card");
  if (card) {
    toggleProductSelection(Number(card.dataset.productId));
  }
});

productsContainer.addEventListener("keydown", (event) => {
  if (event.target.closest(".product-details-button")) {
    return;
  }

  const card = event.target.closest(".product-card");
  if (card && (event.key === "Enter" || event.key === " ")) {
    event.preventDefault();
    toggleProductSelection(Number(card.dataset.productId));
  }
});

selectedProductsList.addEventListener("click", (event) => {
  const removeButton = event.target.closest(".remove-selected-product");
  if (removeButton) {
    toggleProductSelection(Number(removeButton.dataset.productId));
  }
});

clearSelectedProductsButton.addEventListener("click", () => {
  selectedIds = [];
  updateSelection();
});

generateRoutineButton.addEventListener("click", async () => {
  chatbox.scrollIntoView({
    behavior: prefersReducedMotion.matches ? "instant" : "smooth",
    block: "start",
  });

  const selectedProducts = selectedIds
    .map((id) => allProducts.find((product) => product.id === id))
    .filter((product) => product);

  if (selectedProducts.length === 0) {
    addMessage("assistant", t("pleaseSelectProducts"));
    return;
  }

  const simplifiedProducts = selectedProducts.map((product) => ({
    name: product.name,
    brand: product.brand,
    category: product.category,
    description: product.description,
  }));
  const payloadText =
    t("routinePayloadPrefix") + JSON.stringify(simplifiedProducts, null, 2);
  const displayText = t("routineRequestDisplay", {
    products: selectedProducts.map((product) => product.name).join(", "),
  });
  generateRoutineButton.disabled = true;
  const routineIcon = generateRoutineButton.querySelector("i");
  const routineLabel = generateRoutineButton.querySelector(
    '[data-i18n="generateRoutine"]',
  );
  routineIcon.className = "fa-solid fa-spinner fa-spin";
  routineLabel.textContent = t("buildingRoutine");

  try {
    await sendToWorker(displayText, payloadText);
  } finally {
    generateRoutineButton.disabled = false;
    routineIcon.className = "fa-solid fa-wand-magic-sparkles";
    routineLabel.textContent = t("generateRoutine");
  }
});

userInput.addEventListener("input", () => {
  userInput.style.height = "auto";
  userInput.style.height = `${Math.min(userInput.scrollHeight, 120)}px`;
  userInput.style.overflowY = userInput.scrollHeight > 120 ? "auto" : "hidden";
});

userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    chatForm.requestSubmit();
  }
});

chatForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const userVisibleText = userInput.value.trim();
  if (!userVisibleText) {
    return;
  }

  userInput.value = "";
  userInput.style.height = "auto";
  userInput.style.overflowY = "hidden";
  await sendToWorker(userVisibleText);
});

addMessage("assistant", t("welcomeMessage"));
