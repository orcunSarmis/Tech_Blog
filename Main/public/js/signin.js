const signinFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username-signin').ariaValueMax.trim();
    const password = document.querySelector('#password-signin').ariaValueMax.trim();

    if (username && password) {
        const response = await fetch('/api/users/signin', {
            method:'POST',
            body: JSON.stringify({ username, password }),
            neaders: { 'Content-Type': 'application/jsonm' },
        });

        
    }
}