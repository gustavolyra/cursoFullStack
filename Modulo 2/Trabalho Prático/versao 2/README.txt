Trabalho Prático Modulo 2
Manipular os arquivos json Cidades.json e Estados.json (https://github.com/felipefdl/cidades-estados-brasil-json).
Os arquivos json estão na pasta ./jsonBase.

No lugar de mostrar as respostas das etapas (3-8) no console, são gerados arquivos na pasta answer. 

etapas:
1- Criar uma função que irá criar um arquivo JSON para cada estado representado no arquivo Estados.json, 
e o seu conteúdo será um array das cidades pertencentes a aquele estado, de acordo com o arquivo 
Cidades.json.O nome do arquivo deve ser o UF do estado, por exemplo: MG.json.

2- Criar uma função que recebe como parâmetro o UF do estado, realize a leitura do arquivo JSON 
correspondente e retorna quantidade de cidades daquele estado.

3- Criar  um  método  que  imprima  no  console um  array  com  o  UF  dos  cinco  estados que 
mais possuem cidades, seguidos da quantidade, em ordem decrescente. 
Você pode usar a função criada no tópico 2.
Exemplo de impressão: [“UF-93”, “UF-82”, “UF-74”, “UF-72”, “UF-65”]

4- Igual a 3 para os 5 estados com menor número de cidades.

5- Criar um método que imprima no console um array com a cidade de maior nome de cada estado, 
seguida de seu UF.Por exemplo: [“Nome da Cidade –UF”, “Nome da Cidade –UF”, ...].

6- Igual a 5 para cidade de menor nome de cada estado.

7- Criar um método que imprima no console a cidade de maior nome entre todos os estados, 
seguido do seu UF.Exemplo: “Nome da Cidade -UF".

8- Igual a 7 para cidade de menor nome entre todos os estados.


Observações:
  -> Nos itens que tratam a respeito do tamanho do nome da cidade, em caso de empate no tamanho
  entre várias cidades, você deve considerar a ordem alfabética para ordenar as cidades pelo seu nome,
  e então retornar a primeira cidade.
  
  -> Você deve considerar os nomes das cidades da forma que estão no arquivo, mesmo que tenha observações
  no nome entre parênteses. Exemplo: Cidade X (antiga Cidade Y).
  
  -> Ao rodar o projeto, ele deve executar os métodos em sequência e depois finalizar a execução.


links uteis:


diferença entre:
for (let i = 0; i < arr.length; ++i)
arr.forEach((v, i) => { /* ... */ })
for (let i in arr)
for (const v of arr)
https://medium.com/@oieduardorabelo/javascript-for-vs-foreach-vs-for-in-vs-for-of-44b8beffbfa0