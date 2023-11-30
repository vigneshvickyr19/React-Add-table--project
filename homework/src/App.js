// App.js

import React, { useState } from 'react';
import Inputs from './Inputs';
import DataTable from './DataTable';

const App = () => {
  const [tableData, setTableData] = useState([]);
  const [deletedData, setDeletedData] = useState([]);
  const [isTableVisible, setTableVisible] = useState(false);

  const handleAddData = (data) => {
    setTableData((prevData) => [...prevData, data]);
    setTableVisible(true);
  };

  const handleDelete = (index) => {
    const deletedItem = tableData.splice(index, 1)[0];
    setTableData([...tableData]);
    setDeletedData((prevData) => [...prevData, deletedItem]);
  };

  const handleClearDeletedData = () => {
    setDeletedData([]);
  };

  return (
    <div>
      <Inputs onAddData={handleAddData} />
      {isTableVisible && <DataTable tableData={tableData} onDelete={handleDelete} deletedData={deletedData} onClearDeletedData={handleClearDeletedData} />}
    </div>
  );
};

export default App;
