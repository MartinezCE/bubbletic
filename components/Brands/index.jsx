import Image from 'next/image';

const Brands = () => {
  return (
    <section className="overflow-hidden border-b border-t border-body-color/[.15] md:py-16 dark:border-white/[.15] dark:bg-white/90">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="relative py-8 px-8 dark:border-dashed sm:px-10 md:py-[40px] md:px-[50px] xl:p-[50px] 2xl:py-[60px] 2xl:px-[70px]">
              <div className="container flex max-w-[800px] items-center py-8 opacity-70 grayscale transition duration-300 ease-in hover:opacity-100 hover:grayscale-0 dark:opacity-60 dark:hover:opacity-100">
                <div className="w-full gap-y-8 lg:w-[380px]">
                  <Image
                    src="/images/brands/wimet/logo.svg"
                    height={20}
                    width={120}
                  />
                  <p className="mt-6 text-body-color">
                    Creación y desarrollo de sistema para simplificar la gestión de
                    empleados, con un sistema de reservas. Aplicación web y
                    móvil.
                  </p>
                </div>
                <Image
                  className="absolute right-0 hidden lg:block"
                  src="/images/brands/wimet/web-mockup.png"
                  height={20}
                  width={500}
                />
                <Image
                  className="absolute -right-[180px] -top-16 hidden lg:block"
                  src="/images/brands/wimet/app-mockup.png"
                  height={20}
                  width={420}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
