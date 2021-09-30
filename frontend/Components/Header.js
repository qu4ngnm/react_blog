import React, { useState } from "react";
import Link from "next/link";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div
      className=""
      style={{
        display: "block",
        fontSize: 23,
      }}
    >
      <Navbar className="" light expand="md" fontSize="5" color="light">
        
        <Link className="mx-5" href="/">
        
          <a className="text-decoration-none link-dark">Blog Cyber Security</a>
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mx-5 " navbar>
            <NavItem>
              <NavLink className="text-decoration-none" href="/">
                <Link href="/signup">
                  <a className="text-decoration-none link-dark">Sign up</a>
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">
                <Link href="/signin">
                  <a className="text-decoration-none link-dark"> Sign In</a>
                </Link>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
