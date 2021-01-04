//Carrega as configurações do HaTeMiLee
let configuration = new hatemile.util.Configure(hatemile_configuration)
//Instancia os parsers HTML e CSS, necessários para executar as correções
let htmlParser = new hatemile.util.html.vanilla.VanillaHTMLDOMParser(document)
//Instancia a classe de soluções para os problemas de acessibilidade do CSS.
let accessibleCSS = new hatemile.implementation.AccessibleCSSImplementation(
  htmlParser,
  hatemile_configuration_symbols
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

//Instancia a classe de soluções de navegação da biblioteca.
let accessibleNavigation = new hatemile.implementation.AccessibleNavigationImplementation(
  htmlParser,
  configuration,
  hatemile_configuration_skippers
)
//Permite que o usuário possa navegar entre os cabeçalhos da página.
accessibleNavigation.provideNavigationByAllHeadings()
//Permite que o usuário possa saltar conteúdos da página pré-definidos pelo desenvolvedor.
accessibleNavigation.provideNavigationByAllSkippers()
//Permite que o usuário possa navegar para as descrições longas das imagens.
accessibleNavigation.provideNavigationToAllLongDescriptions()

//Instancia a classe de soluções de problemas de associação
let accessibleAssociation = new hatemile.implementation.AccessibleAssociationImplementation(
  htmlParser,
  configuration
)
//Associa as células de dados das tabelas sejam associadas com as células de cabeçalho
accessibleAssociation.associateAllDataCellsWithHeaderCells()
//Associa os rótulos aos seus respectivos campos, caso já não estejam associados
accessibleAssociation.associateAllLabelsWithFields()

//Instancia a classe para forçar o leitor de tela a disponibilizar informações sobre a página.
let accessibleScreenReader = new hatemile.implementation.AccessibleDisplayScreenReaderImplementation(
  htmlParser,
  configuration,
  navigator.userAgent
)
//Força o leitor de tela a mostrar para o usuário o atributo “role” utilizado nos elementos.
accessibleScreenReader.displayAllRoles()
//Força o leitor de tela a mostrar para o usuário os cabeçalhos das células de dados das tabelas.
accessibleScreenReader.displayAllCellHeaders()
//Força o leitor de tela a mostrar para o usuário todos os atalhos da página, definidos pelo atributo “accesskey”.
accessibleScreenReader.displayAllShortcuts()
//Força o leitor de tela a mostrar para o usuário os valores do WAI-ARIA.
accessibleScreenReader.displayAllWAIARIAStates()
//Força o leitor de tela a mostrar para o usuário alguns atributos dos links.
accessibleScreenReader.displayAllLinksAttributes()
//Força o leitor de tela a mostrar para o usuário o conteúdo dos títulos dos elementos.
accessibleScreenReader.displayAllTitles()
//Força o leitor de tela a mostrar para o usuário qual o idioma do elemento.
accessibleScreenReader.displayAllLanguages()
