document.addEventListener('DOMContentLoaded', function() {
    // Verifica se o botão existe
    const backToTop = document.querySelector('.back-to-top');
    
    if (!backToTop) {
        console.error('Erro: Elemento com classe "back-to-top" não encontrado!');
        return;
    }

    // Mostra/oculta o botão ao rolar
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTop.style.display = 'block';
        } else {
            backToTop.style.display = 'none';
        }
    });

    // Rolagem suave ao clicar
    backToTop.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    console.log('Script carregado com sucesso!'); // Mensagem de confirmação
});