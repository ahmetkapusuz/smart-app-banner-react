import React, { useState } from 'react';
import styled from 'styled-components';

const BannerContainer = styled.div`
  font-family: sans-serif;
  display: grid;
  grid-template-columns: 20px 100px auto 100px;
  position: ${({ position }) => (position === 'top' ? 'absolute' : 'fixed')};
  top: ${({ position }) => (position === 'top' ? '0' : '85%')};
  left: ${({ position }) => (position === 'top' ? '0' : '20px')};
  right: ${({ position }) => (position === 'top' ? '0' : '20px')};
  width: ${({ position }) => (position === 'top' ? '100%' : 'auto')};
  height: 100px;
  color: #000;
  background: #f2f2f2;
  box-shadow: ${({ position }) =>
    position === 'top'
      ? '0 1px 2px rgba(0, 0, 0, 0.8) inset, 0 1px 1px rgba(255, 255, 255, 0.3)'
      : '5px 5px 15px 0px rgba(138, 138, 138, 0.6)'};
  padding: 10px;
  border-radius: ${({ position }) => (position === 'top' ? '0' : '10px')};
`;

const CloseButtonContainer = styled.div`
  justify-self: end;
  align-self: center;
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 15px;
  text-align: center;
  text-decoration: none;
  border-radius: 14px;
  -webkit-font-smoothing: subpixel-antialiased;
  border: 0;
  width: 17px;
  height: 17px;
  line-height: 17px;
  color: #b1b1b3;
  background: #efefef;
  cursor: pointer;
`;

const AppImageContainer = styled.div`
  justify-self: start;
  padding-left: 10px;
`;

const AppImage = styled.img`
  width: 80px;
  border-radius: 15px;
`;

const AppInfoContainer = styled.div`
  justify-self: start;
  display: flex;
  flex-direction: column;
  padding: 2px;
  justify-content: center;
  color: #0d0d0d;
  font-size: 12px;
`;

const AppName = styled.div`
  margin-bottom: 5px;
  margin-top: 0;
  font-size: 14px;
`;

const AppPublisher = styled.div`
  font-weight: normal;
  margin-bottom: 5px;
  margin-top: 0;
`;

const AppLinkContainer = styled.div`
  justify-self: end;
  text-align: right;
  margin-right: 30px;
  height: 100%;
  display: flex;
`;

const AppLinkButton = styled.a`
  font-size: 20px;
  height: 30px;
  align-self: center;
  min-width: 70px;
  color: blue;
  padding: 0;
  background: transparent;
  border-radius: 0;
  border: none;
  cursor: pointer;
  text-decoration: none;
`;

const AppBanner = ({
  appInfo = {},
  hidden = false,
  position = 'bottom',
  onClose = function() {},
  style,
}) => {
  const [show, setShow] = useState(!hidden);
  const {
    imageUrl,
    name,
    publisher,
    infoText,
    linkButtonText,
    linkUrl,
  } = appInfo;

  return (
    show && (
      <BannerContainer position={position} style={style}>
        <CloseButtonContainer>
          <CloseButton
            onClick={() => {
              console.log('closed');
              setShow(false);
              onClose();
            }}
          >
            X
          </CloseButton>
        </CloseButtonContainer>
        <AppImageContainer>
          <AppImage src={imageUrl} />
        </AppImageContainer>
        <AppInfoContainer>
          <AppName>{name}</AppName>
          <AppPublisher>{publisher}</AppPublisher>
          <AppPublisher>{infoText}</AppPublisher>
        </AppInfoContainer>
        <AppLinkContainer>
          <AppLinkButton href={linkUrl} target="_blank">
            {linkButtonText}
          </AppLinkButton>
        </AppLinkContainer>
      </BannerContainer>
    )
  );
};

export default AppBanner;
