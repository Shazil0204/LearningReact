function ListGroup() {
  let cityList = ["Abcd", "efgh", "ijkl", "mnop", "qrst", "uvwx", "yz"];

  return (
    <>
      <h1 className="bg-red-500">List</h1>
      {/* {cityList.length === 0 && <p>No Item found</p>}
      <ul className="list-group">
        {cityList.map((city) => (
          <li className="bg-red-500" key={city}>
            {city}
          </li>
        ))}
      </ul> */}
    </>
  );
}

export default ListGroup;
