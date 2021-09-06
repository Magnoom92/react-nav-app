import React, { Component } from 'react';
class List extends Component {

handleSubmit = e =>{
    e.preventDefault();
    const restaurantName = document.getElementById('restaurantName').value;
    const restaurantDescription = document.getElementById('restaurantDescription').value;
    // console.log(restaurantDescription);
    

    // if (!restaurantName.match(/^[A-Z]{1,25}$/)) {
    //     console.log('more than 25 chars')
    // }

    if(restaurantName.length >= 25) {
    //    alert('Prea mare')
       let element = document.getElementById("alerty");
       element.classList.toggle("hidden");
        
    }


    // Format sa fie mai mare about section
    // Limita la nume de 25 char

    // console.log(restaurantName);
    // const test  = restaurantName.match(/^[A-Z]{1,10}$/);

    // if (!test) {
    //     console.log('potato')
    //     alert('Not string!')
    // }
    // // console.log(test);


    // if (typeof restaurantName !== 'string'){
    //     console.log('not string')
    //     alert('Not string');
    // }
    // if (typeof restaurantDescription !== 'string'){
    //     console.log('not string')
    //     alert('Not string');
    // }
  
    // function showProperty(obj){
    //     console.log(typeof obj);
    // }
    
    // showProperty(restaurantName);


};


   
    render() { 
        return ( <div>
            <h1>Submit restaurants</h1>
            <form id="restaurantForm" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="text">Restaurant Name </label>
                    <input id="restaurantName"
                    autoFocus
                    type="text"
                    className="form-control" 
                    required/>
                    <div class="alert alert-warning hidden" role="alert" id="alerty">
                        Lenght needs to be less than 25 characters 
                    </div>      
                </div>

                <div className="form-group">
                   <label htmlFor="text">About restaurant</label>
                    <textarea id="restaurantDescription" name="restaurantDescription" form="restaurantForm" rows="4" cols="25" placeholder="Restaurant description here..."></textarea>
                 </div>
                 <button  type="submit" className="btn btn-primary">
                        Submit
                    </button>
            </form>
        </div> );
    }
}
 
export default List;