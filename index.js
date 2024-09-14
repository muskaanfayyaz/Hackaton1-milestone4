"use strict";
function generateResume() {
    const nameInput = document.getElementById("name");
    const jobTitleInput = document.getElementById("jobTitle");
    const phoneInput = document.getElementById("phone");
    const emailInput = document.getElementById("email");
    const locationInput = document.getElementById("location");
    const summaryInput = document.getElementById("summary");
    const certificationsInput = document.getElementById("certifications");
    const educationInput = document.getElementById("education");
    const skillsInput = document.getElementById("skills");
    const workExperienceInput = document.getElementById("workExperience");
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
    document.getElementById("name-output").textContent = name;
    document.getElementById("jobTitle-output").textContent = jobTitle;
    document.getElementById("phone-output").textContent = phone;
    document.getElementById("email-output").textContent = email;
    document.getElementById("location-output").textContent = location;
    document.getElementById("summary-output").textContent = summary;
    document.getElementById("certification-output").innerHTML = certifications
        .map(cert => `<p><strong>${cert}</strong></p>`)
        .join('');
    document.getElementById("education-output").innerHTML = `<p><strong>${education}</strong></p>`;
    document.getElementById("skills-output").innerHTML = skills
        .map(skill => `<li>${skill}</li>`)
        .join('');
    document.getElementById("work-experience-output").textContent = workExperience;
}
function handleProfileImageChange(event) {
    const input = event.target;
    const file = input.files ? input.files[0] : null;
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const imgElement = document.getElementById('profile-picture-preview');
            if (imgElement && e.target) {
                imgElement.src = e.target.result;
            }
        };
        reader.readAsDataURL(file);
    }
    else {
        console.error("Please select a valid image file.");
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const profileImageInput = document.getElementById('profileImage');
    if (profileImageInput) {
        profileImageInput.addEventListener('change', handleProfileImageChange);
    }
});
// Adding functionality to make resume sections editable on click
const editableElements = document.querySelectorAll('.editable');
editableElements.forEach(element => {
    element.addEventListener('input', (e) => {
        const target = e.target;
        target.style.border = '1px solid #ccc'; // Add slight visual feedback
    });
});
