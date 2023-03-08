const HomeService = require("../src/services/HomeService");

const homeService = new HomeService();

test("Get data user", function () {
    const result = homeService.getDataUser();

    expect(result).toEqual({ name: 'Rizat', age: 23 })
});

test("Get data user 2", function () {
    const result = homeService.getDataUser();

    expect(result).toEqual({ name: 'Rizat', age: 23 })
});

test("Get data user 3", function () {
    const result = homeService.getDataUser();

    expect(result).toEqual({ name: 'Rizat', age: 23 })
});