'use client';

import { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextInput, Select, FormButton } from '../ui';
import { useNavigate } from '@/util/useNavigate';
import { useGetMeQuery, useUpdateMeMutation } from '@/store/api/authApi';

const validationSchema = Yup.object().shape({
  salutation: Yup.string().required('Salutation is required'),
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
});

export default function ProfileDetailsForm({ onCancel }: any) {
  const { data, isLoading } = useGetMeQuery({});
  const [updateMe, { isLoading: isUpdating }] = useUpdateMeMutation();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      salutation: '',
      firstName: '',
      lastName: '',
      email: '',
    },
    validationSchema,
    enableReinitialize: true,
    onSubmit: async (values) => {
      try {
        const res = await updateMe(values).unwrap();
        console.log('Updated:', res);
        navigate('/my_profile/basic-details/view');
      } catch (err: any) {
        console.error(err);
      }
    },
  });

  useEffect(() => {
    if (data?.user) {
      formik.setValues({
        salutation: data.user.salutation || '',
        firstName: data.user.firstName || '',
        lastName: data.user.lastName || '',
        email: data.user.email || '',
      });
    }
  }, [data]);

  const salutationOptions = [
    { label: 'Mr.', value: 'Mr.' },
    { label: 'Ms.', value: 'Ms.' },
    { label: 'Mrs.', value: 'Mrs.' },
  ];

  if (isLoading) return <p>Loading...</p>;

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-4">
      <Select
        label="Salutation"
        options={salutationOptions}
        value={formik.values.salutation}
        onChange={(val) => formik.setFieldValue('salutation', val)}
        placeholder="Select salutation"
      />
      <TextInput
        label="First Name"
        type="text"
        placeholder="First Name"
        name="firstName"
        value={formik.values.firstName}
        onChange={formik.handleChange}
        //onBlur={formik.handleBlur}
      />
      <TextInput
        label="Last Name"
        type="text"
        placeholder="Last Name"
        name="lastName"
        value={formik.values.lastName}
        onChange={formik.handleChange}
        //onBlur={formik.handleBlur}
      />
      <TextInput
        label="Email Address"
        type="email"
        placeholder="Email"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
       // onBlur={formik.handleBlur}
      />

      <div className="flex gap-3">
        {onCancel && (
          <FormButton type="button" variant="primary" onClick={onCancel} className="w-[69%]  ml-22.5">
            Cancel
          </FormButton>
        )}
        <FormButton
          type="submit"
          variant="primary"
          loading={formik.isSubmitting || isUpdating}
          disabled={formik.isSubmitting || isUpdating}
          className="w-[69%]  ml-22.5"
        >
          Update
        </FormButton>
      </div>
    </form>
  );
}
