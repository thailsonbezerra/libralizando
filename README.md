# Reconhecimento em Tempo Real de Sinais da Língua Brasileira de Sinais (LIBRAS) com Detecção de Movimentos

## Descrição do Problema

A inclusão de pessoas surdas ainda é um grande desafio no Brasil, especialmente no ambiente educacional. No ensino básico, o momento após a alfabetização é essencial para o desenvolvimento da comunicação e da empatia entre os alunos. No entanto, a falta de conhecimento e ferramentas para o ensino e prática da Língua Brasileira de Sinais (LIBRAS) limita a interação com estudantes surdos, contribuindo para sua exclusão social e educacional.

Este projeto surge com o objetivo de apoiar o aprendizado do alfabeto em LIBRAS em escolas, oferecendo uma ferramenta interativa e acessível que auxilia alunos e professores no reconhecimento dos sinais manuais. Ao promover o contato com LIBRAS ainda nos primeiros anos da vida escolar, cria-se um ambiente mais inclusivo, onde a comunicação básica com colegas surdos pode ser aprendida e valorizada por todos.

## Categoria

*Classificação de Imagens*

*Detecção de Objetos*

## Motivação

Este projeto busca promover a igualdade e acessibilidade, quebrando a barreira da comunicação entre pessoas surdas e ouvintes. A aplicação tem o potencial de melhorar a inclusão social, permitindo a interação em ambientes que antes eram inacessíveis para a comunidade surda.

Com essa solução é possível atender tanto às demandas de tradução de sinais estáticos quanto à detecção de sinais em movimento, ampliando o impacto e a aplicabilidade da tecnologia.

Além disso, o projeto tem como visão futura:

- Expansão para ambientes corporativos, educacionais e comerciais;
- Integração de suporte para frases completas;
- Ampliação do vocabulário;
- Acompanhamento do crescimento das necessidades reais da comunidade usuária.

## Aspectos Técnicos

Tecnologias e ferramentas utilizadas:

- **Modelo de Rede Neural**: Redes recorrentes (LSTM) para processar sequências temporais de sinais de LIBRAS.
- **Framework de Deep Learning**: TensorFlow para criação e treinamento do modelo.
- **Biblioteca Ultralytics YOLO**: Para detecção precisa de sinais visuais em tempo real.
- **Roboflow**: Para organização e anotação dos dados coletados.

O sistema utiliza um dataset com imagens anotadas e coordenadas obtidas de sequências de vídeos, permitindo ao modelo identificar e traduzir sinais **estáticos e dinâmicos**. O escopo técnico também inclui a **validação do modelo** para garantir alta precisão e baixa latência em diferentes condições práticas de uso.

## Origem dos Dados

Os dados foram obtidos a partir do dataset ["LIBRAS" disponível no Kaggle](https://www.kaggle.com/datasets/williansoliveira/libras) e tratados no Roboflow para anotação e organização.

## Impacto no Ensino Básico

O reconhecimento em tempo real do alfabeto em LIBRAS pode ser uma ferramenta importante para apoiar a inclusão de alunos surdos no ambiente escolar. Em especial no ensino básico, após o processo de alfabetização, o contato com LIBRAS pode ser essencial para promover um ambiente mais inclusivo e respeitoso com a diversidade linguística.

Além de auxiliar na comunicação com estudantes surdos, o projeto também pode ser utilizado como apoio pedagógico para o ensino de LIBRAS, incentivando o aprendizado da língua de sinais desde cedo por alunos ouvintes. Essa iniciativa contribui para a construção de um ambiente mais empático, inclusivo e preparado para lidar com a diversidade dentro da sala de aula.

## Perspectivas Finais

Com uma base técnica sólida e um foco em inclusão social, o projeto visa preencher uma lacuna significativa, proporcionando um impacto positivo na educação e no acesso à comunicação.

**Próximas etapas:**

- Validação contínua do modelo em cenários reais;
- Expansão do escopo funcional para atender a um público mais amplo e diverso.

**Links utilitários:**

- Link para acesso ao código: https://drive.google.com/file/d/1LdwQVc_HxrsLB_wd29-W4m5PLnDo-THj/view?usp=sharing
