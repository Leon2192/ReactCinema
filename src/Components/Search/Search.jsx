import React from 'react';
import styles from './Search.module.css';
import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';
import { useNavigate } from "react-router";

export const Search = () => {

    const [searchText, setSearchText] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/?search=" + searchText);
    }
    return (
        <form className={styles.searchContain} onSubmit={handleSubmit}>
              <div className={styles.searchBox}>
                <input 
                className={styles.searchInput} 
                type="text" placeholder='Buscar...'
                value={searchText}
                 onChange={(e) => setSearchText(e.target.value)}
                 />
                 
                <button className={styles.searchButton} type='submit' >
                <FaSearch size={20}/>
                </button>
             </div>
        </form>
    )
}
