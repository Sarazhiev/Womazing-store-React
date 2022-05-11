import React from 'react';

const CreateColors = ({colors, setColors, color}) => {
    return (
        <li onClick={() => {
            if (colors.includes(color)) {
                setColors(colors.filter(item => item !== color))
            } else {
                setColors([...colors, color])
            }
        }} style={{background: color, color: color === 'black' ? 'white' : '', border: '1px solid grey', cursor: 'pointer'}}
            className={`product__content-color ${colors.includes(color) ? 'create__color' : ''} `}/>
    );
};

export default CreateColors;