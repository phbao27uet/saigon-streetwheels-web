import type { PaginationState } from '@/libs/types'

export const getBlogs = async (params: PaginationState) => {
  // Tạo dữ liệu mẫu
  const mockBlogs = [
    {
      id: 1 + params.pageIndex * params.pageSize,
      title: `Blog ${params.pageIndex * params.pageSize + 1}`,
      thumbnail: '/images/introduction/i-1.jpeg',
      description:
        'Trong nhịp sống hối hả của Tết Nguyên Đán, thay vì tất bật chuẩn bị và lo lắng về việc chen lấn, tăng giá, bạn và gia đình có thể tận hưởng kỳ nghỉ Tết một cách thanh bình, hiện đại và đẳng cấp trên du thuyền. lấn, tăng giá, bạn và gia đình có thể tận hưởng kỳ nghỉ Tết một cách thanh bình, hiện đại và đẳng cấp trên du thuyền.',
      createdAt: '2021-01-01',
    },
    {
      id: 2 + params.pageIndex * params.pageSize,
      title: `Blog ${params.pageIndex * params.pageSize + 2}`,
      thumbnail: '/images/introduction/i-2.jpeg',
      description:
        'Trong nhịp sống hối hả của Tết Nguyên Đán, thay vì tất bật chuẩn bị và lo lắng về việc chen lấn, tăng giá, bạn và gia đình có thể tận hưởng kỳ nghỉ Tết một cách thanh bình, hiện đại và đẳng cấp trên du thuyền. lấn, tăng giá, bạn và gia đình có thể tận hưởng kỳ nghỉ Tết một cách thanh bình, hiện đại và đẳng cấp trên du thuyền.',
      createdAt: '2021-01-02',
    },
    {
      id: 3 + params.pageIndex * params.pageSize,
      title: `Blog ${params.pageIndex * params.pageSize + 3}`,
      thumbnail: '/images/introduction/i-3.jpeg',
      description:
        'Trong nhịp sống hối hả của Tết Nguyên Đán, thay vì tất bật chuẩn bị và lo lắng về việc chen lấn, tăng giá, bạn và gia đình có thể tận hưởng kỳ nghỉ Tết một cách thanh bình, hiện đại và đẳng cấp trên du thuyền. lấn, tăng giá, bạn và gia đình có thể tận hưởng kỳ nghỉ Tết một cách thanh bình, hiện đại và đẳng cấp trên du thuyền.',
      createdAt: '2021-01-03',
    },
  ]

  const mockMeta = {
    currentPage: params.pageIndex,
    perPage: params.pageSize,
    total: 30,
    totalPages: 3,
  }

  // Giả lập các promise
  const blogPromise = Promise.resolve(mockBlogs)
  const metaPromise = Promise.resolve(mockMeta)

  // Sử dụng Promise.all
  const [blogs, meta] = await Promise.all([blogPromise, metaPromise])

  await new Promise((resolve) => setTimeout(resolve, 1000))

  return {
    data: blogs,
    meta: meta,
  }
}
