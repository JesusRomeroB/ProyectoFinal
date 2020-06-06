import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.onChangeModel = this.onChangeModel.bind(this);
    this.onChangeCode = this.onChangeCode.bind(this);
    this.onChangeBrand = this.onChangeBrand.bind(this);
    this.onChangeSize = this.onChangeSize.bind(this);
    this.onChangeStock = this.onChangeStock.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeValue = this.onChangeValue.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      model: '',
      code: '',
      brand: '',
      description:'',
      value: 0,
      size: 0,
      stock: 0,
      date: new Date(),
      selectedFile:null
    }

  }

  componentDidMount() {
   

   

  }
  onChangeModel(e) {
    this.setState({
      model: e.target.value
    })
  }
  onChangeCode(e) {
    this.setState({
      code: e.target.value
    })
  }
  onChangeSize(e) {
    this.setState({
      size: e.target.value
    })
  }
  onChangeBrand(e) {
    this.setState({
      brand: e.target.value
    })
  }
  onChangeStock(e) {
    this.setState({
      stock: e.target.value
    })
  }
  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })
  }

  onChangeValue(e) {
    this.setState({

      value: e.target.value
     
    })
   }

  onChangeDate(date) {
    this.setState({
      date: date
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const fd=new  FormData();

    fd.append('file',this.state.selectedFile,this.state.selectedFile.name);
    fd.append('model',this.state.model);
    fd.append('code',this.state.code);
    fd.append('brand',this.state.brand);
    fd.append('description',this.state.description);
    fd.append('value',this.state.value);
    fd.append('size',this.state.size);
    fd.append('stock',this.state.stock);
    fd.append('date',this.state.date);
    
    axios.post('http://localhost:5000/products/add', fd)
      .then(res => console.log(res.data));

   window.location = '/x';
  }

  fileSelectedHandler=event=> {
this.setState({
  selectedFile:event.target.files[0]
  
})
  }

 

  render() {
    return (
    <div>
      <h3>Create New Product </h3>
      <form onSubmit={this.onSubmit}>
        
        <div className="form-group"> 
          <label>Model: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.model}
              onChange={this.onChangeModel}
              />
        </div>
        <div className="form-group"> 
          <label>Description: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
              />
        </div>
        <div className="form-group">
          <label>Code: </label>
          <input type="text" 
              required
              className="form-control"
              value={this.state.code}
              onChange={this.onChangeCode}
              />
        </div>
        <div className="form-group">
          <label>Brand: </label>
          <input type="text" 
              required
              className="form-control"
              value={this.state.brand}
              onChange={this.onChangeBrand}
              />
        </div>
        <div className="form-group">
          <label>Value (in COP): </label>
          <input 
              type="text" 
              required
              className="form-control"
              value={this.state.value}
              onChange={this.onChangeValue}
              />
        </div>
        <div className="form-group">
          <label>Size: </label>
          <input type="text" 
              required
              className="form-control"
              value={this.state.size}
              onChange={this.onChangeSize}
              />
        </div>
        <div className="form-group">
          <label>Stock: </label>
          <input type="text" 
              required
              className="form-control"
              value={this.state.stock}
              onChange={this.onChangeStock}
              />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>
        </div>
        <div className="App">
        <input type="file" onChange={this.fileSelectedHandler}/>
        </div>
      
        <div className="form-group">
          <input type="submit" value="Create Product" className="btn btn-primary" />
        </div>

      </form>
    </div>
    )
  }
}