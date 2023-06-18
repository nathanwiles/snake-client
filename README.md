# snake-client

## Description

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This is the client side of the game "snake". It is setup to be multiplayer, with multiple players on the same board. It uses websockets and the .NET core framework.

## Client Installation

The client can be found [here.](https://github.com/nathanwiles/snake-client)

First clone the client directory to your desired destination:

`cd ~/path/to/desired/directory`
`git clone git@github.com:nathanwiles/snake-client.git`

Then install the dependencies:

`npm install`

## Join Exisiting Game Server

If there already is a game server running, and you wish to connect to it.

Edit the src/constants.js file within the newly cloned repo to point to the server's IP address and port.

**_Example is the defualt "localhost" server_**

```javascript
// IP and PORT for the server connection
const IP = "localhost"; //change to server IP
const PORT = 50541; //change to server port
const ENCODING = "utf8"; // leave as is
```

## New Game Server

The LHL game server included with the project can be found [here](https://github.com/lighthouse-labs/snek-multiplayer/)

### Install the Game Server

Navigate to desired destination directory, clone the server repo, and install any dependencies.

`$ cd ~/path/to/desired/directory`

`$ git clone git@github.com:lighthouse-labs/snek-multiplayer.git`

`$ npm install`

Then, from within the directory, run the following command to start the server:

`$ npm run play`

## Starting a New Client

**_If you are running both the host and client on the same machine, you will need to run the client from a different terminal window._**

Navigate to the client directory and run the following command:

`$ cd ~/path/to/desired/directory/snake-client`

`$ npm run play`

## How to Play the Game

Once you've joined the server you can navigate your snake using the **'wasd'** keys. The goal is to eat as many dots as possible without running into yourself or another snake. The last snake alive is the winner.

There are five canned messages that can be sent using the **1-5** keys. These messages are:

1. "I see fresh meat!"
2. "I'm gonna eat you!"
3. "I'm coming for you!"
4. "What a tasty meal!"
5. "oh... woops!"

The game can be exited at any time by pressing **ctrl + c**.

Clients are kicked if inactive. To avoid this, make sure to keep your snake moving.
