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