import React, { useState } from 'react';
import { post, put, deleteById } from '../restdb.js';

export default function CustomerAddUpdateForm(props) {
    
    let mode = (props.formObject.id >= 0) ? 'Update' : 'Add';

    const handleInputChange = function (event) {
        console.log("in handleInputChange()");
        const name = event.target.name;
        const value = event.target.value;
        let newFormObject = {...props.formObject}
        newFormObject[name] = value;
        props.setFormObject(newFormObject);
      }
    
      let onCancelClick = function () {
        console.log("in onCancelClick()");
        props.setFormObject(props.blankCustomer);
      }
    
      let onDeleteClick = function () {
        console.log("in onDeleteClick()");
        let postOpCallback = () => { props.setFormObject(props.blankCustomer); }
        if (props.formObject.id >=0) {
          deleteById(props.formObject.id, postOpCallback);
        }
        props.setFormObject(props.blankCustomer);
      }
    
      let onSaveClick = function () {
        console.log("in onSaveClick()");
        let postOpCallback = () => { props.setFormObject(props.blankCustomer); }
        if (mode === "Add") {
          post(props.formObject, postOpCallback);
        }
        if (mode === "Update") {
          put(props.formObject, postOpCallback);
        }
        props.setFormObject(props.blankCustomer);
      }

    return (
<div className="boxed">
      <div>
        <h4>{mode}</h4>
      </div>
      <form >
        <table id="customer-add-update" >
          <tbody>
            <tr>
              <td className={'label'} >Name:</td>
              <td><input
                type="text"
                name="name"
                onChange={(e) => handleInputChange(e)}
                value={props.formObject.name}
                placeholder="Customer Name"
                required /></td>
            </tr>
            <tr>
              <td className={'label'} >Email:</td>
              <td><input
                type="email"
                name="email"
                onChange={(e) => handleInputChange(e)}
                value={props.formObject.email}
                placeholder="name@company.com" /></td>
            </tr>
            <tr>
              <td className={'label'} >Pass:</td>
              <td><input
                type="text"
                name="password"
                onChange={(e) => handleInputChange(e)}
                value={props.formObject.password}
                placeholder="password" /></td>
            </tr>
            <tr className="button-bar">
              <td colSpan="2">
                <input type="button" value="Delete" onClick={onDeleteClick} />
                <input type="button" value="Save" onClick={onSaveClick} />
                <input type="button" value="Cancel" onClick={onCancelClick} />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
    )
}