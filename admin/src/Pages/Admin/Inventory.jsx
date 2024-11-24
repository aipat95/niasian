import { useState } from "react";
import Sidebar from '../../Component/Sidebar';




export default function Inventory() {
  const [price, setPrice] = useState(0);
  const [quan, setQuant] = useState(0);
  const [total, setTotal] = useState(0);
  const [used, setUsed] = useState();
  const [users, setUsers] = useState([]);
  const [name, setName] = useState();
  const [sum, setSum] = useState();
  const [type, setType] = useState();

  function Calculation() {
    const newUser = { name, quan, price, sum,used, type };
    setUsers((prevUsers) => [...prevUsers, newUser]);
    const newTotal = users.reduce((total, user) => {
      return total + Number(user.sum);
    })
    setTotal(newTotal);
    //clear input
    setName('');
    setQuant('');
    setPrice('');
    setSum('');
    setUsed(""); setType("");

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
    function refreshPage(){ window.location.reload();  }
  
  return (
    <div className="inv-container">
    <Sidebar />
    <div className="inventory">
      <h1>Inventory</h1>
      <div className="row">
        <div className="col-8">
          <table className="table">
            <h3>Add Product</h3>
            <tr>
              <th>Product Name</th>
              <th>Type</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Used</th>  
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
                  <input type="text" className="form-control" placeholder="Type of Equipment" value={type} onChange={(e) => {
                    setType(e.target.value);
                  }} />
                </td>
                
                <td>
                <input type="text" className="form-control" placeholder="Enter price" value={price} onChange={handleChange} />
              </td>
              <td>
                <input type="text" className="form-control" placeholder="Enter quantity" value={quan} onChange={handleQuantity} />
                </td>
                <td>
                  <input type="text" className="form-control" placeholder="Amount Have Used"
                    value={used} onChange={(e) => {
                      setUsed(e.target.value);
                    }}/>
                </td>
              <td>
                <input type="text" className="form-control" placeholder="Enter Total" value={sum} id="total" name="total_cost" disabled />
              </td>
              <td>
                <button className="btn btn-success" type="submit" onClick={Calculation}>Add</button>
              </td>
            </tr>
          </table>
          <h3>Products</h3>
          <table className="table table-hover">
            <thead>
              <th scope="row">Item Name</th>
              <th>Price</th>
              <th>Type</th>  
              <th>Quantity</th>
              <th>Used</th>  
              <th>Amount</th>
        
            </thead>
            <tbody>
              {
                users.map((row, index) => {
                  <tr key={index}>
                    <td>{row.name}</td>
                    <td>{row.type}</td>
                    <td>{row.price}</td>
                    <td>{row.quan}</td>
                    <td>{row.used}</td>
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
    </div>
  )
}
