import React from "react";
import "./index.css";

function FooterColumn({ children, ...restProps }) {
  return (
    <div className="footer-column" {...restProps}>
      {children}
    </div>
  );
}

function FooterLink({ children, ...restProps }) {
  return (
    <a href="#" className="footer-link" {...restProps}>
      {children}
    </a>
  );
}

function FooterRow({ children, ...restProps }) {
  return (
    <div className="footer-row" {...restProps}>
      {children}
    </div>
  );
}

function FooterTitle({ children, ...restProps }) {
  return (
    <a href="#" className="footer-title" {...restProps}>
      {children}
    </a>
  );
}

function FooterWrapper({ children, ...restProps }) {
  return (
    <footer className="footer-wrapper" {...restProps}>
      {children}
    </footer>
  );
}

function FooterCompound() {
  return (
    <FooterWrapper>
      <FooterTitle>Questions? Contact us.</FooterTitle>
      <FooterRow>
        <FooterColumn>
          <FooterLink>FAQ</FooterLink>
          <FooterLink>Investor Relations</FooterLink>
          <FooterLink>Privacy</FooterLink>
          <FooterLink>Speed Test</FooterLink>
        </FooterColumn>
        <FooterColumn>
          <FooterLink>Help Center</FooterLink>
          <FooterLink>Jobs</FooterLink>
          <FooterLink>Cookie Preferences</FooterLink>
          <FooterLink>Legal Notices</FooterLink>
        </FooterColumn>
        <FooterColumn>
          <FooterLink>Account</FooterLink>
          <FooterLink>Ways to Watch</FooterLink>
          <FooterLink>Corporate Information</FooterLink>
          <FooterLink>Netflix Originals</FooterLink>
        </FooterColumn>
        <FooterColumn>
          <FooterLink>Media Center</FooterLink>
          <FooterLink>Terms of Use</FooterLink>
          <FooterLink>Contact Us</FooterLink>
        </FooterColumn>
      </FooterRow>
    </FooterWrapper>
  );
}

export default FooterCompound;
