import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
  <FooterWrapper>
    <LinkList>
      <LinkColumn>
        <LinkTitle>Call Me On</LinkTitle>
        <LinkItem href="tel:067 022 7582">067 022 7582</LinkItem>
      </LinkColumn>
      <LinkColumn>
        <LinkTitle>Email Me On</LinkTitle>
        <LinkItem href="mailto:gugulethumavimbela5@gmail.com">gugulethumavmbela5@gmail.com</LinkItem>
      </LinkColumn>
    </LinkList>
  </FooterWrapper>
  );
};

export default Footer;
