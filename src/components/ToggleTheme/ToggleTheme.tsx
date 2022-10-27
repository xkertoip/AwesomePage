import FancyButton from "../FancyButton";
import {useTheme} from "next-themes";


const ToggleTheme =  () => {
    const { theme, setTheme, systemTheme} = useTheme();
    const currentTheme = theme === "system" ? systemTheme : theme ;

    const handleTheme = () => {
        setTheme(currentTheme === 'dark' ? 'light' : 'dark')
    }
         return  <FancyButton  onClick={handleTheme}  name={'light'}>
             Change Toggle
    </FancyButton>


}

export default ToggleTheme;