import React, { useState } from "react";

export default function Form() {
  const [profile, setProfile] = useState({});
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(profile, "", 2));
  };
  return (
    <>
      <form>
        <input
          value={profile.firstname || ""}
          type="text"
          name="firstname"
          placeholder="First Name"
          onChange={handleChange}
        />
        <input
          value={profile.lastname || ""}
          type="text"
          name="lastname"
          placeholder="Last Name"
          onChange={handleChange}
        />
        <input
          value={profile.date || ""}
          type="date"
          name="date"
          onChange={handleChange}
        />
        <input
          value={profile.password || ""}
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <input type="Submit" onClick={handleSubmit} />
      </form>
    </>
  );
}
