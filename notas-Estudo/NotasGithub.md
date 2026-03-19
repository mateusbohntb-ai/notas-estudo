```js
## Git Hub

1-Abra o CMD do computador "Terminal de comando".

2-Use o comando ```git --version``` com o objetivo de conferir a versão do seu ``GIT``.

3-Com o resultado observe o numero da versão caso estiver abaixo de ``2.53.0`` baixe a versão do mais atulizada pelo google.

4-Volte ao Terminal e ultilise o codigo ``git config --global user.name “Seu Nome”`` , com o nome salvo a maquina sempre vai se referir 
ao nome salvo.

5-Agora coloque o comando ``git config --global user.email “seuEmail@gmail.com”`` esse comando especifico ``` coloque o email que você ultiliza/ultilizara do GIT-HUB```

```

```js
## Git bash

1-Caso você queira verificar se à alguma key na sua maquina use o comando ``ls -al ~/.ssh``

2-Ultilise o comando ```ssh-keygen -t ed25519 -C “your_email@example.com”``` colocando o gmail que você usou no github.

3-Ultilize o comando ```eval "$(ssh-agent -s)"```




4- digite esse comando ```ssh-add ~/.ssh/id_ed25519```

## clone as pastas do git hub para sua maquina 
1-use o comando ``cd document/

2- use comando ```git clone``` e cole a chave ssh 
```
