import { AppLink } from '../ui/AppLink';

type SidebarProps = {
  link: string;
};
const ProfileHeader = ({ link }: SidebarProps) => (
  <>
    <div className="flex justify-between items-center mb-4">
      <h1 className="text-2xl font-light">
        My <span className="font-bold">Profile</span>
      </h1>
      <AppLink href={link} variant="no-underline">
        Edit profile
      </AppLink>
    </div>
    <hr className="border-black mb-6" />
  </>
);

export default ProfileHeader;
