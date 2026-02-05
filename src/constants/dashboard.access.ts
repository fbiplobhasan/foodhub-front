import { Roles } from "./roles";

export const getDashboardUrl = (role?: string) => {
  switch (role) {
    case Roles.admin: return "/admin-dashboard";
    case Roles.provider: return "/provider-dashboard";
    case Roles.customer: return "/customer-dashboard";
    default: return "/login";
  }
};