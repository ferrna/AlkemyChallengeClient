import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';
//import axios from 'axios';
import swal from 'sweetalert';

const api_url = process.env.REACT_APP_BACKEND;

function Login() {
  const [userdata, setUserdata] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    setUserdata({ ...userdata, [e.target.name]: e.target.value });
  };

  /* const headers = {};
  headers['Access-Control-Allow-Origin'] = '*'
  headers['Accept'] = 'application/json'
  headers['Content-type'] = 'application/json' */

  const handleRegister = async () => {
      const headers = {
        "Accept": "application/json",
        "Content-type": "application/json"
      }
      const options = {
        headers,
        method: "POST",
      }
      const data = {
        email: userdata.email,
        password: userdata.password,
      }
      options.body = JSON.stringify({ ...data });
      fetch('https://mywallet-alkemy-api.herokuapp.com/user/register', options)
      .then((res) => {
        if (res.statusText === 'OK') {
          swal({
            title: `Registro con éxito`,
            text: `ID: ${res.id}`,
            icon: 'success',
            button: 'Aceptar',
          });
          window.location.reload();
        }
      })
      .catch((err) => {
        swal({
          title: `Ya existe un usuario con ese username.`,
          icon: 'error',
        });
        console.log(err.message);
      });
  };

  const handleLogIn = async () => {
    const headers = {
      "Accept": "application/json",
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": `${api_url}`
    }
    const options = {
      headers,
      method: "POST",
    }
    const data = {
      email: userdata.email,
      password: userdata.password,
    }
    options.body = JSON.stringify({ ...data });
    fetch('https://mywallet-alkemy-api.herokuapp.com/user/login', options)
      .then((res) => {
        if (res.statusText === 'OK') {
          navigate('/');
        }
      })
      .catch(() =>
        swal({
          title: `Usuario o contraseña incorretas`,
          icon: 'error',
        })
      );
  };

  return (
    <section className='container formulario'>
      <div>
        <label htmlFor='email'>User email:</label>
        <input
          type='text'
          name='email'
          placeholder='johndoe@correo.com'
          value={userdata.email}
          onChange={(e) => handleOnChange(e)}
        />
      </div>
      <div>
        <label htmlFor='password'>Password:</label>
        <input
          type='password'
          name='password'
          placeholder='password'
          value={userdata.password}
          onChange={(e) => handleOnChange(e)}
        />
      </div>
      <div className='container-buttons'>
        <button id='login-button' onClick={handleLogIn}>
          Log In
        </button>
        <button id='signin-button' onClick={handleRegister}>
          Create an account
        </button>
      </div>
    </section>
  );
}

export default Login;

/* const handleRegister = async () => {
  await axios({
    method: 'post',
    headers: headers,
    data: {
      email: userdata.email,
      password: userdata.password,
    },
    withCredentials: true,
    url: `https://mywallet-alkemy-api.herokuapp.com/user/register`,
  })
    .then((res) => {
      if (res.statusText === 'OK') {
        swal({
          title: `Registro con éxito`,
          text: `ID: ${res.id}`,
          icon: 'success',
          button: 'Aceptar',
        });
        window.location.reload();
      }
    })
    .catch((err) => {
      swal({
        title: `Ya existe un usuario con ese username.`,
        icon: 'error',
      });
      console.log(err.message);
    });
}; */


/* const handleLogIn = async () => {
  await axios({
    method: 'post',
    data: {
      email: userdata.email,
      password: userdata.password,
    },
    headers: {
      'Accept': 'application/json',
      'Content-type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    withCredentials: true,
    url: `https://mywallet-alkemy-api.herokuapp.com/user/login`,
  })
    .then((res) => {
      if (res.statusText === 'OK') {
        navigate('/');
      }
    })
    .catch(() =>
      swal({
        title: `Usuario o contraseña incorretas`,
        icon: 'error',
      })
    );
}; */
