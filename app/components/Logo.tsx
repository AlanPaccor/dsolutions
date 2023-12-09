// Logo.tsx
"use client"
import 'normalize.css';
import React from 'react';
import Image from 'next/image';
import logoImage from './assets/logoImage.jpeg';
import Head from 'next/head';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  background-color: #1E242B;
`;

const StyledLogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  margin: 0 auto; /* Center the container horizontally */
  max-width: 960px; /* Optional: Set a max-width for responsiveness */
`;

const Logo: React.FC = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <StyledWrapper>
        <StyledLogoContainer className="mx-20">
          <div>
            <a href="/" className="text-white hover:text-gray-300 inline-block">
              <Image src={logoImage} alt="Logo" width={125} height={125} quality={100}/>
            </a>
          </div>
          <div>
            <a href='/' className='text-center text-white border p-2 rounded-15'>
              Get a Quote!
            </a>
          </div>
        </StyledLogoContainer>
      </StyledWrapper>
    </>
  );
};

export default Logo;
