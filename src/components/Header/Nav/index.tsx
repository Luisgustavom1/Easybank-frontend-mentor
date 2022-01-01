import React from "react";

import { Container, List, Link } from "./styles";

interface INavProps {
  isOpen: boolean;
}

function Nav({ isOpen }: INavProps) {
  return (
    <Container isOpen={isOpen}>
      <List>
        <li>
          <Link href="#home">Home</Link>
        </li>
        <li>
          <Link href="#about">About</Link>
        </li>
        <li>
          <Link href="#contact">Contact</Link>
        </li>
        <li>
          <Link href="#blog">Blog</Link>
        </li>
        <li>
          <Link href="#careers">Careers</Link>
        </li>
      </List>
    </Container>
  );
}

export default Nav;
