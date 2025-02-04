// dùng forwardref khi có warning với tippy

import classNames from 'classnames';
import images from '~/assets/images';
import { useState } from 'react';
import styles from './Image.module.scss';

function Image({
    src,
    alt,
    className,
    fallBack: customFallback = images.noImage,
    ...props
}) {
    const [fallBack, setfallback] = useState('');

    const handleError = () => {
        setfallback(customFallback);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            src={fallBack || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
}

export default Image;
