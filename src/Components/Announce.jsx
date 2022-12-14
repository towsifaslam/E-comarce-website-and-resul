import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
function Announce() {
  const [announceStyle, setAnnounceStyle] = useState(
    "bg-[#be4bdb] font-bold text-white flex items-center justify-center"
  );
  const handleClose = () => {
    setAnnounceStyle(announceStyle + "  hidden ");
  };
  return (
    <div className={announceStyle}>
      <h2>Hurry up it's 40% of now</h2>
      <AiOutlineClose size={20} onClick={handleClose} />
    </div>
  );
}

export default Announce;
