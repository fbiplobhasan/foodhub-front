import { Navbar1 } from "@/components/layout/navbar1";
import { getDashboardUrl } from "@/constants/dashboard.access";
import { userService } from "@/services/user.service";

export default async function CommonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data } = await userService.getSession();
  const user = data?.user;
  const url = user ? getDashboardUrl(user.role) : "/login";
  return (
    <div className="min-h-screen bg-background">
      <Navbar1 user={user} dashboardUrl={url}/>
      {children}
    </div>
  );
}
