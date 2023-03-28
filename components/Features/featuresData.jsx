const featuresData = [
  {
    id: 1,
    icon: (
      <svg
        width="50px"
        height="50px"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        color="#4f0e89"
      >
        <path
          d="M3.2 14.222V4a2 2 0 012-2h13.6a2 2 0 012 2v10.222m-17.6 0h17.6m-17.6 0l-1.48 5.234A2 2 0 003.644 22h16.712a2 2 0 001.924-2.544l-1.48-5.234"
          stroke="#4f0e89"
          strokeWidth="1.5"
        ></path>
        <path
          d="M11 19h2M14 6l2 2-2 2M10 6L8 8l2 2"
          stroke="#4f0e89"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    ),
    title: 'Web development',
    paragraph:
      'Build and design custom web applications to meet your specific needs, including both frontend and backend development.',
  },
  {
    id: 1,
    icon: (
      <svg
        width="50px"
        height="50px"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        color="#4f0e89"
      >
        <path
          d="M12 19.01l.01-.011"
          stroke="#4f0e89"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M18 18v3.4a.6.6 0 01-.6.6H6.6a.6.6 0 01-.6-.6V18M18 6V2.6a.6.6 0 00-.6-.6H6.6a.6.6 0 00-.6.6V6"
          stroke="#4f0e89"
          strokeWidth="1.5"
          strokeLinecap="round"
        ></path>
        <path
          d="M15.5 8.5L19 12l-3.5 3.5M8.5 8.5L5 12l3.5 3.5"
          stroke="#4f0e89"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    ),
    title: 'Mobile app development',
    paragraph:
      'High-quality mobile applications for iOS and Android devices, leveraging the latest technology and design best practices',
  },
  {
    id: 1,
    icon: (
      <svg
        width="50px"
        height="50px"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        color="#4f0e89"
      >
        <path
          d="M3 9.4V3.6a.6.6 0 01.6-.6h16.8a.6.6 0 01.6.6v5.8a.6.6 0 01-.6.6H3.6a.6.6 0 01-.6-.6zM14 20.4v-5.8a.6.6 0 01.6-.6h5.8a.6.6 0 01.6.6v5.8a.6.6 0 01-.6.6h-5.8a.6.6 0 01-.6-.6zM3 20.4v-5.8a.6.6 0 01.6-.6h5.8a.6.6 0 01.6.6v5.8a.6.6 0 01-.6.6H3.6a.6.6 0 01-.6-.6z"
          stroke="#4f0e89"
          strokeWidth="1.5"
        ></path>
      </svg>
    ),
    title: 'API development',
    paragraph:
      'Powerful APIs that enable seamless integration between different software applications and systems.',
  },
  {
    id: 1,
    icon: (
      <svg
        width="50px"
        height="50px"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        color="#4f0e89"
      >
        <path
          d="M3 6h19l-3 10H6L3 6zm0 0l-.75-2.5M9.992 11h2m2 0h-2m0 0V9m0 2v2M11 19.5a1.5 1.5 0 01-3 0M17 19.5a1.5 1.5 0 01-3 0"
          stroke="#4f0e89"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    ),
    title: 'E-commerce solutions',
    paragraph:
      'Comprehensive e-commerce solutions that enable you to sell products and services online, including shopping carts, payment processing, and inventory management systems.',
  },
  {
    id: 1,
    icon: (
      <svg
        width="50px"
        height="50px"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        color="#4f0e89"
      >
        <path
          d="M8 18l3 3 5-5"
          stroke="#4f0e89"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M20 17.607c1.494-.585 3-1.918 3-4.607 0-4-3.333-5-5-5 0-2 0-6-6-6S6 6 6 8c-1.667 0-5 1-5 5 0 2.689 1.506 4.022 3 4.607"
          stroke="#4f0e89"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    ),
    title: 'Cloud computing and hosting',
    paragraph:
      'Take advantage of the power of the cloud by building, deploying, and hosting your applications on cloud platforms like AWS, Google Cloud, or Microsoft Azure.',
  },
  {
    id: 1,
    icon: (
      <svg
        width="50px"
        height="50px"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        color="#4f0e89"
      >
        <path
          d="M11 21H4a2 2 0 01-2-2V5a2 2 0 012-2h16a2 2 0 012 2v7"
          stroke="#4f0e89"
          strokeWidth="1.5"
          strokeLinecap="round"
        ></path>
        <path
          d="M2 7h20M5 5.01l.01-.011M8 5.01l.01-.011M11 5.01l.01-.011M21.666 16.667C21.049 15.097 19.636 14 17.99 14c-1.758 0-3.252 1.255-3.793 3"
          stroke="#4f0e89"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M19.995 16.772H21.4a.6.6 0 00.6-.6V14.55M14.334 19.333C14.953 20.903 16.366 22 18.01 22c1.758 0 3.252-1.255 3.793-3"
          stroke="#4f0e89"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M16.005 19.228H14.6a.6.6 0 00-.6.6v1.622"
          stroke="#4f0e89"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    ),
    title: 'IT consulting',
    paragraph:
      'Ongoing IT consulting and software maintenance services to ensure that your applications and systems continue to run smoothly and stay up-to-date.',
  },
];
export default featuresData;
