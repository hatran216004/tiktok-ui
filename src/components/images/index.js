import classNames from 'classnames';
import { forwardRef, useState } from 'react';
import images from '~/assets/imgs';
import styles from './img.module.scss';

const Image = forwardRef(({ src, alt, className, fallback: customFallback = images.noImage, ...props }, ref) => {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(customFallback);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            {...props}
            src={fallback || src}
            alt={alt}
            onError={handleError}
        />
    );
});

export default Image;
