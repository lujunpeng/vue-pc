import fetch from '@/utils/fetch'

// 111
export function indexPost(data) {
  return fetch({
    url: '/post',
    method: 'post',
    data
  })
}