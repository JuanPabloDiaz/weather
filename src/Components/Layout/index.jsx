import PropTypes from "prop-types";

const Layout = ({ children }) => {
  // const isSmallScreen = window.innerWidth <= 640; // Adjust the breakpoint as needed

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-start gap-2 bg-[#98C1D9] pt-[20%] sm:gap-3 md:justify-center md:gap-4 md:pt-[0%] lg:gap-6">
      {children}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
