const filter = (data, sortables, pageInfoModel) => {
  data.page = parseInt(data.page) || 1
  data.limit = parseInt(data.limit) || 4
  data.search = data.search || ''
  data.sortBy = (sortables.includes(data.sortBy) && data.sortBy) || 'createdAt'
  data.sort = data.sort || 'ASC'

  const params = {
    limit: data.limit,
    offset: (parseInt(data.page) - 1) * data.limit,
    search: data.search,
    sortBy: data.sortBy,
    sort: data.sort
  }

  const pageInfo = {
    page: data.page
  }

  pageInfoModel(params, (result) => {
    pageInfo.totalData = parseInt(result.rows[0].totalData)
    pageInfo.totalPage = Math.ceil(result.rows[0].totalData / data.limit)
    pageInfo.nextPage =
      data.page < pageInfo.totalPage ? pageInfo.page + 1 : null
    pageInfo.prevPage = pageInfo.page > 1 ? data.page - 1 : null
  })

  return { params, pageInfo }
}

module.exports = filter
