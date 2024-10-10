import { SOCIAL_MEDIA } from "../../../constants";
import { SocialMediaLink } from "../SocialMediaLink/SocialMediaLink";

import "./SocialMedia.css";

export const SocialMedia: React.FC = () => {
  return (
    <div className="social-medias">
      <p>These are my 'social media':</p>
      <div className="social-media-links">
        {Object.keys(SOCIAL_MEDIA).map((media) => (
          <SocialMediaLink media={media} />
        ))}
      </div>
    </div>
  );
};
