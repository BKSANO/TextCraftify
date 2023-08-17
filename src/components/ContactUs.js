import React, {useState} from 'react'
const ContactUs = (props) => {
  const [formStatus, setFormStatus] = React.useState('Send')
  let myStyle = {
    color: props.mode==="dark"?"white":"#333333",
    backgroundColor: props.mode==="dark"?"#333333":"white"
  }
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    let conFom = {
      name: name,
      email: email,
      message: message,
    }
    console.log(conFom)
    setTimeout(() => {
        setFormStatus('Send')
        props.showAlert("Details Submitted! will reach you soon.","success")
      }, 3000);

  }
  return (
    <div className="container" style={myStyle}>
      <h2 className="mb-3">Contact Form</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" id="name" onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" onChange={(e) => setEmail(e.target.value)}  required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" id="message" onChange={(e) => setMessage(e.target.value)}  required />
        </div>
        <button disabled={name.length===0 && email.length===0 && message.length===0} className="btn btn-primary" type="submit">
          {formStatus}
        </button>
      </form>
    </div>
  )
}
export default ContactUs