import { AppLink } from '../ui/AppLink';

type SidebarItemProps = {
  label: string;
  isActive?: boolean;
  href: string;
};

const SidebarItem = ({ label, isActive = false, href }: SidebarItemProps) => (
  <li
    className={`pb-1 ${
      isActive
        ? 'font-bold border-b border-black'
        : 'text-gray-700 border-b border-dashed border-gray-400'
    }`}
  >
    <AppLink href={href} variant="no-underline">
      {label}
    </AppLink>
  </li>
);

export default SidebarItem;
