import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

function About() {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <section id="About">
      <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
          {/* Image Section */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={fadeIn}
            className="relative z-10 lg:py-16"
          >
            <div className="relative h-64 sm:h-80 lg:h-full">
              <img
                alt="Our Team"
                src="https://images.pexels.com/photos/7581123/pexels-photo-7581123.jpeg?auto=compress&cs=tinysrgb&w=900"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </motion.div>

          {/* Text Section */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={fadeIn}
            className="relative flex items-center bg-slate-100"
          >
            <span className="hidden lg:absolute lg:inset-y-0 lg:-left-16 lg:block lg:w-16 lg:bg-slate-100"></span>

            <div className="p-8 sm:p-16 lg:p-24">
              <h2 className="text-2xl font-bold text-slate-800 sm:text-3xl">
                Reaching Talent, Transforming Businesses
              </h2>

              <p className="mt-4 text-slate-600">
                At our core, we connect businesses with the right talent, fostering growth and innovation. Through a culture of trust, collaboration, and expertise, we drive human potential forward.
              </p>

              {/* Mission Section */}
              <div className="mt-8">
                <h3 className="text-xl font-bold text-slate-800">Our Mission</h3>
                <p className="mt-2 text-slate-600">
                  To empower individuals and organizations by providing innovative solutions that drive success and create lasting impact.
                </p>
              </div>

              {/* Vision Section */}
              <div className="mt-6">
                <h3 className="text-xl font-bold text-slate-800">Our Vision</h3>
                <p className="mt-2 text-slate-600">
                  To be the leading platform connecting talent with opportunities, transforming lives and businesses across the globe.
                </p>
              </div>

              <a
                href="#"
                className="mt-8 inline-block rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
              >
                Join Us Today
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
