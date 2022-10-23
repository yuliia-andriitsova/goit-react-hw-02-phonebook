import PropTypes from 'prop-types';

export function Filter({ filter, onFilterName }) {
  return (
    <>
      <p>Find contacts by name</p>

      <input type="text" name="filter" onChange={onFilterName} value={filter} />
    </>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterName: PropTypes.func.isRequired,
};
