let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        let users = JSON.parse(this.responseText);
        user.table = users;
        htmlManager.display_HTML(users);
    }
};

xhttp.open("GET", "users.json", true);
xhttp.send();


// An object to create a table where to stock json data (clients list)
class User {
    constructor() {
        this.table = [];
    }
}

let user = new User();

// An object to create html elements and display it
let htmlManager = {

    parentElt: document.getElementById('usersInfos'),

    createHTMLElement: function (object) {

        htmlManager.parentElt.innerHTML = "";

        for (let i = 0; i < object.length; i++) {

            let trElt = document.createElement('tr')
            htmlManager.parentElt.appendChild(trElt)

            let name = object[i].name
            let nameElt = document.createElement('td')
            nameElt.innerHTML = name
            trElt.appendChild(nameElt)

            let age = object[i].age
            let ageElt = document.createElement('td')
            ageElt.innerHTML = age
            trElt.appendChild(ageElt)

            let city = object[i].city
            let cityElt = document.createElement('td')
            cityElt.innerHTML = city
            trElt.appendChild(cityElt)

        }
    },
    display_HTML: function (users) {
        htmlManager.createHTMLElement(users)
    }

}
// An object to sort clients data on change of selected value in HTML
let usersManager = {

    change_myselect: function (key) {
        if (key === "name") {
            user.table.sort(function (a, b) {
                return a.name > b.name;
            });
        }
        if (key === "age") {
            user.table.sort(function (a, b) {
                return a.age > b.age;
            });
        }
        if (key === "city") {
            user.table.sort(function (a, b) {
                return a.city > b.city;
            });
        }

        htmlManager.display_HTML(user.table);

    }

}