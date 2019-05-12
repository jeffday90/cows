import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios';
import CowList from './CowList.jsx'

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      cows: [],
      cowName: '',
      description: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.getCows();
  }

  getCows(){
    axios.get('/cows')
    .then((results) => {
        var recentFirst = results.data.reverse();
        this.setState({
          cows: recentFirst
        })
        console.log(this.state.cows);
      })
      .catch((error) => {
        console.log(error);
    })
  }

  handleChange(e){
    e.preventDefault();
    this.setState({
      //this takes the target name and sets it to the target value
      [e.target.name]: e.target.value 
    });
  }

  handleSubmit(e){
    //call function with
        //post with 
    e.preventDefault();
    var newCow = {
      name: this.state.cowName,
      description: this.state.description
    }
    console.log(newCow);
    axios.post('/cows', newCow)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
      this.getCows();
  }

  render(){
    return (
      <div>
          <h1 style={centerStyle}>COWS</h1>
          <div style={centerStyle}>Input your favorite cow below: 
          </div>
          <div style={centerStyle}>
            <form style={{paddingTop: '20px'}}>
                <label>
                    Name of cow:
                    <input type="text" name="cowName" value={this.state.value} onChange={this.handleChange}/>
                </label>
                <label>
                    Description of cow: 
                    <input type="text" name="description" value={this.state.value} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="Submit" onClick={this.handleSubmit}/>
            </form>
          </div>
          <div>
            <CowList cows={this.state.cows}/>
          </div>
         
      </div>
      
    );
  }
}

var centerStyle = {
  textAlign: 'center',
  paddingTop: '20px'
}

ReactDOM.render(<App/>, document.getElementById('app'));