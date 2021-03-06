import React, { useEffect } from 'react';
import styles from './Search.module.css';
import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';
import { useNavigate } from "react-router";
import { useQuery } from '../../Services/useQuery';

export const Search = () => {
    const query = useQuery();
    const search = query.get("search");

    const [searchText, setSearchText] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        setSearchText(search || "");
      }, [search]);

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
                value={search ?? ""}
                autoFocus
                aria-label="Search Movies"
                 onChange={(e) => {
                    const value = e.target.value;
                    navigate("/?search=" + value);
                  }}
                 />
                 
                <button className={styles.searchButton} type='submit' >
                <FaSearch size={20}/>
                </button>
             </div>
        </form>
    )
}
