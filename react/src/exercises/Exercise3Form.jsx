import { useEffect, useState } from "react";

// Exercise 3: Simple Form
// Goal:
// - Collect name and email.
// - Validate: 
//    name is required; 
//    email must include "@"; 
//    both fields must have at least 3 characters.
// - Disable Submit until valid.
// - On submit, show a success message with the name.

export default function Exercise3Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  // TODO: compute validation state.
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if(name.length > 3 && email.length > 3 && email.includes("@") && phone.startsWith("407")){
      setIsValid(true);
    } else {
      setIsValid(false);
    }

  }, [name, email, phone])

  // TODO: handle submit to set submittedName.
  const handleSubmit = (e) => {
    e.preventDefault();

      setSubmittedName(name);
  };

  return (
    <section>
      <h2>Simple Form</h2>

      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            onChange={(e) => {setName(e.target.value)}}
          />
        </label>

        <label>
          Email
          <input
            type="email"
            onChange={(e) => {setEmail(e.target.value)}}
          />
        </label>

        <label>
          Phone
          <input
            type="text"
            onChange={(e) => {setPhone(e.target.value)}}
          />
        </label>

        <button type="submit" disabled={!isValid}>
          Submit
        </button>
      </form>
      {/* TODO: Add conditional rendering to show */}
      {submittedName !== "" ? (<p>Thanks, {submittedName}!</p>) : (<p>Fill out the form to see the message.</p>)}
    </section>
  );
}
