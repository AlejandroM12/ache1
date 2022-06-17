const Form = () => {
  return (
    <form className="form">
    <div className="form-container">
      <h2 className="form-title">Say Hello!</h2>
      <div className="form-group-container">
        <div className="form-group">
          <input
            type="text"
            id="name"
            className="form-input"
            placeholder=" "
          />
          <label className="form-label">
            Name
          </label>
          <span className="form-line"></span>
        </div>
        <div className="form-group">
          <input
            type="text"
            id="company"
            className="form-input"
            placeholder=" "
          />
          <label className="form-label">
            Company
          </label>
          <span className="form-line"></span>
        </div>
        <div className="form-group">
          <input
            type="text"
            id="email"
            className="form-input"
            placeholder=" "
          />
          <label className="form-label">
            Email
          </label>
          <span className="form-line"></span>
        </div>
      </div>
      <div className="form-group-select">
        <label className="form-label-select">I'm interested in</label>
        <select name="" id="" className="form-select">
          <option value="" className="form-label-option">Bussines Branding</option>
          <option value="" className="form-label-option">Bussines asdas</option>
        </select>
      </div>
      <div className="form-group-select">
        <label className="form-label-select">How did you hear about us?</label>
        <select name="" id="" className="form-select">
          <option value="" className="form-label-option">From Google</option>
        </select>
      </div>
      <div className="form-group-textarea">
        <label className="form-label-textarea">Brief description of your project ...</label>
        <textarea name="" id="" cols="30" rows="7" ></textarea>
      </div>
      <button className="form-submit">SEND!</button>
    </div>
  </form>
  );
};
export default Form;
