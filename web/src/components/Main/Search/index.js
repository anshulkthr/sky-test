import React, { useState, useEffect } from 'react';
import Hero from '../Hero';
import List from '../List';
import Pagination from '../Pagination';
import { getData, addItemToRecent } from '../common';
import history from '../history';

const Search = (props) => {
	const [searchField, setSearchField] = useState("");
	const [searchResult, setSearchResult] = useState([]);
	const [activePage, setActivePage] = useState(1);
	const [totalPage, setTotalPage] = useState(0);

	useEffect(() => {
		if(searchField){
			const fetchData = async() => {
      	await getData(searchField, activePage, 10).then(result => {
		  		setSearchResult(result.data);
		  		setTotalPage(result.data.totalPage);
		  		if(result.data.results.length > 0){
			  		if(result.data.totalPage > 0){
			  			history.push(`/?query=${searchField}&page=${activePage}`);
			  		}else{
			  			history.push('/');
			  		}
			  		let recommedTerms =	JSON.parse(window.localStorage.getItem('recent'));
						recommedTerms ? addItemToRecent([...recommedTerms, searchField]) : addItemToRecent([searchField]);
		  		}else{
		  			history.push('/');
		  		}
  			})
      };
      fetchData();
		}
	}, [searchField, activePage]);

  const handleSubmit = e => {
    e.preventDefault();
    setSearchField(e.target.search.value.toLowerCase());
    setActivePage(1);
  }


	return (
		<div className="search-container">
			{ props.showHero &&
			<Hero />
			}
			<div className="search-container__content">
				<form onSubmit={handleSubmit}>
	        <div className="c-form-list__item">
	          <input type="search" name="search" className="c-dropdown__search c-form-input" placeholder="Start your search now" required />
	          <button type="submit" aria-label="search now or continue to search suggestions" className="c-btn c-btn--primary c-form-combo__btn" aria-disabled="false"><span aria-hidden="true"></span></button>
	        </div>
	      </form>

	      <div className="search-container__list">
	      	<List list={searchResult.results} />
	      </div>
	     
      </div>
      { totalPage ?
		      <Pagination
						activePage={activePage}
						setActivePage={setActivePage}
						pages={totalPage}
		     	/>
	     	:
	     	''
     	}
		</div>
	);
}

export default Search;