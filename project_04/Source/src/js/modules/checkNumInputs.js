const checkNumb = (selector) => {

    const numbInputs = document.querySelectorAll(selector);

    numbInputs.forEach(input => {
        input.addEventListener('input', () => {
            input.value = input.value.replace(/\D/g, '');
        });
    });
};

export default checkNumb;