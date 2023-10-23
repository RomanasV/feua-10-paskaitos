export function getUrlParams(param) {
  const queryParams = location.search
  const urlParams = new URLSearchParams(queryParams)
  const paramValue = urlParams.get(param)

  return paramValue
}

export function firstLetterUpperCase(str) {
  return str.at(0).toUpperCase() + str.slice(1)
}