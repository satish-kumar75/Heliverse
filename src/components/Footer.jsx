const Footer = () => {
  return (
    <div className="bg-gradient4 px-2">
      <div className="max-w-screen-xl mx-auto flex sm:justify-between justify-center flex-wrap sm:flex-nowrap gap-4 text-sm py-5 text-zinc-300">
        <div className="order-2 sm:order-1 w-full sm:w-auto text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} Copywrite. All rights reserved by
            QodeMatrix
          </p>
        </div>
        <div className="flex gap-6 order-1 sm:order-2 w-full sm:w-auto justify-center sm:justify-start">
          <a
            className="hover:text-zinc-100 transition duration-300"
            href="https://qodematrix.com/docs/motion-art-for-elementor/"
            target="_blank"
          >
            Documentation
          </a>
          <a
            className="hover:text-zinc-100 transition duration-300"
            href="https://support.qodematrix.com/login"
            target="_blank"
          >
            Support
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
