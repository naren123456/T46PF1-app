import React from 'react';
import AppBar from 'material-ui/AppBar';

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
const AppBarExampleIcon = () => (
  <AppBar
    style={{backgroundColor:'#3b5998',color: 'black',fontFamily:'inherit'}}
    title="FaceBook"
    showMenuIconButton={false}
    
  />
);

export default AppBarExampleIcon;