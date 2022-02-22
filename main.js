nameofthestudent=[];
function submit(){
    displaystudent=[];
    for( var i = 1; i <= 4; i++){
        var names= document.getElementById("name_of_the_student_" + i).value;
        console.log(names);
        nameofthestudent.push(names);
    }
     var namesofthestudentlength= nameofthestudent.length;
     console.log(namesofthestudentlength);
     for(var h = 0; h < namesofthestudentlength; h++){
         displaystudent.push(" <h4> Name of the Students: "+nameofthestudent[h] + "</h4>");
         console.log(displaystudent)
     }
     document.getElementById("display_name_with_commas").innerHTML= displaystudent;
     document.getElementById("display_name_without_commas").innerHTML= displaystudent.join(" ");
     document.getElementById("submit_button").style.display="none";
     document.getElementById("sort_button").style.display="inline-block";
}
function sorting(){
    nameofthestudent.sort();
    console.log(nameofthestudent);
    var lengthnames= nameofthestudent.length;
    console.log(lengthnames);
    sortedlist=[];
    for(var c = 0; c < lengthnames; c++){
        sortedlist.push("<h4> Name of the Students: "+nameofthestudent[c] + "</h4>");
        console.log(sortedlist);
    }
    document.getElementById("display_name_without_commas").innerHTML= sortedlist.join(" ");
}