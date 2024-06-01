export default function Container({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div
      className="
        lg:container
        lg:mx-auto 
        flex
        flex-col
        gap-10
        items-center
        w-full"
    >
      {children}
    </div>
  );
}
