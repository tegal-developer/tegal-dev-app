export default async function MerchandiseItemList({
  merchandises,
}: {
  merchandises: any;
}) {
  return (
    <>
      {merchandises?.map((merchandise: any) => (
        <div key={merchandise?.id}>
          <h1>{merchandise?.name}</h1>
        </div>
      ))}
    </>
  );
}
