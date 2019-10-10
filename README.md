# Smart App Banner React Component

This is a simple smart app banner component for react applications

## Installation

`npm install smart-app-banner-react`

## Example

Sample configurations:

```javascript
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
```

Sample usage:

```javascript
import AppBanner from 'react-smart-app-banner';
```

```jsx
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
```
