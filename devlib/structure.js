/* TODO
* Get
* Build with TE
* Destroy
* add timer
* Work with files
*/
var SUPPORT_NETWORK = getCoreAPILevel() > 10;

var _World = {
    setBlock:function(x,y,z, id, data, blockSource){
        if(SUPPORT_NETWORK){
            blockSource.setBlock(x,y,z, id, data);
        }else{
            World.setBlock(x,y,z, id, data);
        }
    },
    getBlock:function(){
        
    }
};

var Structure = function(file){
    this.clear();
    if(str != undefined)
        this.readFromFile(file);
}
Structure.dir = "/structures";

Structure.prototype.clear = function(){
    this._structure = [];
    this._tileEntities = {};
}

Structure.prototype.addBlock = function(x, y, z, id, data, tileEntityRandomize){
    if(!Utility.isInt(x))
        throw new TypeError('"'+x+'" is not a integer.');
    if(!Utility.isInt(y))
        throw new TypeError('"'+y+'" is not a integer.');
    if(!Utility.isInt(z))
        throw new TypeError('"'+z+'" is not a integer.');
    
    if(!Utility.isInt(id))
        throw new TypeError('"'+id+'" is not a integer.');

    let block = [x, y, z];
        
    let blockInfo = id;
    if(data != undefined){
        if(!Utility.isInt(data))
            throw new TypeError('"'+data+'" is not a integer.');

        blockInfo = {
            id:blockInfo,
            data:data
        }
    }
    
    block.push(blockInfo);

    if(tileEntityRandomize != undefined){
        if(typeof(tileEntityRandomize) == "string"){
            let _tileEntityRandomize = new TileEntityRandomize();
            _tileEntityRandomize.add(1, tileEntityRandomize);
            tileEntityRandomize = _tileEntityRandomize;
        }else if(!tileEntityRandomize instanceof TileEntityRandomize){
            throw new TypeError("tileEntityRandomize must be TileEntityRandomize.");
        }
        
        block.push(tileEntityRandomize);
    }
    
    this._structure.push(block);
}

Structure.prototype.addTileEntity = function(name, slots, data){
    if(typeof(name) != "string")
        throw new TypeError('"'+name+'" is not a string.');

    if(this._tileEntities.hasOwnProperty(name))
        throw new Error("TileEntity "+name+" already exists in the structure.");

    for(let i in slots){
        let slot = slots[i];
        if(!Utility.checkSlot(slot))
            throw new TypeError(i+':"'+JSON.stringify(slot)+'" is not a ItemInstance.');
    }

    let TileEntity = { slots:slots };

    if(data){
        if(!typeof(data) == "object")
            throw new TypeError('"'+data+'" is not a object.');
        TileEntity.data = data;
    }
    this._tileEntities[name] = TileEntity;
}

Structure.prototype.get = function(x, y, z, rotates){
    return -1;
}
Structure.prototype.check = function(x, y, z, rotates){
    return this.get(x, y, z, rotates) != -1;
}

Structure.prototype.build = function(x,y,z, rotates, blockSource){
    let rotate = Rotate.getRotate(rotates);
    if(SUPPORT_NETWORK && blockSource == undefined)
        blockSource = BlockSource.getCurrentWorldGenRegion();

    for(let i = this._structure.length-1; i >= 0; i--){
        let blockInfo = this._structure[i];
        let deltaPos = rotate.getPosition(blockInfo[0], blockInfo[1], blockInfo[2]),
            id = blockInfo[3],
            data = 0;
        
        if(typeof(id) != "number"){
			data = id.data;
			id = id.id;
        }

        _World.setBlock(x + deltaPos.x, y + deltaPos.y, z + deltaPos.z, id, data, blockSource);
    }
}

Structure.prototype.readFromFile = function(FileName){}
Structure.prototype.writeInFile = function(FileName){}



EXPORT("Structure", Structure);