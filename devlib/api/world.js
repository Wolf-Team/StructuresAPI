var _World = {
    setBlock:function(x,y,z, id, data, blockSource){
        if(SUPPORT_NETWORK){
            if(!blockSource)
                blockSource = BlockSource.getCurrentWorldGenRegion();
            blockSource.setBlock(x,y,z, id, data);
        }else{
            World.setBlock(x,y,z, id, data);
        }
    },
    getBlock:function(x, y, z, blockSource){
        if(SUPPORT_NETWORK){
            if(!blockSource)
                blockSource = BlockSource.getCurrentWorldGenRegion();
            return blockSource.getBlock(x, y, z);
        }else{
            return World.getBlock(x, y, z);
        }
    }
};