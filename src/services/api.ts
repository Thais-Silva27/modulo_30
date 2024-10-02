import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

import { Produto } from '../App'

const api = creatApi({
  baseQuery: fetchBaseQuery({
    baseurl: 'https://fake-api-tau.vercel.app'
  }),
  endpoints: builder => ({
    getProduto: builder.query<Produto[], void>({
      query: () => 'produtos'
    })
  })
})

export const { useGetProdutoQuery } = api

export defaut api
