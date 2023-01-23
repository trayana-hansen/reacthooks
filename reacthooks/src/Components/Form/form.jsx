import { useState } from "react";

const Form = () => {
  const [contactInfo, setContactInfo] = useState({
    name: "",
    phonenumber: "",
    email: "",
    comments: "",
  });
  const handleChange = (event) => {
    setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    // prevents the submit button from refreshing the page
    event.preventDefault();
    console.log(contactInfo);
    setContactInfo({ name: "", email: "", phonenumber: "", comments: "" });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h3>Contact Form</h3>

        <input
          type="text"
          name="name"
          placeholder="Fulde navn"
          value={contactInfo.name}
          onChange={handleChange}
        />

        <input
          type="number"
          name="phonenumber"
          placeholder="Telefon nummer"
          value={contactInfo.phonenumber}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={contactInfo.email}
          onChange={handleChange}
        />

        <textarea
          name="comments"
          cols="30"
          rows="10"
          placeholder="Skriv dine kommentarer her"
          value={contactInfo.comments}
          onChange={handleChange}
        ></textarea>

        <input type="checkbox" />
        <input type="checkbox" />

        <button type="reset">Reset</button>
        <button type="submit">Send</button>
      </form>
    </>
  );
};

export default Form;
