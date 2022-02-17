const apiEndpoint = process.env.NEXT_PUBLIC_API_ENDPOINT || ''

export async function getApi<T>(apiName: string): Promise<T> {
  const apiUrl = `${apiEndpoint}${apiName}`

  const headers = {
    'cache-control': 'no-cache',
    'Content-Type': 'application/json'
  }

  return await wrapJson<T>(
    fetch(apiUrl, {
      headers,
      method: 'GET'
    })
  )
}

export const wrapJson = <T>(task: Promise<Response>): Promise<T> => {
  return new Promise((resolve, reject) => {
    task
      .then((response) => {
        if (response.ok) {
          response
            .json()
            .then((json) => {
              // jsonが取得できた場合だけresolve
              resolve(json)
            })
            .catch((error) => {
              // Sentryになげる
              reject(error)
            })
        } else {
          // Sentryになげる
          const error = new Error()
          reject(error)
        }
      })
      .catch((error) => {
        // Sentryになげる
        reject(error)
      })
  })
}
