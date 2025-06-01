'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { FormButton, Select, TextInput } from '../ui';
import { useState } from 'react';
import { useNavigate } from '@/util/useNavigate';

const ProfileSchema = z.object({
  salutation: z.string().min(1, 'Salutation is required'),
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email'),
});

export type ProfileFormValues = z.infer<typeof ProfileSchema>;

type Props = {
  defaultValues?: ProfileFormValues;
  onSubmit: (data: ProfileFormValues) => void;
  onCancel?: () => void;
};

export default function ProfileSpouseDetailsForm({ defaultValues, onSubmit, onCancel }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormValues>({
    resolver: zodResolver(ProfileSchema),
    defaultValues,
  });
  const navigate = useNavigate();
  const countries = [
    { label: 'Mr.', value: 'mr' },
    { label: 'Ms.', value: 'ms' },
    { label: 'Mrs.', value: 'mrs' },
  ];
  const [country, setCountry] = useState('');
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <TextInput
          label="First Name"
          type="text"
          placeholder="First Name"
          name="firstName"
          required
          // value={formik.values.password}
          // onChange={formik.handleChange}
        />
      </div>
      <div>
        <TextInput
          label="last Name"
          type="text"
          placeholder="last Name"
          name="lastName"
          required
          // value={formik.values.password}
          // onChange={formik.handleChange}
        />
      </div>
      <div>
        <Select
          label="Salutation"
          options={countries}
          value={country}
          onChange={setCountry}
          placeholder="Salutation"
        />
      </div>
      <div className="flex gap-3">
        {onCancel && (
          <FormButton
            type="submit"
            variant="primary"
            className="w-[69%]  ml-22.5"
            // loading={formik.isSubmitting}
            // disabled={formik.isSubmitting}
            onClick={(e) => {
              e.preventDefault();
              // router.push('/my_profile');
              navigate('back');
            }}
          >
            Cancel
          </FormButton>
        )}
        <FormButton
          type="submit"
          variant="primary"
          className="w-[69%]  ml-22.5"
          // loading={formik.isSubmitting}
          // disabled={formik.isSubmitting}
          onClick={(e) => {
            e.preventDefault();
            // router.push('/my_profile');
          }}
        >
          Update
        </FormButton>
      </div>
    </form>
  );
}
