import React, { useState } from "react";
import jsonp from "jsonp";
import Alert from "@mui/material/Alert";
import "./ComingSoon.css";

function ComingSoon() {
  const [email, setEmail] = useState("");
  const [alert, setAlert] = useState({});

  const onSubmit = (e) => {
    e.preventDefault();
    const url =
      "https://gmail.us18.list-manage.com/subscribe/post-json?u=f626187bf48b35740a55f6f1f&amp;id=fe358a9230&amp;f_id=00dccbe0f0";
    jsonp(`${url}&EMAIL=${email}`, { param: "c" }, (_, data) => {
      console.log(data);
      const { msg, result } = data;
      setAlert({ message: msg, result: result });
    });
    setEmail("");
  };

  return (
    <div>
      <div>
        <div>
          <h1>Coming Soon</h1>
          <p className="mt-4 text-lg">We're working on something awesome!</p>
        </div>
        <div className="mt-8">
          {alert.message && (
            <Alert
              severity={alert.result}
              style={{ margin: "20px" }}
              onClose={() => {
                setAlert({});
              }}
            >
              {alert.message}
            </Alert>
          )}{" "}
          <form action="#" method="post" className="flex items-center">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="subscribe-input"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
            <button
              type="submit"
              className="subscribe-button"
              onClick={onSubmit}
            >
              Subscribe
            </button>{" "}
          </form>
          <p className="mt-2 text-gray-400 text-sm">
            Be the first to know when we launch!
          </p>
        </div>
      </div>
    </div>
  );
}

export default ComingSoon;
