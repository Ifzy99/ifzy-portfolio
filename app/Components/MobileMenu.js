


const MobileMenu = ({ menuOpen, navToggle }) => {
    return (
      <button
        id="menu-btn"
        className={`z-30 block md:hidden focus:outline-none hamburger ${
          menuOpen ? "open" : ""
        }`}
        onClick={navToggle}
      >

      <span className='hamburger-top'></span>
      <span className='hamburger-middle'></span>
      <span className='hamburger-bottom'></span>
        
      </button>
    );
  };
  
  export default MobileMenu;
  