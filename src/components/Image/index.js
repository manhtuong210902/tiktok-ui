import { forwardRef, useState } from 'react';
import images from '~/assets/image';

const Image = forwardRef(({ src, alt, ...props }, ref) => {
    const [fallback, setFallback] = useState('');
    const handleOnError = () => {
        setFallback(images.noImage);
    };

    return (
        <img
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handleOnError}
        />
    );
});

export default Image;
