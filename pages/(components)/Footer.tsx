import {
  logo_icon,
  social_icon1,
  social_icon2,
  social_icon3,
  social_icon4,
} from "@/assets/image";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_inner">
        <div className="footer_top"></div>
        <div className="footer_middle">
          <div className="footer_middle_inner">
            <div className="footer_middle_left">
              <div className="footer_middle_left_inner">
                <div className="footer_middle_left_header">
                  <Image
                    src={logo_icon}
                    width={250}
                    height={250}
                    alt="logo_icon"
                  />

                  <p>
                    Effortless Energy Control and Streamlined Power Management
                    with VoltWise: Your Energy Efficiency Partner
                  </p>
                </div>

                <div className="footer_middle_left_list">
                  <div className="footer_middle_left_list_inner">
                    {/*  */}
                    <div>
                      <h4>
                        company
                        <span className="line"></span>
                      </h4>

                      <ul>
                        <li>about us</li>
                        <li>faqs</li>
                        <li>contact us</li>
                      </ul>
                    </div>
                    {/*  */}
                    <div>
                      <h4>
                        socials
                        <span className="line"></span>
                      </h4>

                      <ul>
                        <li>facebook</li>
                        <li>twitter</li>
                        <li>linkedin</li>
                        <li>instagram</li>
                      </ul>
                    </div>
                    {/*  */}
                    <div>
                      <h4>
                        legal
                        <span className="line"></span>
                      </h4>

                      <ul>
                        <li>terms</li>
                        <li>privacy</li>
                        <li>cookies</li>
                        <li>licenses</li>
                      </ul>
                    </div>
                    {/*  */}
                    <div>
                      <h4>
                        help
                        <span className="line"></span>
                      </h4>

                      <ul>
                        <li>terms of use</li>
                        <li>faqs</li>
                      </ul>
                    </div>
                    {/*  */}
                  </div>
                </div>
              </div>
            </div>

            <div className="footer_middle_right">
              <div className="footer_middle_right_inner">
                <div className="footer_middle_right_top">
                  <p>Stay updated with</p>

                  <span>
                    VoltWise by signing up for <br /> our newsletter
                  </span>
                </div>

                <div className="footer_middle_right_input">
                  <div className="footer_middle_right_input_inner">
                    <input
                      className="special_font"
                      type="email"
                      placeholder="example@gmail.com"
                    />

                    <button>subscribe</button>
                  </div>
                </div>

                <div className="footer_middle_right_bottom">
                  <span>connect with us</span>

                  <ul>
                    <li>
                      <Image
                        src={social_icon1}
                        width={50}
                        height={50}
                        alt="social-icon"
                      />
                    </li>
                    <li>
                      <Image
                        src={social_icon2}
                        width={50}
                        height={50}
                        alt="social-icon"
                      />
                    </li>
                    <li>
                      <Image
                        src={social_icon3}
                        width={50}
                        height={50}
                        alt="social-icon"
                      />
                    </li>
                    <li>
                      <Image
                        src={social_icon4}
                        width={50}
                        height={50}
                        alt="social-icon"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_bottom">
          <div className="footer_bottom_inner">
            <div className="footer_bottom_left">
              <p>
                <span>&copy;</span>
                Voltwise 2023. All rights reserved
              </p>
            </div>

            <ul className="footer_bottom_right">
              <li>
                <span>Changes to Terms:</span> VoltWise reserves the right to
                amend or replace any portion of this Terms and Service and
                Privacy Policy. Users will receive notifications of any
                modifications, and its their responsibility to regularly review
                these policies
              </li>

              <li>
                <span>User Data Privacy:</span> Voltwise highly values your
                privacy. Any information you share with us is governed by our
                Privacy Policy. We implement robust security measures to
                safeguard your personal data. Nevertheless, it&apos;s to note
                that the security of data transmitted over the internet cannot
                be guaranteed, and users share their data at own discretion and
                risk.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
