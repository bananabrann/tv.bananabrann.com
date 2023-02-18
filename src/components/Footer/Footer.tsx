import React, { FC } from "react";
import footerStyles from "./footer.module.css";

interface Props {
  siteVersion: string;
}

const Footer: FC<Props> = ({ siteVersion }) => {
  return (
    <div className={footerStyles.container}>
      <div className={footerStyles.content}>
        <small>
          <a href="https://github.com/bananabrann/tv.bananabrann.dev">
            View source code
          </a>
        </small>
        <small>|</small>
        <small>Version {siteVersion}</small>
      </div>

      <div className={footerStyles.rainbow} />
    </div>
  );
};

export default Footer;
