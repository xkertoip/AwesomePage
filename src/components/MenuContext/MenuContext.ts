import {createContext} from "react";

interface MenuContextType {
    openMenu: boolean;
    handleOpen: () => void;
}

export const MenuContext = createContext<MenuContextType>({
    openMenu: false,
    handleOpen: () => null,
});
export default MenuContext