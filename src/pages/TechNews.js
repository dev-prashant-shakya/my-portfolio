import React from 'react'
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader/PageHeader';
import Search from '../components/SearchBox/Search';
import classes from './TechNews.module.css';
import { useGobalContext } from '../Context';
import Pagination from '../components/Pagination/Pagination';

function TechNews() {

  const {hits, nbPages, removePost} = useGobalContext();
  return (
    <>
    <div className={classes.techNewsWrapper}>
            <PageHeader
                heading={'Latest Tech News 📺'}
                subHeading={'Remain Up to date with Tech News'}
            />
            <div className={classes.techNewsContainer}>
                {hits.length > 0 && <p className={classes.noOfArticles}>{`${nbPages} Latest Tech News Found`}</p>}
                <Search/>
                <Pagination/>
                <div className={classes.techNewsWrap}>
                   {hits.length > 0 ? (
                        hits.filter(hit => hit.title).map((hit) => (
                            <div className={classes.newsCard} key={hit.objectID}>
                                <div className={classes.content}>
                                    <h3 className={classes.cardHeading}>{hit.title}</h3>
                                    <p className={classes.cardPara}><span className={classes.author}>{hit.author}</span> | <span className={classes.comments}>{hit.num_comments} comments</span></p>
                                    <Link to={hit.url} target="_blank" className={classes.cardLink}>{"Read More..."}</Link>
                                    <button className={classes.removePost} onClick={() => removePost(hit.objectID)}>❌</button>
                                </div>
                            </div>
                        ))) : (
                            <>  
                                <div className={classes.placeHolder}>
                                    <h2>Loading Latest News</h2>
                                    <p>Please Wait...</p>
                                </div>
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    </>
  )
}

export default TechNews