import React, { useState } from 'react';
import './ProfileIcon.scss'; // Make sure to import your styles

const ProfileIcon = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const closeDropdown = () => {
    setDropdownVisible(false);
  };

  return (
    <div className="item">
      <div className="avatar-dropdown" onClick={toggleDropdown}>
        <img
          src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
          className="avatar"
        />
      </div>
      {dropdownVisible && (
        <div className="dropdown-content">
          <a href="#" onClick={closeDropdown}>Name</a>
          <a href="#" onClick={closeDropdown}>Settings</a>
          <a href="#" onClick={closeDropdown}>Logout</a>
        </div>
      )}
    </div>
  );
};

export default ProfileIcon;