document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    const modal = document.getElementById('book-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalText = document.getElementById('modal-text');
    const closeModal = document.querySelector('.close');

    document.querySelectorAll('.btn-leer').forEach(button => {
        button.addEventListener('click', () => {
            const book = button.dataset.book;
            modalTitle.textContent = `Trecho do Livro ${book}`;
            modalText.textContent = `Este é um trecho do ${book}.`;
            modal.style.display = 'block';
        });
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});
