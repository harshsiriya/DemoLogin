import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Loading = () => {
  return (
    <div style={styles.loadingContainer}>
      <div style={styles.lottieWrapper}>
        <DotLottieReact
          src="https://lottie.host/761d8a10-8473-4809-917c-8dd4bcd5ddaf/qiuMqdkbcP.lottie"
          loop
          autoplay
        />
      </div>
    </div>
  );
};

const styles = {
  loadingContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    background: 'white',
    zIndex: 9999,
  },
  lottieWrapper: {
    width: '500px',
    height: '300px',
  },
};

export default Loading;
