import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './twibar.css';
import AvatarExampleSimple from '../Avatar/Avatar';

const Twibar = () => (
  <div>
      
    <ul className="twitter" role="navigation">
    <li><i className="fa fa-home"></i>Home</li>
    <li><i className="fa fa-bell-o"></i>Notifications</li>
    <li><i className="fa fa-envelope-o"></i>Messages</li>
    <li className="twitter__bird"><i className="fa fa-twitter"></i></li>
    <li className="search"><form><input placeholder="#Aadhaar"/><i className="fa fa-search"></i></form></li>
    <li className='ava'><AvatarExampleSimple/></li>
    <li><button>tweet</button></li>
  </ul>
  </div>
  );
  
  export default Twibar;