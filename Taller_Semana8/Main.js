//Escena
scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);    
renderer = new THREE.WebGLRenderer();
renderer.setClearColor(0x000000, 1.0);
renderer.setSize(window.innerWidth, window.innerHeight);

var size = 700;
var arrowSize = 40;
var divisions = 20;
var origin = new THREE.Vector3( 0, 0, 0 );
var x = new THREE.Vector3( 1, 0, 0 );
var y = new THREE.Vector3( 0, 1, 0 );
var z = new THREE.Vector3( 0, 0, 1 );
var color2 = new THREE.Color( 0x333333 );  
var colorR = new THREE.Color( 0xAA0000 );
var colorG = new THREE.Color( 0x00AA00 );
var colorB = new THREE.Color( 0x0000AA );

//Crear la Grilla
var gridHelperXZ = new THREE.GridHelper( size, divisions, color2, color2);

//Ejes
var arrowX = new THREE.ArrowHelper( x, origin, arrowSize, colorR );
var arrowY = new THREE.ArrowHelper( y, origin, arrowSize, colorG );
var arrowZ = new THREE.ArrowHelper( z, origin, arrowSize, colorB );
    
//Cámara
camera.position.x = 000;
camera.position.y = 100;
camera.position.z = 500;
camera.lookAt(scene.position);

//Creación de las Figuras
//Definir piramide

lado = 35; //Lado de la base de la piramide
altura = 45; //Altura de la piramide

[v1, v2, v3, v4, v5] = [  

    [0, 0, 0], 
    [lado, 0, 0], 
    [lado, 0, lado], 
    [0, 0, lado], 
    [lado/2, altura, lado/2]
    
]

var vertices = [v1, v2, v3, v4, v5, v1, v4, v3, v5, v2];
geomPiramide = Geometria(vertices);
var largoVertice = vertices.length;

//Colores para las piramides
color = [{color:0xff0000}, {color:0x00ff00}];

//Material para las piramides
material = [];
for(i = 0; i < 2; i++){
    material.push(new THREE.ParticleBasicMaterial(color[i]));
}

//Figuras para las piramides
piramide = [];
for(i = 0; i < 2; i++){
    piramide.push(new THREE.Line(geomPiramide, material[i]));
}

//Traslacion
piramide[1].applyMatrix(Traslacion([2*lado, 2*lado, 0]));

//Escalados
EscaladoReal(piramide[1], [2*lado, 2*lado, 0], [1.5, 1.5, 1.5])

//Rotaciones
RotacionRealx(piramide[1], [2*lado, 2*lado, 0], 45);
RotacionRealy(piramide[1], [2*lado, 2*lado, 0], 45);
RotacionRealz(piramide[1], [2*lado, 2*lado, 0], 60);

//Documento HTML
document.body.appendChild(renderer.domElement);

//Agregar elementos al escenario
scene.add(gridHelperXZ);
scene.add(arrowX);	
scene.add(arrowY);	
scene.add(arrowZ);

for (i = 0; i < 2; i++){
    scene.add(piramide[1]);
    renderer.render(scene, camera)
}

renderer.render(scene, camera)