"use client";
import { motion } from "framer-motion";

const LoadingClient = () => (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "var(--mantine-color-background-9)",
      zIndex: 9999,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: -21.5 }}
        transition={{ duration: 0.25 }}
        style={{ position: "absolute" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="36"
          viewBox="0 0 21 36"
          fill="none"
        >
          <path d="M20.4835 0H0V35.7931H20.4835V0Z" fill="var(--mantine-color-brand-6)" />
        </svg>
      </motion.div>

      <motion.div
        initial={{ x: 0 }}
        animate={{ x: 22 }}
        transition={{ duration: 0.25 }}
        style={{ position: "absolute" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="36"
          viewBox="0 0 21 36"
          fill="none"
        >
          <path d="M20.6983 0H0.214844V35.7931H20.6983V0Z" fill="var(--mantine-color-brand-6)" />
        </svg>
      </motion.div>

      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 22.3, opacity: 1 }}
        transition={{ delay: 0.25, duration: 0.5 }}
        style={{ position: "absolute" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="15"
          viewBox="0 0 24 15"
          fill="none"
        >
          <path
            d="M23.2145 0.793091H0.483398V15.0001H23.2145V0.793091Z"
            fill="var(--mantine-color-brand-6)"
          />
        </svg>
      </motion.div>
    </div>
  </div>
);

export default LoadingClient;
