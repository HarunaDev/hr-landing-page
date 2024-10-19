import { motion } from "framer-motion"

function Stats() {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 bg-white dark:bg-slate-900">
      {/* Heading and Description */}
      <motion.div
        className="mx-auto max-w-3xl text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-slate-800 dark:text-white sm:text-4xl">
          Build Your Workforce with Confidence
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-300 sm:text-xl">
          Our HR solutions simplify processes, increase efficiency, and build stronger teams.
        </p>
      </motion.div>

      {/* Stats Cards */}
      <motion.dl
        className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, scale: 0.9 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              delayChildren: 0.2,
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {[
          { title: "Placements Made", value: "2.5k+" },
          { title: "Active Clients", value: "150+" },
          { title: "HR Experts on Board", value: "45" },
          { title: "Awards Won", value: "12" },
        ].map((stat, index) => (
          <motion.div
            key={index}
            className="flex flex-col rounded-lg border border-slate-700 bg-slate-800 px-6 py-8 text-center shadow-md"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <dt className="order-last text-lg font-medium text-slate-300">
              {stat.title}
            </dt>
            <dd className="text-4xl font-extrabold text-blue-400 md:text-5xl">
              {stat.value}
            </dd>
          </motion.div>
        ))}
      </motion.dl>
    </div>
  )
}

export default Stats