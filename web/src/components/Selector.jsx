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
        {ramos.map((r) => (
          <option value={r[0]} key={r[0]}>
            {r[1]} - {r[0]}
          </option>
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
      {/* <i className="fas fa-trash"></i> */}
    </div>
  );
};

export default Selector;
