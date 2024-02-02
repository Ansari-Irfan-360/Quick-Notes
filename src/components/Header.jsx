import React from "react";
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';

function Header() {
  return (
    <header>
      <h1><EditNoteOutlinedIcon style={{transform: "scale(2.1)",position:"relative" ,top:"3px"}}/> &nbsp; Quick Notes</h1>
      <h5>by Ansari Mohammad Irfan</h5>
    </header>
  );
}

export default Header;
