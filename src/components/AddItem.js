import React, {useState} from "react";
import PropTypes from "prop-types";

function AddItem(props) {

    const [name, setName] = useState('');
    const [price, setprice] = useState(0);

const addProduct = () => {
    props.addItem(name,price);
} 

const handleSubmit= (e) => {
    // addChoreLog([choreDesc, name, date])
    props.addItem(name,price);
    setName('');
    setprice(0);
    e.preventDefault();
  }


  return ( 
    
      <form className="row" onSubmit={e => { handleSubmit(e)}}>
        <div className="form-group col-4">
          <label htmlFor="inputName">Name</label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={name}
            onChange = {e => setName(e.target.value)}
          />
         
        </div>
        <div className="form-group col-4">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            className="form-control"
            id="price"
            value={price}
            placeholder="Enter Price"
            onChange = {e => setprice(e.target.value)}
          />
        </div>

        <button type="submit"  className="btn btn-primary col-4 mt-4">
          Submit
        </button>
      </form>
  );
}

AddItem.propTypes = {};

export default AddItem;
