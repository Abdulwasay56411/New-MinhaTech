import React from "react";

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

const time = [
  {
    id: 1,
    image: "/Time.png",
    title: "24/7 Full Time Support",
  },
  {
    id: 2,
    image: "/Time.png",
    title: "100% On Time Dilevery",
  },
];

const GetInTouch = () => {
  return (
    <div className="max-w-350 mx-auto px-5 py-10">
      <div className="flex flex-wrap justify-center lg:justify-between gap-4">
        <div>
          <h1 className="text-3xl pb-3 font-semibold text-[#FFFFFF]">
            Get In Touch
          </h1>
          <p className="text-lg font-montserrat text-[#FFFFFF]">
            Let’s talk reach out using the form or contact details below
          </p>
          <div className="my-12">
            {mail.map((item) => (
              <div key={item.id} className="flex items-center gap-2 py-3">
                <img className="w-9 h-9" src={item.image} alt="" />
                <p className="font-montserrat text-xl text-[#FFFFFF] cursor-pointer hover:text-[#06B8FF] transition-all duration-300">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
          <div className="my-8">
            {time.map((item) => (
              <div className="flex items-center gap-3 py-3">
                <img className="w-5 h-5" src={item.image} alt="" />
                <div>
                  <p className="text-base text-[#FFFFFF] hover:text-[#06B8FF] transition-all duration-300 cursor-pointer">{item.title}</p>
                  <hr className="border-dashed text-[#00FB94] " />
                </div>
              </div>
            ))}
          </div>
          <div className="w-full sm:w-85 h-23  flex justify-center items-center px-8 gap-2 bg-[#06B8FF33] rounded-[50px] my-5 lg:mt-24">
            <img className="w-32 h-12 object-center" src="/OurTeam.png" alt="" />
             <p className="font-montserrat text-[#FFFFFF] text-xs font-semibold">Our Team Alway 
             Ready for New Project</p>
          </div>
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
