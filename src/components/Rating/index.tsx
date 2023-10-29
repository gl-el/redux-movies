import { useState } from 'react';
import { Star } from './Star';

// почему стили не в модуле?
const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
};

const starContainerStyle = {
  display: 'flex',
};

export function Rating({
  max = 5,
  defaultRate = 0,
  onSet,
  color = '#fcc419',
  size = 48,
  className = '',
}: {
  max?: number;
  defaultRate?: number;
  onSet?: (value: number) => void;
  color?: string;
  size?: number;
  className?: string;
}) {
  const [rate, setRate] = useState(defaultRate);
  const [temp, setTemp] = useState(defaultRate);

  const textStyle = {
    lineHeight: '1',
    margin: '0',
    color,
    fontSize: `${size / 1.5}px`,
  };

  const handleRate = (value: number) => {
    setRate(value);
    if (typeof onSet === 'function') onSet(value);
  };

  return (
    <div style={containerStyle} className={className}>
      <div style={starContainerStyle}>
        {Array.from({ length: max }, (_, index) => (
          <Star
            key={index}
            full={temp ? temp >= index + 1 : rate >= index + 1}
            color={color}
            size={size}
            onRate={() => handleRate(index + 1)}
            onHover={() => setTemp(index + 1)}
            onHoverLeave={() => setTemp(0)}
          />
        ))}
      </div>
      <p style={textStyle}>{temp || rate || ''}</p>
    </div>
  );
}
