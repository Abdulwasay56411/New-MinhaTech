import React, { useEffect, useRef } from "react";
import { project } from "../../Data/project";
import { useParams, Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";

const Counter = ({ value }) => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const numericPart = value.replace(/[^0-9.]/g, "");
  const numericValue = parseFloat(numericPart) || 0;

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    return value.includes(".") ? latest.toFixed(1) : Math.round(latest);
  });

  useEffect(() => {

    if (isInView) {
      const controls = animate(count, numericValue, {
        duration: 2,
        ease: "easeOut",
        delay: 0.2,
      });
      return controls.stop;
    }
  }, [isInView, numericValue, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

const ProjectDetails = () => {
  const { slug } = useParams();

  const item = project.find(
    (p) => p.slug.toLowerCase().trim() === slug?.toLowerCase().trim()
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };


  return (
    <div className="max-w-350 mx-auto px-5 pt-20 overflow-x-hidden">
      <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
        <Link to="/" className="inline-block">
          <div className="flex items-center gap-2 hover:-translate-x-1.25 transition-transform duration-300">
            <IoArrowBack className="text-[#FFFFFFD4] text-2xl" />
            <p className="text-[#FFFFFFED] text-xl ">Back to Home</p>
          </div>
        </Link>
      </motion.div>
      <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="pt-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#FFFFFF] py-2">
          {item.heroTitle}
        </h1>
        <p className="text-[#C6C7C8] text-xl">{item.heroDesc}</p>
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="flex items-center justify-between py-5 sm:max-w-150 lg:max-w-200 gap-2 lg:gap-5"
      >
        <p className="text-[#C6C7C8] text-xs sm:text-sm md:text-base lg:text-xl">Client: <span className="text-[#FFFFFFED] font-semibold"> {item.client}</span></p>
        <p className="text-[#C6C7C8] text-xs sm:text-sm md:text-base lg:text-xl">Duration: <span className="text-[#FFFFFFED] font-semibold"> {item.duration}</span></p>
        <p className="text-[#C6C7C8] text-xs sm:text-sm md:text-base lg:text-xl">Year: <span className="text-[#FFFFFFED] font-semibold"> {item.year}</span></p>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        className="w-full bg-[#06B8FF33] rounded-4xl my-10 p-5 overflow-hidden"
      >
        <img className="w-full object-cover rounded-2xl" src={item.image} alt="" />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="grid grid-cols-2 md:grid-cols-4 gap-5 my-20"
      >
        {[
          { label: "Downloads", value: item.downloads },
          { label: "App Rating", value: item.rating },
          { label: "Active users", value: item.user },
          { label: "Retention", value: item.retention }
        ].map((stat, i) => (
          <motion.div
            key={i}
            variants={fadeInUp}
            whileHover={{ y: -10 }}
            className="w-full flex flex-col items-center justify-center border border-[#06B8FF21] bg-[#06B8FF21] rounded-2xl shadow-[0px_4px_36.6px_0px_rgba(6,184,255,0.2)] p-5"
          >
            <img className="w-7 h-7 object-cover" src="/download.png" alt="" />
            <p className="text-[#FFFFFF] font-bold text-2xl md:text-3xl lg:text-4xl py-2">

              <Counter value={stat.value} />

              <span className="ml-1 text-white">
                {stat.label === "App Rating" ? " / 5" : stat.value.replace(/[0-9.]/g, "")}
              </span>
            </p>
            <p className="text-[#C6C7C8] text-sm md:text-base lg:text-lg">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="lg:col-span-7 flex flex-col gap-10"
        >
          <motion.div variants={fadeInUp}>
            <h1 className="text-[#F2F6F7] font-bold text-3xl">Overview</h1>
            <p className="text-[#C6C7C8] text-sm sm:text-base md:text-lg lg:text-xl py-2">{item.overView}</p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h1 className="text-[#F2F6F7] font-bold text-3xl">The Challenge</h1>
            <p className="text-[#C6C7C8] text-sm sm:text-base md:text-lg lg:text-xl py-2">{item.challenge}</p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h1 className="text-[#F2F6F7] font-bold text-3xl">Our Solutions</h1>
            <p className="text-[#C6C7C8] text-sm sm:text-base md:text-lg lg:text-xl py-2">{item.solution}</p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h1 className="text-[#F2F6F7] font-bold text-3xl mb-4">Key Results</h1>
            <div className="flex flex-col gap-3">
              {item.results?.map((res, index) => (
                <div key={index} className="flex items-center gap-2">
                  <img className="w-3 h-3 sm:w-4 sm:h-4 object-cover" src="/result.png" alt="bullet" />
                  <p className="text-[#C6C7C8] text-xs sm:text-base md:text-lg lg:text-xl">{res}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="lg:col-span-5 flex flex-col gap-5"
        >
          <div className="bg-[#06B8FF29] rounded-4xl p-8 border border-[#06B8FF21] flex-1">
            <h1 className="text-[#F2F6F7] font-bold text-3xl mb-5">Features</h1>
            <div className="flex flex-col gap-4">
              {item.features?.map((res, index) => (
                <div key={index} className="flex items-center gap-2">
                  <img className="w-3 h-3 sm:w-4 sm:h-4 object-cover" src="/result.png" alt="bullet" />
                  <p className="text-[#C6C7C8] text-sm sm:text-base md:text-lg lg:text-xl">{res}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#06D27E29] rounded-4xl p-8 border border-[#06D27E21] flex-1">
            <h1 className="text-[#F2F6F7] font-bold text-3xl my-5">Technologies</h1>
            <div className="flex flex-wrap gap-3 py-5">
              {[item.figma, item.react, item.Cloud].map((tech, i) => (
                tech && (
                  <motion.button
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2 text-xl text-[#F8F8F8] border border-[#00FB94] bg-[#00FB9433] rounded-2xl"
                  >
                    {tech}
                  </motion.button>
                )
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetails;