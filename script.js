
let input = document.querySelector('#input');
let list = document.querySelector('#list');

input.addEventListener('keypress', function (event) {
	if (event.key == 'Enter') {
		let li = document.createElement('li');
		list.appendChild(li);

		let item = document.createElement('span');
		item.textContent = input.value;
		item.classList.add('item');
		li.appendChild(item);
		input.value = '';

		item.addEventListener('dblclick', function () {
			let input2 = document.createElement('input');
			input2.value = item.textContent;
			li.prepend(input2);
			item.style.display = 'none';

			input2.addEventListener('keypress', function (event) {
				if (event.key == 'Enter') {
					item.textContent = input2.value;
					li.prepend(item);
					input2.remove();
					item.style.display = 'inline';
				}
			})
		})

		let made = document.createElement('span');
		made.textContent = 'Выполнено';
		made.classList.add('made');
		li.appendChild(made);

		made.addEventListener('click', function () {
			item.classList.toggle('made--active');
		})

		let remove = document.createElement('span');
		remove.textContent = 'Удалить';
		remove.classList.add('remove');
		li.appendChild(remove);

		remove.addEventListener('click', function () {
			li.remove();
		})
	}
})

