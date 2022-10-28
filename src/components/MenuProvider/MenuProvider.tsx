import { FunctionComponent, ReactNode, useState} from 'react';
import MenuContext from "../MenuContext/MenuContext";
/*interface MenuContextType {
  openMenu: boolean;
  handleOpen: () => void;
}

 export const MenuContext = createContext<MenuContextType>({
  openMenu: false,
  handleOpen: () => null,
 });*/

type Props = {
  children: ReactNode;
};

const MenuProvider: FunctionComponent<Props> = ({ children }) => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const handleOpen = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <MenuContext.Provider
      value={{
        openMenu,
        handleOpen: handleOpen,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};
export default MenuProvider