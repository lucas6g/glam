import {
    widthPercentageToDP as wp2dp,
    heightPercentageToDP as hp2dp,
    
  } from 'react-native-responsive-screen';
  
  

  export const wp = (dimension:number) => {
    return wp2dp((dimension / 375) * 100 + '%');
  };

  export const hp = (dimension:number) => {
    return hp2dp((dimension / 812) * 100 + '%');
  };