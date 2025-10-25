import React from 'react';
import classes from './SearchBox.module.css';
import { useGobalContext } from '../../Context';

const Search = () => {
    const {query, searchPost} = useGobalContext();
  return (
    <>
        <div className={classes.searchBox}>
            <form onSubmit={(e) => e.preventDefault()}>
                <div className={classes.inputWrapper}>
                    <input className={classes.input} type='text' placeholder='Search Topics' value={query} onChange={(e) => searchPost(e.target.value)}></input>
                </div>
            </form>
        </div>
    </>
  )
}

export default Search