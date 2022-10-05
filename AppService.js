const arr = [];

class AppService {
  async createUser(name) {
    const id = Math.round(Math.random() * 1000000);
    const temp = {
      id: id,
      name: name,
    };
    arr.push({ user: temp });
    return temp;
  }

  async createCategory(name) {
    const id = Math.round(Math.random() * 1000000);
    const temp = {
      id: id,
      name: name,
    };
    arr.push({ category: temp });
    return temp;
  }

  async createRecord(userId, categoryId, sum) {
    const id = Math.round(Math.random() * 1000000);
    const creationDate = new Date();
    const temp = {
      id: id,
      userId: userId,
      categoryId: categoryId,
      date: creationDate,
      sum: sum,
    };
    arr.push({ record: temp });
    return temp;
  }

  async getCategory() {
    const temp = [];
    for (const arrKey in arr) {
      if ("category" in arr[arrKey]) {
        temp.push(Object.values(arr[arrKey])[0]);
      }
    }
    return temp;
  }

  async getUserById(id) {
    for (const arrKey in arr) {
      if ("user" in arr[arrKey]) {
        if (Object.values(arr[arrKey])[0].id === parseInt(id)) {
          return Object.values(arr[arrKey])[0];
        }
      }
    }
  }
}

export default new AppService();
