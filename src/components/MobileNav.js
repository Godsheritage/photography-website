import React, { useState } from 'react';
// import icons
import { IoMdClose } from 'react-icons/io';
import { CgMenuRight } from 'react-icons/cg';
// import link
import { Link } from 'react-router-dom';
// import motion
import { motion } from 'framer-motion';

// menu variants
const menuVariants = {
  hidden: {
    x: '100%',
  },
  show: {
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.9],
    },
  },
};

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);

  // Function to handle menu item click
  const handleMenuItemClick = () => {
    setOpenMenu(false); // Close the menu when a link is clicked
  };

  return (
    <nav className='text-primary xl:hidden'>
      {/* nav open button */}
      <div
        onClick={() => setOpenMenu(!openMenu)} // Toggle the menu on button click
        className='text-3xl cursor-pointer'
      >
        <CgMenuRight />
      </div>
      {/* conditionally render the menu based on the openMenu state */}
      {openMenu && (
        <motion.div
          variants={menuVariants}
          initial='hidden'
          animate={openMenu ? 'show' : ''}
          className='bg-white shadow-2xl w-full absolute top-0 right-0 max-w-xs h-screen z-20'
        >
          {/* icon */}
          <div
            onClick={() => setOpenMenu(false)}
            className='text-4xl absolute z-30 left-4 top-14 text-primary cursor-pointer'
          >
            <IoMdClose />
          </div>
          {/* menu list */}
          <ul
            className='h-full flex flex-col justify-center items-center gap-y-8 text-primary font-primary font-bold text-3xl'
            onClick={handleMenuItemClick} // Close the menu when a link is clicked
          >
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/portfolio'>Portfolio</Link>
            </li>
            <li>
              <Link to='/pricing'>Pricing</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default MobileNav;
