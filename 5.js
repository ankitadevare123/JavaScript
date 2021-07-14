var a = {
    data: [],
    add_data: function (name, age) {
        var Ob = {
            nam: name,
            age_of: age
        }

        this.data.push(Ob)
    },
    chkage: function (){
        for (var i = 0; i <= this.data.length; i++) {
         var age1 = this.data[i].age_of;

            if (age1 == 30) {
                var name_of = this.data[i].nam;
                console.log(name_of);
                
            }
       }
    }
}

a.add_data("Ajay", 30);
a.add_data("B", 30);
a.add_data("C", 30);
a.add_data("D", 42);
a.chkage();

/*
find_number: function (name) {
    for (var i = 0; i <= this.data.length; i++) {
        var nam = this.data[i].nam;

        if (nam == name) {
            var phone_given = this.data[i].pho;
            console.log(phone_given);
            break;
        }
    }*/