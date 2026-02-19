# notas-estudo
Minhas notas de estudos do Senac 2026
markdown
## Configurando Git


Comandos de configuração do git  na sua máquina:

-Tendo como primeiro passo abra o CMD  ”abra sua aba de pesquisa do computador e pesquise CMD e clique Terminal de comando “,escreva  no Terminal de Comando o seguinte comando

```bash
git --version
```

 -Possuindo a versão do git é preciso inserir um usuário

```bash
git config --global user.name “Seu Nome”
```

concluindo essa etapa agora vamos colocar o comando cadastrando o'email que você cadastrou ou futuro login  no GIT-HUB. o comando é 

```bash
git config --global user.email “seuEmail@gmail.com”
```

## cadartrar no Git-hub

-Agora crie uma conta no Git-Hub com o email que você cadastrou na sua máquina 

## ssh-key
-Abra o git-bash na aba de pesquisa do seu computador 

```bash
ls -al ~/.ssh
```

Agora precisamos adicionar uma chave para isso e preciso colocar o comando abaixo  com o email que você cadastrou.
```bash
ssh-keygen -t ed25519 -C “your_email@example.com”
```

Agora é preciso adicionar a chave.  
```bash
ssh-add ~/.ssh/id_ed25519
```
Use o comando para copiar a chave .

```bash
clip < ~/.ssh/id_ed25519.pub 
```
## Criar um Repositorio 
 
 cd Documents/
 git clone "link do git hub"
 cd "nome da pasta"
 

## vs code 
Abra o git bash .Agora vamos clonar a pasta com o comando “cd Documents/” agora seus arquivos vão  para a pasta da sua máquina . Agora vamos  escrever o comando cd clone  que está no repositório do Git-Hub”. 
Clicamos em yes para prosseguir ,agora precisamos baixar o Vs.code pelo google  com ele baixado no seu pc volte para o Git-bash e escreva o comando “code .”

## vs code readme 
No Vs code clicamos em “Readme” nele você pode fazer anotações tanto escrita como code das aulas ou de empresas para assim acessar de vários dispositivos diferentes .
Para salvar e mandar para a nuvem no Github você pode ir nos 3 pontinhos interligados ,antes é necessário dar “ctrl s” para salvar os arquivos,com isso pressione em mensagem  e escreva o titulo ,mova o maose para o readme e clique no + e clique em commit.
Clique em Sync Changes 1 para subir para nuvem 


comando vs 
ctrl k o 
para trocar de pasta do github  

## aula 19/02/2026


