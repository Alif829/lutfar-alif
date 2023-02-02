const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/lutfar829/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src={require("../assets/linkedin.png")} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/Alif829"
        target="_blank"
        rel="noreferrer"
      >
        <img
          alt="twitter-link"
          src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
          height="30px"
          width="30px"
        />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.facebook.com/people/Lutfar-Alif/100010153113643/?mibextid=ZbWKwL"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="facebook-link" src={require("../assets/facebook.png")} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com/lutfar.alif/?igshid=YzgyMTM2MGM%3D"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="instagram-link" src={require('../assets/instagram.png')} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
