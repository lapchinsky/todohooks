import React, {useContext} from "react";
import ItemStatusButton from "../ItemStatusButton/ItemStatusButton";
import Context from "../../Context/Context";

const ItemStatusFilter = function () {

const {buttons} = useContext(Context)



    return (
        <div className='btn-group'>
            {buttons.map((button) => (
                <ItemStatusButton button={button}
                                  key={button.id} />
            ))}
        </div>
    )
}

export default ItemStatusFilter