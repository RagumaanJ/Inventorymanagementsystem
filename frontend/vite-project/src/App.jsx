import AddItemForm from "./components/AddItemForm";
import InventoryTable from "./components/InventoryTable";

function App() {
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">
        Inventory Management System
      </h2>

      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <AddItemForm />
        </div>
      </div>

      <div className="card shadow-sm">
        <div className="card-body">
          <InventoryTable />
        </div>
      </div>
    </div>
  );
}

export default App;
