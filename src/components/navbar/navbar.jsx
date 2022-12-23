import React from 'react';
import Notification from '../../img/notification.svg';
import Message from '../../img/message.svg';
import Settings from '../../img/settings.svg';
import './navbar.css';
function Navbar() {
  return (
    <div className='navbar'>
      <span className='logo'>Chat App</span>
      <div className='icons'>
        <div className='icon'>
          <img className='iconImage' src={Notification} alt='' />
          <div className='counter'>2</div>
        </div>
        <div className='icon'>
          <img className='iconImage' src={Message} alt='' />
          <div className='counter'>2</div>
        </div>
        <div className='icon'>
          <img className='iconImage' src={Settings} alt='' />
          <div className='counter'>2</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
