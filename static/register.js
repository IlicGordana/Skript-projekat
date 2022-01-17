function init() {

    document.getElementById('btn').addEventListener('click', e => {
        e.preventDefault();

        const data = {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            username: document.getElementById('username').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
           // moderator: document.getElementById('moderator').checked

        };

        fetch('http://localhost:9000/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then( res => res.json() )
            .then( el => {
                document.cookie = `token=${el.token};SameSite=Lax`;
                
                if(document.getElementById('admin').checked){
                window.location.href = 'admin.html';
                }
                // if(document.getElementById('moderator').checked){
                //     window.location.href = 'moderator.html'
                // }
            });
    });
}