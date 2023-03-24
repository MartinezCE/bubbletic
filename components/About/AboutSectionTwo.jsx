import Image from 'next/image';

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="w-full px-4 lg:w-1/2">
          <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
            <div className="mb-9">
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Transparent and Collaborative Work
              </h3>
              <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                At Bubbletic, we embrace a transparent and horizontal work
                culture. We foster innovation and encourage open communication
                with our clients. This ensures that we understand your needs and
                can develop the best solution for you.
              </p>
            </div>
            <div className="mb-9">
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Driving Innovation and Effective Communication
              </h3>
              <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                We strive to continuously improve and innovate our processes and
                solutions to stay ahead of the curve in the constantly evolving
                technology industry. At Bubbletic, we believe in a culture of
                constant learning and growth, both individually and as a team,
                to provide our clients with the best possible experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
