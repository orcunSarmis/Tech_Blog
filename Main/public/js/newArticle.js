const newArticleFormHandler = async (event) => {
    event.preventDefault();

    const title = document.getElementById('new-Article-Title').value.trim();
    const content = document.getElementById('new-Article-Content').value.trim();

    if (title && content) {
        const response = await fetch('/api/articles/', {
            method: 'POST',
            body: JSON.stringify({ title, content }),
            headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alerft(response.statusText);
        }
    }
};

const cancelButtonHandler =async () => {
    document.location.replace('/dasboard');
}

document
.querySelector('.newArticleForm')
.addEventListener('submit', newArticleFormHandler);

document
.querySelector('.newArticleForm')
.addEventListener('reset', cancelButtonHandler);