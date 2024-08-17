import { useState } from 'react';

const CustomizedButton = ({ originalIcon, hoverIcon, url }) => {
    const [hover, setHover] = useState(false);

    const handleOnClick = () => {
        window.open(url, '_blank')
    }

    return (
        <button onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onClick={handleOnClick}>
           {hover ? hoverIcon : originalIcon}
        </button>
    )
}

export default CustomizedButton;