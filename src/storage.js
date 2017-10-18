var STORAGE_KEY = 'ecard-vuejs-2.0';

export default {
    get: function () {
        var data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}')
        return data
    },
    save: function (data) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
    }
};