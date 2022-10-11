const arr = [];

class AppService {
  async createUser(name) {
    const id = Date.now();
    const returnValue = {
      id: id,
      name: name,
    };
    arr.push({ user: returnValue });
    return returnValue;
  }

  async createCategory(name) {
    const id = Date.now();
    const returnValue = {
      id: id,
      name: name,
    };
    arr.push({ category: returnValue });
    return returnValue;
  }

  async createRecord(userId, categoryId, sum) {
    const id = Date.now();
    const creationDate = new Date();
    const returnValue = {
      id: id,
      userId: userId,
      categoryId: categoryId,
      date: creationDate,
      sum: sum,
    };
    arr.push({ record: returnValue });
    return returnValue;
  }

  async getCategory() {
    const returnValue = [];
    for (const arrKey in arr) {
      if ("category" in arr[arrKey]) {
        returnValue.push(Object.values(arr[arrKey])[0]);
      }
    }
    return returnValue;
  }

  async getRecordByUserId(id) {
    const recordArr = [];
    const returnValue = [];
    for (const arrKey in arr) {
      if ("record" in arr[arrKey]) {
        recordArr.push(Object.values(arr[arrKey])[0]);
      }
    }
    for (const recordArrKey in recordArr) {
      if (recordArr[recordArrKey].userId === parseInt(id)) {
        returnValue.push(recordArr[recordArrKey]);
      }
    }
    return returnValue;
  }

  async getRecordByUserCategoryId(userId, categoryId) {
    const recordArr = [];
    const returnValue = [];
    for (const arrKey in arr) {
      if ("record" in arr[arrKey]) {
        recordArr.push(Object.values(arr[arrKey])[0]);
      }
    }
    for (const recordArrKey in recordArr) {
      if (
        recordArr[recordArrKey].userId === parseInt(userId) &&
        recordArr[recordArrKey].categoryId === parseInt(categoryId)
      ) {
        returnValue.push(recordArr[recordArrKey]);
      }
    }
    return returnValue;
  }
}

export default new AppService();
