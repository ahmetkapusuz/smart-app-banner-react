import React from 'react'
import AppBanner from 'smart-app-banner-react'

const appInfo = {
  imageUrl:
    'https://lh3.googleusercontent.com/ccWDU4A7fX1R24v-vvT480ySh26AYp97g1VrIB_FIdjRcuQB2JP2WdY7h_wVVAeSpg=s360-rw',
  name: 'Facebook',
  publisher: 'Facebook',
  infoText: 'Free - In Google Play',
  linkButtonText: 'VIEW',
  linkUrl:
    'https://play.google.com/store/apps/details?id=com.facebook.katana&hl=en'
}
const App = () => {
  return (
    <div>
      <AppBanner
        appInfo={appInfo}
        position='bottom'
        onClose={() => {
          console.log('onClose called')
        }}
        hidden={false}
        style={{
          zIndex: 10
        }}
      />
      <h1>Hello World!</h1>
      <h2>This is a smart app banner example!</h2>
    </div>
  )
}

export default App
