# Tecnologia gRPC

Aquest repositori conté una implementació d'exemple que utilitza **gRPC**, un sistema de crides a procediments remots (RPC) d'alt rendiment que pot executar-se en qualsevol entorn. gRPC utilitza HTTP/2 per a la comunicació, Protocol Buffers com a llenguatge d'interfície, i proporciona funcionalitats com autenticació, balanceig de càrrega, etc.

## Què és gRPC?

gRPC és un marc de treball de RPC modern, obert i d'alt rendiment que pot funcionar en qualsevol entorn. Permet als servidors i clients comunicar-se entre ells i enviar crides a procediments remots com si fossin crides a procediments locals. gRPC està dissenyat per ser independent del llenguatge, el que significa que pots fer que els teus serveis gRPC interactuïn amb clients en diversos llenguatges.

## Archius

### 1. `service.proto`:

Aquest arxiu defineix l'estructura de les dades i el contracte d'interfície per a la nostra comunicació gRPC. Utilitza la sintaxi de Protocol Buffers per especificar els mètodes que es poden cridar de forma remota, juntament amb els seus paràmetres d'entrada i sortida. Aquí es defineixen els serveis, les peticions i les respostes que es faran servir en la nostra comunicació client-servidor.

### 2. `servidor.js`:

Aquest és el codi font del nostre servidor gRPC implementat en Node.js. Inicialitza el servidor, carrega les definicions dels serveis a partir de `service.proto`, i implementa la lògica per a manejar les crides remotes. El servidor escolta les peticions dels clients, processa les dades segons la lògica definida, i envia una resposta de tornada al client.

### 3. `client.js`:

Aquest arxiu conté el codi font del client gRPC, també implementat en Node.js. El client utilitza les definicions dels serveis a partir de `service.proto` per a construir crides a procediments remots. Aquest codi s'encarrega d'enviar peticions al servidor, rebre les respostes, i manejar-les d'acord amb la lògica del client.

## Com començar:

1. Clona el repositori:

```javascript
git clone url-del-repositori
```

2. Instal·la les dependències:

```javascript
cd exercici-gRPC
npm install
```

3. Inicia el servidor:

```javascript
node servidor.js
```

4. En una altra terminal, executa el client:

```javascript
node client.js
```
