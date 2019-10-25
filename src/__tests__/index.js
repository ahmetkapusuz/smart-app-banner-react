import React from 'react';
import AppBanner from '../index';
import renderer from 'react-test-renderer';

test('Should render successfully', () => {
  const appInfo = {
    imageUrl:
      'https://lh3.googleusercontent.com/ccWDU4A7fX1R24v-vvT480ySh26AYp97g1VrIB_FIdjRcuQB2JP2WdY7h_wVVAeSpg=s360-rw',
    name: 'Facebook',
    publisher: 'Facebook',
    infoText: 'Free - In Google Play',
    linkButtonText: 'VIEW',
    linkUrl:
      'https://play.google.com/store/apps/details?id=com.facebook.katana&hl=en',
  };

  const component = renderer.create(
    <AppBanner
      appInfo={appInfo}
      position="top"
      onClose={() => {
        console.log('onClose called');
      }}
      hidden={false}
      style={{
        zIndex: 10,
      }}
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
