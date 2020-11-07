# StructuresAPI
StructuresAPI - A library that simplifies working with structures.

## Get Start
Before starting work, you need to import the library.
``` js
IMPORT("StructuresAPI", "*"); // Import all modules
// Or
IMPORT("StructuresAPI", "Structure"); // Import module of structures
IMPORT("StructuresAPI", "Rotate"); // Import module of turns
IMPORT("StructuresAPI", "TileEntityRandomize"); // Import module TileEntityRandomize
IMPORT("StructuresAPI", "TileEntityFiller"); // Import module TileEntityFiller
IMPORT("StructuresAPI", "DefaultTileEntityFiller"); // Import module DefaultTileEntityFiller
```

## Save structure in file
Create a structure using the Structure constructor
```js
let struct = new Structure();
```
Then add data to the structure with the addBlock and addTileEntity methods
```js
struct.addBlock(1, 1, 0, 5, 2);
struct.addBlock(0, 2, 0, 5, 2);
struct.addBlock(0, 3, 0, 5, 4);
struct.addBlock(0, 4, 0, 54, 0, "chest1");

struct.addTileEntity("chest1", new DefaultTileEntityFiller({
    0:{ id:5, count:64 }
}));
```
Invoke writeInFile method
```js
struct.writeInFile("structName");
```

## Putting structure into the world
To set the structure in the world, use the build (x, y, z, rotates, random ?, region?) Method, where:
* int x - X coordinate
* int y - Y coordinate
* int z - Z coordinate
* Rotate | Array <Rotate> rotates - Rotation or array of rotations. Rotation will be randomly selected from the array
* java.util.Random random - A random object to get random values
* BlockSource region
```js
Callback.addCallback("ItemUse", function(coords, item, block, isExteral, player){
    let region = BlockSourse.getDefaultForActor(player);
    struct.build(coords.x,
                 coords.y,
                 coords.z, Structure.ROTATE_NONE, null, region);
})
```


## Older versions:
* [StructuresAPI v1.4](https://github.com/Wolf-Team/Libraries/blob/master/StructuresAPI.js)
* [StructuresAPI v1.3](https://github.com/Wolf-Team/Libraries/blob/dcae52f5e030cb0b10ad2f3fee35c74542857890/StructuresAPI.js)
* [StructuresAPI v1.2](https://github.com/Wolf-Team/Libraries/blob/e76e8ba4721eb8b6b42e29bf521578f1cf7b20ee/StructuresAPI.js)
* [StructuresAPI v1.1](https://github.com/Wolf-Team/Libraries/blob/da4e232f4253e7e6efff1f42776ad52546efa7d8/StructuresAPI.js)
* [StructuresAPI v1.0](https://github.com/Wolf-Team/Libraries/blob/37c31935a31605579a6295a65cabd062eaf77adb/StructuresAPI.js)