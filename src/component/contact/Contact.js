import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="contact__container">
        <form>
          <div className="form___control">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enater your name"
            />
          </div>
          <div className="form___control">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enater your email"
            />
          </div>
          <div className="form___control">
            <label htmlFor="mesg">Message</label>
            <textarea
              rows={4}
              name="mesg"
              id="mesg"
              placeholder="Enater your message"
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
