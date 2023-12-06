import React from 'react'

const toggle = () => {
    function toggleMenu() {
        const menu = document.querySelector(".menu-links");
        const icon = document.querySelector(".hamburger-icon");
        menu.classList.toggle("open");
        icon.classList.toggle("open");
      }
  return (
    <div>toggle</div>
  )
}

export default toggle