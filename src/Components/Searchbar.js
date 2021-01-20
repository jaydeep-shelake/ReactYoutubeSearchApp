import React, {useState} from 'react'

const Searchbar=({onFormSubmit})=>{
    const [term,setTerm]=useState('');
    
    const onSubmit=(e)=>{
        e.preventDefault();
        setTerm('');
        onFormSubmit(term);
    }

    return(
        <div className="search-bar ui segment" style={{marginTop:'30px'}}>
                <form className="ui form" onSubmit={onSubmit}>
                    <div className="field">
                        <label htmlFor="searchInput">Search</label>
                        <input type="text" id="searchInput" onChange={e=>setTerm(e.target.value)} value={term}/>
                    </div>
                </form>
            </div>
    )
    
}

export default Searchbar;