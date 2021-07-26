# Padrões de Projeto

## Este repositório tem como principal objetivo servir como consulta na aplicação prática dos principais padrões de projeto

### Conteúdo

- [O que é padrões de projeto?](#O-que-é-padrões-de-projeto?)
- [Categorias dos padrões GoF](#Categorias-dos-padrões-GoF)
  - [Padrões de Criação](#Padrões-de-Criação)
  - [Padrões estruturais](#Padrões-estruturais)
  - [Padrões comportamentais](#Padrões-comportamentais)
- [Padrões de Criação](#Padrões-de-Criação)
  - [Singleton](#Singleton)
  - [Abstract Factory](#local-files)
  - [Factory Method](#local-files)
  - [Builder](#local-files)
  - [Prototype](#local-files)
- [Padrões estruturais](#como-usar)
  - [Adapter](#local-files)
  - [Bridge](#local-files)
  - [Composite](#local-files)
  - [Decorator](#local-files)
  - [Façade](#local-files)
  - [Flyweight](#local-files)
  - [Proxy](#local-files)
- [Padrões comportamentais](#como-usar)
  - [Interpreter](#local-files)
  - [Template method](#local-files)
  - [Chain of responsibility](#local-files)
  - [Iterator](#local-files)
  - [Command](#local-files)
  - [Mediator](#local-files)
  - [Memento](#local-files)
  - [Observer](#local-files)
  - [State](#local-files)
  - [Strategy](#local-files)
  - [Visitor](#local-files)

<h4 align="center">🚧  Projeto Em construção...  🚧</h4>

## Features

- [x] Singleton
- [ ] Abstract Factory
- [ ] Factory Method
- [ ] Builder
- [ ] Prototype

- [ ] Adapter
- [ ] Bridge
- [ ] Composite
- [ ] Decorator
- [ ] Façade
- [ ] Flyweight
- [ ] Proxy

- [ ] Interpreter
- [ ] Template method
- [ ] Chain of responsibility
- [ ] Iterator
- [ ] Command
- [ ] Mediator
- [ ] Memento
- [ ] Observer
- [ ] State
- [ ] Strategy
- [ ] Visitor

# O que é padrões de projeto?

Design Patterns (Padrões de Projeto) são soluções para problemas comuns que encontramos no desenvolvimento ou manutenção de um software

# Categorias dos padrões GoF

## Padrões de Criação

> Os padrões de criação são aqueles que abstraem e ou adiam o processo criação dos objetos. Eles ajudam a tornar um sistema independentemente de como seus objetos são criados, compostos e representados. Um padrão de criação de classe usa a herança para variar a classe que é instanciada, enquanto um padrão de criação de objeto delegará a instanciação para outro objeto... https://pt.wikipedia.org/wiki/Padr%C3%A3o_de_projeto_de_software

## Padrões estruturais

> Os padrões estruturais se preocupam com a forma como classes e objetos são compostos para formar estruturas maiores. Os de classes utilizam a herança para compor interfaces ou implementações, e os de objeto descrevem maneiras de compor objetos para obter novas funcionalidades. A flexibilidade obtida pela composição de objetos provém da capacidade de mudar a composição em tempo de execução o que não é possível com a composição estática (herança de classes). https://pt.wikipedia.org/wiki/Padr%C3%A3o_de_projeto_de_software

## Padrões comportamentais

> Os padrões de comportamento se concentram nos algoritmos e atribuições de responsabilidades entre os objetos. Eles não descrevem apenas padrões de objetos ou de classes, mas também os padrões de comunicação entre os objetos. Os padrões comportamentais de classes utilizam a herança para distribuir o comportamento entre classes, e os padrões de comportamento de objeto utilizam a composição de objetos em contrapartida a herança. Alguns descrevem como grupos de objetos que cooperam para a execução de uma tarefa que não poderia ser executada por um objeto sozinho. https://pt.wikipedia.org/wiki/Padr%C3%A3o_de_projeto_de_software

# Padrões de Criação

## Singleton

Este padrão garante a existência de apenas uma instância de uma classe, mantendo um ponto global de acesso ao seu objeto.
Por exemplo, em uma aplicação que precisa de uma infraestrutura de log de dados, pode-se implementar uma classe no padrão singleton. Desta forma existe apenas um objeto responsável pelo log em toda a aplicação que é acessível unicamente através da classe singleton. Veja o exemplo de uma classe singleton no caminho abaixo:<br/><br/>src\creational\singleton\singleton.ts
