import React, {Component} from 'react'

class Form extends Component {
  initialState = {
    name: '',
    job: ''
  }

  state = this.initialState;

  handleChange = (event) => {
    const {name,value} = event.target

    this.setState({
      [name]: value
    })
  }

  render(){
      const { name, job } = this.state;
    return(
        <form>
          <label htmlFor = 'name'> Name</label>
          <input
          type = 'text'
          name = 'name'
          id = 'name'
          value = {name}
          />
          <label htmlFor = 'job'> Job</label>
          <input
          type = 'text'
          name = 'job'
          id = 'job'
          value = {job}
          />
        </form>
    )
  }
}

export default Form
