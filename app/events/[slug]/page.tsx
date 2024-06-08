import Template from '@/components/templates/Template';
import getEventDetailBySlug from '@/data/remote/strapi/collection/get-event-detail-by-slug';
import EventSection from '@/components/organisms/EventSection';
import getAllNewestEventsByPage from '@/data/remote/strapi/collection/get-all-newest-events-by-page';
import EventDetailSection from '@/components/organisms/EventDetailSection';
import getEventDetailPageContent from '@/data/remote/strapi/single/get-event-detail-page-content';

export default async function EventDetail({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const eventDetailPageContent = await getEventDetailPageContent();
  const eventDetail = await getEventDetailBySlug(slug);
  const headlineNewestEvents = await getAllNewestEventsByPage(1);

  return (
    <Template>
      <EventDetailSection
        eventDetailHeading={eventDetailPageContent?.data?.attributes?.heading}
        eventDetail={eventDetail}
      />
      <EventSection
        eventHeading="Event Lainnya"
        headlineNewestEvents={headlineNewestEvents?.data}
      />
    </Template>
  );
}