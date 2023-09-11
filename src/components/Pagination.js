// import React from "react";
// import { LeftArrow, RightArrow } from "./ArrowsSvg";

// const Pagination = (props) => {
//   const { onLeftClick, onRightClick, page, totalPages } = props;

//   return (
//     <div className="pagination">
//       <button className="pagination-btn" onClick={onLeftClick}>
//         <div className="icon">
//           {/* <LeftArrow /> */}
//         </div>
//       </button>
//       <div>
//         {page} de {totalPages}
//       </div>
//       <button className="pagination-btn" onClick={onRightClick}>
//         <div className="icon">
//           {/* <RightArrow /> */}
//         </div>
//       </button>
//     </div>
//   );
// };

// export default Pagination;
function Pagination({ pokemonsLimit, updatePage }) {
const totalPokemons=500
  function createButtons() {
    const buttons = [];
    const totalButtons = Math.ceil(totalPokemons / pokemonsLimit);
    for (let i = 0; i < totalButtons; i++) {
      buttons.push(
        <button
          className="btnPagination"
          key={i}
          value={i}
          onClick={updatePage}
        >
          {i + 1}
        </button>
      );
    }
    return buttons;
  }

  return <div className="container-buttons">{createButtons()}</div>;
}

export default Pagination;