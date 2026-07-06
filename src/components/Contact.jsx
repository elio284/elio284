import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const Contact = () => {
  return (
    <div
      className="-mt-[8rem] xl:flex-row flex-col-reverse 
      flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-jet p-8 rounded-2xl">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadTextLight}>Contact.</h3>

        <div className="mt-10 flex flex-col gap-4 font-poppins">
          <p className="text-timberWolf font-medium">Feel free to reach out via any of the links below:</p>

          <a
            href="mailto:hapergrant866@gmail.com"
            className="text-timberWolf font-medium underline"
          >
            Email: hapergrant866@gmail.com
          </a>

          <a
            href="https://github.com/elio284"
            target="_blank"
            rel="noreferrer"
            className="text-timberWolf font-medium underline"
          >
            Github: github.com/elio284
          </a>

          <a
            href="https://elio284.bsky.social"
            target="_blank"
            rel="noreferrer"
            className="text-timberWolf font-medium underline"
          >
            Bluesky: elio284.bsky.social
          </a>

          <a
            href="https://elio284.medium.com"
            target="_blank"
            rel="noreferrer"
            className="text-timberWolf font-medium underline"
          >
            Medium: elio284.medium.com
          </a>

          <a
            href="https://mastodon.social/@elio284"
            target="_blank"
            rel="noreferrer"
            className="text-timberWolf font-medium underline"
          >
            Mastodon: mastodon.social/@elio284
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
