// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    textColor: {
        gray100:string;
        gray300:string;
        gray500:string;
        gray700:string;
        gray900:string;
        black:string;
    },
    bgColor:string;
    cardColor:string;
    boardColor:string;
  }
}