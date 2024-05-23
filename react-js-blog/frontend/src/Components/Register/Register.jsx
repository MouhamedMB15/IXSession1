

export default function Register() {
    onSubmit = (e) => {
      e.preventDefault();
      // Add your form submission logic here
      console.log('Form submitted');
    };
  {
      return (
        <div className="d-flex justify-content-center align-items-center w-100 vh-100">
          <div className="col-4">
            <h1>Register</h1>
            <form>
              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="firstName" placeholder="Joe" required />
                <label htmlFor="firstName">Name</label>
                <div className="valid-feedback">Looks good!</div>
              </div>
              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="lastName" placeholder="Mama" required />
                <label htmlFor="lastName">Last Name</label>
                <div className="valid-feedback">Looks good!</div>
              </div>
              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="bio" placeholder="Bio" required />
                <label htmlFor="bio">Bio</label>
                <div className="valid-feedback">Looks good!</div>
              </div>
              <div className="form-floating mb-3">
                <input type="email" className="form-control" id="email" placeholder="Email" required />
                <label htmlFor="email">Email</label>
                <div className="valid-feedback">Looks good!</div>
              </div>
              <div className="form-floating mb-3">
                <input type="password" className="form-control" id="password" placeholder="Password" required />
                <label htmlFor="password">Password</label>
                <div className="valid-feedback">Looks good!</div>
              </div>
              <button type="submit" className="btn btn-primary w-100" onClick={this.onSubmit}>
                Submit
              </button>
            </form>
          </div>
        </div>
      );
    }
  }
  
