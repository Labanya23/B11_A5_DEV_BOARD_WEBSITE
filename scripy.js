const completeButtons = document.querySelectorAll('.completed');

completeButtons.forEach(button=>{
    if(this.dsabled) return;

    const parent= this.closest('.task-card');
    const heading=parent.querySelector('h3');
    const paragraph = parent.querySelector('p');
    const taskTitle = heading? heading.textContent: paragraph.textContent;

    this.classList.remove('bg-blue-800');
    this.classList.add('bg-gray-500','cursor-not-allowed');
    this.textContent = 'Completed'
    this.disabled = true;

    alert('Board updated successfully');
})