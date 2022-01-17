function init() {


    fetch('http://localhost:8000/admin/product', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .then( res => res.json() )
        .then( data => {
            const lst = document.getElementById('productLst');

            data.forEach( el => {
                lst.innerHTML += `<li>ID: ${el.id}, Code: ${el.code}, 
                               nameP: ${el.nameP}, Price: ${el.price}
                              </li>`;
            });
        });


    document.getElementById('usrBtnAdd').addEventListener('click', e => {
        e.preventDefault();

        const data = {
            Code: document.getElementById('code').value,
            nameP: document.getElementById('nameP').value,
            price: document.getElementById('price').value,

        };

        document.getElementById('code').value = '';
        document.getElementById('nameP').value = '';
        document.getElementById('price').value = '';


        fetch('http://localhost:8000/admin/product', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })
            .then( res => res.json() )
            .then( el => {
                if (el.msg) {
                    alert(el.msg);
                } else {
                    document.getElementById('productLst').innerHTML +=`<li>ID: ${el.id}, Code: ${el.code}, 
                    nameP: ${el.nameP}, Price: ${el.price}
                   </li>`;
                }
            });
    });


    document.getElementById('usrBtnUpdate').addEventListener('click', e => {
        e.preventDefault();

        const data = {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            email: document.getElementById('email').value,
            username: document.getElementById('username').value,
            password: document.getElementById('password').value,
            id: document.getElementById('id').value


        };

        document.getElementById('firstName').value = '';
        document.getElementById('lastName').value = '';
        document.getElementById('email').value = '';
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';

        fetch('http://localhost:8000/admin/users/' + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        }).then( res => res.json() )
            .then( el => {
                if (el.msg) {
                    alert(el.msg);
                } else {
                    document.getElementById('productLst').innerHTML += `<li>ID: ${el.id}, Body: ${el.body}</li>`;
                }
            });
    });

    document.getElementById('usrBtnDelete').addEventListener('click', e => {
        e.preventDefault();

        const data = {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            email: document.getElementById('email').value,
            username: document.getElementById('username').value,
            password: document.getElementById('password').value,


        };

        document.getElementById('firstName').value = '';
        document.getElementById('lastName').value = '';
        document.getElementById('email').value = '';
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';

        fetch('http://localhost:8000/admin/users/:id', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })
            .then( res => res.json() )
            .then( el => {
                if (el.msg) {
                    alert(el.msg);
                } else {
                    document.getElementById('productLst').innerHTML += `<li>ID: ${el.id}, Body: ${el.body}</li>`;
                }
            });
    });

    document.getElementById('usrBtnLogOut').addEventListener('click', e => {
        document.cookie = `token=;SameSite=Lax`;
        window.location.href = 'login.html';
    });
}