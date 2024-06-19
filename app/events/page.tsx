import EventSection from '@/components/organisms/EventSection';
import Template from '@/components/templates/Template';
import getAllNewestEventsByPage from '@/data/remote/strapi/collection/get-all-newest-events-by-page';
import getEventsPageContent from '@/data/remote/strapi/single/get-events-page-content';

export default async function Events() {
  const eventsPageContent = await getEventsPageContent();
  const headlineNewestEvents = await getAllNewestEventsByPage(1);

  return (
    <Template>
      <EventSection
        eventHeading={eventsPageContent?.data?.heading}
        headlineNewestEvents={headlineNewestEvents?.data}
      />
    </Template>
  );
}
