'use client';

import { useRouter } from 'next/navigation';
import ProfileDetailsForm  from '@/components/profile/ProfileDetailsForm';

export default function BasicDetailsEdit() {
  const router = useRouter();


  const handleSubmit = async (data : any) => {
    console.log('Submitted:', data);
    router.push('/my_profile/basic-details/view');
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
      <ProfileDetailsForm
       // defaultValues={defaultValues}
        onSubmit={handleSubmit}
        onCancel={() => router.back()}
      />
    </div>
  );
}
