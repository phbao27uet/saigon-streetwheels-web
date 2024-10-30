export interface ReactChildren {
  children: React.ReactNode
}

// biome-ignore lint/style/useNamingConvention: <explanation>
export interface IBaseMaster {
  id: number
  name: string
}

// biome-ignore lint/style/useNamingConvention: <explanation>
export interface IError {
  response: {
    data: {
      message: string | Record<string, unknown>
      error: string
      statusCode: number
    }
  }
}

export interface PaginationState {
  pageIndex: number
  pageSize: number
}

// biome-ignore lint/style/useNamingConvention: <explanation>
export interface IMetaPagination {
  currentPage: number
  perPage: number
  total: number
  totalPages: number
}

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export interface DataPagination<T extends any[]> {
  data: T
  meta: IMetaPagination
}

// biome-ignore lint/style/useNamingConvention: <explanation>
export interface IOption {
  label: string
  value: string
}
