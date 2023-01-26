/** @format */
import { ROUTES } from './routes';

export const siteSettings = {
  name: `cpf`,
  description: ``,
  logo: {
    url: `/logo.svg`,
    alt: `cpf`,
    href: `/`,
    width: 128,
    height: 40,
  },
  defaultLanguage: `en`,
  author: {
    name: ``,
    websiteUrl: ``,
    address: ``,
  },
  headerLinks: [],
  authorizedLinks: [
    {
      href: ROUTES.PROFILE_UPDATE,
      labelTransKey: `authorized-nav-item-profile`,
    },
    {
      href: ROUTES.LOGOUT,
      labelTransKey: `authorized-nav-item-logout`,
    },
  ],
  currencyCode: `USD`,
  sidebarLinks: {
    admin: [
      {
        href: ROUTES.DASHBOARD,
        label: `sidebar-nav-item-dashboard`,
        icon: `DashboardIcon`,
      },
      {
        href: ROUTES.CATEGORIES,
        label: `sidebar-nav-item-categories`,
        icon: `CategoriesIcon`,
      },
      {
        href: ROUTES.COMPANY,
        label: `sidebar-nav-item-company`,
        icon: `CategoriesIcon`,
      },
    ],
    shop: [
      {
        href: (shop: string) => `${ROUTES.DASHBOARD}${shop}`,
        label: `sidebar-nav-item-dashboard`,
        icon: `DashboardIcon`,
        permissions: `adminOwnerAndStaffOnly`,
      },
    ],
  },
  product: {
    placeholder: `/product-placeholder.svg`,
  },
  avatar: {
    placeholder: `/avatar-placeholder.svg`,
  },
};
