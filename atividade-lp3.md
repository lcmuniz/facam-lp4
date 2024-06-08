## Atividade com Spring Boot e Thymeleaf: Lista de Tarefas

**Objetivo:**

Desenvolver uma aplicação web simples para gerenciar uma lista de tarefas, utilizando Spring Boot como framework e Thymeleaf como template engine. Essa atividade visa consolidar conhecimentos em desenvolvimento web Java, persistência de dados e interação com o usuário.

**Requisitos:**

* **IDE:** Eclipse, IntelliJ IDEA ou similar.
* **JDK:** Java Development Kit (versão 8 ou superior).
* **Maven:** Gerenciador de dependências.
* **Conhecimento básico:** Spring Boot, Thymeleaf, HTML, CSS, JavaScript.

**Passos:**

1. **Configuração do Projeto:**
   - Crie um novo projeto Spring Boot (usando Spring Initializr ou sua IDE).
   - Adicione as dependências: Spring Web, Thymeleaf, Spring Data JPA (se usar banco de dados), H2 Database (para testes).

2. **Modelagem da Tarefa:**
   - Crie uma classe `Tarefa` com atributos: `id` (Long), `descricao` (String), `concluida` (boolean).
   - Use as anotações `@Entity` e `@Id` para mapeamento com o banco de dados (opcional).

3. **Criação do Repositório (opcional):**
   - Se usar banco de dados, crie uma interface `TarefaRepository` que estenda `JpaRepository`.

4. **Desenvolvimento do Controlador:**
   - Crie uma classe `TarefaController` com métodos:
     - `@GetMapping("/")`: Exibe a lista de tarefas (página inicial).
     - `@PostMapping("/adicionar")`: Adiciona uma nova tarefa.
     - `@PostMapping("/concluir/{id}")`: Marca uma tarefa como concluída.
     - `@PostMapping("/excluir/{id}")`: Exclui uma tarefa.

5. **Criação das Páginas Thymeleaf:**
   - Crie os templates:
     - `index.html`: Lista as tarefas, formulário para adicionar.
     - `tarefa.html`: Fragmento para exibir uma tarefa (opcional).
   - Use diretivas Thymeleaf para iterar sobre as tarefas, exibir dados e criar links.

6. **Estilização (opcional):**
   - Adicione CSS para personalizar a aparência da lista.

**Exemplo de Código (Controlador):**

```java
@Controller
public class TarefaController {

    @Autowired
    private TarefaRepository tarefaRepository; // Opcional

    @GetMapping("/")
    public String listarTarefas(Model model) {
        model.addAttribute("tarefas", tarefaRepository.findAll()); // Opcional
        return "index";
    }

    // ... outros métodos ...
}
```

**Desafios Adicionais (opcional):**

- Implementar edição de tarefas.
- Adicionar datas de vencimento.
- Categorizar tarefas.
- Usar um banco de dados real (MySQL, PostgreSQL).
- Criar testes unitários e de integração.