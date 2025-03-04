---
title: O recurso de digitalização é liberado para a comunidade
date: 14/09/2018
description: Fornecendo uma nova maneira de interagir entre usuários e aplicativos
categories:
  - bordo
  - usabilidade
  - acessibilidade
  - reagir
  - reactable-scannable
image: /images/scanning.png
author_staff_member: tinchodipalma
---

Temos orgulho em dizer que desenvolvemos uma ferramenta de verificação aberta à comunidade e de uso gratuito. Chamamos isso de `react-scannable` e está disponível para download no npm como um pacote.

## O que é react-scannable?

O React-scannable fornece um scanner, o que significa um Componente React que explora seus filhos digitalizáveis (botões, divs, outros componentes) e permite que o aplicativo interaja com eles de uma nova maneira.

O React-scannable é um pacote npm criado na parte superior do React e do JavaScript. Os desenvolvedores podem usar este pacote para incluir um scanner em seus projetos React.

## O que o react-scannable faz?

Quando um scanner está ativo, ele repete os elementos que foram identificados como verificáveis e permite que eles executem ações quando focados na tela.

![reactable-scannable em ação](/images/scanning.gif)

O objetivo é ampliar o relacionamento entre o usuário e o aplicativo, permitindo outra forma de interação.

No momento em que este post foi escrito, `react-scannable` possui dois métodos de interação: automático e manual.

O método automático interage periodicamente sobre elementos digitalizáveis em sequência. Depois de pressionar qualquer tecla (ou clicar na tela), o elemento digitalizável focalizado é selecionado e o scanner itera sobre os elementos digitalizáveis dentro dele ou delegará o evento ao elemento se ele não tiver filhos filhos digitalizáveis.

O comportamento do método manual é bem diferente. Ele itera sobre os elementos digitalizáveis quando o usuário pressiona as teclas de espaço / guia e os seleciona se o usuário pressiona as teclas Enter / Backspace.

Mesmo se você estiver usando o método automático ou manual, o usuário poderá desativar o scanner pressionando Escape quatro vezes.

## Cboard e reativável

O Cboard usa react-scannable para implementar o recurso de scanner apenas para digitalizar toda a placa.

Usuários que usam um switch para interagir com aplicativos podem se comunicar como qualquer outro usuário.

![interruptor](/images/switch.jpg)

Isso é muito importante, pois permite que pessoas com deficiência interajam com o quadro como de costume.

## Por que um pacote npm?

A idéia por trás do react-scannable é ser aberto à comunidade, de código aberto e livre para usar. Você pode baixar o código-fonte do [Github](https://github.com/cboard-org/react-scannable) ou o pacote do [npm do registro](https://www.npmjs.com/package/react-scannable).

Queremos que as pessoas se envolvam nisso, usando o recurso de escaneamento por reação em seus aplicativos, estendendo a maneira como seus aplicativos interagem com os usuários.

Também encorajamos as pessoas a relatar os problemas que eles têm (e promover correções para eles, se possível) e, é claro, a desenvolver novos recursos (por que não uma nova estratégia / método).