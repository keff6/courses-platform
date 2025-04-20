export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-column justify-center items-center">
      {children}
    </div>
  );
}
