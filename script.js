// script.js - Galería de imágenes con botones de navegación y burger menu
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM cargado, iniciando galería');

    const galleryImages = document.querySelector('.gallery-images');
    const images = document.querySelectorAll('.gallery-image');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;

    // Verificar si los elementos existen
    console.log('galleryImages:', galleryImages);
    console.log('images:', images.length, 'imágenes encontradas');
    console.log('prevBtn:', prevBtn);
    console.log('nextBtn:', nextBtn);

    if (!galleryImages || images.length === 0 || !prevBtn || !nextBtn) {
        console.error('Error: Uno o más elementos no se encontraron en el DOM');
        return;
    }

    function updateGallery() {
        // Asegurarse de que haya imágenes antes de intentar acceder a clientWidth
        if (images.length > 0) { // Cambiado de == 0 a > 0
            const imgWidth = images[0].clientWidth;
            console.log('Actualizando galería, índice:', currentIndex, 'ancho:', imgWidth);
            galleryImages.style.transform = `translateX(${-currentIndex * imgWidth}px)`; // Corregido imageWidth a imgWidth
        } else {
            console.error('No hay imágenes para mostrar en la galería');
        }
    }

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        console.log('Siguiente imagen, nuevo índice:', currentIndex);
        updateGallery();
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        console.log('Imagen anterior, nuevo índice:', currentIndex);
        updateGallery();
    });

    // Ajustar el tamaño al cambiar la ventana
    window.addEventListener('resize', updateGallery);

    // Iniciar la galería
    updateGallery();

    // Burger menu toggle
    const BurgerMenu = document.querySelector('.burger-menu');
    const navMenu = document.querySelector('.nav-menu');

    BurgerMenu.addEventListener('click', ( ) => {
        BurgerMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
    });


    // pop up para el télefono
    const phoneLink = document.getElementById('phone-link');
    const phonePopup = document.getElementById('phone-popup');
    const closePopup = document.getElementById('close-popup');


    phoneLink.addEventListener('click', (e) => {
        e.preventDefault(); // Evitar que el enlace se abra
        phonePopup.classList.add('active');
        document.body.classList.add('popup-active')
    });


    closePopup.addEventListener('click', () => {
        phonePopup.classList.remove('active');
        document.body.classList.remove('popup-active');
    });

    document.addEventListener('click', (e) => {
        if (e.target == phonePopup) {
            phonePopup.classList.remove('active');
            document.body.classList.remove('popup-active');
        }
    });


});
 