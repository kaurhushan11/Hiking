import React, {useRef, useState} from "react";
import {Link} from "react-router-dom";

const SignIn = () => {
    const [formInfo,setFormInfo]=useState('');

    const [clickst,setClickst]=useState(false);

    const form=useRef();
    const formData=(e)=>{
        e.preventDefault();
        const gmail=form.current.gmail.value;
        const pass=form.current.pass.value;
        setFormInfo({gmail,pass});
        e.target.reset();
        
    }
    
    console.log(formInfo);
    return(
        <>
        <div className="my-5">
            <h1 className="text-center signin-head">Sign In</h1>
        </div>
        <div className="container signin-div">
            <div className="row">
                <div className="col-md-6 col-12 ps-5">
                    <form action="" ref={form} onSubmit={formData}>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Email address</label>
                            <input type="email" name="gmail" className="form-control" id="exampleFormControlInput1" placeholder="abc@example.com"/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlTextarea1" className="form-label">Password</label>
                            <input type="password" name="pass" className="form-control" id="exampleFormControlInput1" placeholder="password"/>
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-outline-info"  onClick={()=>setClickst(!clickst)}>Submit</button>
                        </div>
                        <p>Don't have an account <Link to="/signup">Sign Up</Link></p>
                    </form>
                </div>
                <div className="col-md-6 col-12 pt-5 ps-5">
                    {
                    clickst && (<div>
                        <h4><u>Your data</u></h4>
                        <h5>Email: {formInfo.gmail}</h5>
                        <h5>Password: {formInfo.pass}</h5>
                    </div>)
                    }

                </div>
            </div>
        </div>
        </>
    );
}
export default SignIn;