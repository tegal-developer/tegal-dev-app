import ChallengeSection from '@/components/organisms/ChallengeSection';
import Template from '@/components/templates/Template';
import getHeadlineNewestChallenges from '@/data/remote/strapi/collection/get-headline-newest-challenges';
import getChallengesPageContent from '@/data/remote/strapi/single/get-challenges-page-content';

export default async function Challenges() {
  const challengesPageContent = await getChallengesPageContent();
  const headlineNewestChallenges = await getHeadlineNewestChallenges();

  return (
    <Template>
      <ChallengeSection
        challengeHeading={challengesPageContent?.data?.heading}
        headlineNewestChallenges={headlineNewestChallenges?.data}
      />
    </Template>
  );
}
