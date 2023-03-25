const SectionTitle = ({
  title,
  id,
  paragraph,
  width = '570px',
  center,
  mb = '100px',
}) => {
  return (
    <section id={id} className="pt-20">
      <div
        className={`wow fadeInUp w-full ${center ? 'mx-auto text-center' : ''}`}
        data-wow-delay=".1s"
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
          {title}
        </h2>
        <p className="text-base !leading-relaxed text-body-color md:text-lg">
          {paragraph}
        </p>
      </div>
    </section>
  );
};

export default SectionTitle;
