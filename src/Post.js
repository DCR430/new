import React, { Component } from 'react'

export default class Post extends Component {

    state ={
        value: ""
    }

    handleChange(event) {
        this.setState({value: this.state.value});
      }

      handleSubmit(event) {
        alert('A thought was submitted ' + this.state.value);
        event.preventDefault();
      }


    render() {
        return (
            <div>
               <input type="text" value="enter text" value={this.state.value} onChange={this.handleChange}>

               </input>
                   <p>Please enter Thoughts</p>
                   <button>Submit</button>
                
            </div>
        )
    }
}
