export default function Result({ formData, HandleEdit, setFormData }) {
  const handleDelete = (index) => {
    const newData = formData.filter((val, ind) => ind !== index);
    setFormData(newData);
  };

  const handleEdit = (index) => {
    HandleEdit(index);
  };

  const handleSort = () => {
    let data = formData.sort((a, b) => {
      if (a.username.toLowerCase() < b.username.toLowerCase()) return -1;
      if (a.username.toLowerCase() > b.username.toLowerCase()) return 1;
      return 0;
    });
    setFormData([...data]);
  };

  return (
    <div className="result">
      <table className="display-grid">
        <th className="tab-data1">Name</th>
        <th className="tab-data2">Age</th>
        <th className="tab-data3">Creation Date</th>
        <th className="tab-data4">Delete</th>
        <th className="tab-data5">Edit</th>
      </table>
      <div className="dropdown-btn">
        <div>
          <label htmlFor="sort">Sort</label>
          <select name="sort" id="sortItems" onClick={() => handleSort()}>
            <option value="sort">Sort By Name</option>
          </select>
        </div>
      </div>
      <hr />

      {formData.map((item, index) => {
        return (
          <div className="display-grid mar-3rem" key={index}>
            <tr className="table-row display-grid">
              <th className="tab-data1">{item.username}</th>
              <th className="tab-data2">{item.age}</th>
              <th className="tab-data3">{item.date}</th>
              <th className="tab-data4">
                <button className="btn" onClick={() => handleDelete(index)}>
                  Delete
                </button>
              </th>
              <th className="tab-data5">
                <button className="btn" onClick={() => handleEdit(index)}>
                  Edit
                </button>
              </th>
            </tr>
          </div>
        );
      })}
    </div>
  );
}
