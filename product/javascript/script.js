// Product Array
const products = [
  { id: "p1", name: "Laptop" },
  { id: "p2", name: "Smartphone" },
  { id: "p3", name: "Headphones" },
  { id: "p4", name: "Smartwatch" },
  { id: "p5", name: "Tablet" }
];

window.addEventListener("DOMContentLoaded", () => {
  const productSelect = document.getElementById("productName");

  // Populate products dynamically
  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
  });
});
