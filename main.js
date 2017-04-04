/**
 * DMCA protected.
 * User: clonalejandro
 * Date: 4/4/17
 * Time: 18:37
 */


/** @API **/


/** SMALL CONSTRUCTORS **/

var est;
var info;

function estado(servidor) {

    var metodo = new XMLHttpRequest();

    metodo.open("GET", "https://status.mojang.com/check", false);
    metodo.send();

    if (servidor === "Web" | servidor === "Website" | servidor === "web" | servidor === "website"){
        servidor = "minecraft.net";
        est = JSON.parse(metodo.responseText)[0][servidor];
    }

    if (servidor === "Sessions" | servidor === "Sesions" | servidor === "Sesiones" | servidor === "sessions" | servidor === "sesions" | servidor === "sesiones"){
        servidor = "session.minecraft.net";
        est = JSON.parse(metodo.responseText)[0][servidor];
    }

    if (servidor === "Accounts" | servidor === "Account" | servidor === "Cuentas" | servidor === "account" | servidor === "accounts" | servidor === "cuentas"){
        servidor = "account.mojang.com";
        est = JSON.parse(metodo.responseText)[0][servidor];
    }

    if (servidor === "Auth" | servidor === "Auths" | servidor === "Login" | servidor === "auth" | servidor === "auths" | servidor === "login"){
        servidor = "auth.mojang.com";
        est = JSON.parse(metodo.responseText)[0][servidor];
    }

    if (servidor === "Skin" | servidor === "Skins" | servidor === "skin" | servidor === "skins"){
        servidor = "skins.minecraft.net";
        est = JSON.parse(metodo.responseText)[0][servidor];
    }

    if (servidor === "Auth Server" | servidor === "Login Server" | servidor === "AuthServer" | servidor === "LoginServer" | servidor === "auth server" | servidor === "login server" | servidor === "authserver" | servidor === "loginserver"){
        servidor = "authserver.mojang.com";
        est = JSON.parse(metodo.responseText)[0][servidor];
    }

    if (servidor === "Session Server" | servidor === "Sesion Server" | servidor === "SessionServer" | servidor === "SesionServer" | servidor === "session server" | servidor === "sesion server" | servidor === "sessionserver" | servidor === "sesionserver"){
        servidor = "sessionserver.mojang.com";
        est = JSON.parse(metodo.responseText)[0][servidor];
    }

    if (servidor === "API" | servidor === "api" | servidor === "Api"){
        servidor = "api.mojang.com";
        est = JSON.parse(metodo.responseText)[0][servidor];
    }

    if (servidor === "Textures" | servidor === "Texture" | servidor === "Texturas" | servidor === "Textura" | servidor === "textures" | servidor === "texture" | servidor === "texturas" | servidor === "textura"){
        servidor = "textures.minecraft.net";
        est = JSON.parse(metodo.responseText)[0][servidor];
    }

    if (servidor === "Mojang" | servidor === "mojang"){
        servidor = "mojang.com";
        est = JSON.parse(metodo.responseText)[0][servidor];
    }

    return est;
}


/** REST **/

if (est === "green") info = "on";
if (est === "yellow") info = "unstable";
if (est === "red") info = "off";


if (info === "on"){
    //Mojang on;
}
else
    if (info === "unstable"){
        //Mojang unstable;
    }
else
    if (info === "off"){
        //Mojang off;
    }



/** @DEBUG **/

//window.document.write(info);
