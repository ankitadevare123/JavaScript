var a = {
    data: [],
    add_data: function (name, phone) {
        var DAT = {
            nam: name,
            pho: phone
        }
        this.data.push(DAT)
    },

    find_number: function (name) {
        for (var i = 0; i <= this.data.length; i++) {
            var nam = this.data[i].nam;

            if (nam == name) {
                var phone_given = this.data[i].pho;
                console.log(phone_given);
                break;
            }
        }
        if (nam != name) {
            console.log("USer not found");
        }
    }
}
a.add_data("Ajay", 12344);
a.add_data("B", 24323);
a.add_data("C", 454444);
a.add_data("D", 32456);
a.find_number("Ajay");