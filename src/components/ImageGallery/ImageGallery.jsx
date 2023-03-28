// import PropTypes from 'prop-types';
import { ImageGalleryWrapper } from 'components/ImageGallery/ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ items }) => {
  return (
    <ImageGalleryWrapper>
      {items.map(({ id, webformatURL }) => (
        <ImageGalleryItem key={id} webImage={webformatURL} />
      ))}
    </ImageGalleryWrapper>
  );
};
