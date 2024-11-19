import React, { useEffect } from "react";

const Material = () => {
  useEffect(() => {
    // Add the external CSS link
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "./pages/carousal/materialstyle.css";
    document.head.appendChild(link);

    // Add the custom JS script
    const script = document.createElement("script");
    script.type = "module";
    script.src = `./pages/carousal/materialscript.js?timestamp=${Date.now()}`; // Append timestamp to bypass cache
    document.body.appendChild(script);

    // Ensure the script reinitializes the carousel
    script.onload = () => {
      if (window.initializeCarousel) {
        window.initializeCarousel(); // Call the initialization function
      }
    };

    // Cleanup script and link on unmount
    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="h-screen">
      <div className="demo-slider border-2  bg-white">
        <div className="swiper ">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="swiper-material-wrapper">
                <div className="swiper-material-content">
                  <img
                    className="demo-material-image"
                    data-swiper-material-scale="1.25"
                    src="https://kinsta.com/wp-content/uploads/2023/04/what-is-typescript.jpeg"
                    alt="Slide 1"
                  />
                  <span
                    className="demo-material-label swiper-material-animate-opacity tw-rounded-full tw-px-4 tw-py-2 tw-mb-2 tw-ml-2"
                    style={{
                      backgroundColor: "var(--f7-md-surface-1)",
                      color: "var(--f7-md-on-surface-variant)",
                    }}
                  >
                    TypeScript
                  </span>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="swiper-material-wrapper">
                <div className="swiper-material-content">
                  <img
                    className="demo-material-image"
                    data-swiper-material-scale="1.25"
                    src="https://www.bleepstatic.com/content/hl-images/2021/04/03/rust-bg.jpeg"
                    alt="Slide 2"
                  />
                  <span
                    className="demo-material-label swiper-material-animate-opacity tw-rounded-full tw-px-4 tw-py-2 tw-mb-2 tw-ml-2"
                    style={{
                      backgroundColor: "var(--f7-md-surface-1)",
                      color: "var(--f7-md-on-surface-variant)",
                    }}
                  >
                    Rust
                  </span>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="swiper-material-wrapper">
                <div className="swiper-material-content">
                  <img
                    className="demo-material-image"
                    data-swiper-material-scale="1.25"
                    src="https://blog.talent500.co/wp-content/uploads/2024/05/react-must-be-in-scope-when-using-jsx-scaled.jpg"
                    alt="Slide 3"
                  />
                  <span
                    className="demo-material-label swiper-material-animate-opacity tw-rounded-full tw-px-4 tw-py-2 tw-mb-2 tw-ml-2"
                    style={{
                      backgroundColor: "var(--f7-md-surface-1)",
                      color: "var(--f7-md-on-surface-variant)",
                    }}
                  >
                    React
                  </span>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="swiper-material-wrapper">
                <div className="swiper-material-content">
                  <img
                    className="demo-material-image"
                    data-swiper-material-scale="1.25"
                    src="https://ionic.io/blog/wp-content/uploads/2024/02/angular-feature-image-1-1024x512.png"
                    alt="Slide 4"
                  />
                  <span
                    className="demo-material-label swiper-material-animate-opacity tw-rounded-full tw-px-4 tw-py-2 tw-mb-2 tw-ml-2"
                    style={{
                      backgroundColor: "var(--f7-md-surface-1)",
                      color: "var(--f7-md-on-surface-variant)",
                    }}
                  >
                    Angular
                  </span>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="swiper-material-wrapper">
                <div className="swiper-material-content">
                  <img
                    className="demo-material-image"
                    data-swiper-material-scale="1.25"
                    src="https://engineering.fb.com/wp-content/uploads/2015/06/1522635669452_11.jpg"
                    alt="Slide 5"
                  />
                  <span
                    className="demo-material-label swiper-material-animate-opacity tw-rounded-full tw-px-4 tw-py-2 tw-mb-2 tw-ml-2"
                    style={{
                      backgroundColor: "var(--f7-md-surface-1)",
                      color: "var(--f7-md-on-surface-variant)",
                    }}
                  >
                    C++
                  </span>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="swiper-material-wrapper">
                <div className="swiper-material-content">
                  <img
                    className="demo-material-image"
                    data-swiper-material-scale="1.25"
                    src="https://www.infoworld.com/wp-content/uploads/2024/06/java_binary_code_gears_programming_coding_development_by_bluebay2014_gettyimages-1040871468_2400x1600-100795798-orig.jpg?resize=1024%2C683&quality=50&strip=all"
                    alt="Slide 3"
                  />
                  <span
                    className="demo-material-label swiper-material-animate-opacity tw-rounded-full tw-px-4 tw-py-2 tw-mb-2 tw-ml-2"
                    style={{
                      backgroundColor: "var(--f7-md-surface-1)",
                      color: "var(--f7-md-on-surface-variant)",
                    }}
                  >
                    Java
                  </span>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="swiper-material-wrapper">
                <div className="swiper-material-content">
                  <img
                    className="demo-material-image"
                    data-swiper-material-scale="1.25"
                    src="https://www.mantralabsglobal.com/wp-content/uploads/2017/05/Android_thumb800.jpg"
                    alt="Slide 4"
                  />
                  <span
                    className="demo-material-label swiper-material-animate-opacity tw-rounded-full tw-px-4 tw-py-2 tw-mb-2 tw-ml-2"
                    style={{
                      backgroundColor: "var(--f7-md-surface-1)",
                      color: "var(--f7-md-on-surface-variant)",
                    }}
                  >
                    Android
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Material;
