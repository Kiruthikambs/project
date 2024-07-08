document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.querySelector('.dropdown');
    const dropbtn = document.querySelector('.dropbtn');
    const dropdownContent = document.querySelector('.dropdown-content');

    dropbtn.addEventListener('click', () => {
        dropdownContent.classList.toggle('show');
    });

    window.addEventListener('click', (e) => {
        if (!dropdown.contains(e.target)) {
            dropdownContent.classList.remove('show');
        }
    });

    dropdownContent.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            dropbtn.textContent = e.target.textContent;
            dropdownContent.classList.remove('show');
        }
    });
});
