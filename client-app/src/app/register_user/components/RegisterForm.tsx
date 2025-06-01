'use client';
import React from 'react';
import Image from 'next/image';
import { TextInput } from '@/components/ui';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';
import FormButton from '@/components/ui/FormButton';
export default function RegisterForm() {
  const router = useRouter();

  return (
    <form className="space-y-6">
      <div>
        <TextInput
          label="User ID"
          type="email"
          placeholder="Enter your email address"
          name="email"
          required
          // value={formik.values.email}
          // onChange={formik.handleChange}
        />
      </div>
      <div>
        <TextInput
          label="Password"
          type="password"
          placeholder="Enter your password"
          name="password"
          required
          // value={formik.values.password}
          // onChange={formik.handleChange}
        />
      </div>
      <div>
        <TextInput
          label="Confirm Password"
          type="password"
          placeholder="Enter your password"
          name="password"
          required
          // value={formik.values.password}
          // onChange={formik.handleChange}
        />
      </div>
      {/* {formik.touched.password && formik.errors.password && (
        <p className="text-red-500 text-xs mt-1">{formik.errors.password}</p>
      )} */}

      <div className="text-sm text-gray-400 mt-2 ml-40.5">
        <label className="flex items-center gap-2">
          <input type="checkbox" className="form-checkbox" />
          Keep me logged in
        </label>
      </div>
      <FormButton
        type="submit"
        variant="primary"
        className="w-[69%]  ml-22.5"
        // loading={formik.isSubmitting}
        // disabled={formik.isSubmitting}
      >
        Register
      </FormButton>
    </form>
  );
}
