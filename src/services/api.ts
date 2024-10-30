import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { Produto } from '../App'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/'
  }),
  endpoints: (builder) => ({
    getLoja: builder.query<Produto[], void>({
      query: () => 'ebac_sports'
    })
  })
})

export const { useGetLojaQuery } = api

export default api
