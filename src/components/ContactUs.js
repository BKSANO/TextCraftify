import React from 'react'
const ContactUs = (props) => {
  const [formStatus, setFormStatus] = React.useState('Send')
  let myStyle = {
    color: props.mode==="dark"?"white":"#333333",
    backgroundColor: props.mode==="dark"?"#333333":"white"
  }
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(conFom)
    setTimeout(() => {
        setFormStatus('Send')
        props.showAlert("Details Submitted! will reach you soon.","success")
      }, 1500);

  }
  return (
    <div className="container mt-5" style={myStyle}>
      <h2 className="mb-3">Contact Form</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" id="message" required />
        </div>
        <button className="btn btn-primary" type="submit">
          {formStatus}
        </button>
      </form>
    </div>
  )
}
export default ContactUs