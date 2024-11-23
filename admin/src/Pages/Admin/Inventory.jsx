import { useState } from "react"


export default function Inventory() {
  const [price, setPrice] = useState(0);
  const [quan, setQuant] = useState(0);
  const [total, setTotal] = useState(0);
  // const [used, setUsed] = useState();
  const [users, setUsers] = useState([]);
  const [name, setName] = useState();
  const [sum, setSum] = useState();
  // const [type, setType] = useState();

  function Calculation() {
    users.push({ name, quan, price, sum });
    const total = users.reduce((total, user) => {
      total += Number(user.sum)
      return total
    }, 0);
    setTotal(total);
    //clear input
    setName('');
    setQuant('');
    setPrice('');
    setSum('');

  }
  //to change price
  const handleChange = (e) => {
    const newPrice = parseFloat(e.target.value);
    if (!isNaN(newPrice)) {
      setPrice(newPrice);
      calculateTotal(newPrice, quan);
    }
  };
  // to change quantity
  const handleQuantity = (e) => {
    const newQuantity = parseFloat(e.target.value);
    if (!isNaN(newQuantity)) {
      setPrice(newQuantity);
      calculateTotal(price, newQuantity);
    }
  };
  //calculate amount in total
  const calculateTotal = (price, quan) => {
    const newTotal = price * quan;
    setSum(newTotal);
  };
  //able to refresh page
    function refreshPage()
    {
      window.location.reload();
  }
  
  return (
    <div className="inv-container">
      <h1>Inventory</h1>
      <div className="row">
        <div className="col-8">
          <table className="table">
            <h3>Add Product</h3>
            <tr>
              <th>Product Name</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Amount</th>
              <th>Option</th>
            </tr>
            <tr>
              <td>
                <input type="text" className="form-control" placeholder="Item Name" value={name} onChange={(event) => {
                  setName(event.target.value);
                }}/>
              </td>
                <td>
                <input type="text" className="form-control" placeholder="Enter price" value={price} onChange={handleChange} />
              </td>
              <td>
                <input type="text" className="form-control" placeholder="Enter qty" value={quan} onChange={handleQuantity} />
              </td>
              <td>
                <input type="text" className="form-control" placeholder="Enter Total" value={sum} id="total" name="total_cost" disabled />
              </td>
              <td>
                <button className="btn btn-succes" type="submit" onClick={Calculation}>Add</button>
              </td>
            </tr>
          </table>
          <h3>Products</h3>
          <table className="table table-bordered">
            <thead>
              <th>Item Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Amount</th>
        
            </thead>
            <tbody>
              {
                users.map((row, index) => {
                  <tr key={index}>
                    <td>{row.name}</td>
                    <td>{row.price}</td>
                    <td>{row.quan}</td>
                    <td>{row.sum}</td>
                  </tr>
            
                })
              }
            </tbody>
          </table>
        </div>
        <div className="col-4">
          <div className="form-group">
            <h3>Total</h3>
            <input type="text" className="form-control" placeholder="Enter Total..." required disabled value={total}/>
            <button type="button" className="btn btn-success" onClick={refreshPage}>
            <span>Complete</span>
            </button>
            
          </div>
        </div>
      </div>

    </div>
  )
}
