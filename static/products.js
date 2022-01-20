function init() {

    const cookies = document.cookie.split('=');
    const token = cookies[cookies.length - 1];
    
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
            code: document.getElementById('code').value,
            nameP: document.getElementById('nameP').value,
            price: document.getElementById('price').value,
            quantity: document.getElementById('quantity').value

        };

        document.getElementById('code').value = '';
        document.getElementById('nameP').value = '';
        document.getElementById('price').value = '';
        document.getElementById('quantity').value= '';


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
            Code: document.getElementById('code').value,
            nameP: document.getElementById('nameP').value,
            price: document.getElementById('price').value,
            quantity: document.getElementById('quantity').value,
            id: document.getElementById('id').value


        };

        document.getElementById('code').value = '';
        document.getElementById('nameP').value = '';
        document.getElementById('price').value = '';
        document.getElementById('quantity').value= '';
        document.getElementById('id').value='';


        fetch('http://localhost:8000/admin/product/' + data.id, {
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
            Code: document.getElementById('code').value,
            nameP: document.getElementById('nameP').value,
            price: document.getElementById('price').value,
            quantity: document.getElementById('quantity').value,
            id: document.getElementById('id').value



        };

        document.getElementById('code').value = '';
        document.getElementById('nameP').value = '';
        document.getElementById('price').value = '';
        document.getElementById('quantity').value= '';
        document.getElementById('id').value='';


        fetch('http://localhost:8000/admin/product/' + data.id, {
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