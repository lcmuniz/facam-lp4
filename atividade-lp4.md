## Atividade: Lista de Tarefas Dinâmica com HTMX

**Objetivo:**

Aprender a criar uma lista de tarefas interativa que permite adicionar, marcar como concluídas e remover tarefas sem precisar recarregar a página inteira, utilizando o HTMX para simplificar as requisições AJAX.

**Tarefa:**

1. **Estrutura HTML:**
   - Crie uma lista (`<ul>`) para exibir as tarefas.
   - Crie um formulário (`<form>`) com um campo de entrada (`<input>`) para adicionar novas tarefas e um botão de "Adicionar".
   - Adicione o atributo `hx-post` ao formulário, apontando para uma URL que processará a adição de tarefas.
   - Crie um modelo HTML para cada item da lista, incluindo um checkbox para marcar como concluída e um botão (ou link) para remover a tarefa.

2. **Processamento no Servidor:**
   - Crie um endpoint para receber as requisições do formulário (POST) e adicionar a nova tarefa a um banco de dados, arquivo JSON ou outra forma de armazenamento.
   - Crie endpoints para lidar com as requisições de marcar como concluída (PATCH/PUT) e remover tarefas (DELETE).
   - Retorne um fragmento de HTML atualizado com a lista de tarefas modificada, que será inserido automaticamente na página pelo HTMX.

3. **Interação com o HTMX:**
   - Adicione os atributos `hx-trigger`, `hx-target` e `hx-swap` aos elementos da lista para controlar quando e como as atualizações serão feitas.
   - Use o atributo `hx-confirm` para solicitar confirmação antes de remover uma tarefa.

**Dicas:**

- Comece com uma versão simplificada, sem persistência de dados, apenas para entender o funcionamento do HTMX.
- Utilize um framework web (como Flask, Django, Express) para facilitar a criação dos endpoints e o gerenciamento das requisições.
- Explore as diversas opções de personalização do HTMX, como animações e mensagens de feedback.

**Exemplo de código HTML (simplificado):**

```html
<ul id="task-list">
  </ul>

<form hx-post="/add_task" hx-swap="beforeend:#task-list">
  <input type="text" name="task">
  <button type="submit">Adicionar</button>
</form>
```

**Desafios Extras:**

- Adicionar filtros para exibir apenas tarefas concluídas ou pendentes.
- Implementar a funcionalidade de arrastar e soltar para reordenar as tarefas.
- Utilizar o Alpine.js para adicionar mais interatividade e recursos à lista de tarefas.

**Recursos:**

- Documentação do HTMX: [https://htmx.org/](https://htmx.org/)
- Exemplos de projetos com HTMX: [https://htmx.org/examples/](https://htmx.org/examples/)
- Tutoriais e artigos sobre HTMX: [Pesquise na web por "tutorial HTMX" ou "exemplos HTMX"]
