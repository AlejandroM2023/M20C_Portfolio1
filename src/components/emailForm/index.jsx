export default function emailForm({handleSubmit}){
    return <div className="container text-center">
    <h1>Contact</h1>
        <form>
    <div className="mb-3">
        <label  className="form-label">Name</label>
        <input type="text" className="form-control" id="name"/>
    </div>
    <div className="mb-3">
        <label  className="form-label">Email address</label>
        <input type="email" className="form-control" id="email" aria-describedby="emailHelp"/>
    </div>
    <div className="mb-3">
        <label  className="form-label">Message</label>
        <textarea type="textbox" className="form-control" id="message"/>
    </div>
    </form>
    <div id="msg"> </div>
    <button onClick={handleSubmit} className="btn btn-primary">Submit</button>
  </div>
}