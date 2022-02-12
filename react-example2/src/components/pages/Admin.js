import React, { useEffect, useState } from 'react';
import '../../App.css';
import CardItem from '../CardItem';
import { useCookies } from "react-cookie";
import { useHistory } from "react-router-dom";
import '../Admin.css';


export default function Admin(setIsLogin) {



  return (
    <div className='cards-admin'>
    <h1>Admin </h1>
    <div className='cards__container_admin'>
      <div className='cards__wrapper_admin'>
        <ul className='cards__items_admin'>
          <CardItem
            src='images/img-shop.jpg'
            text='Svi proizvodi'
            label='Proizvodi'
            path='/allproducts'
          />
          <CardItem
            src='images/img-allusers.jpg'
            text='Svi korisnici'
            label='Korisnici'
            path='/allusers'
          />
          <CardItem
            src='images/img-add.jpg'
            text='Dodavanje proizvoda'
            label='Dodaj proizvod'
            path='/addProduct'
          />
        </ul>
        <button className='logout-btn' type='submit'>Logout</button>
      </div>
    </div>
  </div>
  );
}
