// <!-- section 1 (header or hero page) -->

    const mobileMenu = document.getElementById('mobile-menu');
    const navBar = document.getElementById('nav-bar');

    mobileMenu.addEventListener('click', () => {
        navBar.classList.toggle('active');
    });


// <!-- section 10 (FAQ) -->

function toggleS10Faq(element) {
    const item = element.parentElement;
    const isActive = item.classList.contains('active');

    // Baaki sab band karne ke liye (Optional: Close others)
    document.querySelectorAll('.s10-item').forEach(el => {
        el.classList.remove('active');
        el.querySelector('.s10-answer').style.maxHeight = null;
    });

    // Sirf isse open karne ke liye
    if (!isActive) {
        item.classList.add('active');
        const answer = item.querySelector('.s10-answer');
        answer.style.maxHeight = answer.scrollHeight + "px";
    }
}
