// Botão para abrir o Instagram
document.getElementById("btnInstagram").addEventListener("click", () => {
  window.open("https://instagram.com/organiza.mais_", "_blank");
});


document.querySelectorAll(".carrossel").forEach(carrossel => {
  const items = carrossel.querySelectorAll(".carrossel-imagens .item");
  const btnPrev = carrossel.querySelector(".seta.esquerda");
  const btnNext = carrossel.querySelector(".seta.direita");
  let current = 0;


  const showItem = (index) => {
    items.forEach(item => item.classList.remove("ativo"));
    items[index].classList.add("ativo");
  };


  btnPrev.addEventListener("click", () => {
    current = (current - 1 + items.length) % items.length;
    showItem(current);
  });


  btnNext.addEventListener("click", () => {
    current = (current + 1) % items.length;
    showItem(current);
  });


  showItem(current);
});






