const menuBtn = document.getElementById('menuBtn');
const menuList = document.getElementById('menuList');
menuBtn.addEventListener('click', () => {
    menuList.classList.toggle('show');
});



// JavaScript para controlar o popup de contato
document.addEventListener('DOMContentLoaded', function() {
    // Verificar se os elementos existem na página
    const btnCta = document.getElementById('btn-cta');
    const popup = document.getElementById('popup-contato');
    const fechar = document.querySelector('.fechar');
    
    // Se os elementos não existirem, não executar o código
    if (!btnCta || !popup || !fechar) return;
    
    // Abrir popup ao clicar no botão CTA
    btnCta.addEventListener('click', function() {
        popup.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Previne scroll
    });
    
    // Fechar popup ao clicar no X
    fechar.addEventListener('click', function() {
        popup.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restaura scroll
    });
    
    // Fechar popup ao clicar fora da área de conteúdo
    window.addEventListener('click', function(event) {
        if (event.target == popup) {
            popup.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Fechar popup com a tecla ESC
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && popup.style.display === 'block') {
            popup.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});