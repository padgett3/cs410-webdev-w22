// Add your code here

let main = document.querySelector("main");
main.style.width = "50vw";
main.style.margin = "0px auto";

let profilePic = document.createElement("img");
profilePic.src = "../hw1/jacob-square.jpg";
profilePic.alt = "A portrait photo of Jacob Padgett";
profilePic.title = "Photo of me";
profilePic.style.display = "block";
profilePic.style.height = "200px";
profilePic.style.width = "200px";
profilePic.style.margin = "50px auto 25px auto";
profilePic.style.borderRadius = "100px";
main.append(profilePic);

let text1 = document.createElement("p");
text1.textContent = "Hi! I'm Jacob Padgett, pronouns he/him. ";
text1.style.display = "inline";
text1.style.fontWeight = "bold";
text1.style.fontFamily = "sans-serif";
main.append(text1);

let text2 = document.createElement("p");
text2.textContent = "I study full-time\ and work part-time as a student worker\
 for the PSU's central IT department (Office of Information Technology). I'm\
 currently participating in the MECOP internship program in hopes of gaining\
 some real-world CS experience."
text2.style.display = "inline";
text2.style.fontFamily = "sans-serif";
main.append(text2);