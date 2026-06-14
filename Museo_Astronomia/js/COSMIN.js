import * as THREE from "./three.module.js";
    import{ RoundedBoxGeometry } from "./RoundedBoxGeometry.js";

    export default function Personaje01(x,y,z){
    //PERSONAJE COSMÍN

    //CARA
    var esfera1 = new THREE.SphereGeometry(5,50,50);
    var color1 = new THREE.MeshLambertMaterial({color:0xD9B56F});
    var mesh = new THREE.Mesh(esfera1,color1);
    //scene.add(mesh01);
    mesh.scale.set(1.5,1.2,0.9);
    mesh.position.set(0,20,3.5);

    //OJOS 
    var cubo1 = new RoundedBoxGeometry(1.5,2.2,1,2,0.8);
    var color2 = new THREE.MeshLambertMaterial({color:0x3D3B34});
    var ojo1 = new THREE.Mesh(cubo1,color2);
    //scene.add(ojo1);
    ojo1.position.set(-1.5,20.5,7.8);

    var ojo2 = new THREE.Mesh(cubo1,color2);
    //scene.add(ojo2);
    ojo2.position.set(1.5,20.5,7.8);

    //CHAPITAS
    var esfera2 = new THREE.SphereGeometry(1,50,50);
    var color3 = new THREE.MeshLambertMaterial({color:0xFFADAD});
    var chapita1 = new THREE.Mesh(esfera2,color3);
    //scene.add(chapita1);
    chapita1.scale.set(1.5,1.3,1.2);
    chapita1.position.set(3,18.7,6.5);

    var chapitas = new THREE.Mesh(esfera2,color3);
    //scene.add(chapitas);
    chapitas.scale.set(1.5,1.3,1.2);
    chapitas.position.set(-3,18.7,6.5);

    //BOQUITA
    var esfera3 = new THREE.SphereGeometry(1,50,50);
    var color4 = new THREE.MeshLambertMaterial({color:0xF06C6C});
    var boca = new THREE.Mesh(esfera3,color4);
    //scene.add(boca);
    boca.scale.set(1.2,1,1);
    boca.position.set(0,18,7);

    var cubo2 = new RoundedBoxGeometry(2,1.1,1,2,0.5);
    var color5 = new THREE.MeshLambertMaterial({color:0xF06C6C});
    var boca1 = new THREE.Mesh(cubo2,color4);
    //scene.add(boca1);
    boca1.position.set(0,18.2,7.5);

        //AGRUPAR CARA 
        var cara = new THREE.Group();
        cara.add(mesh,ojo1,ojo2,chapita1,chapitas,boca,boca1);
        //scene.add(cara);
        cara.position.set(0,0,0);


   //CUERPO 
    var esfera4 = new THREE.SphereGeometry(10,50,50);
    var color6 = new THREE.MeshLambertMaterial({color:0x59BBC2});
    var cuerpo = new THREE.Mesh(esfera4,color6);
    cuerpo.scale.set(1,0.82,0.78);
    cuerpo.position.set(0,20,0);
    //scene.add(cuerpo);

        //AGRUPAR CARA A CUERPO
        var cuerpo01 = new THREE.Group();
        cuerpo01.add(cuerpo,cara);
        //scene.add(cuerpo01);
        cuerpo01.position.set(0,0,0);


    //BRAZO IZQUIERDO
    var cilindro01 = new THREE.CylinderGeometry(2, 2, 10, 10);
    var brazo01 = new THREE.Mesh(cilindro01,color6);
    //scene.add(brazo01);
    brazo01.position.set(9,20,0);
    brazo01.rotation.set(0,0,0.85);

    //MANOS IZQUIERDA
    var cubo3 = new RoundedBoxGeometry(4,5,4,3,2);
    var color7 = new THREE.MeshLambertMaterial({color:0xA1D2D6});
    var mano01 = new THREE.Mesh(cubo3,color7);
    //scene.add(mano01);
    mano01.position.set(13.8,15.8,0);
    mano01.rotation.set(0,0,0.85);

    //PULGAR
    var cubo4 = new RoundedBoxGeometry(1.5,2,3,5,1);
    var pulgar01 = new THREE.Mesh(cubo4,color7);
    //scene.add(pulgar01);
    pulgar01.position.set(15,17,0);
    pulgar01.rotation.set(-1.5,1.6,0);

        //AGRUPAR MANO Y PULGAR IZQUIERDO
        var manos = new THREE.Group();
        manos.add(mano01,pulgar01,brazo01);
        //scene.add(manos);
        manos.position.set(0,0,0);


    //BRAZO DERECHO
    var brazo02 = new THREE.Mesh(cilindro01,color6);
    //scene.add(brazo02);
    brazo02.position.set(-9,20,0);
    brazo02.rotation.set(0,0,-0.85);

    //MANO DERECHA
    var cubo5 = new RoundedBoxGeometry(4,5,4,3,2);
    var mano02 = new THREE.Mesh(cubo5,color7);
    //scene.add(mano02);
    mano02.position.set(-13.8,15.8,0);
    mano02.rotation.set(0,0,-0.90);

    //PULGAR
    var cubo6 = new RoundedBoxGeometry(1.5,2,3,5,1);
    var pulgar02 = new THREE.Mesh(cubo6,color7);
    //scene.add(pulgar02);
    pulgar02.position.set(-15,17,0);
    pulgar02.rotation.set(-1.5,1.6,0);

        //AGRUPAR MANO Y PULGAR DERECHO
        var manos02 = new THREE.Group();
        manos02.add(mano02,pulgar02,brazo02);
        //scene.add(manos02);
        manos02.position.set(0,0,0);

        //AGRUPAR BRAZOS A CUERPO 
        var cuerpo02 = new THREE.Group();
        cuerpo02.add(cuerpo01,manos,manos02);
        //scene.add(cuerpo02);
        cuerpo02.position.set(0,0,0);

    // PIERNA IZQUIERDO
    var cilindro02 = new THREE.CylinderGeometry(2.5, 2, 6, 10);
    var pierna01 = new THREE.Mesh(cilindro02,color6);
    //scene.add(pierna01);
    pierna01.position.set(2.6,10,0);
    pierna01.rotation.set(0,0,0);

    // PIE IZQUIERDO
    var cubo7 = new RoundedBoxGeometry(4.5,4,6.3,3,2);
    var pie01 = new THREE.Mesh(cubo7,color7);
    //scene.add(pie01);
    pie01.position.set(2.6,5.6,0.5);
    pie01.rotation.set(0,0,0);

        //AGRUPAR PIERNA 1
        var p1 = new THREE.Group();
        p1.add(pierna01,pie01);
        //scene.add(p1);
        p1.position.set(0,0,0);  

    // PIERNA DERECHA
    var pierna02 = new THREE.Mesh(cilindro02,color6);
    //scene.add(pierna02);
    pierna02.position.set(-2.6,10,0);

    // PIE DERECHO
    var pie02 = new THREE.Mesh(cubo7,color7);
    //scene.add(pie02);
    pie02.position.set(-2.6,5.6,0.5);

        //AGRUPAR PIERNA 2
        var p2 = new THREE.Group();
        p2.add(pierna02,pie02);
        //scene.add(p2);
        p2.position.set(0,0,0);

        //AGRUPAR BRAZOS A CUERPO 
        var cuerpo03 = new THREE.Group();
        cuerpo03.add(cuerpo02,p1,p2);
       // scene.add(cuerpo03);
        cuerpo03.position.set(0,0,0);

    
    //ESTRELLAS 
    var color09 = new THREE.MeshLambertMaterial({color:0xFFC014});
    var cono = new THREE.ConeGeometry(4,10,10);

    // punta arriba
    var mesh01 = new THREE.Mesh(cono,color09);
   //scene.add(mesh01);
    mesh01.position.set(0,11,25);

    // punta izquierda
    var mesh02 = new THREE.Mesh(cono,color09);
    //scene.add(mesh02);
    mesh02.position.set(-3,1,25);
    mesh02.rotation.set(0,0,2.5);

    // punta derecha
    var mesh03 = new THREE.Mesh(cono,color09);
    //scene.add(mesh03);
    mesh03.position.set(3,1,25);
    mesh03.rotation.set(0,0,-2.5);

    // punta abajo izquierda
    var mesh04 = new THREE.Mesh(cono,color09);
    //scene.add(mesh04);
    mesh04.position.set(-5,8,25);
    mesh04.rotation.set(0,0,1);

    // punta abajo derecha
    var mesh05 = new THREE.Mesh(cono,color09);
    //scene.add(mesh05);
    mesh05.position.set(5,8,25);
    mesh05.rotation.set(0,0,-1);

        //AGRUPAR ESTRELLA 
        var estrella01 = new THREE.Group();
        estrella01.add(mesh01,mesh02,mesh03,mesh04,mesh05);
        //scene.add(estrella01);
        estrella01.position.set(0,27,0);
        estrella01.scale.set(0.20,0.20,0.20);
        estrella01.rotation.set(-0.2,0,0);

        var estrella02 = estrella01.clone();
        estrella02.position.set(1.5,25,4);
        //scene.add(estrella02);
        estrella02.scale.set(0.1,0.1,0.1);
        estrella02.rotation.set(-0.2,0,-0.3);

        var estrella03 = estrella01.clone();
        estrella03.position.set(-2,25,4);
        //scene.add(estrella03);
        estrella03.scale.set(0.1,0.1,0.1);
        estrella03.rotation.set(-0.2,0,0.3);

        var estrella04 = estrella01.clone();
        estrella04.position.set(3,27,2);
        //scene.add(estrella04);
        estrella04.scale.set(0.12,0.12,0.12);
        estrella04.rotation.set(-0.2,0,-0.3);

        var estrella05 = estrella01.clone();
        estrella05.position.set(-3,27,2);
        //scene.add(estrella05);
        estrella05.scale.set(0.12,0.12,0.12);
        estrella05.rotation.set(-0.2,0,0.3);

        //AGRUPAR ESTRELLAS
        var estrella06 = new THREE.Group();
        estrella06.add(estrella01,estrella02,estrella03,estrella04,estrella05);
        //scene.add(estrella06);
        estrella06.position.set(0,0,0);

     const COSMIN = new THREE.Group(cuerpo03,estrella06);
    COSMIN.add();

    return COSMIN;
    }
