import {
  apple_icon,
  logo_icon,
  phone_icon1,
  phone_icon2,
  playstore_icon,
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
        <div className="footer_top">
          <div className="footer_top_inner">
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="500"
              className="footer_top_right"
            >
              <Image
                src={phone_icon1}
                className="h-[22rem]"
                width={500}
                height={500}
                alt="phone_icon"
              />
            </div>

            <div
              data-aos="flip-right"
              data-aos-delay="100"
              data-aos-duration="500"
              className="footer_top_middle"
            >
              <div className="footer_top_middle_inner">
                <p
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="500"
                >
                  optimize your energy use and save voltWise! our app empowers
                  you to monitor real-time energy consumption set goals, and
                  make green choices
                </p>

                <span
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                >
                  download voltWise today
                </span>

                <div className="download_btns">
                  <button
                    data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-duration="500"
                  >
                    <Image
                      src={apple_icon}
                      width={65}
                      height={65}
                      alt="apple-icon"
                    />
                    <p>
                      available on
                      <span>app store</span>
                    </p>
                  </button>
                  {/*  */}
                  <button
                    data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                  >
                    <Image
                      src={playstore_icon}
                      width={65}
                      height={65}
                      alt="playstore-icon"
                    />
                    <p>
                      available on
                      <span>play store</span>
                    </p>
                  </button>
                </div>
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="500"
              className="footer_top_right"
            >
              <Image
                src={phone_icon2}
                className="h-[22rem]"
                width={500}
                height={500}
                alt="phone-icon"
              />
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="1000"
          className="footer_middle"
        >
          <div className="footer_middle_inner">
            <div className="footer_middle_left">
              <div className="footer_middle_left_inner">
                <div
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="500"
                  className="footer_middle_left_header"
                >
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
                    <div
                      data-aos="fade-up"
                      data-aos-delay="100"
                      data-aos-duration="500"
                    >
                      <h4
                        data-aos="fade-up"
                        data-aos-delay="100"
                        data-aos-duration="500"
                      >
                        company
                        <span className="line"></span>
                      </h4>

                      <ul>
                        <li
                          data-aos="fade-up"
                          data-aos-delay="100"
                          data-aos-duration="500"
                        >
                          about us
                        </li>
                        <li
                          data-aos="fade-up"
                          data-aos-delay="100"
                          data-aos-duration="500"
                        >
                          faqs
                        </li>
                        <li
                          data-aos="fade-up"
                          data-aos-delay="100"
                          data-aos-duration="500"
                        >
                          contact us
                        </li>
                      </ul>
                    </div>
                    {/*  */}
                    <div
                      data-aos="fade-up"
                      data-aos-delay="100"
                      data-aos-duration="1000"
                    >
                      <h4>
                        socials
                        <span className="line"></span>
                      </h4>

                      <ul>
                        <li
                          data-aos="fade-up"
                          data-aos-delay="100"
                          data-aos-duration="1000"
                        >
                          facebook
                        </li>
                        <li
                          data-aos="fade-up"
                          data-aos-delay="100"
                          data-aos-duration="1000"
                        >
                          twitter
                        </li>
                        <li
                          data-aos="fade-up"
                          data-aos-delay="100"
                          data-aos-duration="1000"
                        >
                          linkedin
                        </li>
                        <li
                          data-aos="fade-up"
                          data-aos-delay="100"
                          data-aos-duration="1000"
                        >
                          instagram
                        </li>
                      </ul>
                    </div>
                    {/*  */}
                    <div
                      data-aos="fade-up"
                      data-aos-delay="100"
                      data-aos-duration="1500"
                    >
                      <h4
                        data-aos="fade-up"
                        data-aos-delay="100"
                        data-aos-duration="1500"
                      >
                        legal
                        <span className="line"></span>
                      </h4>

                      <ul>
                        <li
                          data-aos="fade-up"
                          data-aos-delay="100"
                          data-aos-duration="1500"
                        >
                          terms
                        </li>
                        <li
                          data-aos="fade-up"
                          data-aos-delay="100"
                          data-aos-duration="1500"
                        >
                          privacy
                        </li>
                        <li
                          data-aos="fade-up"
                          data-aos-delay="100"
                          data-aos-duration="1500"
                        >
                          cookies
                        </li>
                        <li
                          data-aos="fade-up"
                          data-aos-delay="100"
                          data-aos-duration="1500"
                        >
                          licenses
                        </li>
                      </ul>
                    </div>
                    {/*  */}
                    <div
                      data-aos="fade-up"
                      data-aos-delay="100"
                      data-aos-duration="2000"
                    >
                      <h4
                        data-aos="fade-up"
                        data-aos-delay="100"
                        data-aos-duration="2000"
                      >
                        help
                        <span className="line"></span>
                      </h4>

                      <ul>
                        <li
                          data-aos="fade-up"
                          data-aos-delay="100"
                          data-aos-duration="2000"
                        >
                          terms of use
                        </li>
                        <li
                          data-aos="fade-up"
                          data-aos-delay="100"
                          data-aos-duration="2000"
                        >
                          faqs
                        </li>
                      </ul>
                    </div>
                    {/*  */}
                  </div>
                </div>
              </div>
            </div>

            <div className="footer_middle_right">
              <div className="footer_middle_right_inner">
                <div
                  className="footer_middle_right_top"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="500"
                >
                  <p
                    data-aos="flip-left"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                  >
                    Stay updated with
                  </p>

                  <span>
                    VoltWise by signing up for <br /> our newsletter
                  </span>
                </div>

                <div className="footer_middle_right_input">
                  <div
                    data-aos="flip-right"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                    className="footer_middle_right_input_inner"
                  >
                    <input
                      data-aos="fade-up"
                      data-aos-delay="100"
                      data-aos-duration="1000"
                      className="special_font"
                      type="email"
                      placeholder="example@gmail.com"
                    />

                    <button
                      data-aos="fade-up"
                      data-aos-delay="100"
                      data-aos-duration="1000"
                    >
                      subscribe
                    </button>
                  </div>
                </div>

                <div
                  data-aos="flip-right"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                  className="footer_middle_right_bottom"
                >
                  <span>connect with us</span>

                  <ul>
                    <li
                      data-aos="zoom-in"
                      data-aos-delay="100"
                      data-aos-duration="1000"
                    >
                      <Image
                        src={social_icon1}
                        width={50}
                        height={50}
                        alt="social-icon"
                      />
                    </li>
                    <li
                      data-aos="zoom-in"
                      data-aos-delay="100"
                      data-aos-duration="1500"
                    >
                      <Image
                        src={social_icon2}
                        width={50}
                        height={50}
                        alt="social-icon"
                      />
                    </li>
                    <li
                      data-aos="zoom-in"
                      data-aos-delay="100"
                      data-aos-duration="2000"
                    >
                      <Image
                        src={social_icon3}
                        width={50}
                        height={50}
                        alt="social-icon"
                      />
                    </li>
                    <li
                      data-aos="zoom-in"
                      data-aos-delay="100"
                      data-aos-duration="2500"
                    >
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
