class ApiFeatures{
  constructor(query, queryStr){
    this.query = query
    this.queryString = queryStr
  }

  filter(){
    // const cars = await Car.find(req.query)
    const removeFields = ['sort', 'fields', 'page', 'limit']
    const queryObj = {...this.queryString}
    removeFields.forEach(el => {
          delete queryObj[el]
    });
    // let queryStr = JSON.stringify(req.query)
    // queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`)

    // const queryObj = JSON.parse(queryStr)
    this.query = this.query.find(queryObj)

    return this
  }

  sort(){
    if(this.queryString.sort){
      const sortBy = this.queryString.sort.split(',').join(' ')
      this.query = this.query.sort(sortBy)
    }else {
      this.query = this.query.sort('Miles_per_Gallon')
    }
    return this
  }
  limitFields(){
    if(this.queryString.fields){
      const field = this.queryString.fields.split(',').join(' ')
      this.query = this.query.select(field)
    }else {
      this.query = this.query.select('-__v')
    }
    return this
  }
  pagination(){
    const page = this.queryString.page*1 || 1
      const limit = this.queryString.limit*1 || 4
      const skip = (page-1)*limit

      this.query = this.query.skip(skip).limit(limit)
      return this
  }
}
module.exports = ApiFeatures