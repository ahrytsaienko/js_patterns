const User = function (name) {
    this.name = name;
    this.chatroom = null;

}

User.prototype = {
    send: function(){

    },
    receie: function(){
        
    }
}

const Chatroom = function () {
    let users = {}; // list of users
}