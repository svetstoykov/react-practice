import { motion } from 'framer-motion';
// Loading spinner component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center">
    <motion.div
      className="w-16 h-16 border-4 rounded-full border-coral border-t-transparent"
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    />
  </div>
);

export default LoadingSpinner