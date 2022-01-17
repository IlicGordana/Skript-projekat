const req = require('express/lib/request');
const { sequelize, Users } = require('./models');
const bcrypt = require('bcrypt');


function init() {


    const cookies = document.cookie.split('=');
    const token = cookies[cookies.length - 1];

    fetch('http://localhost:8000/admin/users', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .then( res => res.json() )
        .then( data => {
            const lst = document.getElementById('usrLst');

            data.forEach( el => {
                lst.innerHTML += `<li>ID: ${el.id}, FirstName: ${el.firstName}, 
                               LastName: ${el.lastName},E-mail: ${el.email}
                               Username: ${el.username}</li>`;
            });
        });


    document.getElementById('usrBtnAdd').addEventListener('click', e => {
        e.preventDefault();

        const data = {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            email: document.getElementById('email').value,
            username: document.getElementById('username').value,
            password: document.getElementById('password').value



        };

        document.getElementById('firstName').value = '';
        document.getElementById('lastName').value = '';
        document.getElementById('email').value = '';
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';

        fetch('http://localhost:8000/admin/users', {
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
                    document.getElementById('usrLst').innerHTML += `<li>ID: ${el.id}, FirstName: ${el.firstName}, 
                    LastName: ${el.lastName},E-mail: ${el.email}
                    Username: ${el.username}, Password: ${el.password}</li>`;;
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
                    document.getElementById('usrLst').innerHTML += `<li>ID: ${el.id}, FirstName: ${el.firstName}, 
                    LastName: ${el.lastName},E-mail: ${el.email}
                    Username: ${el.username}</li>`;
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
                    document.getElementById('usrLst').innerHTML += `<li>ID: ${el.id}, FirstName: ${el.firstName}, 
                    LastName: ${el.lastName},E-mail: ${el.email}
                    Username: ${el.username}</li>`;
                }
            });
    });

    document.getElementById('usrBtnLogOut').addEventListener('click', e => {
        document.cookie = `token=;SameSite=Lax`;
        window.location.href = 'login.html';
    });
}

