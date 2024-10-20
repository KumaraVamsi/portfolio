

    AOS.init();
    function validateForm() {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value;
        const successMessage = document.getElementById("successMessage");

        // Simple email validation regex
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/;

        // Check if any field is empty
        if (!name || !email || !subject || !message) {
            alert("Please fill in all fields.");
            return false;
        }

        // Check if email format is valid
        if (!email.match(emailPattern)) {
            alert("Please enter a valid email address.");
            return false;
        }

        // If validation passes, display success message (simulate submission)
        successMessage.style.display = "block";
        alert("Thank you, " + name + "! Your message has been sent.");
        return false; // Prevent actual form submission for demo purposes
    }


    // Theme toggle script
    const themeSwitch = document.getElementById('theme-switch');
    themeSwitch.addEventListener('change', () => {
        document.body.classList.toggle('light-mode');
    });
    // Function to open the modal with project details
    function openModal(imgElement) {
        const modal = document.getElementById('modal');
        const modalContent = document.getElementById('modal-content');

        // Get the project details based on the clicked image
        const projectTitle = imgElement.nextElementSibling.innerText;
        const projectDescription = imgElement.nextElementSibling.nextElementSibling.innerText; // Get the description from the <p> tag

        // Construct modal content
        modalContent.innerHTML = `
    <img src="${imgElement.src}" alt="${projectTitle}">
    <h3>${projectTitle}</h3>
    <p>${projectDescription}</p>
    <p><strong>Additional details about ${projectTitle} can go here.</strong></p>
`;

        modal.style.display = 'block';
    }

    // Function to close the modal
    function closeModal() {
        document.getElementById('modal').style.display = 'none';
    }

    // Function to filter projects based on selected category
    function filterProjects() {
        const filterValue = document.getElementById('filter').value;
        const projects = document.querySelectorAll('.project');

        projects.forEach(project => {
            const category = project.getAttribute('data-category');
            if (filterValue === 'all' || category === filterValue) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });
    }

    function openModal(imgElement) {
        const modal = document.getElementById('modal');
        const modalContent = document.getElementById('modal-content');

        const projectTitle = imgElement.nextElementSibling.innerText;
        const projectDescription = imgElement.nextElementSibling.nextElementSibling.innerText;

        modalContent.innerHTML = `
            <img src="${imgElement.src}" alt="${projectTitle}">
            <h3>${projectTitle}</h3>
            <p>${projectDescription}</p>
            <p><strong>Additional details about ${projectTitle} can go here.</strong></p>
        `;

        modal.style.display = 'block';
    }

    // Function to close the modal
    function closeModal(event) {
        if (event.target === document.getElementById('modal')) {
            document.getElementById('modal').style.display = 'none';
        }
    }
