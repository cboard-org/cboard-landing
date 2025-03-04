---
title: Cboard suporta padrão openboard
date: 30/06/2018
description: Introdução ao openboard no Cboard
categories:
  - bordo
  - openboard
  - Código aberto
image:
author_staff_member: shay
---

Recentemente, na Cboard, lançamos um recurso novo e interessante: suporte a openboard. Essa será a peça chave para permitir aos usuários do Cboard uma plataforma flexível que suporte fácil compartilhamento e migração.

## O que é o Open Board Format?

O Open Board Format, ou OBF, em resumo, é uma especificação para as placas de comunicação AAC, descreve os dados e a estrutura necessária para representar uma placa, desde o número de linhas da grade até botões, imagens e muito mais. Foi criado para permitir que as placas sejam portáteis entre aplicativos e compartilháveis entre as pessoas.

## Por que apoiar o Open Board Format?

Quando aprendemos sobre o Open Board Format, não precisamos pensar muito, os benefícios eram óbvios, todos ganham, o usuário, o Cboard e o ecossistema AAC (espero). O usuário pode migrar suas placas para outros aplicativos e compartilhar placas com outras pessoas. O Cboard pode incorporar placas de terceiros disponíveis publicamente, os usuários podem migrar para o Cboard a partir de outros aplicativos. Se mais placas compatíveis com OBF forem publicadas on-line, as placas não serão mais um fator-chave na decisão entre os aplicativos da AAC, forçarão as empresas a se concentrarem mais em melhorar a qualidade do software, em vez do conteúdo, para obter uma vantagem competitiva.

## Alterações de software

Para implementar a importação de OBF no Cboard, criamos uma função de adaptador que pega um objeto OBF e gera um objeto que o Cboard pode entender e renderizar. A especificação também define uma maneira de agrupar as placas como um arquivo .OBZ, que é essencialmente um ou mais arquivos .OBF compactados via gzip. Para dar suporte ao gzip, precisamos adicionar dois novos pacotes `npm` `jszip` e `jszip-utils`.

![Cboard](/images/app/import.png)

## O que isso significa para os usuários do Cboard?

Ao exportar sua placa na tela Configurações do Cboard `/ exportar` , agora você terá a opção de exportar para o formato Open Board. Clique no botão `exportar` e escolha o item de menu `OpenBoard` e salve o arquivo. A funcionalidade de importação não foi alterada.

![Cboard](/images/app/export.png)

## O que o futuro reserva?

Esperamos que um dia haja um repositório principal que ofereça placas compatíveis com o Open Board Format, um mercado, se desejar, de placas criadas por profissionais, classificadas por categorias classificadas por pessoas e oferecidas gratuitamente.