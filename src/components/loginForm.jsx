import React, { Component } from 'react';
class LoginForm extends Component {
    state={
        account: {email: "", password: ""},
        errors: {}
        
    }

    // if fail regex then error
    // on error show error label
// } else if (values.password.length < 8) {
//     errors.password = "Password must be 8 characters long.";
//   } else if (!passwordRegex.test(values.password)) {
//     errors.password = "Invalid password. Must contain one number.";
//   }

    // validate = () =>{
    //     const errors ={};
    //     const mailRegex = /^\S+@\S+$/;
    //     const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    //     // if (mailRegex.test(potato)) {
    //     //     console.log('this should show up')
    //     // }
    //     // if (!mailRegex.test(potato2)) {
    //     //     console.log('this should also show up')
    //     // }
        



    //     const {account} = this.state;
    //     console.log(account.email); 
    //     if (!new RegExp(mailRegex).test(account.email))

    //       errors.email='Email format is incorrect, please check your email.';
         
    //     //   switch for rules
    //     if (!account.password.match(passwordRegex))
    //       errors.password='Password required needs a minimum eight characters, at least one letter, one number and one special character:.';

    //     return Object.keys(errors).lenght === 0 ? null : errors;
    // };

  handleSubmit = e =>{
      e.preventDefault(); // Calling the server
    //   const errors = this.validate();
    //   console.log(errors);
    //   this.setState({errors});
    //   if (errors)
    //   creat element - sub input rosu cu mesajul dorit
    console.log('submitted')
       return;
       

      
       
      

      

// //   this.handleChange = e => {
// //       const account = {...this.state.account};
// //       account.email = e.currrentTarget.value;
// //       this.setState({ account});
//   };
  
    };
    render() { 
        return (
        <div> 
            <h1>Login</h1>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">

                    <label htmlFor="email">Email</label>
                   
                    <input id="email" 
                    autoFocus  
                    type="email"  
                    className="form-control" 
                    placeholder="Enter email"
                    required/>
                </div>
                    
                <div className="form-group">

                    <label htmlFor="password">Password</label>

                    <input id="password"
                     type="password" 
                     className="form-control"
                     placeholder="Password"
                     required />

                </div>
                     
                    <button  type="submit" className="btn btn-primary">
                        Login
                    </button>
            </form>
            
        </div>
            
         );
    }
}
 
export default LoginForm;