import React from "react";

export default function form() {
  return (
    <form action="#" method="POST" class="mx-auto mt-16 max-w-xl sm:mt-20">
      <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <label
            for="first-name"
            class="block text-sm font-semibold leading-6 text-white"
          >
            First name
          </label>
          <div class="mt-2.5">
            <input
              type="text"
              name="first-name"
              id="first-name"
              autocomplete="given-name"
              className="bg-agani block w-full rounded-md border-0 px-3.5 py-2 text-white shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6"
              //   class="block w-full rounded-md border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <label
            for="last-name"
            class="block text-sm font-semibold leading-6 text-white"
          >
            Last name
          </label>
          <div class="mt-2.5">
            <input
              type="text"
              name="last-name"
              id="last-name"
              autocomplete="family-name"
              className="bg-agani block w-full rounded-md border-0 px-3.5 py-2 text-white shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <label
            for="email"
            class="block text-sm font-semibold leading-6 text-white"
          >
            Email
          </label>
          <div class="mt-2.5">
            <input
              type="email"
              name="email"
              id="email"
              autocomplete="email"
              className="bg-agani block w-full rounded-md border-0 px-3.5 py-2 text-white shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <label
            for="last-name"
            class="block text-sm font-semibold leading-6 text-white"
          >
            Phone Number
          </label>
          <div class="mt-2.5">
            <input
              type="tel"
              name="phone-number"
              id="phone-number"
              autocomplete="tel"
              className="bg-agani block w-full rounded-md border-0 px-3.5 py-2 text-white shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div class="sm:col-span-2">
          <label
            for="message"
            class="block text-sm font-semibold leading-6 text-white"
          >
            Message
          </label>
          <div class="mt-2.5">
            <textarea
              name="message"
              id="message"
              rows="4"
              className="bg-agani block w-full rounded-md border-0 px-3.5 py-2 text-white shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6"
            ></textarea>
          </div>
        </div>
      </div>
      <div class="mt-10">
        <button
          type="submit"
          class="block  rounded-md bg-primary px-3.5 py-3.5 text-center  font-semibold text-white shadow-sm hover:bg-agani focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:border border-primary"
        >
          Send Message
        </button>
      </div>
    </form>
  );
}
