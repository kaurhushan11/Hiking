import React, {useRef, useState} from "react";

const Contact = () =>{

    const [formInfo, setFormInfo] = useState('');

    const [clickst, setClickst] = useState(false);

    const form = useRef();
    const formData = (e) =>{
        e.preventDefault();                 
        const name = form.current.name.value;
        const phone = form.current.phone.value;
        const gmail = form.current.gmail.value;
        const msg = form.current.msg.value;

        setFormInfo({name, phone, gmail, msg});
        e.target.reset();
    }

    console.log(formInfo);

    return(
        <>
            <div className="my-5 contact-head">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container contact-div">
                <div className="row">
                    <div className="col-md-6 col-12 ps-5">
                        <form action="" ref={form} onSubmit={formData}>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Name</label>
                                <input type="text" name="name" className="form-control" id="exampleFormControlInput1" placeholder="Enter your name"/>
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Phone</label>
                                <input type="number" name="phone" className="form-control" id="exampleFormControlInput1" placeholder="Mobile Number"/>
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" name="gmail" className="form-control" id="exampleFormControlInput1" placeholder="abc@example.com"/>
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                                <textarea name="msg" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-outline-info" type="submit" onClick={()=>setClickst(!clickst)}>Submit</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-6 col-12 pt-5 ps-5">
                        {
                            clickst && (<div>
                                <h4><u>Your Data</u></h4>
                                <h5>Name: {formInfo.name}</h5>
                                <h5>Phone: {formInfo.phone}</h5>
                                <h5>Email: {formInfo.gmail}</h5>
                                <h5>Message: {formInfo.msg}</h5>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </>
    );
}
export default Contact;