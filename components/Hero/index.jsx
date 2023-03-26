'use client';

import { useScroll, motion, useTransform } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  const { scrollY } = useScroll();

  const y1 = useTransform(scrollY, [0, 300], [0, 100]);
  const y2 = useTransform(scrollY, [0, 300], [0, -200]);

  return (
    <>
      <section
        id="home"
        className="relative flex h-screen items-center justify-center pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]"
      >
        <div className="container relative z-10">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto max-w-[800px] text-center"
                data-wow-delay=".2s"
              >
                <h1 className="mb-5 text-3xl font-bold uppercase leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-6xl md:leading-tight">
                  Finding solutions, one bubble at a time.
                </h1>
              </div>
            </div>
          </div>
        </div>
        <motion.div
          style={{ y: y1, x: -60 }}
          className="absolute bottom-0 dark:opacity-80 lg:left-20 lg:bottom-32"
        >
          <Image src="/images/hero/hero-02.svg" width={500} height={110} />
        </motion.div>
        <motion.div
          style={{ y: y2, x: 50 }}
          className="absolute right-20 top-32 hidden dark:opacity-80 lg:block"
        >
          <Image src="/images/hero/hero-03.svg" width={500} height={110} />
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
