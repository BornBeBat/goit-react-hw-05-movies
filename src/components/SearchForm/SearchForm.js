export const SearchForm = ({ getSearchQuery }) => {
  const onSubmit = e => {
    e.preventDefault();
    const searchQuery = e.target.children.query.value;
    if (searchQuery === '') {
      alert('inter your film');
      return;
    }
    getSearchQuery(searchQuery);
    e.target.reset();
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="query" />
      <button type="submit">Search</button>
    </form>
  );
};
