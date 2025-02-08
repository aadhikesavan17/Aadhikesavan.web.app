/*window.onload = function() {
    const line = document.querySelector('.line');
    line.classList.add('loaded'); // Add class after the page loads
};*/

// script.js
window.addEventListener('load', function() {
    const profileContainer = document.querySelector('.profile-container');
    const line = document.querySelector('.line');
    const projectContainer = document.querySelector('.project-container');
    const resumeContainer = document.querySelector('.resume-container');
    const hiContainer = document.querySelector('.hi-container');
    const feastContainer = document.querySelector('.feast-container');
    const aboutContainer = document.querySelector('.about-container');
    const skillsContainer = document.querySelector('.skills-container');
    const leetcodeContainer = document.querySelector('.leetcode-container');
    // Add a delay before adding the class to trigger the animation for profileContainer
    setTimeout(() => {
        profileContainer.classList.add('loaded2'); // Trigger animation for profileContainer
    }, 700); // 1 second delay before starting the animation

    // Immediately add class for line after the page loads
    line.classList.add('loaded'); // Trigger animation for line

    setTimeout(() => {
        projectContainer.classList.add('loaded'); // Trigger animation
    }, 700); // 1 second delay before starting the animation

    setTimeout(() => {
        resumeContainer.classList.add('loaded'); // Trigger animation
    }, 700); // 1.5 second delay before starting the animation

    setTimeout(() => {
        hiContainer.classList.add('loaded'); // Trigger animation
    }, 700); // 2 seconds delay before starting the animation

    setTimeout(() => {
        feastContainer.classList.add('loaded'); // Trigger animation
    }, 700); // 3 seconds delay before starting the animation

    setTimeout(() => {
        aboutContainer.classList.add('loaded'); // Trigger animation
    }, 700); // 4 seconds delay before starting the animation

    setTimeout(() => {
        skillsContainer.classList.add('loaded'); // Trigger animation
    }, 700); // 5 seconds delay before starting the animation

    setTimeout(() => {
        leetcodeContainer.classList.add('loaded'); // Trigger animation
    }, 700); // 1.5 second delay before starting the animation
});



var aboutButton = document.querySelector(".about")
var mainContainer = document.querySelector(".main-container")

class MainContainer {
    constructor() {
        this.init();
    }

    init() {
        document.querySelector('.about').addEventListener('click', () => this.about());
    }

    about() {
        // Animate the element to move to the right
        anime({
            targets: '.main-container',
            translateY: -1700,
            duration: 1000, // Duration of the animation
            easing: 'linear',
            complete: () => {
                // After the animation completes, redirect to the new page
                window.location.href = 'about.html'; // Change this to your new page URL
            }
        });
    }
}

// Ensure the DOM is fully loaded before initializing
document.addEventListener('DOMContentLoaded', () => {
    new MainContainer();
});


class MainIndexContainer {
    constructor() {
        this.init();
    }

    init() {
        document.querySelector('.arrow').addEventListener('click', () => this.arrow());
    }

    arrow() {
        // Animate the element to move to the right
        anime({
            targets: '.about-main-container',
            translateY: 1700,
            duration: 1000, // Duration of the animation
            easing: 'linear',
            complete: () => {
                // After the animation completes, redirect to the new page
                window.location.href = 'index.html'; // Change this to your new page URL
            }
        });
    }
}

// Ensure the DOM is fully loaded before initializing
document.addEventListener('DOMContentLoaded', () => {
    new MainIndexContainer();
});

class MyskillContainer {
    constructor() {
        this.init();
    }

    init() {
        document.querySelector('.skills').addEventListener('click', () => this.skills());
    }

    skills() {
        // Animate the element to move to the right
        anime({
            targets: '.main-container',
            translateY: -1700,
            duration: 1000, // Duration of the animation
            easing: 'linear',
            complete: () => {
                // After the animation completes, redirect to the new page
                window.location.href = 'myskill.html'; // Change this to your new page URL
            }
        });
    }
}

// Ensure the DOM is fully loaded before initializing
document.addEventListener('DOMContentLoaded', () => {
    new MyskillContainer();
});



class ProjectContainer {
    constructor() {
        this.init();
    }

    init() {
        document.querySelector('.project').addEventListener('click', () => this.project());
    }

    project() {
        // Animate the element to move to the right
        anime({
            targets: '.main-container',
            translateX: 2900,
            duration: 1000, // Duration of the animation
            easing: 'easeInOutCubic',
            complete: () => {
                // After the animation completes, redirect to the new page
                window.location.href = 'project.html'; // Change this to your new page URL
            }
        });
    }
}

// Ensure the DOM is fully loaded before initializing
document.addEventListener('DOMContentLoaded', () => {
    new ProjectContainer();
});

document.getElementById('nav-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    document.body.classList.add('fade-out'); // Add fade-out class

    // Wait for the transition to complete before navigating
    setTimeout(() => {
        window.location.href = this.href; // Navigate to the new page
    }, 1000); // Match this duration with your CSS transition duration
});

 // Define the feast function in the global scope
 function feast() {
    // Animate the element to move to the right
    anime({
        targets: '.main-container',
        translateX: -2900, // Move to the right
        duration: 1000, // Duration of the animation
        easing: 'linear',
        complete: () => {
            // After the animation completes, redirect to the new page
            window.location.href = 'feast.html'; // Change this to your new page URL
        }
    });
}






