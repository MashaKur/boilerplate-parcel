import { fetchData } from './fetchData'
import { Users } from './users'


fetchData('GET', 'https://jsonplaceholder.typicode.com/users', (response) => {
  const data = JSON.parse(response)
  new Users(data, wrap)
})
