function paginationResult(data, page, limit = 10, slug = 0, sort_key = ""){
	let results = data.results;
	let filterResults = {};
	const pageNumber = Number(page);
	const limitData = Number(limit);
	const totalPage = page ? Math.ceil(Number(data.results.length) / limitData) : 0;

	if(slug){
		results = addArticleSlugWithResponse(results);
	}

	if(sort_key){
		results = sortByKey(results, sort_key);
	}

	if(pageNumber === 1){
		results = results.slice(0, limitData);
	}else{
		if(page <= totalPage){
			const lastIndex = pageNumber * limitData;
			const startIndex = lastIndex - limitData;
			results = results.slice(startIndex, lastIndex);
		}
	}

	return { 
		'totalPage': totalPage,
		'results': results 
	};
}

function addArticleSlugWithResponse(data){
	data.map(itrData => {
		if(itrData?.url){
			let splitUrlSlug = itrData.url.split('/').pop().toLowerCase();
			itrData.slug = splitUrlSlug;
		}
	});
	return data;
}

function sortByKey(data, sort_key){
	data.sort((x,y)=>{ return ( x.title.includes(sort_key) || x.description.includes(sort_key)) ? -1 : (y.title.includes(sort_key) || y.description.includes(sort_key)) ? 1 : 0; });
	return data;
	}

module.exports = { paginationResult };