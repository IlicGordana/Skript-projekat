function init() {

    const cookies = document.cookie.split('=');
    const token = cookies[cookies.length - 1];
    fetch('http://localhost:8000/admin/order', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .then( res => res.json() )
        .then( data => {
            const lst = document.getElementById('orderLst');

            data.forEach( el => {
                lst.innerHTML += `<li>ID: ${el.id}, orderNumber: ${el.orderNumber} </li>`;
            });
        });


    document.getElementById('usrBtnAdd').addEventListener('click', e => {
        e.preventDefault();

        const data = {
            orderNumber: document.getElementById('orderNumber').value,
        };

        document.getElementById('orderNumber').value = '';


        fetch('http://localhost:8000/admin/order', {
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
                    document.getElementById('orderLst').innerHTML +=`<li>ID: ${el.id}, orderNumber: ${el.orderNumber}
                   </li>`;
                }
            });
    });


    document.getElementById('usrBtnUpdate').addEventListener('click', e => {
        e.preventDefault();

        const data = {
            orderNumber: document.getElementById('orderNumber').value,
            id: document.getElementById('id').value


        };

        document.getElementById('orderNumber').value = '';
        document.getElementById('id').value= '';


        fetch('http://localhost:8000/admin/order/' + data.id, {
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
                    document.getElementById('orderLst').innerHTML +=`<li>ID: ${el.id}, orderNumber: ${el.orderNumber}
                    </li>`;
                }
            });
    });

    document.getElementById('usrBtnDelete').addEventListener('click', e => {
        e.preventDefault();

        const data = {
            orderNumber: document.getElementById('orderNumber').value,
            id: document.getElementById('id').value


        };

        document.getElementById('orderNumber').value = '';
        document.getElementById('id').value= '';


        fetch('http://localhost:8000/admin/order/' + data.id, {
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
                    document.getElementById('orderLst').innerHTML +=`<li>ID: ${el.id}, orderNumber: ${el.orderNumber}
                    </li>`;
                }
            });
    });

    document.getElementById('usrBtnLogOut').addEventListener('click', e => {
        document.cookie = `token=;SameSite=Lax`;
        window.location.href = 'login.html';
    });
}