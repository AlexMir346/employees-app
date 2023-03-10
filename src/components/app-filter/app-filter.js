import './app-filter.css';

const AppFilter = (props) => {
  const buttonsData = [
    { name: 'all', label: 'All employees' },
    { name: 'rise', label: 'For promotion' },
    { name: 'moreThen1000', label: 'Salary over $1000' },
  ];

  const buttons = buttonsData.map(({ name, label }) => {
    const active = props.filter === name;
    const clazz = active ? 'btn-light' : 'btn-outline-light';
    return (
      <button
        key={name}
        className={`btn ${clazz}`}
        onClick={() => props.onFilterSelect(name)}
        type="button">
        {label}
      </button>
    );
  });

  return <div className="btn-group">{buttons}</div>;
};

export default AppFilter;
