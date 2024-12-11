AOS.init({
    duration: 1000,
    once: true
});

// Fungsi untuk toggle ikon saat tombol dipencet
function toggleIcon(button, id) {
    const defaultIcon = document.getElementById(`${id}-default`);
    const hoverIcon = document.getElementById(`${id}-hover`);
    if (defaultIcon.classList.contains('hidden')) {
        defaultIcon.classList.remove('hidden');
        hoverIcon.classList.add('hidden');
    } else {
        defaultIcon.classList.add('hidden');
        hoverIcon.classList.remove('hidden');
    }
}