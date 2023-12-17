import React from 'react';

const SubscribeForm = () => {
  return (
    <form
      action="https://app.us11.list-manage.com/subscribe/post?u=01187036b01de0e220b10acde&amp;id=9eba62d9d5&amp;f_id=009da5e0f0"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      className="validate flex flex-col"
      target="_blank"
    >
      <input
        type="email"
        name="EMAIL"
        className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2"
        id="mce-EMAIL"
        required
        placeholder="Enter your email"
      />
      <button
        type="submit"
        name="subscribe"
        id="mc-embedded-subscribe"
        className="rounded-md shadow text-background bg-primary hover:bg-border hover:text-primary mt-4 px-6 py-2 text-base rounded-md hover:bg-border hover:text-primary focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Join Us Pre-launch: Stay updated!
      </button>
    </form>
  );
};

export default SubscribeForm;
