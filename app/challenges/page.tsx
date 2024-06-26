import ChallengeSection from '@/components/molecules/ChallengeSection';
import Template from '@/components/templates/Template';
import getChallengesPageContent from '@/data/remote/strapi/single/get-challenges-page-content';

export default async function Challenges() {
  const challengesPageContent = await getChallengesPageContent();

  return (
    <Template>
      <ChallengeSection
        challengeHeading={challengesPageContent?.data?.heading}
      />
    </Template>
  );
}
