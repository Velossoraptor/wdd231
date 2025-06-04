const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");
const today = new Date();

const hamButton = document.querySelector('#hamburger');
const navigation = document.querySelector('nav');

const numCredits = document.querySelector('#course-num');
const activeLink = document.querySelector('.active');

const courseModal = document.querySelector("#course-details");


activeLink.innerHTML = `🦕${activeLink.innerHTML}`;

currentyear.innerHTML = today.getFullYear();
lastModified.innerHTML = `Last Modified: ${document.lastModified}`;

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

function addCredits(x, y){
    return x+y.credits;
}

function classCard(course){
    if (course.completed == true){
        return `
        <button class="complete" id="${courses.indexOf(course)}">${course.subject} ${course.number}</button>
        `
    }
    else {
        return `
        <button class="incomplete" id="${courses.indexOf(course)}">${course.subject} ${course.number}</button>
        `
    }
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
	renderCourses(courses.filter(course => course.subject == 'CSE'));
    numCredits.innerHTML = courses.filter(course => course.subject == 'CSE').reduce(addCredits, 0);
});

const wddLink = document.querySelector("#WDD");
wddLink.addEventListener("click", () => {
	renderCourses(courses.filter(course => course.subject == 'WDD'));
    numCredits.innerHTML = courses.filter(course => course.subject == 'WDD').reduce(addCredits, 0);
});

const courseButtons = document.querySelectorAll(".complete, .incomplete");

function populateModal(course){
    courseModal.innerHTML = "";
    courseModal.innerHTML = `
    <div>
        <button id="closeModal">X</button>
        <h2>${course.subject} ${course.number}</h2>
        <h3>${course.title}</h3>
        <p><strong>Credits</strong>: ${course.credits}</p>
        <p><strong>Certification</strong>: ${course.certificate}</p>
        <p>${course.description}</p>
        <p><strong>Technologies</strong>: ${course.technology}</p>
    </div>
    `;
    courseModal.showModal();

    closeModal.addEventListener("click", () =>{
        courseModal.close();
    });

    courseModal.addEventListener("click", (event) => {
        if(event.target==courseModal){
            courseModal.close();
        }
    });
}

function addModalTrigger(){
    courseButtons.forEach((button) =>{
        button.addEventListener("click", ()=>{
            populateModal(courses[button.id]);
        });
    });
}

addModalTrigger();

