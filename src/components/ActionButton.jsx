import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
const ActionButton = ({ doneMsg = 'Done', defaultMsg = 'Click me', fileName = null, buttonDefaultImg = null, buttonDoneImage = null }) => {
  const [disable, setDisable] = useState(false);

  const handleClick = () => {
    if (disable || fileName === null) return;
    setDisable(true);

    const link = document.createElement('a');
    link.href = `docs/${fileName}`;
    link.download = fileName;
    link.click();

    setTimeout(() => {
      setDisable(false);
    }, 2000);
  };

  return (
    <motion.button
      onClick={handleClick}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 1.05 }}
      className="relative px-1 py-4 text-sm text-center rounded-full font-extralight bg-primary w-full cursor-pointer overflow-hidden"
    >
      <AnimatePresence mode="wait">
        {disable ? (
          <motion.p
            className="flex items-center justify-center gap-2"
            key="copied"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
          >
            <img src={buttonDoneImage} className="w-5" alt={doneMsg} />
            {doneMsg}
          </motion.p>
        ) : (
          <motion.p
            className="flex items-center justify-center gap-2"
            key="copy"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
          >
            {
              buttonDefaultImg &&
              <img src={buttonDefaultImg} className="w-5" alt={defaultMsg} />
            }
            {defaultMsg}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default ActionButton;
