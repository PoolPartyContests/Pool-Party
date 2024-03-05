import React, { useState } from "react";
import jsonp from "jsonp";

function ComingSoon() {
  const [email, setEmail] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const url =
      "https://gmail.us18.list-manage.com/subscribe/post-json?u=f626187bf48b35740a55f6f1f&amp;id=fe358a9230&amp;f_id=00dccbe0f0";
    jsonp(`${url}&EMAIL=${email}`, { param: "c" }, (_, data) => {
      const { msg, result } = data;
      // do something with response
      alert(msg);
    });
  };

  return (
    <div>
      <div>
        <div>
          <h1>Coming Soon</h1>
          <p class="mt-4 text-lg">We're working on something awesome!</p>
        </div>
        <div class="mt-8">
          <form action="#" method="post" class="flex items-center">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              class="py-2 px-4 bg-gray-800 rounded-l-md focus:outline-none"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              class="py-2 px-4rounded-r-md hover:bg-blue-600 focus:outline-none "
              onClick={onSubmit}
            >
              Subscribe
            </button>{" "}
          </form>
          <p class="mt-2 text-gray-400 text-sm">
            Be the first to know when we launch!
          </p>
        </div>
      </div>
    </div>
  );
}

export default ComingSoon;
