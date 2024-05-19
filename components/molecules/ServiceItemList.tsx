import ServiceItem from './ServiceItem';

export default function ServiceItemList({ services }: { services: any }) {
  return (
    <div className="grid grid-cols-2 gap-5 m-auto">
      {services?.map((service: any) => (
        <ServiceItem key={service?.id} content={service?.attributes?.content} />
      ))}
    </div>
  );
}
