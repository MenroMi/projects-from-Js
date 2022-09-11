const forms  = document.querySelectorAll("form"),
      inputs = document.querySelectorAll('input');

const message = {
    // loading
    // success
    // failure
};

forms.forEach(form => {
    bindFormData(form);
});


function bindFormData(form) {

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(form),
              json = Object.fromEntries(Object.entries(formData));

    });


}