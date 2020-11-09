Structure.ROTATE_NONE = new Rotate([
	1,0,0,
	0,1,0,
	0,0,1
]);
	
Structure.ROTATE_90Y = new Rotate([
	0,0,-1,
	0,1,0,
	1,0,0
]);
Structure.ROTATE_180Y = new Rotate([
	-1,0,0,
	0,1,0,
	0,0,-1
]);
Structure.ROTATE_270Y = new Rotate([
	0,0,1,
	0,1,0,
	-1,0,0
]);
	
Structure.ROTATE_90X = new Rotate([
	1,0,0,
	0,0,-1,
	0,1,0
]);
Structure.ROTATE_180X = new Rotate([
	1,0,0,
	0,-1,0,
	0,0,-1
]);
Structure.ROTATE_270X = new Rotate([
	1,0,0,
	0,0,1,
	0,-1,0
]);
	
Structure.ROTATE_90Z = new Rotate([
	0,-1,0,
	1,0,0,
	0,0,1
]);
Structure.ROTATE_180Z = new Rotate([
	-1,0,0,
	0,-1,0,
	0,0,1
]);
Structure.ROTATE_270Z = new Rotate([
	0,1,0,
	-1,0,0,
	0,0,1
]);

Structure.MIRROR_X = new Rotate([
	-1,0,0,
	0,1,0,
	0,0,1
]);
Structure.MIRROR_Y = new Rotate([
	1,0,0,
	0,-1,0,
	0,0,1
]);
Structure.MIRROR_Z = new Rotate([
	1,0,0,
	0,1,0,
	0,0,-1
]);


Structure.ROTATE_ALL =
Structure.ROTATE_RANDOM = [
	Structure.ROTATE_180X,
	Structure.ROTATE_180Y,
	Structure.ROTATE_180Z,
	Structure.ROTATE_270X,
	Structure.ROTATE_270Y,
	Structure.ROTATE_270Z,
	Structure.ROTATE_90X,
	Structure.ROTATE_90Y,
	Structure.ROTATE_90Z,
	Structure.ROTATE_NONE
];
Structure.ROTATE_Y = [
	Structure.ROTATE_NONE,
	Structure.ROTATE_90Y,
	Structure.ROTATE_180Y,
	Structure.ROTATE_270Y
];
