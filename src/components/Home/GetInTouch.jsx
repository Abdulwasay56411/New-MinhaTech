import React from "react";
import Heading from "../Heading";

const mail = [
  {
    id: 1,
    title: "contact@minhatech.org",
    image: "/mail.png",
  },
  {
    id: 2,
    title: "03440460091",
    image: "phone.png",
  },
  {
    id: 3,
    title: "DHA Raya , 2 Floor near McDonald, Lahore",
    image: "location.png",
  },
];


const GetInTouch = () => {
  return (
    <div id="contact" className="max-w-350 mx-auto px-5 py-10">
      <Heading title="Let’s Build Something Amazing" para="Ready to turn your app idea into reality? Get in touch today" />
      <div className="flex flex-wrap justify-center lg:justify-between gap-4">
        <div>
          {mail.map((item) =>(
            <div key={item.id}>
             <img src={item.image} alt="" />
            </div>
          ))}
        </div>
        <div className="w-162 h-auto rounded-3xl bg-[#06B8FF33] p-5">
          <form>
            <h1 className="font-montserrat text-2xl font-semibold text-[#FFFFFF] pb-6">
              Enter Your Details Here
            </h1>
            <label className="block text-white">First Name</label>
            <input
              className="w-full h-16 bg-[#00FB944D] mt-3 mb-6 rounded-lg outline-none px-5 text-[#00FB94] font-semibold font-montserrat text-lg"
              type="text"
              placeholder="First Name"
              required
            />
            <label className="block text-white">Email</label>
            <input
              className="w-full h-16 bg-[#00FB944D] mt-3 mb-6 rounded-lg outline-none px-5 text-[#00FB94] font-semibold font-montserrat text-lg"
              type="email"
              placeholder="Email"
              required
            />
            <label className="block text-white">Message</label>
            <textarea
              className="resize-none w-full h-42 outline-none mt-3 p-5 rounded-lg bg-[#00FB944D] text-[#00FB94]"
              placeholder="Type somethings"
              required
            ></textarea>
            <div className="flex justify-end py-7">
              <button
                type="submit"
                className="bg-[#00FB94] w-60 h-13 font-montserrat font-semibold text-lg text-[#09182B] cursor-pointer rounded-4xl"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
