import { Button } from '.';

interface ThumbnailProps {
  onClick: () => void;
  active: boolean;
  src: string;
  alt: string;
}

const Thumbnail = ({ onClick, active, src, alt }: ThumbnailProps) => {
  return (
    <Button
      type='button'
      className={`btn thumbnail ${active ? 'active' : ''}`}
      onClick={onClick}>
      <img src={src} alt={alt} />
    </Button>
  );
};
export default Thumbnail;
