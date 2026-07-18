// Shared cart logic (localStorage-backed) for Salty C's Treasure
const KEY = 'sct_cart_v1';

export function getCart() {
  try { return JSON.parse(localStorage.getItem(KEY)) || []; }
  catch (e) { return []; }
}

export function saveCart(items) {
  localStorage.setItem(KEY, JSON.stringify(items));
  window.dispatchEvent(new CustomEvent('sct-cart-change', { detail: items }));
}

export function addToCart(product) {
  const items = getCart();
  const existing = items.find(i => i.id === product.id);
  if (existing) existing.qty += 1;
  else items.push({ ...product, qty: 1 });
  saveCart(items);
  return items;
}

export function removeFromCart(id) {
  const items = getCart().filter(i => i.id !== id);
  saveCart(items);
  return items;
}

export function updateQty(id, qty) {
  const items = getCart().map(i => i.id === id ? { ...i, qty: Math.max(1, qty) } : i);
  saveCart(items);
  return items;
}

export function cartCount(items) {
  return (items || getCart()).reduce((n, i) => n + i.qty, 0);
}

export function cartTotal(items) {
  return (items || getCart()).reduce((n, i) => n + i.qty * i.price, 0);
}

export function clearCart() {
  saveCart([]);
}
