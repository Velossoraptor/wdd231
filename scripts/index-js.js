const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");
const today = new Date();
const hamButton = document.querySelector('#hamburger');
const navigation = document.querySelector('nav');
const numCredits = document.querySelector('#course-num');

currentyear.innerHTML = today.getFullYear();
lastModified.innerHTML = `Last Modified: ${document.lastModified}`;

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

const courses = [
    {courseCode: 'CSE', number: 110, class: 'complete', credits: 2},
    {courseCode: 'CSE', number: 111, class: 'complete', credits: 2},
    {courseCode: 'CSE', number: 210, class: 'complete', credits: 2},
    {courseCode: 'WDD', number: 130, class: 'complete', credits: 2},
    {courseCode: 'WDD', number: 131, class: 'complete', credits: 2},
    {courseCode: 'WDD', number: 231, class: 'incomplete', credits: 2}
]

function addCredits(x, y){
    return x+y.credits;
}

function classCard(course){
    return `
    <p class="${course.class}">${course.courseCode} ${course.number}</p>
    `
}

function renderCourses(courses) {
    const html = courses.map(classCard);
    document.querySelector('.course-names').innerHTML = html.join("");
}

renderCourses(courses);
numCredits.innerHTML = courses.reduce(addCredits, 0);

const allLink = document.querySelector("#all");
allLink.addEventListener("click", () => {
	renderCourses(courses);
    numCredits.innerHTML = courses.reduce(addCredits, 0);
});

const cseLink = document.querySelector("#CSE");
cseLink.addEventListener("click", () => {
	renderCourses(courses.filter(course => course.courseCode == 'CSE'));
    numCredits.innerHTML = courses.filter(course => course.courseCode == 'CSE').reduce(addCredits, 0);
});

const wddLink = document.querySelector("#WDD");
wddLink.addEventListener("click", () => {
	renderCourses(courses.filter(course => course.courseCode == 'WDD'));
    numCredits.innerHTML = courses.filter(course => course.courseCode == 'WDD').reduce(addCredits, 0);
});

