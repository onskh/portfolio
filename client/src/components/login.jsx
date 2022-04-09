import React from "react";
const Login = (props) => {
  console.log(props)
  return (
    <div class="container" style={{marginTop:150}}>
    <div class="row">
		<div class="col-md-4 col-md-offset-4">
    		<div class="panel panel-default">
			  	<div class="panel-heading">
			    	<h3 class="panel-title">Log in</h3>
			 	</div>
			  	<div class="panel-body">
			    	<form accept-charset="UTF-8" role="form">
                    <fieldset>
			    	  	<div class="form-group">
			    		    <input class="form-control" placeholder="E-mail" name="email" type="text" value={props.email} 
							onChange={props.handleChange}/>
			    		</div>
			    		<div class="form-group">
			    			<input class="form-control" placeholder="Password" name="password" type="password" value={props.password}
							onChange={props.handleChange}/>
			    		</div>
			    		<input class="btn btn-lg btn-success btn-block" type="submit" value="Login" 
                        onClick={()=>props.loggedIn()}/>
			    	</fieldset>
			      	</form>
			    </div>
			</div>
		</div>
	</div>
</div>
  );
};

export default Login;