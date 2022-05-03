import { memo } from "react";

const List = (props) => {
	return (
		<>
			{props.list && Object.keys(props.list).length >= 0 &&
				<div className="listItems">
				{props.list?.length > 0 ?
					props.list.map((data, key) => {
						return(
						<article className="c-tile" key={key}>
							<a className="c-tile__link c-shine-context" target="_blank" href={data.url}>
							  <div className="c-tile__content">
							    <div className="c-tile__body">
							      <p className="c-tile__title c-heading-delta u-margin-bottom-none">{data.title}</p>
							      <p className="c-text-body">{data.description}</p>
							      { data.slug && <span className="c-text-slug">{data.slug}</span> }
							    </div>
							  </div>
						  </a>
						</article>
						)
					})	
					: <h2 className="not-found">No results found.</h2> 
				}
				</div>
			}
		</>
	);
}

export default memo(List);