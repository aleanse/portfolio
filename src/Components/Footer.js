import React from "react";
function Footer() {
  return (
    // <footer className="container fixed mx-auto py-2 bottom-0 md:left-20 bg-white bg-dark-mode max-width">
      <footer className=" fixed  py-1 bottom-0 bg-dark bg-dark-mode w-full ">
         <p className="text-xs text-center text-light-content ">
            Feito por{" "}
            <a
              className="font-medium"
              href="https://github.com/aleanse"
              target="_blank"
              rel="noreferrer noopener"
            >
              Aleanse
            </a>{" "}
         </p>       
      </footer>
  );
}
export default Footer;
