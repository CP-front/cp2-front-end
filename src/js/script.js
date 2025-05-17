document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault(); // impede o envio real

      const nome = document.getElementById('nome').value.trim();
      const email = document.getElementById('email').value.trim();
      const mensagem = document.getElementById('mensagem').value.trim();

      if (nome && email && mensagem) {
        alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`);
        form.reset(); // limpa os campos
      } else {
        alert('Por favor, preencha todos os campos do formulário.');
      }
    });
  }

  // Caso queira adicionar menu responsivo (hambúrguer)
  const toggleMenu = document.getElementById('toggle-menu');
  const navList = document.querySelector('nav ul');

  if (toggleMenu && navList) {
    toggleMenu.addEventListener('click', () => {
      navList.classList.toggle('ativo');
    });
  }
});
