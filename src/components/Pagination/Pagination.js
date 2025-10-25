import React from 'react'
import classes from './Pagination.module.css';
import { useGobalContext } from '../../Context'

function Pagination() {
    const {page, nbPages, getPrevPage, getNextPage} = useGobalContext();
  return (
    <>
        <div className={classes.pagination}>
            <button className={classes.prev} onClick={() => getPrevPage()}>Prev</button>
            <p>{page + 1} of {nbPages}</p>
            <button className={classes.next} onClick={() => getNextPage()}>Next</button>
        </div>
    </>
  )
}

export default Pagination