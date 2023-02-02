import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-60 bg-blue pt-10">
      <div className="w-10/12 mx-auto pt-8">
        <div className="md:flex justify-center md:justify-between text-center ">
          <p className="font-playfair font-semibold text-2xl text-white">
            LUTFAR RAHMAN ALIF<br></br>
          </p>
          <SocialMediaIcons />
          <p className="font-playfair text-md text-white">
            ©2023 ALIF. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
