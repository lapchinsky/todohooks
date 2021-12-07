import React, {useContext} from "react";
import PropTypes from "prop-types";
import Context from "../../Context/Context";

const ItemStatusButton = function ({button}) {
    const {toggleButton, setIds} = useContext(Context)
    const classes = ['btn']

    if (button.active) {
        classes.push('btn-info')
    } else {
        classes.push('btn-outline-secondary')
    }


    return (
        <button type="button"
                id={button.id}
                className={classes.join(' ')}
                onClick={() => {
                    toggleButton(button.id)
                    setIds(button.id)
                }}
        >{button.label}
        </button>
    )

}

ItemStatusButton.propTypes = {
    button: PropTypes.objectOf(PropTypes.any).isRequired
}

export default ItemStatusButton