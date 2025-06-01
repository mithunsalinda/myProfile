import { baseApi } from './baseApi';

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation({
      query: (body) => ({
        url: '/auth/login',
        method: 'POST',
        body,
        credentials: 'include',
      }),
    }),
    logout: build.mutation({
      query: () => ({
        url: '/auth/logout',
        method: 'POST',
        credentials: 'include',
      }),
      invalidatesTags: ['User'],
    }),
    getMe: build.query({
      query: () => ({
        url: '/user/me',
        credentials: 'include',
      }),
      providesTags: ['User'],
    }),
    updateMe: build.mutation({
      query: (body) => ({
        url: '/user/update',
        method: 'PATCH',
        body,
        credentials: 'include',
      }),
      invalidatesTags: ['User'],
    }),
  }),
  overrideExisting: false,
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useGetMeQuery,
  useUpdateMeMutation,
} = authApi;
