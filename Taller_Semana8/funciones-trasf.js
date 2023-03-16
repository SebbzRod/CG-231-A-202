/**
 * Geometria: Construye una geometría THREE.js y la retorna.
 * ENTRADAS: vx = Arreglo de vértices para la geometría (arreglo de arreglos).
 * SALIDAS: geom = Geometria construida a partir de vx.
 */
function Geometria(vx){

    geom = new THREE.Geometry();
    var largoVertice = vx.length;
    for (i = 0; i < largoVertice; i++){
        x = vx[i][0];
        y = vx[i][1];
        z = vx[i][2];
        vector = new THREE.Vector3(x, y, z);
        geom.vertices.push(vector);
    }
    return geom;

}

/**
 * Traslacion: Construye la matriz de traslacion THREE.js para el vector de traslacion vt y la retorna.
 * ENTRADAS: vt = Vector de traslacion (arreglo de enteros).
 * SALIDAS: matrizT = Matriz de traslacion.
 */
function Traslacion(vt){

    var matrizT = new THREE.Matrix4();
    matrizT.set(1, 0, 0, vt[0],
                0, 1, 0, vt[1],
                0, 0, 1, vt[2],
                0, 0, 0, 1);
    
    return matrizT;
    
}

/**
 * Escalado: Construye la matriz de escalado THREE.js para el vector vs y la retorna.
 * ENTRADAS: vs = Vector de Escalado (arreglo de enteros).
 * SALIDAS: matrizS = Matriz de Escalado para el vector. 
 */
function Escalado(vs){

    var matrizS = new THREE.Matrix4();
    matrizS.set(vs[0], 0, 0, 0,
                0, vs[1], 0, 0,
                0, 0, vs[2], 0,
                0, 0, 0, 1);

    return matrizS;

}

/**
 * EscaladoReal: Aplica el vector de Escalado "vs" al objeto fig.
 * ENTRADAS: fig = Objeto tipo THREE.LINE que representa el objeto grafico.
 *           posini = Posicion inicial de fig.
 *           vs = Vector de Escalado (arreglo de enteros).
 */
function EscaladoReal(fig, posini, vs){

    tr = [-posini[0], -posini[1], -posini[2]];//Vector para llevar al origen.
    fig.applyMatrix(Traslacion(tr));//Traslacion al origen.
    fig.applyMatrix(Escalado(vs));//Escalado de la figura.
    fig.applyMatrix(Traslacion(posini));//Traslacion a posicion inicial.

}

/**
 * Rotacionx: Construye la matriz de rotacion THREE.js para el angulo rt y la retorna.
 * ENTRADAS: rt = Angulo de rotacion (number).
 * SALIDAS: matrizRx = Matriz de rotacion para el angulo rt. 
 */
function Rotacionx(rt){

    var matrizRx = new THREE.Matrix4();
    let rad = rt * Math.PI / 180;
    
    [cs, sn] = [Math.cos(rad), Math.sin(rad)];

    matrizRx.set(1, 0, 0, 0,
                0, cs, -sn, 0,
                0, sn, cs, 0,
                0, 0, 0, 1); 
    
    return matrizRx;

}

/**
 * Rotaciony: Construye la matriz de rotacion THREE.js para el angulo rt y la retorna.
 * ENTRADAS: rt = Angulo de rotacion (number).
 * SALIDAS: matrizRy = Matriz de rotacion para el angulo rt. 
 */
function Rotaciony(rt){
 
    var matrizRy = new THREE.Matrix4();
    let rad = rt * Math.PI / 180;
    
    [cs, sn] = [Math.cos(rad), Math.sin(rad)];

    matrizRy.set(cs, 0, sn, 0,
                0, 1, 0, 0,
                -sn, 0, cs, 0,
                0, 0, 0, 1);      
    
    return matrizRy;

}

/**
 * Rotacionz: Construye la matriz de rotacion THREE.js para el algulo rt y la retorna.
 * ENTRADAS: rt = Angulo de rotacion (number).
 * SALIDAS: matrizRz = Matriz de rotacion para el angulo rt.
 */
function Rotacionz(rt){

    var matrizRz = new THREE.Matrix4();
    let rad = rt * Math.PI / 180;
    
    [cs, sn] = [Math.cos(rad), Math.sin(rad)];

    matrizRz.set(cs, -sn, 0, 0,
                sn, cs, 0, 0,
                0, 0, 1, 0,
                0, 0, 0, 1);    

    return matrizRz; 

}

/**
 * RotacionRealx: Aplica el angulo de rotacion rt al objeto fig.
 * ENTRADAS: fig = Objeto tipo THREE.LINE que representa el objeto grafico.
 *           posini = Posicion inicial de fig.
 *           rt = Angulo de rotacion (number).
 */
function RotacionRealx(fig, posini, rt){

    tr = [-posini[0], -posini[1], -posini[2]];//Vector para llevar al origen.
    fig.applyMatrix(Traslacion(tr));//Traslacion al origen.
    fig.applyMatrix(Rotacionx(rt));//Rotacion de la figura en x.
    fig.applyMatrix(Traslacion(posini));//Traslacion a posicion inicial.

}

/**
 * RotacionRealy: Aplica el angulo de rotacion rt al objeto fig.
 * ENTRADAS: fig = Objeto tipo THREE.LINE que representa el objeto grafico.
 *           posini = Posicion inicial de fig.
 *           rt = Angulo de rotacion (entero).
 */
function RotacionRealy(fig, posini, rt){

    tr = [-posini[0], -posini[1], -posini[2]];//Vector para llevar al origen.
    fig.applyMatrix(Traslacion(tr));//Traslacion al origen.
    fig.applyMatrix(Rotaciony(rt));//Rotacion de la figura en y.
    fig.applyMatrix(Traslacion(posini));//Traslacion a posicion inicial.

}

/**
 * RotacionRealz: Aplica el angulo de rotacion rt al objeto fig.
 * ENTRADAS: fig = Objeto tipo THREE.LINE que representa el objeto grafico.
 *           posini = Posicion inicial de fig.
 *           rt = Angulo de rotacion (number).
 */
function RotacionRealz(fig, posini, rt){

    tr = [-posini[0], -posini[1], -posini[2]];// Vector para llevar al origen.
    fig.applyMatrix(Traslacion(tr));//Traslacion al origen.
    fig.applyMatrix(Rotacionz(rt));//Rotacion de la figura en z.
    fig.applyMatrix(Traslacion(posini));//Traslacion a posicion inicial.
 
}
