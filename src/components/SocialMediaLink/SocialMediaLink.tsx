import { SOCIAL_MEDIA } from "../../../constants";

interface Props {
  media: string;
}

export const SocialMediaLink: React.FC<Props> = ({ media }) => {
  return (
    <a
      rel="noreferrer"
      target="_blank"
      href={SOCIAL_MEDIA[media as keyof typeof SOCIAL_MEDIA]}
    >
      {media.charAt(0).toUpperCase() + media.slice(1).toLowerCase()}
    </a>
  );
};
