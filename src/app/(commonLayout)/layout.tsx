import { Navbar1 } from "@/components/layout/navbar1";

export default function CommonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <Navbar1 />
      {children}
    </div>
  );
}
