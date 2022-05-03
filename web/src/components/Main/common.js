import { api } from '../Api/config';
import axios from 'axios';

export async function getData(searchTerm, activePage, searchLimit) {
  return await axios.get(`${api.url}?query=${searchTerm}&page=${activePage}&limit=${searchLimit}&slug=1&sort_key=Sky Mobile`);
}

function containsDuplicates(array) {
  if (array.length !== new Set(array).size) {
    return true;
  }

  return false;
}

export function addItemToRecent(recentList){
	if(recentList.length > 0){
		let checkDuplicate = containsDuplicates(recentList);
		if(checkDuplicate){
			let lastItem = recentList[recentList.length - 1];
			let index = recentList.findIndex(element => element === lastItem);
			recentList.splice(index, 1);
			recentList = [...new Set(recentList)];
		}
		if(recentList.length > 5){
			recentList.shift();
		}
		window.localStorage.setItem('recent', JSON.stringify(recentList));
	}
}