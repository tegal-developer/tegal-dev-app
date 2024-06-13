import FooterLeftNavigation from './FooterLeftNavigation';
import FooterRightNavigation from './FooterRightNavigation';

export default function FooterNavigation({
  instagramURL,
  linkedinURL,
  githubURL,
}: {
  instagramURL: string;
  linkedinURL: string;
  githubURL: string;
}) {
  return (
    <div
      className="
        flex
        flex-col-reverse
        md:flex-row
        gap-5
        md:gap-0
        md:divide-x
        items-center"
    >
      <FooterLeftNavigation />
      <FooterRightNavigation
        instagramURL={instagramURL}
        linkedinURL={linkedinURL}
        githubURL={githubURL}
      />
    </div>
  );
}
