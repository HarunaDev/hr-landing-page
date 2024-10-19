import { motion } from "framer-motion";

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  
  function Services() {
    return (
      <section className="bg-gray-900 text-white" id="Services">
        <div className="max-w-screen-xl mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold sm:text-4xl">What Makes Us Special</h2>
            <p className="mt-4 text-gray-300">
              At [Your Company Name], we believe in delivering unparalleled quality and service. Our commitment to innovation and customer satisfaction sets us apart in a crowded marketplace.
            </p>
          </div>
  
          <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
            {[
              {
                title: 'Exceptional Quality',
                description: 'We use only the highest quality materials and the latest technology to ensure that our products meet your expectations.',
              },
              {
                title: 'Customer-Centric Approach',
                description: 'Your satisfaction is our priority. We listen to your needs and tailor our services to exceed your expectations.',
              },
              {
                title: 'Innovative Solutions',
                description: 'We constantly explore new ideas and techniques to bring you the most effective solutions in the industry.',
              },
              {
                title: 'Sustainable Practices',
                description: 'We are committed to sustainability, using eco-friendly materials and practices to protect our planet.',
              },
              {
                title: 'Expert Team',
                description: 'Our team consists of skilled professionals with years of experience dedicated to providing the best service.',
              },
              {
                title: 'Community Engagement',
                description: 'We actively support our local community through various initiatives and partnerships to give back and make a positive impact.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered delay for each item
                viewport={{ once: false }} // Set to false to trigger animations again on scroll back
              >
                <span className="shrink-0 rounded-lg bg-gray-800 p-4">
                  <svg
                    className="size-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    />
                  </svg>
                </span>
  
                <div>
                  <h2 className="text-lg font-bold">{item.title}</h2>
                  <p className="mt-1 text-sm text-gray-300">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default Services;
  