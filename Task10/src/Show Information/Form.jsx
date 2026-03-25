import { Component } from "react";

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      mobile: "",
      city: "",
      error: "",
      formData: [],
      showAddForm: false,
    };
  }

  componentDidMount() {
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      this.setState({ formData: JSON.parse(savedData) });
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, mobile, city } = this.state;

    if (!name) {
      this.setState({ error: "Name is required" });
      return;
    }
    if (!mobile) {
      this.setState({ error: "Mobile number is required" });
      return;
    }
    if (!city) {
      this.setState({ error: "City is required" });
      return;
    }

    const updatedData = [...this.state.formData, { name, mobile, city }];
    localStorage.setItem("formData", JSON.stringify(updatedData));

    this.setState({
      formData: updatedData,
      name: "",
      mobile: "",
      city: "",
      error: "",
      showAddForm: false,
    });
  };

  render() {
    return (
      <section className="info-wrap">
        <div className="info-header">
          <h2>User Information</h2>
          <button
            className="info-btn"
            onClick={() => this.setState({ showAddForm: !this.state.showAddForm })}
          >
            {this.state.showAddForm ? "Close" : "Add Information"}
          </button>
        </div>

        {this.state.showAddForm && (
          <form className="info-form" onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value, error: "" })}
            />
            <input
              type="text"
              placeholder="Mobile no"
              value={this.state.mobile}
              onChange={(e) => this.setState({ mobile: e.target.value, error: "" })}
            />
            <input
              type="text"
              placeholder="City"
              value={this.state.city}
              onChange={(e) => this.setState({ city: e.target.value, error: "" })}
            />
            <button type="submit" className="info-btn">
              Save
            </button>
            <p className="info-error">{this.state.error}</p>
          </form>
        )}

        <div className="info-table-wrap">
          <table className="info-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Mobile</th>
                <th>City</th>
              </tr>
            </thead>
            <tbody>
              {this.state.formData.length === 0 && (
                <tr>
                  <td colSpan="3" className="info-empty">
                    No information added yet.
                  </td>
                </tr>
              )}
              {this.state.formData.map((row, index) => (
                <tr key={index}>
                  <td>{row.name}</td>
                  <td>{row.mobile}</td>
                  <td>{row.city}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    );
  }
}

export default Form;
