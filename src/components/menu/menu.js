import React, { useState } from 'react'
import Breakfast from './breakfast'
import Lunch from './lunch'
import HotDrinks from './hot-drinks'
import ColdDrinks from './cold-drinks'

const Menu = () => {
  const [menuCategory, setMenuCategory] = useState('hotDrinks');
  let SelectedCategory;
  if (menuCategory === 'hotDrinks' ) {
    SelectedCategory = HotDrinks;
  } else if (menuCategory === 'coldDrinks') {
    SelectedCategory = ColdDrinks
  } else if (menuCategory === 'breakfast') {
    SelectedCategory = Breakfast
  } else if (menuCategory === 'lunch') {
    SelectedCategory = Lunch
  }
  
  return (
    <section className="menu">
      <h2>OUR MENUS</h2>
      <ul className="menu-headers">
        <li className="menu-header" onClick={() => setMenuCategory('hotDrinks')}>Hot Drinks</li>
        <li className="menu-header" onClick={() => setMenuCategory('coldDrinks')}>Cold Drinks</li>
        <li className="menu-header" onClick={() => setMenuCategory('breakfast')}>Breakfast</li>
        <li className="menu-header" onClick={() => setMenuCategory('lunch')} >Lunch</li>
      </ul>
      <SelectedCategory />
    </section>
  )
}

export default Menu;