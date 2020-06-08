import React from 'react'


class AddGro extends React.Component {
  state = { grocName: "" }

  handleSubmit = (i) => {
    i.preventDefault();
    this.props.addItem(this.state.grocName);
    this.setState({grocName: ''});
  };
  

  handleChange = (i) => {
    this.setState({ grocName: i.target.value })
  };

  render () {
    const { grocName } = this.state

    return (
      <form onSubmit= {this.handleSubmit}>
        <input
        value= { grocName }
        name= "name"
        onChange={this.handleChange}
        required
        placeholder="Add Grocery" />
        <button type="submit">add</button>
      </form>
    )
  }

}



export default AddGro;