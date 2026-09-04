import './MicroElement.scss';

interface MicroElementProps {
  asset: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  width?: string;
  rotation?: string;
  delay?: string;
  className?: string;
  zIndex?: number;
}

export default function MicroElement({
  asset,
  top,
  left,
  right,
  bottom,
  width = '80px',
  rotation = '0deg',
  delay = '0s',
  className = '',
  zIndex = 0
}: MicroElementProps) {
  const isSvg = asset.endsWith('.svg');
  const src = isSvg ? `/svg/${asset}` : `/svg/${asset}ldpi.svg`;

  return (
    <img
      src={src}
      className={`micro-element-graphic ${className}`}
      alt="Micro decorative element"
      style={{
        top,
        left,
        right,
        bottom,
        width,
        transform: `rotate(${rotation})`,
        animationDelay: delay,
        zIndex
      }}
      loading="lazy"
    />
  );
}
