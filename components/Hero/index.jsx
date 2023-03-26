import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative h-screen flex justify-center items-center pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]"
      >
        <div className="container relative z-10">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto max-w-[800px] text-center"
                data-wow-delay=".2s"
              >
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl uppercase sm:leading-tight md:text-6xl md:leading-tight">
                  Finding solutions, one bubble at a time.
                </h1>
              </div>
            </div>
          </div>
        </div>
        <Image
          src="/images/hero/hero-02.svg"
          width={500}
          height={110}
          className="absolute bottom-0 lg:left-20 lg:bottom-32 dark:opacity-80"
        />
        <Image
          src="/images/hero/hero-03.svg"
          width={500}
          height={110}
          className="absolute hidden lg:block right-20 top-32 dark:opacity-80"
        />
      </section>
    </>
  );
};

export default Hero;
