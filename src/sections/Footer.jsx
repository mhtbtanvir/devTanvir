import { mySocials } from "../constants";

const Footer = () => {
  const handleOpen = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <footer className=" px-4 md:px-20 md:py-10 pt-5 text-sm text-neutral-400">
      {/* Divider */}
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-neutral-700 to-transparent mb-5" />
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Terms and Privacy */}
        <div className="flex gap-3 items-center">
          <button className="hover:underline cursor-pointer bg-transparent">Terms & Conditions</button>
          <span>|</span>
          <button className="hover:underline cursor-pointer bg-transparent">Privacy Policy</button>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 z-20">
          {mySocials.map((social, index) => (
            <button
              key={index}
              onClick={() => handleOpen(social.href)}
              className="hover:opacity-80 transition p-1 rounded-full cursor-pointer"
              aria-label={social.name}
            >
              <img
                src={social.icon}
                alt={social.name}
                className="w-5 h-5"
              />
            </button>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-center">© 2025 Tanvir. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
