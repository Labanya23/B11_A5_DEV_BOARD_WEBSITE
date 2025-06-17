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

    const log = document.querySelector(' .activity.log');
    const newLogItem = document.createElement('div');
    newLogItem.className = 'log-item bg-white border border-gray-200 rounded-md p-4 mb-2';
    const timestamp = new Date().toLocaleTimeString();
    newLogItem.innerHTML = `<span>You have completed the task "${taskTitle}" at ${timestamp}</span>`;
    log.appendChild(newLogItem);

    const takeCountElement = document.querySelector('.task-count');
    if(taskCountElement){
        let currentCount = parseInt(taskCountElement.textContent,10);
        if(!isNaN(currentCount)&& currentCount > 0){
            taskCountElement.textContent = currentCount - 1;
        }
    }

    const taskCount2 = document.querySelector('.task-count-2');
    if(taskCount2){
        let currentCount2=parseInt(taskCount2.textContent,10);
        if(!isNan(currentCount2)){
            taskCount2.textContent = currentCount2 +1;
        }
    }

});

const clearHistoryButton = document.querySelector('.clear-history');
if(clearHistoryButton){
    clearHistoryButton.addEventListener('click',function(){
              
                const log = document.querySelector('.activity-log');
                const logItems = log.querySelectorAll('.log-item');
                logItems.forEach(item => item.recover());
              });
    }
