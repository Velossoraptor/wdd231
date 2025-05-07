const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");
const today = new Date();
const hamButton = document.querySelector('#hamburger');
const navigation = document.querySelector('nav');

currentyear.innerHTML = today.getFullYear();
lastModified.innerHTML = `Last Modified: ${document.lastModified}`;

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

const courses = [
    {courseCode: 'CSE', number: 110, class: 'complete'},
    {courseCode: 'CSE', number: 111, class: 'complete'},
    {courseCode: 'CSE', number: 210, class: 'complete'},
    {courseCode: 'WDD', number: 130, class: 'complete'},
    {courseCode: 'WDD', number: 131, class: 'complete'},
    {courseCode: 'WDD', number: 231, class: 'incomplete'}
]

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

const allLink = document.querySelector("#all");
allLink.addEventListener("click", () => {
	renderCourses(courses);
});

const cseLink = document.querySelector("#CSE");
cseLink.addEventListener("click", () => {
	renderCourses(courses.filter(course => course.courseCode == 'CSE'));
});

const wddLink = document.querySelector("#WDD");
wddLink.addEventListener("click", () => {
	renderCourses(courses.filter(course => course.courseCode == 'WDD'));
});