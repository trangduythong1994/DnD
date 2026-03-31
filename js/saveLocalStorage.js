function loadData() {
  document.querySelectorAll("input, textarea, select").forEach(el => {
    const id = el.id;
    if (!id || el.dataset.computed) return;

    if (el.type === "checkbox") {
      el.checked = localStorage.getItem(id) === "true";
      el.dispatchEvent(new Event("change", { bubbles: true }));
    } else if (el.tagName === "SELECT") {
      el.value = localStorage.getItem(id) || "";
      el.dispatchEvent(new Event("change", { bubbles: true }));
    } else {
      el.value = localStorage.getItem(id) || "";
      el.dispatchEvent(new Event("input", { bubbles: true }));
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  customElements.define("c-1", c1Element);
  customElements.define("c-2", c2Element);
  customElements.define("p-1", p1Element);
  customElements.define("p-2", p2Element);
  customElements.define("p-i", piElement);
  initElements();
  loadData();
  updateBodySlots();
  updateInventory();
  updateArmorClass();
  updateAttack();
  updateAction();
  document.querySelectorAll("input, textarea, select").forEach(el => {
    const id = el.id;
    if (!id) return;
    const eventType = (el.tagName == "SELECT" || el.type == "checkbox") ? "change" : "input";
    el.addEventListener(eventType, () => {
      if (el.type === "checkbox") {
        localStorage.setItem(id, el.checked);
      } else {
        localStorage.setItem(id, el.value);
      }
    });
  });
});