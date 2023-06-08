import './platform-card.css';

type Props = {
  name: string;
  url: string;
  icon: string;
};

export const PlatformCard = ({ name, url, icon }: Props) => {
  return (
    <a href={url} className='platform-card'>
      <img src={icon} className='platform-card__image' />
      <span className='platform-card__name'>{name}</span>
    </a>
  );
};
