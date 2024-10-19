import { motion } from "framer-motion";

function Hero() {
  // Define animation variants
  const textVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section className="bg-white text-slate-800" id="Home">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        {/* Left Column: Text and Buttons */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ duration: 0.6 }}
            className="text-3xl font-extrabold text-blue-600 sm:text-5xl"
          >
            Empower Your Workforce.
            <span className="block text-slate-700">Increase Engagement.</span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 max-w-lg mx-auto lg:mx-0 sm:text-xl/relaxed text-slate-600"
          >
            Discover top talent, streamline recruitment, and foster employee growth with our HR solutions tailored to your needs.
          </motion.p>

          <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
            <a
              className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
              href="#"
            >
              Get Started
            </a>

            <a
              className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-blue-600 hover:bg-blue-600 hover:text-white focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Right Column: Diamond Image Arrangement */}
        <div className="hidden lg:flex w-full lg:w-1/2 relative justify-center items-start h-full">
          {/* Top Image */}
          <motion.img
            initial="hidden"
            animate="visible"
            variants={imageVariants}
            transition={{ duration: 0.6, delay: 0.4 }}
            src="https://images.pexels.com/photos/5439443/pexels-photo-5439443.jpeg?auto=compress&cs=tinysrgb&w=300"
            alt="HR Image 1"
            className="absolute w-48 h-48 object-cover rounded-lg top-8"
          />

          {/* Side Images */}
          <motion.img
            initial="hidden"
            animate="visible"
            variants={imageVariants}
            transition={{ duration: 0.6, delay: 0.6 }}
            src="https://images.pexels.com/photos/10041251/pexels-photo-10041251.jpeg?auto=compress&cs=tinysrgb&w=300"
            alt="HR Image 2"
            className="absolute w-36 h-36 object-cover rounded-lg left-8 top-28"
          />
          <motion.img
            initial="hidden"
            animate="visible"
            variants={imageVariants}
            transition={{ duration: 0.6, delay: 0.6 }}
            src="https://images.pexels.com/photos/12903102/pexels-photo-12903102.jpeg?auto=compress&cs=tinysrgb&w=300"
            alt="HR Image 3"
            className="absolute w-36 h-36 object-cover rounded-lg right-8 top-28"
          />

          {/* Bottom Image */}
          <motion.img
            initial="hidden"
            animate="visible"
            variants={imageVariants}
            transition={{ duration: 0.6, delay: 0.8 }}
            src="https://images.pexels.com/photos/12903034/pexels-photo-12903034.jpeg?auto=compress&cs=tinysrgb&w=300"
            alt="HR Image 4"
            className="absolute w-48 h-48 object-cover rounded-lg bottom-8"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
