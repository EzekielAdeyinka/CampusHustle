import React from 'react';
import classes from './BurgerMenu.module.css';

const burgerMenu = (props) => {
  const burgerStyles = [classes.Burger, classes.BurgerSlip, 'Mobile_menu'];
  if (props.show) {
    burgerStyles.push(classes.Open);
  }
  return (
    <div className={burgerStyles.join(' ')} onClick={props.toggle}>
      <div className={classes.BurgerLines}></div>
    </div>
  );
}

export default burgerMenu;