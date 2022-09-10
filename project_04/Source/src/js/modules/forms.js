const forms = () => {

    const form = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input');

    const message = {
        loading: 'Загрузка...',
        success: "Спасибо! С вами свяжутся!",
        failure: 'Ошибка! Что-то не так!'
    };

    const post = async (url, data) => {
        document.querySelector('.status').textContent = message.loading;

        const res = await fetch(url, {
            method: 'POST',
            body: data
        });

        return await res.text();
    };

    const clear = (inputs) => {
        inputs.forEach(input => {
            input.value = '';
        });
    };


    form.forEach(form => {
        bindPostData(form);
    });

    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = document.createElement('div');
            statusMessage.classList.add('status');

            form.appendChild(statusMessage);

            const formData = new FormData(form);


            post("assets/server.php", formData)
            .then(res => {
                console.log(res);
                statusMessage.textContent = message.success;
            })
            .catch(() => {
                statusMessage.textContent = message.failure;
            })
            .finally(() => {
                clear(inputs);
                setTimeout(() => {statusMessage.remove();}, 5000);
            });


        });
    }

};

export default forms;