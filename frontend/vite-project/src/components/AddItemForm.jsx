import { useState } from "react";

export default function InventoryForm() {
  const [item, setItem] = useState({
    itemName: "",
    category: "",
    quantity: ""
  });

  const [error, setError] = useState("");



  const addItem = async () => {
       if (!item.itemName.trim()) {
              setError("Item Name is required");
              return;
            }

            if (!item.category.trim()) {
              setError("Category is required");
              return;
            }

            if (item.quantity === "" || item.quantity < 0) {
              setError("Quantity is required and cannot be negative");
              return;
            }

            setError("");
//     if (item.quantity < 0) {
//       alert("Quantity cannot be negative");
//       return;
//     }

    //if (!item.itemName || !item.category) return;

    await fetch("http://localhost:8080/api/items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item)
    });

    setItem({ itemName: "", category: "", quantity: "" });
    window.location.reload();
  };

  return (
    <>
      <h5 className="mb-3">Add Item</h5>

{/*        {error && ( */}
{/*               <div className="alert alert-danger py-2"> */}
{/*                 {error} */}
{/*               </div> */}
{/*             )} */}

      <div className="row g-2">
        <div className="col-md-4">
          <input
            className={`form-control ${!item.itemName && error ? "is-invalid" : ""}`}
            placeholder="Item Name"
            value={item.itemName}
            onChange={e => setItem({ ...item, itemName: e.target.value })}
          />
        </div>

        <div className="col-md-4">
          <input
            className={`form-control ${!item.category && error ? "is-invalid" : ""}`}
            placeholder="Category"
            value={item.category}
            onChange={e => setItem({ ...item, category: e.target.value })}
          />
        </div>

        <div className="col-md-2">
          <input
            type="number"
            className={`form-control ${
                                    (item.quantity === "" || item.quantity < 0) && error
                                      ? "is-invalid"
                                      : ""
                                  }`}
            placeholder="Quantity"
            value={item.quantity}
            onChange={e => setItem({ ...item, quantity: e.target.value })}
          />
        </div>

        <div className="col-md-2">
          <button
            className="btn btn-primary w-100"
            onClick={addItem}
          >
            Add
          </button>
        </div>
      </div>
    </>
  );
}
