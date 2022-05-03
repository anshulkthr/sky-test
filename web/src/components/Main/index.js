import { useState } from "react";
import Search from './Search';

const Main = (props) => {
	const [activePage, setActivePage] = useState(1);
	return (
      <>
      	<Search showHero={true} />
      </>
	)
}

export default Main;