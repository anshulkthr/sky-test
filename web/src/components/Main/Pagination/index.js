import { withRouter } from "react-router";

const Pagination = withRouter(({ activePage, pages, setActivePage }) => {
  const getPages = () => {
   const elements = [];
   for (let i = 1; i <= pages; i++) {
     elements.push(
       <div
         className={`${activePage === i ? "active" : ""}`}
         onClick={(e) => {
          e.preventDefault();
          setActivePage(i);
         }}
         key={i}
       >
         {i < 10 ? `0${i}` : i}
       </div>
     );
   }
   return elements; // [<div>1</div>, <div>2</div>....]
  };

  return (
   <div className="pagination">
     <div
       // Previous page (<) inactive if current page is 1
       className={`pagination-arrow ${activePage === 1 ? "inactive" : ""}`}
       onClick={() => activePage !== 1 && setActivePage((page) => page - 1)}
     >
       {"<"}
     </div>

     {getPages()} {/* We will handle this method in the next step */}
    
     <div
       // Next Page (>) inactive if the current page is the last page.
       className={`pagination-arrow ${activePage === pages ? "inactive" : ""}`}
       onClick={() =>
         activePage !== pages && setActivePage((page) => page + 1)
       }
     >
       {">"}{" "}
     </div>
   </div>
 );
});

// activePage, setActivePage and pages will be passed down as props

export default withRouter(Pagination);
