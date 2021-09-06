import React, { Component } from 'react'; 
import { Link } from 'react-router-dom';

class Restaurants extends Component {
    state = { 
        restaurants: [
            {id:"All you can eat", name: "All you can eat"},
            {id:"Best fish in town", name: "Best fish in town"},
            {id: "Pork is life", name: "Pork is life"},
            {id:"You dont need sugar", name: "You dont need sugar"},
            {id:"Ketogenic gods", name: "Ketogenic gods"}
        ]
     };
    render() { 
        return ( 
            <><div>Restaurants</div><ul>
                {this.state.restaurants.map(restaurant => (
                    <li key={restaurant.id}>
                        <Link to={`/restaurants/${restaurant.id}`}>{restaurant.name}</Link>
                    </li>
                ))}
            </ul></>
         );
    }
}
 
export default Restaurants;