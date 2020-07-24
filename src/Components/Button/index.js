import React from 'react';
import {Button} from 'react-bootstrap';


const MyButton = ({text,colors,size,eventClick}) => {

    return (

        <Button
            variant={colors} 
            size={size} 
            block
            onClick={eventClick}
        >
        {text}
        </Button>

    )
}

export default MyButton;