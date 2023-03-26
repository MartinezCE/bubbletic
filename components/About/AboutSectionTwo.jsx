import Image from 'next/image';
import SectionTitle from '../Common/SectionTitle';

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28" id="culture">
      <div className="container">
        <div className="w-full px-4">
          <div
            className="wow fadeInUp flex flex-col gap-y-20"
            data-wow-delay=".2s"
          >
            <div className="flex flex-col items-center justify-center gap-y-4 gap-x-12 md:flex-row">
              <div className="md:max-w-[600px]">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Transparent and Collaborative Work
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  At Bubbletic, we embrace a transparent and horizontal work
                  culture. We foster innovation and encourage open communication
                  with our clients. This ensures that we understand your needs
                  and can develop the best solution for you.
                </p>
              </div>
              <Image className="dark:opacity-80" width={400} height={300} src="/images/culture/culture-01.svg" />
            </div>
            <div className="flex flex-col-reverse items-center justify-center gap-y-4 gap-x-10 md:flex-row">
              <Image className="dark:opacity-80" width={400} height={300} src="/images/culture/culture-02.svg" />
              <div className="md:max-w-[600px]">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Driving Innovation and Effective Communication
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  We strive to continuously improve and innovate our processes
                  and solutions to stay ahead of the curve in the constantly
                  evolving technology industry. At Bubbletic, we believe in a
                  culture of constant learning and growth, both individually and
                  as a team, to provide our clients with the best possible
                  experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
