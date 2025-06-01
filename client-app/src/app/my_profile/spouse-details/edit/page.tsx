'use client';

import { useRouter } from 'next/navigation';
import ProfileDetailsForm, { ProfileFormValues } from '@/components/profile/ProfileDetailsForm';
import ProfileAdditionalDetailsForm from '@/components/profile/ProfileAdditionalDetailsForm';
import ProfileSpouseDetailsForm from '@/components/profile/ProfileSpouseDetailsForm';

export default function SpouseDetailsEdit() {
  const router = useRouter();
  const defaultValues: ProfileFormValues = {
    salutation: 'Mr.',
    firstName: 'John',
    lastName: 'Doe Jr.',
    email: 'johndoe@anyemail.com',
  };

  const handleSubmit = async (data: ProfileFormValues) => {
    console.log('Submitted:', data);
    router.push('/my_profile/basic-details/view');
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
      <ProfileSpouseDetailsForm
        defaultValues={defaultValues}
        onSubmit={handleSubmit}
        onCancel={() => router.back()}
      />
    </div>
  );
}
