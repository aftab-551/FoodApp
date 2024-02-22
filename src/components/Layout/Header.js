import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <Fragment>
      <div className='row'>
        <header className={classes.header}>
          <h1>FoodApp</h1>
          <HeaderCartButton onClick={props.onShowCart} />
        </header>
      </div>
      
    </Fragment>
  );
};

export default Header;
