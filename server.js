import Server from "./Server/Server.js";
import DevSocket from "./Server/plugins/DevSocket/DevSocket.js";

Server.use(DevSocket);
new Server();
