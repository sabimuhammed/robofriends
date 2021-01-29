import React from 'react';

const SearchBox = ({searchChange}) => {
    return (
        <div className =''>
        <input  
        className='pa3 ba3 b--green bg-lightest-blue' 
        type='search' 
        placeholder='search robots'
        onChange={searchChange}/>
        </div>
    )
}
export default SearchBox;