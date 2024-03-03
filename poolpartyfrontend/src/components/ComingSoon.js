import React from "react";

function ComingSoon() {
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
              required
            />
            <button
              type="submit"
              class="py-2 px-4rounded-r-md hover:bg-blue-600 focus:outline-none "
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
