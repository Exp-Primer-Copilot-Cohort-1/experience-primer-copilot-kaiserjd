function skillsMember() {
    var member = document.getElementById("member");
    var skills = document.getElementById("skills");
    var projects = document.getElementById("projects");
    var contact = document.getElementById("contact");
    var about = document.getElementById("about");
    var memberInfo = document.getElementById("member-info");
    var skillsInfo = document.getElementById("skills-info");
    var projectsInfo = document.getElementById("projects-info");
    var contactInfo = document.getElementById("contact-info");
    var aboutInfo = document.getElementById("about-info");
    member.style.backgroundColor = "#F2F2F2";
    member.style.color = "#000";
    skills.style.backgroundColor = "#000";
    skills.style.color = "#fff";
    projects.style.backgroundColor = "#000";
    projects.style.color = "#fff";
    contact.style.backgroundColor = "#000";
    contact.style.color = "#fff";
    about.style.backgroundColor = "#000";
    about.style.color = "#fff";
    memberInfo.style.display = "block";
    skillsInfo.style.display = "none";
    projectsInfo.style.display = "none";
    contactInfo.style.display = "none";
    aboutInfo.style.display = "none";
}