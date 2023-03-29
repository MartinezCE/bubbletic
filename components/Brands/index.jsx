import Image from 'next/image';

const Brands = () => {
  return (
    <section className="py-16 dark:bg-white/90 border-b border-t border-body-color/[.15] dark:border-white/[.15] overflow-hidden">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="relative py-8 px-8 dark:border-dashed sm:px-10 md:py-[40px] md:px-[50px] xl:p-[50px] 2xl:py-[60px] 2xl:px-[70px]">
              <div className="container flex max-w-[800px] items-center py-8 opacity-70 grayscale transition duration-300 ease-in hover:opacity-100 hover:grayscale-0 dark:opacity-60 dark:hover:opacity-100">
                <div className="w-full lg:w-[380px] gap-y-8">
                  <Image
                    src="/images/brands/wimet/logo.svg"
                    height={20}
                    width={120}
                  />
                  <p className="mt-6 text-body-color">
                    Development of a workplace manager to simplify employee
                    management, with a booking system. Web and mobile app.
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
