import Image from 'next/image';
import SectionTitle from '../Common/SectionTitle';

const AboutSectionTwo = () => {
  return (
    <section id="culture">
      <div className="container">
        <div className="w-full px-4">
          <div
            className="wow fadeInUp flex flex-col gap-y-10"
            data-wow-delay=".2s"
          >
            <SectionTitle title="Cultura" className="m-auto" />
            <div className="flex flex-col items-center justify-center gap-y-4 gap-x-12 md:flex-row">
              <div className="md:max-w-[600px]">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Quiénes somos
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Somos emprendedores y nos apasiona desarrollar productos que
                  enamoran a los clientes. Poseemos una cultura horizontal donde
                  todos aportamos a una idea.
                </p>
              </div>
              <Image
                className="dark:opacity-80"
                width={400}
                height={300}
                src="/images/culture/culture-01.svg"
              />
            </div>
            <div className="flex flex-col-reverse items-center justify-center gap-y-4 gap-x-10 md:flex-row">
              <Image
                className="dark:opacity-80"
                width={400}
                height={300}
                src="/images/culture/culture-02.svg"
              />
              <div className="md:max-w-[600px]">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Nuestra misión
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Buscamos ser el partner estratégico de las startups, brindando
                  nuestro conocimiento y experiencia en el desarrollo de
                  software para ayudarles a lograr sus objetivos de negocio.
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
