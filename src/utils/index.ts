export async function getProduct() {
  const result = await fetch("/products.json");
  return result.json();
}
