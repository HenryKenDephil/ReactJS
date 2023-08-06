import { useState } from "react";

const Inquiry = () => {
    const [contactInfo, setContactInfo] = useState({
        name: "",
        email: "",
        remarks: "",
    });

    const onChange = (e) =>{
        setContactInfo({...contactInfo, [e.target.id]: e.target.value});
    };

    const onSubmit = (e) =>{
        e.preventDefault();
        console.log(contactInformation);
    };
    return (
        <form className="mt-2">
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                type="text"
                className="form-control"
                placeholder="Name"
                id="name"
                value={contactInfo.name}
                onChange={onChangeContact}
                />
            </div>
            <button
            className="btn btn-primary mt-2"
            disabled={!contactInfo.name || !contactInfo.email}
            onClick = {onSubmit}
            >
                Submit 
            </button>
        </form>
      );
}
 
export default Inquiry;