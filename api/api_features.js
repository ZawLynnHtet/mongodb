class APIFeatures {
    constructor(query, queryStr) {
      this.query = query;
      this.queryStr = queryStr;
    }
  
    Filter(){
      const queryObj = { ...this.queryStr };
      const excludeFields = ["page", "limit", "sort", "fields", "populate"];
      excludeFields.forEach((el) => delete queryObj[el]);
  
      let queryObjStr = JSON.stringify(queryObj);
      queryObjStr = queryObjStr.replace(/\b(gte|gt|lte|lt)\b/g, (el) => `$${el}`);
      console.log(queryObjStr);
  
      this.query.find(JSON.parse(queryObjStr));
  
      return this;
    }
  
    Sort(){
      if (this.queryStr.sort) {
        this.query = this.query.sort(this.queryStr.sort.split(",").join(" "));
      }else {
        this.query = this.query.sort({ createdAt: -1 });
      }
      return this;
    }
  
    Select(){
      if(this.queryStr.fields){
        this.query = this.query.select(this.queryStr.fields.split(",").join(" "));
      }else {
        this.query = this.query.select("-__v");
      }
      return this;
    }
  
    Paginate(){
      let page = this.queryStr.page * 1 || 1;
      let limit = this.queryStr.limit * 1 || 100;
      let skip = (page - 1) * limit;
      this.query = this.query.skip(skip).limit(limit);
  
      return this;
    }
  
  }

module.exports = APIFeatures;