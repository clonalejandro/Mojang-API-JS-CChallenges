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

    switch (servidor){

        case "Web":
        case "Website":
        case "web":
        case  "website":
            servidor = "minecraft.net";
            break;


        case "Sessions":
        case "Sesions":
        case "Sesiones":
        case "sessions":
        case "sesions":
        case "sesiones":
            servidor = "session.minecraft.net";
            break;


        case "Accounts":
        case "Account":
        case "Cuentas":
        case "account":
        case "accounts":
        case "cuentas":
            servidor = "account.mojang.com";
            break;


        case "Auth":
        case "Auths":
        case "Login":
        case "auth":
        case "auths":
        case "login":
            servidor = "auth.mojang.com";
            break;


        case "Skin":
        case "Skins":
        case "skin":
        case "skins":
            servidor = "skins.minecraft.net";
            break;


        case "Auth Server":
        case "Login Server":
        case "AuthServer":
        case "LoginServer":
        case "auth server":
        case "login server":
        case "authserver":
        case "loginserver":
            servidor = "authserver.mojang.com";
            break;

        case "Session Server":
        case "Sesion Server":
        case "SessionServer":
        case "SesionServer":
        case "session server":
        case "sesion server":
        case "sessionserver":
        case "sesionserver":
            servidor = "sessionserver.mojang.com";
            break;


        case "API":
        case "api":
        case "Api":
            servidor = "api.mojang.com";
            break;


        case "Textures":
        case "Texture":
        case "Texturas":
        case "Textura":
        case "textures":
        case "texture":
        case "texturas":
        case "textura":
            servidor = "textures.minecraft.net";
            break;


        case "Mojang":
        case "mojang":
            servidor = "mojang.com";
            break;
    }

    est = JSON.parse(metodo.responseText)[0][servidor];

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
