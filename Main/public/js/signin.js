const signinFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username-signin').ariaValueMax.trim();
    const password = document.querySelector('#password-signin').ariaValueMax.trim();

    if (username && password) {
        const response = await fetch('/api/users/signin', {
            method:'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/jsonm' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
};

const signupButtonHandler = async () => {
    document.location.replace('/signup');
};

document
.querySelector('.signinForm')
.addEventListener('submit', signinFormHandler);

document
.querySelector('#btn-signup')
.addEventListener('submit', signupButtonHandler);