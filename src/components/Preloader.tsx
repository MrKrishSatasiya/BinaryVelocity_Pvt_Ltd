import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Binary, Code, Zap, Star } from 'lucide-react';

const Preloader = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
  const controls = useAnimation();
  const preloaderControls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await controls.start({
        scale: [1, 1.2, 1],
        transition: {
          duration: 1.5,
          repeat: 1,
          ease: "easeInOut"
        }
      });
      
      await controls.start({
        opacity: 0,
        y: -50,
        transition: { duration: 0.5 }
      });

      await preloaderControls.start({
        y: -100,
        opacity: 0,
        transition: { duration: 0.5, ease: "easeInOut" }
      });

      onLoadingComplete();
    };

    sequence();
  }, [controls, preloaderControls, onLoadingComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-950 via-black to-blue-900"
      initial={{ opacity: 1 }}
      animate={preloaderControls}
    >
      <div className="relative">
        <motion.div
          animate={controls}
          className="relative flex items-center justify-center"
        >
          <Binary className="w-24 h-24 text-blue-400" />
          
          {/* Orbiting Elements */}
          {[Code, Zap, Star].map((Icon, index) => (
            <motion.div
              key={index}
              className="absolute"
              animate={{
                rotate: 360,
                scale: [1, 1.2, 1],
              }}
              transition={{
                rotate: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                },
                scale: {
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                },
                delay: index * 0.3,
              }}
              style={{
                width: "100px",
                height: "100px",
                transformOrigin: "center",
              }}
            >
              <Icon className="w-8 h-8 text-white absolute" style={{
                transform: `rotate(${index * 120}deg) translateX(60px)`,
              }} />
            </motion.div>
          ))}
        </motion.div>

        {/* Loading Text */}
        <motion.div
          className="text-center mt-8"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <h2 className="text-2xl font-bold text-blue-400 mb-2">BinaryVelocity</h2>
            <p style={{ paddingBottom: '15px' }} className="text-white text-sm">Initializing Digital Excellence</p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-blue-900"
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
        >
          <motion.div
            className="h-full bg-blue-400"
            animate={{ scaleX: [0, 1] }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Preloader;