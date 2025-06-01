'use client';

import React from 'react';
import { useGetMeQuery } from '@/store/api/authApi';
import ProfileField from './ProfileField';

const ProfileDetails = () => {
  const { data, isLoading, isError } = useGetMeQuery({});

  if (isLoading) return <p>Loading...</p>;
  if (isError || !data?.user) return <p>Unable to load profile.</p>;

  const { salutation, firstName, lastName, email } = data.user;

  return (
    <div className="text-sm space-y-6">
      <ProfileField label="Salutation*" value={salutation} />
      <ProfileField label="First name*" value={firstName} />
      <ProfileField label="Last name*" value={lastName} />
      <ProfileField label="Email address*" value={email} />
    </div>
  );
};

export default ProfileDetails;
