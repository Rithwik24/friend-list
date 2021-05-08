
var FriendName= document.getElementById("name1").nodeValue;
names_of_people.push(FriendName;)

names_of_people.sort();

function searching()
{

    var s=document.getElementById("s1").nodeValue;
    var found=0;
    var j;
    
    for(j=0; j<names_of_people.length; j++)
    {
        if(s==names_of_people[j]){
            found=found+1;
        }
    }
    document.getElementById("p2").innerHTML="name found"+found+"time/s";
    console.log("found name"=found+"time/s");
}