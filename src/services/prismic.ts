import Prismic from '@prismicio/client'

export function getPrismicClient(req?: unknown) {
  const prismic = Prismic.client(
    'https://iignews.cdn.prismic.io/api/v2', 
    {
      accessToken: 'MC5ZRy1wa2hNQUFDSUFqT0NH.XiHvv708DO-_ve-_ve-_vQLvv71R77-977-9Rjx877-9EO-_ve-_ve-_ve-_vXhC77-9Je-_vRvvv73vv73vv71t',
      req: req
    }
  )

  return prismic;
}

