import React from 'react';

export default function ImgWithFallback({
  src,
  fallback,
  type = 'image/webp',
  alt,
  onLoad,
  onError,
  style,
  className,
  pictureClass,
  //   ...delegated
}) {

  const handlePicture = (e, src) => {
    e.target.srcSet === src;
  };


  return (
    <picture className={pictureClass}>
      <source srcSet={src} type={type} />
      <img
        alt={alt}
        onLoad={onLoad}
        onError={onError}
        style={style}
        className={className}
        src={fallback}
        // {...delegated}
      />
    </picture>
  );
}
