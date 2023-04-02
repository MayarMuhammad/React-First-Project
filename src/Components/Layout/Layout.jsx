import React from 'react'
import Navbar from '../Navbar/Navbar';
import Info from '../Info/Info';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

export default function Layout() {
  return <>
    <header><Navbar /> </header>
    <main><Outlet /></main>
    <section><Info /></section>
    <footer><Footer /></footer>
  </>
}
