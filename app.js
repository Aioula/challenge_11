window.addEventListener('load', () => {
	const form = document.querySelector(".addd");
	const input = document.querySelector("#task");
	const list_el = document.querySelector("#tasks");

    form.addEventListener('submit',(e)=>{
		e.preventDefault();
        const task= input.value;
        
        if(!task){
            window.alert(`please fill out the task`)
        }
        const task_el = document.createElement('div');
		task_el.classList.add('first');
        list_el.appendChild(task_el);

        const task_input_el = document.createElement('input');
        task_input_el.classList.add('text')
        task_input_el.type='text'
        task_input_el.value=task;
        task_input_el.setAttribute('readonly','readonly')

        const task_edit_el = document.createElement('button');
		task_edit_el.classList.add('fir');
		task_edit_el.innerText = 'DELETE';

        const task_delete_el = document.createElement('button');
		task_delete_el.classList.add('sec');
		task_delete_el.innerText = 'EDIT';

        task_el.appendChild(task_input_el)
        task_el.appendChild(task_edit_el)
        task_el.appendChild(task_delete_el)

        input.value=""


        task_delete_el.addEventListener('click', (e) => {
			if (task_delete_el.innerText == "EDIT") {
				task_delete_el.innerText = "SAVE";
				task_input_el.removeAttribute("readonly");
				task_input_el.focus();
			} else {
				task_delete_el.innerText = "Edit";
				task_input_el.setAttribute("readonly", "readonly");
			}
		});

        task_edit_el.addEventListener('click',(e)=>{
            list_el.removeChild(task_el)
        })

    })
});