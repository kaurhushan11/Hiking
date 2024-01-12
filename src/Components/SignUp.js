import React, {useRef, useState} from "react";
import {Link} from "react-router-dom";

const SignUp = () => {
    const [formInfo,setFormInfo]=useState('');

    const [clickst,setClickst]=useState(false);

    const form=useRef();
    const formData=(e)=>{
        e.preventDefault();
        const name=form.current.name.value;
        const phone=form.current.phone.value;
        const gmail=form.current.gmail.value;
        const pass=form.current.pass.value;
        setFormInfo({name,phone,gmail,pass});
        e.target.reset();
        
    }
    
    console.log(formInfo);
    return(
        <>
        <div className="my-5">
            <h1 className="text-center signup-head">Sign Up</h1>
        </div>
        <div className="container signup-div">
            <div className="row">
                <div className="col-md-6 col-12 ps-5">
                    <form ref={form} onSubmit={formData} action="http://localhost:8081/signup_sbt" method="post">
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Name</label>
                            <input type="text" name="name" className="form-control" id="exampleFormControlInput1" placeholder="enter your name"/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Phone</label>
                            <input type="number" name="phone" className="form-control" id="exampleFormControlInput1" placeholder="mobile number"/>
                        </div>
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
                        <p>have an account <Link to="/signin">Sign In</Link></p>
                    </form>
                </div>
                <div className="col-md-6 col-12 pt-5 ps-5">
                    {
                    clickst && (<div>
                        <h4><u>Your data</u></h4>
                        <h5>Name: {formInfo.name}</h5>
                        <h5>Phone: {formInfo.phone}</h5>
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
export default SignUp;