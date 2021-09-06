import { Component } from 'react';


class RestaurantDetailes extends Component {

    handleSave = () => {
      // Navigate to /products
      this.props.history.replace("/restaurants");
    };
  
    render() {
      return (
        <div>
          <h1>Restaurant  - {this.props.match.params.id} </h1>
          <button onClick={this.handleSave}>Save</button>
        </div>
      );
    }
  }
  
  export default RestaurantDetailes;
  