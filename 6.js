var a = {
    data: [],
    add_data: function (name, skill) {

        var Ob = {
            nam: name,
            ski: skill
        };
        this.data.push(Ob)
    },

    chkskill: function (skill) {
        for (var i = 0; i <this.data.length; i++) {
            var ski = this.data[i].ski;
        


        if (ski == skill) {
            var name1 = this.data[i].nam;
            console.log(name1);
            break;
        
        }
        }
          if(ski != skill) {
        console.log('Invalid skill');
       }

    }

}
/*
a.add_data("Ajay", ['Java','C']);
a.add_data("B", ['C','Js']);
a.add_data("C", ['DS','Js']);
a.add_data("D", ['C','']);
*/

a.add_data("A","Ds")
a.add_data("B", "JS");
a.add_data("C", "C");
a.add_data("D", "C++");
a.chkskill('JS');