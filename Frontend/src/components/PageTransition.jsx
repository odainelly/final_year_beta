// // src/components/PageTransition.jsx
// import React from 'react';
// import { motion } from 'framer-motion';

// const pageVariants = {
//   initial: {
//     opacity: 0,
//     y: 12,
//   },
//   animate: {
//     opacity: 1,
//     y: 0,
//   },
//   exit: {
//     opacity: 0,
//     y: -8,
//   },
// };

// const pageTransition = {
//   type: 'tween',
//   ease: [0.22, 1, 0.36, 1], // smooth "easeOutExpo"-ish curve
//   duration: 0.35,
// };

// const PageTransition = ({ children }) => {
//   return (
//     <motion.div
//       variants={pageVariants}
//       initial="initial"
//       animate="animate"
//       exit="exit"
//       transition={pageTransition}
//     >
//       {children}
//     </motion.div>
//   );
// };

// export default PageTransition;