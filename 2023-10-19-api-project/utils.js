export function getUrlParams(param) {
  const queryParams = location.search
  const urlParams = new URLSearchParams(queryParams)
  const paramValue = urlParams.get(param)

  return paramValue
}
