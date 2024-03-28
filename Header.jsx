import React from 'react';
import DescriptionIcon from '@mui/icons-material/Description';
import { WidthNormal } from '@mui/icons-material';

const Header = () => {
  return (
    <>
      <div className='header'>
      <DescriptionIcon />
       <h1 className='keepnotes'> Keep Notes </h1>
      </div>
    </>
  )
}

export default Header;
