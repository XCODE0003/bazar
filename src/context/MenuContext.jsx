import { createContext, useState, useContext } from 'react';

const MenuContext = createContext();

export function useMenuContext() {
  return useContext(MenuContext);
}

export function MenuProvider({ children }) {
  const [openMenu, setOpenMenu] = useState(null);

  const openSpecificMenu = (menuId) => {
    setOpenMenu(menuId);
  };

  const closeAllMenus = () => {
    setOpenMenu(null);
  };

  const isMenuOpen = (menuId) => {
    return openMenu === menuId;
  };

  return (
    <MenuContext.Provider value={{ openSpecificMenu, closeAllMenus, isMenuOpen }}>
      {children}
    </MenuContext.Provider>
  );
}