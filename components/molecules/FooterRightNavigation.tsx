import SocialIconList from './SocialIconList';

export default function FooterRightNavigation({
  instagramURL,
  linkedinURL,
  githubURL,
}: {
  instagramURL: string;
  linkedinURL: string;
  githubURL: string;
}) {
  return (
    <div className="px-5">
      <SocialIconList
        instagramURL={instagramURL}
        linkedinURL={linkedinURL}
        githubURL={githubURL}
      />
    </div>
  );
}
