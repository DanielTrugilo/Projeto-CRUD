# site

## Setup do projeto

### Instalações necessárias

Para executar o projeto é necessária a instalação de 3 componentes, o primeiro deles é o node.js para que tenhamos ao Node Packet Manager, conhecido como npm. O link para baixar é 

```
 http://localhost:8080 
```
Agora antes de instalar ambos você pode descompactar os arquivos e abrir a pasta com sua IDE de preferência, eu fiz o restante utilizando o VS Code.

Ao abrir a IDE, abra duas instâncias do terminal e utilize o primeiro para um comando e o segundo para outro.

```
npm install -g @vue/cli-service —save-dev
npm install -g json-serve
```

### Executando o projeto

Na primeira tela do terminal, execute o comando abaixo:
```
npm run serve
```
Ao terminar ele deve indicar o endereço para acesso, normalmente sendo o http://localhost:8080

Já na segunda aba, serão necessários dois comandos, o primeiro para mover a linha de comando até a pasta api e depois executar o servidor json.
```
cd api
json-server --watch site.json
```
Agora é possível acessar o servidor json pela web, o endereço padrão é http://localhost:3000
#### Atenção

Caso esteja em ambiente Windows, o ultimo comando pode ter apresentado algum erro alegando que o arquivo não está assinado. Para resolver o problema, é necessário abrir um powershell em modo administrador e executar o seguinte comando:
```
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope LocalMachine
```
Após isso, você deve aceitar a alteração fazendo o comando json-server funcionar normalmente.

### Fim

Pronto, agora o site deverá ser carregado com todos os produtos e usuários!
