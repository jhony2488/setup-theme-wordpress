//Carrega as configurações do HaTeMiLee
let configuration = new hatemile.util.Configure(hatemile_configuration)
//Instancia os parsers HTML e CSS, necessários para executar as correções
let htmlParser = new hatemile.util.html.vanilla.VanillaHTMLDOMParser(document)
//Instancia a classe de soluções para os problemas de acessibilidade do CSS.
let accessibleCSS = new hatemile.implementation.AccessibleCSSImplementation(
  htmlParser
)
//Instancia a classe de soluções para os problemas de acessibilidade referentes aos eventos JavaScript inacessíveis via teclado.
let accessibleEvent = new hatemile.implementation.AccessibleEventImplementation(
  htmlParser
)
//Faz com que os eventos de Drag-and-Drop possam ser utilizados através do teclado, utilizando espaço para selecionar o elemento, Enter para soltar o elemento selecionado sobre outro elemento e Esc para soltar o elemento selecionado.
accessibleEvent.makeAccessibleAllDragandDropEvents()
//Faz com que os eventos de passar o mouse sobre os elementos se tornem acessíveis pelo teclado.
accessibleEvent.makeAccessibleAllHoverEvents()
//Faz com que os eventos de click do mouse possam ser utilizados através do teclado selecionando o elemento e pressionando Enter.
accessibleEvent.makeAccessibleAllClickEvents()

//Instância a classe de soluções para elementos de formulários da biblioteca.
let accessibleForm = new hatemile.implementation.AccessibleFormImplementation(
  htmlParser,
  configuration
)
//Utiliza o atributo aria-required para informar ao usuário quando um campo é obrigatório, pesquisando pelos elementos que possuem o atributo required.
accessibleForm.markAllRequiredFields()
//Utiliza os atributos aria-valuemin e aria-valuemax para informar ao usuário o valor mínimo e máximo de um campo, pesquisando pelos elementos que possuem os atributos min ou max.
accessibleForm.markAllRangeFields()
//Utiliza o atributo aria-autocomplete para informar ao usuário quando um campo possuí o recurso de autocompletar, pesquisando pelos elementos que possuem o atributo autocomplete.
accessibleForm.markAllAutoCompleteFields()
//Realiza validações nos campos e utiliza o atributo aria-invalid para informar ao usuário se um campo está com um valor inválido ou não.
accessibleForm.markAllInvalidFields()

