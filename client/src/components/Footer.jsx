import {
  FaGithub,
  FaWhatsapp,
  FaFacebook,
  FaTwitter,
  FaRegCopyright,
} from "react-icons/fa6";

function Footer() {
  return (
    <div className="flex flex-col items-center mt-auto pt-0 text-gryTxt z-50">
      <div>
        <ul className="flex space-x-2">
          <li>
            <a href="https://github.com/m43c" target="_blanck">
              <FaGithub />
            </a>
          </li>

          <li>
            <a href="#">
              <FaWhatsapp />
            </a>
          </li>

          <li>
            <a href="#">
              <FaFacebook />
            </a>
          </li>

          <li>
            <a href="#">
              <FaTwitter />
            </a>
          </li>
        </ul>
      </div>

      <div className="flex justify-center items-center space-x-0.5 text-sm">
        <span>
          <FaRegCopyright />
        </span>
        <span>2023 Marco Encinas - All rights reserved</span>
      </div>
    </div>
  );
}

export default Footer;
