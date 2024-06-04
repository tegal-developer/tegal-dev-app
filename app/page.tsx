import AboutSection from '@/components/organisms/AboutSection';
import ActivitySection from '@/components/organisms/ActivitySection';
import BlogSection from '@/components/organisms/BlogSection';
import ContactSection from '@/components/organisms/ContactSection';
import EventSection from '@/components/organisms/EventSection';
import FAQSection from '@/components/organisms/FAQSection';
import HeroSection from '@/components/organisms/HeroSection';
import Template from '@/components/templates/Template';
import getAllInvitationLinks from '@/data/remote/strapi/collection/get-all-invitation-links';
import getAllCommunityBenefits from '@/data/remote/strapi/collection/get-all-community-benefits';
import getAllCommunityHastags from '@/data/remote/strapi/collection/get-all-community-hashtags';
import getAllCommunityActivities from '@/data/remote/strapi/collection/get-all-community-activities';
import getAllFAQs from '@/data/remote/strapi/collection/get-all-faqs';
import MemberSection from '@/components/organisms/MemberSection';
import getHomePageContent from '@/data/remote/strapi/single/get-home-page-content';
import getHeadlineNewestEvents from '@/data/remote/strapi/collection/get-headline-newest-events';

export default async function Home() {
  const homePageContent = await getHomePageContent();
  const invitationLinks = await getAllInvitationLinks();
  const communityBenefits = await getAllCommunityBenefits();
  const communityHashtags = await getAllCommunityHastags();
  const communityActivities = await getAllCommunityActivities();
  const headlineNewestEvents = await getHeadlineNewestEvents();
  const faqs = await getAllFAQs();

  return (
    <Template>
      <HeroSection
        heroHeading={homePageContent?.data?.attributes?.hero_section_heading}
        heroBody={homePageContent?.data?.attributes?.hero_section_body}
        heroImages={
          homePageContent?.data?.attributes?.hero_section_images?.data[0]
            ?.attributes?.url
        }
        invitationLinks={invitationLinks}
        communityBenefits={communityBenefits?.data}
        communityHashtags={communityHashtags?.data}
      />
      <EventSection
        eventHeading={homePageContent?.data?.attributes?.event_section_heading}
        headlineNewestEvents={headlineNewestEvents?.data}
      />
      <BlogSection
        blogHeading={homePageContent?.data?.attributes?.blog_section_heading}
      />
      <AboutSection
        aboutHeading={homePageContent?.data?.attributes?.about_section_heading}
        aboutBody={homePageContent?.data?.attributes?.about_section_body}
      />
      <ActivitySection
        activityHeading={
          homePageContent?.data?.attributes?.activity_section_heading
        }
        communityActivities={communityActivities?.data}
      />
      <MemberSection
        membershipHeading={
          homePageContent?.data?.attributes?.member_section_heading
        }
      />
      <ContactSection
        contactHeading={
          homePageContent?.data?.attributes?.contact_section_heading
        }
      />
      <FAQSection
        faqHeading={homePageContent?.data?.attributes?.faq_section_heading}
        faqs={faqs?.data}
      />
    </Template>
  );
}
