// Per-product overrides (image, name, price) saved by the admin drag-and-drop editor.
const KEY = 'sct_product_overrides_v1';

export function getOverrides() {
  try { return JSON.parse(localStorage.getItem(KEY)) || {}; }
  catch (e) { return {}; }
}

export function saveOverride(id, patch) {
  const all = getOverrides();
  all[id] = { ...all[id], ...patch };
  localStorage.setItem(KEY, JSON.stringify(all));
  window.dispatchEvent(new CustomEvent('sct-products-change'));
}

export function mergedProducts(baseProducts) {
  const overrides = getOverrides();
  return baseProducts.map(p => ({ ...p, ...overrides[p.id] }));
}
