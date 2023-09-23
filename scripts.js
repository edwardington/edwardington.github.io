// Make the FAQ items clickable to show/hide their answers.
document.querySelectorAll('.faq-item h4').forEach(item => {
    item.addEventListener('click', event => {
        const faqItem = event.target.parentElement;
        if (faqItem.classList.contains('active')) {
            faqItem.classList.remove('active');
        } else {
            faqItem.classList.add('active');
        }
    });
});

// Logic for the "See More" link could go here.
document.querySelector('.see-more-link').addEventListener('click', event => {
    event.preventDefault();
    // Example: Open a modal with more FAQs.
    // This would require additional logic and elements.
});