// Tampilkan tombol ketika pengguna scroll lebih dari 20px dari atas
window.onscroll = function() {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

// Fungsi untuk scroll ke atas halaman
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Smooth scrolling untuk link navigasi
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fungsi untuk memeriksa apakah elemen dalam viewport
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const revealPoint = 150;

        if (elementTop < windowHeight - revealPoint) {
            reveal.classList.add('active');
        } else {
            reveal.classList.remove('active');
        }
    });
}

// Panggil fungsi saat scroll
window.addEventListener('scroll', revealOnScroll);
