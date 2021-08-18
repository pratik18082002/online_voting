// code for writing string Voted after click
var x = document.getElementById("candidate2");
var y = document.getElementById("candidate1");

x.addEventListener("click", myFunction);
y.addEventListener("click", myFunction);

 function myFunction() {
    document.getElementById("vote").innerHTML = "Voted"
  }
//code for increamenting vote by one 

var a=1;

function vote_increament1() {
  if(a<2){
  if (confirm("Are you confirm to vote andidate -1 Narendra Modi because you won't be able to change your vote later?")) {
    if(a<2){
      document.getElementById("vote1").innerHTML=a;
    }
  } else {
    window.location.href='Voting_page.html'
  }}
  a++;
}

function vote_increament2() {
  if(a<2){
    if (confirm("Are you confirm to vote andidate -2 Rahul Gandhi because you won't be able to change your vote later?")) {
      if(a<2){
        document.getElementById("vote2").innerHTML=a;
      }
    } else {
      window.location.href='Voting_page.html'
    }}
    a++;
}

