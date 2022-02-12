import React, { useEffect, useState } from 'react';
import '../../App.css';
import CardItem from '../CardItem';
import { useCookies } from "react-cookie";
import { useHistory } from "react-router-dom";
import '../User.css';


export default function User(setIsLogin) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [cookies, setCookie, removeCookie] = useCookies(["User"]);
    const [nesto, setNesto] = useState(0);
    const history = useHistory();
    
    const getUser = async () => {
      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credential: 'include'
      };
      const response = await fetch(
        "https://localhost:44396/Sport/GetUserByUsername/" + username,
        requestOptions
      );
      const data = await response.json();
      console.log(data);
      setCookie("username", data.username);
      history.push("/");
    };

    function logout(){
        removeCookie("id");
        history.push("/");
    }

    useEffect(() => {}, []);

    const updateUsername = (e) => {
        setUsername(e.target.value);
    }

  return (
    <div className='cards-user'>
    <h1>Korisnik: </h1>
    <div className='cards__container_user'>
      <div className='cards__wrapper_user'>
        <ul className='cards__items_user'>
          <CardItem
            src='images/img-shop.jpg'
            text='Moje porudžbine'
            label='Porudžbine'
            path='/'
          />
          <CardItem
            src='images/img-profile.jpg'
            text='Moj profil'
            label='Profil'
            path='/'
          />
        </ul>
        <button className='logout-btn' type='submit' onClick={logout}>Logout</button>
      </div>
    </div>
  </div>
  );
}
