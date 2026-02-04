import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { userService } from "./services/user.service";
import { Roles } from "./constants/roles";

export async function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const { data } = await userService.getSession();
  const user = data?.user;

  if (!user) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  const role = user.role;

  if (pathname.startsWith("/admin-dashboard")) {
    if (role !== Roles.admin) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  if (pathname.startsWith("/provider-dashboard")) {
    if (role !== Roles.provider) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  if (pathname.startsWith("/customer-dashboard")) {
    if (role !== Roles.customer) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  if (role === Roles.admin && pathname.startsWith("/provider-dashboard")) {
    return NextResponse.redirect(new URL("/admin-dashboard", request.url));
  }

  console.log(`Accessing: ${pathname} as ${role}`);

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/admin-dashboard/:path*",
    "/provider-dashboard/:path*",
    "/customer-dashboard/:path*",
  ],
};