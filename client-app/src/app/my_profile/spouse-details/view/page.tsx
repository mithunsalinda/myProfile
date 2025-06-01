import ProfileAdditionalDetails from '@/components/profile/ProfileAdditionalDetails';
import ProfileHeader from '@/components/profile/ProfileHeader';
import ProfileSpouseDetails from '@/components/profile/ProfileSpouseDetails';
import Link from 'next/link';

export default function AdditionalDetailsView() {
  const profile = {
    salutation: 'Mr.',
    firstName: 'John',
    lastName: 'Doe Jr.',
    email: 'johndoe@anyemail.com',
  };

  return (
    <div className="space-y-4 w-full">
      <ProfileHeader link={'/my_profile/spouse-details/edit'} />
      <ProfileSpouseDetails />
    </div>
  );
}
