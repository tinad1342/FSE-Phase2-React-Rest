import React from 'react';

export default function CustomerList(props) {

    const handleListClick = function(item){
        console.log("in handleListClick()");
        if (item.id >= 0) {
          props.setFormObject(item);
        } 
        if (item.id === props.formObject.id) {
          props.setFormObject(props.blankCustomer);
        }
   
    } 

    return (
    <div className="boxed" >
        <h4>Customer List</h4>
        <table id="customer-list">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Pass</th>
            </tr>
          </thead>
          <tbody>
            {props.customers.map(
              (item, index) => {
                return (<tr key={item.id} 
                className={ (item.id === props.formObject.id ? "selected" : "")}
                onClick={()=>handleListClick(item)} 
                >
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.password}</td>
                </tr>);
              }
            )}
          </tbody>
        </table>
    </div>
    );
}