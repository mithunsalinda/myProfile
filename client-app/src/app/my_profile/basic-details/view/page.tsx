import ProfileDetails from '@/components/profile/ProfileDetails';
import ProfileHeader from '@/components/profile/ProfileHeader';
import Link from 'next/link';

export default function BasicDetailsView() {
  const profile = {
    salutation: 'Mr.',
    firstName: 'John',
    lastName: 'Doe Jr.',
    email: 'johndoe@anyemail.com',
  };

  return (
    <div className="space-y-4 w-full">
      <ProfileHeader link={'/my_profile/basic-details/edit'} />
      <ProfileDetails />
    </div>
  );
}
