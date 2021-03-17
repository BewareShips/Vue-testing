async function getContacts () {
  const response = await fetch('https://randomuser.me/api/?results=10')
  const users = await response.json()
  return users.results
}

export { getContacts }
