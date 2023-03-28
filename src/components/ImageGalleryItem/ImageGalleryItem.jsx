import {
  ImageGalleryItemWrapper,
  Image,
} from 'components/ImageGalleryItem/ImageGalleryItem.styled';

export const ImageGalleryItem = ({ webImage }) => {
  return (
    <ImageGalleryItemWrapper>
      <Image src={webImage} alt="" />
    </ImageGalleryItemWrapper>
  );
};
