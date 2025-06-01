'use client';

import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';
import { TextInput } from '@/components/ui';
import FormButton from '@/components/ui/FormButton';
import { useLoginMutation } from '@/store/api/authApi';

export default function LoginForm() {
  const router = useRouter();
  const [login, { isLoading }] = useLoginMutation();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().required('User ID is required'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      try {
        await login(values).unwrap();
        router.push('/my_profile');
      } catch (error: any) {
        setErrors({ password: error?.data?.message || 'Login failed' });
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <form className="space-y-6" onSubmit={formik.handleSubmit}>
      <div>
        <TextInput
          label="User ID"
          type="text"
          placeholder="Enter your user ID"
          name="email"
          required
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        {formik.touched.email && formik.errors.email && (
          <p className="text-red-500 text-xs mt-1">{formik.errors.email}</p>
        )}
      </div>

      <div>
        <TextInput
          label="Password"
          type="password"
          placeholder="Enter your password"
          name="password"
          required
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        {formik.touched.password && formik.errors.password && (
          <p className="text-red-500 text-xs mt-1">{formik.errors.password}</p>
        )}
      </div>

      <div className="flex items-center justify-between text-sm text-gray-400 mt-2 ml-40.5">
        <label className="flex items-center gap-2">
          <input type="checkbox" className="form-checkbox" />
          Keep me logged in
        </label>
      </div>

      <FormButton
        type="submit"
        variant="primary"
        className="w-[69%] ml-22.5"
        loading={isLoading || formik.isSubmitting}
        disabled={isLoading || formik.isSubmitting}
      >
        Login
      </FormButton>

      <p className="text-sm text-center text-gray-500 mt-4">
        No Account?{' '}
        <a href="/register_user" className="text-violet-500 hover:underline">
          Register Here
        </a>
      </p>
    </form>
  );
}
