import React, {useContext} from "react";
import './SearchPanel.css'
import Context from "../../Context/Context";

const SearchPanel = function () {
    const { setIds, setSearch } = useContext(Context)

    const searchText = 'Type here to search';
    const searchStyle = {
        fontSize: '20px'
    };
    return (<input type="text"
                   className="form-control search-input"
                   style={searchStyle}
                   placeholder={searchText}
                    onChange={event => {
                        setSearch(event.target.value)
                        setIds(4)
                    }}/>);
};

export default SearchPanel;