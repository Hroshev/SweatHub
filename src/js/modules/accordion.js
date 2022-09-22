const faqs = document.querySelectorAll(".manual__content__accordion")

faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});

