function adicionarTarefa() {
  const input = document.getElementById('novaTarefa');
  const texto = input.value.trim();
  if (texto === '') return;

  const lista = document.getElementById('listaTarefas');
  const li = document.createElement('li');
  li.innerHTML = `
    ${texto}
    <button onclick="this.parentElement.remove()">❌</button>
  `;
  lista.appendChild(li);
  input.value = '';
}
