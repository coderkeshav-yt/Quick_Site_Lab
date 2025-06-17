declare module '@lottiefiles/react-lottie-player' {
  import { CSSProperties } from 'react';

  export interface PlayerProps {
    autoplay?: boolean;
    loop?: boolean;
    src: string;
    style?: CSSProperties;
    className?: string;
    speed?: number;
    direction?: number;
    hover?: boolean;
    background?: string;
  }

  export class Player extends React.Component<PlayerProps> {}
} 