function generateResume(): void {
    const nameInput = document.getElementById("name") as HTMLInputElement;
    const jobTitleInput = document.getElementById("jobTitle") as HTMLInputElement;
    const phoneInput = document.getElementById("phone") as HTMLInputElement;
    const emailInput = document.getElementById("email") as HTMLInputElement;
    const locationInput = document.getElementById("location") as HTMLInputElement;
    const summaryInput = document.getElementById("summary") as HTMLInputElement;
    const certificationsInput = document.getElementById("certifications") as HTMLInputElement;
    const educationInput = document.getElementById("education") as HTMLInputElement;
    const skillsInput = document.getElementById("skills") as HTMLInputElement;
    const workExperienceInput = document.getElementById("workExperience") as HTMLInputElement;

    const name = nameInput.value;
    const jobTitle = jobTitleInput.value;
    const phone = phoneInput.value;
    const email = emailInput.value;
    const location = locationInput.value;
    const summary = summaryInput.value;
    const certifications = certificationsInput.value.split(',').map(cert => cert.trim());
    const education = educationInput.value;
    const skills = skillsInput.value.split(',').map(skill => skill.trim());
    const workExperience = workExperienceInput.value;

    (document.getElementById("name-output") as HTMLElement).textContent = name;
    (document.getElementById("jobTitle-output") as HTMLElement).textContent = jobTitle;
    (document.getElementById("phone-output") as HTMLElement).textContent = phone;
    (document.getElementById("email-output") as HTMLElement).textContent = email;
    (document.getElementById("location-output") as HTMLElement).textContent = location;
    (document.getElementById("summary-output") as HTMLElement).textContent = summary;

    (document.getElementById("certification-output") as HTMLElement).innerHTML = certifications
        .map(cert => `<p><strong>${cert}</strong></p>`)
        .join('');

    (document.getElementById("education-output") as HTMLElement).innerHTML = `<p><strong>${education}</strong></p>`;
    
    (document.getElementById("skills-output") as HTMLElement).innerHTML = skills
        .map(skill => `<li>${skill}</li>`)
        .join('');
    
    (document.getElementById("work-experience-output") as HTMLElement).textContent = workExperience;
}

function handleProfileImageChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files ? input.files[0] : null;

    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();

        reader.onload = (e: ProgressEvent<FileReader>) => {
            const imgElement = document.getElementById('profile-picture-preview') as HTMLImageElement;
            if (imgElement && e.target) {
                imgElement.src = e.target.result as string;
            }
        };

        reader.readAsDataURL(file);
    } else {
        console.error("Please select a valid image file.");
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const profileImageInput = document.getElementById('profileImage') as HTMLInputElement;
    if (profileImageInput) {
        profileImageInput.addEventListener('change', handleProfileImageChange);
    }
});

// Adding functionality to make resume sections editable on click
const editableElements = document.querySelectorAll('.editable') as NodeListOf<HTMLElement>;

editableElements.forEach(element => {
    element.addEventListener('input', (e: Event) => {
        const target = e.target as HTMLElement;
        target.style.border = '1px solid #ccc'; // Add slight visual feedback
    });
});
