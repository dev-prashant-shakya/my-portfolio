import React, { useState, useEffect } from "react";
import classes from './Colorpicker.module.css';

function ColorPicker () {
    const initialTheme = localStorage.getItem('themeColor') || 'themeZero';
    const [themeColor, setThemeColor] = useState(initialTheme);
    
    const themeColors = {
        themeZero: {
            main: '#FF9671',
            img: '#ff967157'
        },
        themeA: {
            main: '#B4D4FF',
            img: '#B4D4FF59'
        },
        themeB: {
            main: '#F2AFEF',
            img: '#f2afef6e'
        },
        themeC: {
            main: '#FFF78A',
            img: '#FFF78A7d'
        }
    };

    const handleThemeChange = (color) => {
        setThemeColor(color);
        localStorage.setItem('themeColor', color);
    };

    useEffect(() => {
        const rootTheme = document.querySelector(':root');
        rootTheme.style.setProperty('--theme-color', themeColors[themeColor].main);
        rootTheme.style.setProperty('--theme-img-color', themeColors[themeColor].img);
    }, [themeColor]);
    
    const themes = ['themeA', 'themeB', 'themeC'];

    return (
        <div className={classes.colorPicker}>
            {themes.map(theme => (
                <button key={theme} onClick={() => handleThemeChange(theme)} type="button" className={classes[theme]}></button>
            ))}
        </div>
    );
};

export default ColorPicker;
