import { useState } from "react";

const Form = () => {
  const [formElm, setFormElm] = useState(
    {},
    {
      fullName: "...",
      phoneNumber: "...",
      email: "...",
      comments: "...",
    }
  );
  const registerInput = (e) => {
    setFormElm((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  return (
    <div>
      <form>
        <h2>Form elements</h2>
        <div>
          <label htmlFor="fullname">Fulde navn</label>
          <input
            type="text"
            name="fullname"
            id="fullname"
            onChange={registerInput}
          />
        </div>
        <div>
          <label htmlFor="phone">Telefon nummer</label>
          <input
            type="number"
            name="phone"
            id="phone"
            onChange={registerInput}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={registerInput}
          />
        </div>
        <div>
          <textarea
            name="comments"
            id="comments"
            cols="30"
            rows="10"
            placeholder="Kommentarer"
            onChange={registerInput}
          ></textarea>
        </div>
        <div>
          <input type="checkbox" name="contact" />{" "}
          <label htmlFor="">Vil gerne kontaktes med email</label> <br />
          <input type="checkbox" name="contact" />{" "}
          <label htmlFor="">Vil gerne kontaktes med telefon</label>
        </div>
        <div>
          <button type="reset">Reset</button>
          <button type="submit">Send</button>
        </div>
      </form>

      <section>
        <ul>
          <li>Fulde navn: {formElm.fullName}</li>
          <li>Telefon nummer: {formElm.phoneNumber}</li>
          <li>Email: {formElm.email}</li>
          <li>Kommentarer: {formElm.comments}</li>
        </ul>
      </section>
    </div>
  );
};

export default Form;
