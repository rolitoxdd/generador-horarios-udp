import "../assets/styles/Selector.css";

const Selector = ({
  ramosTomados,
  ramos,
  indice,
  handleSelectorChange,
  handleSelectorDelete,
}) => {
  return (
    <div className="selector">
      <select
        className="form-select mb-3 me-4"
        name={`ramo-${ramosTomados.length}`}
        id={`ramo-${ramosTomados.length}`}
        onChange={(e) => handleSelectorChange(e, indice)}
        value={ramosTomados[indice]}
      >
        <option value="" disabled>
          Elige un ramo
        </option>
        {Object.keys(ramos).map((g) => (
          <optgroup label={g} key={g}>
            {ramos[g].map((r) => (
              <option
                value={r[0]}
                key={r[0]}
                disabled={
                  ramosTomados.includes(r[0]) && ramosTomados[indice] !== r[0]
                }
              >
                {r[1]} - {r[0]}
              </option>
            ))}
          </optgroup>
        ))}
      </select>

      <button
        type="button"
        className="text-center btn btn-outline-danger"
        onClick={(e) => handleSelectorDelete(e, indice)}
        disabled={ramosTomados.length <= 1}
      >
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Selector;
