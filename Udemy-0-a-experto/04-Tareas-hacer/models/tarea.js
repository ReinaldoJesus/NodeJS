const { v4: uuidv4 } = require('uuid');


class Tarea {
 id = '';
 desc = '';
 completadoen = null;

    constructor( desc ){

        this.desc = desc;
        this.id = uuidv4();

    }

}

module.exports = Tarea;