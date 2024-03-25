function showSection(sectionId) {
    var educationSection = document.getElementById('education');
    var skillsSection = document.getElementById('skills');
    var projectSection=document.getElementById('project')

    if (sectionId === 'education') {
        educationSection.classList.remove('hidden');
        skillsSection.classList.add('hidden');
        projectSection.classList.add('hidden'); 
    } else if (sectionId === 'skills') {
        educationSection.classList.add('hidden');
        skillsSection.classList.remove('hidden');
        projectSection.classList.add('hidden'); 
    }
    else if (sectionId === 'project') {
        educationSection.classList.add('hidden');
        skillsSection.classList.add('hidden');
        projectSection.classList.remove('hidden'); 
    }
}