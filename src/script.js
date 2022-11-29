import './style.css'

import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

//import * as dat from 'lil-gui'

import { Raycaster } from 'three'

let lightPink = new THREE.Color(0xF5C6BA)
let pink = new THREE.Color(0xF08897)
let purple = new THREE.Color(0x8942B4)
let darkPurple = new THREE.Color(0x332563)

// [Level 1] See if any object is intersected
let intersectedTvcarpetL1, intersectedChaiseL1, intersectedMuralL1, intersectedDressL1, intersectedRingL1, intersectedCakeL1, intersectedAnimeL1, intersectedPhoneL1, intersectedBottleL1, intersectedBalloonsL1

// Debug UI
// const gui = new dat.GUI()
// console.log(dat)

// --> initialization

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Load Models
const gltfLoader = new GLTFLoader()
//console.log(gltfLoader)

/**
* Lights
*/

const hemisphereLight = new THREE.HemisphereLight(pink, darkPurple, 0.5)
scene.add(hemisphereLight)

let lightIntensity = 0.6

const ambientLight = new THREE.AmbientLight(lightPink, 0.2); // soft white light
scene.add(ambientLight)

const directionalLight = new THREE.DirectionalLight(0xFFFFFF, lightIntensity);
directionalLight.position.set(0, 30, 0)
directionalLight.castShadow = true
scene.add(directionalLight);

// const helper = new THREE.DirectionalLightHelper(directionalLight, 5 );
// scene.add( helper );

/**
 * Objects
 */

//Levels ->
const allLevels = new THREE.Group()

gltfLoader.load(
    '/models/allLevels/alllevels-v1.gltf', (gltf) => {
        //console.log(gltf.scene)
        allLevels.add(gltf.scene.children[2])
        allLevels.scale.set(0.25, 0.25, 0.25)
        scene.add(allLevels)

        allLevels.traverse(child => {
            if(child.material){
                child.material.metalness = 0
                child.material.color.setHex(0xF8D3CA)
                child.receiveShadow = true
                child.castShadow = true
            } 
        })
    }
)


//Level 1 Objects ->
const chaiseLevel1 = new THREE.Group()
const tvcarpetLevel1 = new THREE.Group()
const muralLevel1 = new THREE.Group()
const dressLevel1 = new THREE.Group()
const ringLevel1 = new THREE.Group()
const cakeLevel1 = new THREE.Group()
const animeLevel1 = new THREE.Group()
const phoneLevel1 = new THREE.Group()
const bottleLevel1 = new THREE.Group()
const balloonsLevel1 = new THREE.Group()

//Chaise ->
gltfLoader.load(
    '/models/level1/chaise-gltf/chaise-v1.gltf', (gltf) => {
        //console.log(gltf.scene)
        chaiseLevel1.add(gltf.scene)
        chaiseLevel1.scale.set(0.25, 0.25, 0.25)
        scene.add(chaiseLevel1)

        chaiseLevel1.traverse(child => {
            if(child.material){
                child.material.metalness = 0
                //child.material.color.setHex(0xF57C85)
                //child.receiveShadow = true
                child.castShadow = true
            } 
        })
    }
)

//TV Carpet ->
gltfLoader.load(
    '/models/level1/tvcarpet-gltf/tvcarpet-v1.gltf', (gltf) => {
        //console.log(gltf.scene)
        tvcarpetLevel1.add(gltf.scene)
        tvcarpetLevel1.scale.set(0.25, 0.25, 0.25)
        scene.add(tvcarpetLevel1)

        tvcarpetLevel1.traverse(child => {
            if(child.material){
                child.material.metalness = 0
                //child.material.color.setHex(0x6ADAC6)
                //child.receiveShadow = true
                child.castShadow = true
            } 
        })
    }
)

//Mural ->
gltfLoader.load(
    '/models/level1/mural-gltf/mural-v1.gltf', (gltf) => {
        //console.log(gltf.scene)
        muralLevel1.add(gltf.scene)
        muralLevel1.scale.set(0.25, 0.25, 0.25)
        scene.add(muralLevel1)

        muralLevel1.traverse(child => {
            if(child.material){
                child.material.metalness = 0
                //child.material.color.setHex(0xF57C85)
                //child.receiveShadow = true
                child.castShadow = true
            } 
        })
    }
)

//Dress ->
gltfLoader.load(
    '/models/level1/dress-gltf/dress-v1.gltf', (gltf) => {
        //console.log(gltf.scene)
        dressLevel1.add(gltf.scene)
        dressLevel1.scale.set(0.25, 0.25, 0.25)
        scene.add(dressLevel1)

        dressLevel1.traverse(child => {
            if(child.material){
                child.material.metalness = 0
                //child.material.color.setHex(0x6ADAC6)
                //child.receiveShadow = true
                child.castShadow = true
            } 
        })
    }
)

//Ring ->
gltfLoader.load(
    '/models/level1/ring-gltf/ring-v1.gltf', (gltf) => {
        //console.log(gltf.scene)
        ringLevel1.add(gltf.scene)
        ringLevel1.scale.set(0.25, 0.25, 0.25)
        scene.add(ringLevel1)

        ringLevel1.traverse(child => {
            if(child.material){
                child.material.metalness = 0
                //child.material.color.setHex(0xF8BD50)
                //child.receiveShadow = true
                child.castShadow = true
            } 
        })
    }
)

//Cake ->
gltfLoader.load(
    '/models/level1/cake-gltf/cake-v1.gltf', (gltf) => {
        //console.log(gltf.scene)
        cakeLevel1.add(gltf.scene)
        cakeLevel1.scale.set(0.25, 0.25, 0.25)
        scene.add(cakeLevel1)

        cakeLevel1.traverse(child => {
            if(child.material){
                child.material.metalness = 0
                //child.material.color.setHex(0xF8BD50)
                //child.receiveShadow = true
                child.castShadow = true
            } 
        })
    }
)

//Anime ->
gltfLoader.load(
    '/models/level1/anime-gltf/anime-v1.gltf', (gltf) => {
        //console.log(gltf.scene)
        animeLevel1.add(gltf.scene)
        animeLevel1.scale.set(0.25, 0.25, 0.25)
        scene.add(animeLevel1)

        animeLevel1.traverse(child => {
            if(child.material){
                child.material.metalness = 0
                //child.material.color.setHex(0xF57C85)
                //child.receiveShadow = true
                child.castShadow = true
            } 
        })
    }
)

//Phone ->
gltfLoader.load(
    '/models/level1/phone-gltf/phone-v1.gltf', (gltf) => {
        //console.log(gltf.scene)
        phoneLevel1.add(gltf.scene)
        phoneLevel1.scale.set(0.25, 0.25, 0.25)
        scene.add(phoneLevel1)

        phoneLevel1.traverse(child => {
            if(child.material){
                child.material.metalness = 0
                //child.material.color.setHex(0xF8BD50)
                //child.receiveShadow = true
                child.castShadow = true
            } 
        })
    }
)

//Bottle ->
gltfLoader.load(
    '/models/level1/bottle-gltf/bottle-v1.gltf', (gltf) => {
        //console.log(gltf.scene)
        bottleLevel1.add(gltf.scene)
        bottleLevel1.scale.set(0.25, 0.25, 0.25)
        scene.add(bottleLevel1)

        bottleLevel1.traverse(child => {
            if(child.material){
                child.material.metalness = 0
                //child.material.color.setHex(0x6ADAC6)
                //child.receiveShadow = true
                child.castShadow = true
            } 
        })
    }
)

//Balloons ->
gltfLoader.load(
    '/models/level1/balloons-gltf/balloons-v1.gltf', (gltf) => {
        //console.log(gltf.scene)
        balloonsLevel1.add(gltf.scene)
        balloonsLevel1.scale.set(0.25, 0.25, 0.25)
        scene.add(balloonsLevel1)

        balloonsLevel1.traverse(child => {
            if(child.material){
                child.material.metalness = 0
                //child.material.color.setHex(0x6ADAC6)
                //child.receiveShadow = true
                child.castShadow = true
            } 
        })
    }
)

// Instantiate Raycaster

const raycaster = new Raycaster()

// Translate cursor coordinates ->

const pointer = new THREE.Vector2()

function onPointerMove(event) {
    pointer.x = (event.clientX / window.innerWidth) * 2 - 1
    pointer.y = - (event.clientY / window.innerHeight) * 2 + 1
}

//[Level 1] Hover on objects ->
const pointChaise = {
    position: new THREE.Vector3(0.5, 4, 0),
    element: document.querySelector('.point-0')
}

const pointTvcarpet = {
    position: new THREE.Vector3(0, 5.2, 0),
    element: document.querySelector('.point-1')
}

const pointMural = {
    position: new THREE.Vector3(-1, 5.5, 0),
    element: document.querySelector('.point-2')
}

const pointDress = {
    position: new THREE.Vector3(-1.2, 4.5, -1),
    element: document.querySelector('.point-3')
}

const pointRing = {
    position: new THREE.Vector3(-2, 4.2, 1),
    element: document.querySelector('.point-4')
}

const pointCake = {
    position: new THREE.Vector3(-2, 5.8, -0.2),
    element: document.querySelector('.point-5')
}

const pointAnime = {
    position: new THREE.Vector3(0.5, 3.5, 0),
    element: document.querySelector('.point-6')
}

const pointPhone = {
    position: new THREE.Vector3(0, 4, 3),
    element: document.querySelector('.point-7')
}

const pointBottle = {
    position: new THREE.Vector3(1.5, 3.5, 0),
    element: document.querySelector('.point-8')
}

const pointBalloons = {
    position: new THREE.Vector3(-2, 3.5, 3.5),
    element: document.querySelector('.point-9')
}

//On click + modal interactions ->

//[Level 1] Chaise
const modalChaise = document.querySelector(".modal-0")
const closeBtn0 = document.getElementsByClassName("close")[0]

pointChaise.element.onclick = function (){
    modalChaise.style.display = "table"
}

closeBtn0.onclick = function (){
    modalChaise.style.display = "none"
}

// Click outside the modal is not working :(

window.onclick = function(event){
    if(event.target == modalChaise){
        modalChaise.style.display = "none"
    }
}

//[Level 1] Tv Carpet
const modalTvcarpet = document.querySelector(".modal-1")
const closeBtn1 = document.getElementsByClassName("close")[1]

pointTvcarpet.element.onclick = function (){
    modalTvcarpet.style.display = "table"
}

closeBtn1.onclick = function (){
    modalTvcarpet.style.display = "none"
}

//[Level 1] Mural
const modalMural = document.querySelector(".modal-2")
const closeBtn2 = document.getElementsByClassName("close")[2]

pointMural.element.onclick = function (){
    modalMural.style.display = "table"
}

closeBtn2.onclick = function (){
    modalMural.style.display = "none"
}

//[Level 1] Dress
const modalDress = document.querySelector(".modal-3")
const closeBtn3 = document.getElementsByClassName("close")[3]

pointDress.element.onclick = function (){
    modalDress.style.display = "table"
}

closeBtn3.onclick = function (){
    modalDress.style.display = "none"
}

//[Level 1] Ring
const modalRing = document.querySelector(".modal-4")
const closeBtn4 = document.getElementsByClassName("close")[4]

pointRing.element.onclick = function (){
    modalRing.style.display = "table"
}

closeBtn4.onclick = function (){
    modalRing.style.display = "none"
}

//[Level 1] Cake
const modalCake = document.querySelector(".modal-5")
const closeBtn5 = document.getElementsByClassName("close")[5]

pointCake.element.onclick = function (){
    modalCake.style.display = "table"
}

closeBtn5.onclick = function (){
    modalCake.style.display = "none"
}

//[Level 1] Anime
const modalAnime = document.querySelector(".modal-6")
const closeBtn6 = document.getElementsByClassName("close")[6]

pointAnime.element.onclick = function (){
    modalAnime.style.display = "table"
}

closeBtn6.onclick = function (){
    modalAnime.style.display = "none"
}

//[Level 1] Phone
const modalPhone = document.querySelector(".modal-7")
const closeBtn7 = document.getElementsByClassName("close")[7]

pointPhone.element.onclick = function (){
    modalPhone.style.display = "table"
}

closeBtn7.onclick = function (){
    modalPhone.style.display = "none"
}

//[Level 1] Bottle
const modalBottle = document.querySelector(".modal-8")
const closeBtn8 = document.getElementsByClassName("close")[8]

pointBottle.element.onclick = function (){
    modalBottle.style.display = "table"
}

closeBtn8.onclick = function (){
    modalBottle.style.display = "none"
}

//[Level 1] Balloons
const modalBalloons = document.querySelector(".modal-9")
const closeBtn9 = document.getElementsByClassName("close")[9]

pointBalloons.element.onclick = function (){
    modalBalloons.style.display = "table"
}

closeBtn9.onclick = function (){
    modalBalloons.style.display = "none"
}

// Floor
const geometryFloor = new THREE.PlaneGeometry( 100, 100 );
const materialFloor = new THREE.MeshStandardMaterial({ color: darkPurple, side: THREE.DoubleSide })
const floor = new THREE.Mesh( geometryFloor, materialFloor );
floor.rotation.x = Math.PI * 0.5
floor.position.y = -0.5
floor.receiveShadow = true
scene.add( floor );

/**
 * Axes helper
 */

//  const axesHelper = new THREE.AxesHelper(3)
//  scene.add(axesHelper)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () => 
{
    //console.log('window has been resized')
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    //update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    //update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)) //fix pixel ratio for all devices
})

//Handle FULLSCREEN!!
// window.addEventListener('dblclick', () => 
// {    
//     const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement
    
//     if(!fullscreenElement) {
//         if(canvas.requestFullscreen){
//             canvas.requestFullscreen()
//         }
//         else if(canvas.webkitRequestFullscreen){
//             canvas.webkitRequestFullscreen()
//         }

//     } else {
//         if(document.exitFullscreen){
//             document.exitFullscreen()
//         } else if(document.webkitExitFullscreen){
//             document.webkitExitFullscreen()
//         }
//     }
// })

/**
 * Camera
 */

// Base camera
const camera = new THREE.PerspectiveCamera(40, sizes.width / sizes.height, 0.1, 100)
camera.position.set(14, 12, 20)
scene.add(camera)

const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true
controls.target.set(-2, 7, -6)

/**
 * Renderer
 */

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.shadowMap.enabled = true

/**
 * Animate
 */

//const clock = new THREE.Clock()

const tick = () =>
{
    //const elapsedTime = clock.getElapsedTime()

    // Update controls
    controls.update()

    // Raycasting
    raycaster.setFromCamera(pointer, camera)

    //[Level 1] Intersect ChaiseObj -->
    const intersectsChaiseL1 = raycaster.intersectObjects(chaiseLevel1.children)
    
    const screenPositionChaise = pointChaise.position.clone()
    screenPositionChaise.project(camera)

    if (intersectsChaiseL1.length > 0) {

    pointChaise.element.classList.add('visible')
    //document.body.style.cursor = "pointer"
    
    if(intersectedChaiseL1 != intersectsChaiseL1[0].object){
    
        if (intersectedChaiseL1) intersectedChaiseL1.material.color.setHex(intersectedChaiseL1.currentHex);
    
            intersectedChaiseL1 = intersectsChaiseL1[0].object;
            intersectedChaiseL1.currentHex = intersectedChaiseL1.material.color.getHex();
            intersectedChaiseL1.material.color.setHex(0x8942B4);
        }
            
        } else {
            
            pointChaise.element.classList.remove('visible')
            //document.body.style.cursor = "default"

            if (intersectedChaiseL1) intersectedChaiseL1.material.color.setHex(intersectedChaiseL1.currentHex);
                    intersectedChaiseL1 = null;
        }

    const translateXChaise = screenPositionChaise.x * sizes.width * 0.5
    const translateYChaise = - screenPositionChaise.y * sizes.height * 0.5

    pointChaise.element.style.transform = `translateX(${translateXChaise}px) translateY(${translateYChaise}px)`

    //[Level 1] Intersect TvCarpetObj -->
    const intersectsTvcarpetL1 = raycaster.intersectObjects(tvcarpetLevel1.children)

    const screenPositionTvcarpet = pointTvcarpet.position.clone()
    screenPositionTvcarpet.project(camera)

    if (intersectsTvcarpetL1.length > 0) {

    pointTvcarpet.element.classList.add('visible')
    
    if(intersectedTvcarpetL1 != intersectsTvcarpetL1[0].object){
    
        if (intersectedTvcarpetL1) intersectedTvcarpetL1.material.color.setHex(intersectedTvcarpetL1.currentHex);
    
            intersectedTvcarpetL1 = intersectsTvcarpetL1[0].object;
            intersectedTvcarpetL1.currentHex = intersectedTvcarpetL1.material.color.getHex();
            intersectedTvcarpetL1.material.color.setHex(0x8942B4);
        }
            
        } else {
            
            pointTvcarpet.element.classList.remove('visible')

            if (intersectedTvcarpetL1) intersectedTvcarpetL1.material.color.setHex(intersectedTvcarpetL1.currentHex);
                    intersectedTvcarpetL1 = null;
        }

    const translateXTvcarpet = screenPositionTvcarpet.x * sizes.width * 0.5
    const translateYTvcarpet = - screenPositionTvcarpet.y * sizes.height * 0.5

    pointTvcarpet.element.style.transform = `translateX(${translateXTvcarpet}px) translateY(${translateYTvcarpet}px)`

    //[Level 1] Intersect MuralObj -->
    const intersectsMuralL1 = raycaster.intersectObjects(muralLevel1.children)

    const screenPositionMural = pointMural.position.clone()
    screenPositionMural.project(camera)

    if (intersectsMuralL1.length > 0) {

    pointMural.element.classList.add('visible')
    
    if(intersectedMuralL1 != intersectsMuralL1[0].object){
    
        if (intersectedMuralL1) intersectedMuralL1.material.color.setHex(intersectedMuralL1.currentHex);
    
            intersectedMuralL1 = intersectsMuralL1[0].object;
            intersectedMuralL1.currentHex = intersectedMuralL1.material.color.getHex();
            intersectedMuralL1.material.color.setHex(0x8942B4);
        }
            
        } else {
            
            pointMural.element.classList.remove('visible')

            if (intersectedMuralL1) intersectedMuralL1.material.color.setHex(intersectedMuralL1.currentHex);
                    intersectedMuralL1 = null;
        }

    const translateXMural = screenPositionMural.x * sizes.width * 0.5
    const translateYMural = - screenPositionMural.y * sizes.height * 0.5

    pointMural.element.style.transform = `translateX(${translateXMural}px) translateY(${translateYMural}px)`

    //[Level 1] Intersect DressObj -->
    const intersectsDressL1 = raycaster.intersectObjects(dressLevel1.children)

    const screenPositionDress = pointDress.position.clone()
    screenPositionDress.project(camera)

    if (intersectsDressL1.length > 0) {

    pointDress.element.classList.add('visible')
    
    if(intersectedDressL1 != intersectsDressL1[0].object){
    
        if (intersectedDressL1) intersectedDressL1.material.color.setHex(intersectedDressL1.currentHex);
    
            intersectedDressL1 = intersectsDressL1[0].object;
            intersectedDressL1.currentHex = intersectedDressL1.material.color.getHex();
            intersectedDressL1.material.color.setHex(0x8942B4);
        }
            
        } else {
            
            pointDress.element.classList.remove('visible')

            if (intersectedDressL1) intersectedDressL1.material.color.setHex(intersectedDressL1.currentHex);
                    intersectedDressL1 = null;
        }

    const translateXDress = screenPositionDress.x * sizes.width * 0.5
    const translateYDress = - screenPositionDress.y * sizes.height * 0.5

    pointDress.element.style.transform = `translateX(${translateXDress}px) translateY(${translateYDress}px)`

    //[Level 1] Intersect RingObj -->
    const intersectsRingL1 = raycaster.intersectObjects(ringLevel1.children)

    const screenPositionRing = pointRing.position.clone()
    screenPositionRing.project(camera)

    if (intersectsRingL1.length > 0) {

    pointRing.element.classList.add('visible')
    
    if(intersectedRingL1 != intersectsRingL1[0].object){
    
        if (intersectedRingL1) intersectedRingL1.material.color.setHex(intersectedRingL1.currentHex);
    
            intersectedRingL1 = intersectsRingL1[0].object;
            intersectedRingL1.currentHex = intersectedRingL1.material.color.getHex();
            intersectedRingL1.material.color.setHex(0x8942B4);
        }
            
        } else {
            
            pointRing.element.classList.remove('visible')

            if (intersectedRingL1) intersectedRingL1.material.color.setHex(intersectedRingL1.currentHex);
                    intersectedRingL1 = null;
        }

    const translateXRing = screenPositionRing.x * sizes.width * 0.5
    const translateYRing = - screenPositionRing.y * sizes.height * 0.5

    pointRing.element.style.transform = `translateX(${translateXRing}px) translateY(${translateYRing}px)`

    //[Level 1] Intersect CakeObj -->
    const intersectsCakeL1 = raycaster.intersectObjects(cakeLevel1.children)

    const screenPositionCake = pointCake.position.clone()
    screenPositionCake.project(camera)

    if (intersectsCakeL1.length > 0) {

    pointCake.element.classList.add('visible')
    
    if(intersectedCakeL1 != intersectsCakeL1[0].object){
    
        if (intersectedCakeL1) intersectedCakeL1.material.color.setHex(intersectedCakeL1.currentHex);
    
            intersectedCakeL1 = intersectsCakeL1[0].object;
            intersectedCakeL1.currentHex = intersectedCakeL1.material.color.getHex();
            intersectedCakeL1.material.color.setHex(0x8942B4);
        }
            
        } else {
            
            pointCake.element.classList.remove('visible')

            if (intersectedCakeL1) intersectedCakeL1.material.color.setHex(intersectedCakeL1.currentHex);
                    intersectedCakeL1 = null;
        }

    const translateXCake = screenPositionCake.x * sizes.width * 0.5
    const translateYCake = - screenPositionCake.y * sizes.height * 0.5

    pointCake.element.style.transform = `translateX(${translateXCake}px) translateY(${translateYCake}px)`

    //[Level 1] Intersect AnimeObj -->
    const intersectsAnimeL1 = raycaster.intersectObjects(animeLevel1.children)

    const screenPositionAnime = pointAnime.position.clone()
    screenPositionAnime.project(camera)

    if (intersectsAnimeL1.length > 0) {

    pointAnime.element.classList.add('visible')
    
    if(intersectedAnimeL1 != intersectsAnimeL1[0].object){
    
        if (intersectedAnimeL1) intersectedAnimeL1.material.color.setHex(intersectedAnimeL1.currentHex);
    
            intersectedAnimeL1 = intersectsAnimeL1[0].object;
            intersectedAnimeL1.currentHex = intersectedAnimeL1.material.color.getHex();
            intersectedAnimeL1.material.color.setHex(0x8942B4);
        }
            
        } else {
            
            pointAnime.element.classList.remove('visible')

            if (intersectedAnimeL1) intersectedAnimeL1.material.color.setHex(intersectedAnimeL1.currentHex);
                    intersectedAnimeL1 = null;
        }

    const translateXAnime = screenPositionAnime.x * sizes.width * 0.5
    const translateYAnime = - screenPositionAnime.y * sizes.height * 0.5

    pointAnime.element.style.transform = `translateX(${translateXAnime}px) translateY(${translateYAnime}px)`

    //[Level 1] Intersect PhoneObj -->
    const intersectsPhoneL1 = raycaster.intersectObjects(phoneLevel1.children)

    const screenPositionPhone = pointPhone.position.clone()
    screenPositionPhone.project(camera)

    if (intersectsPhoneL1.length > 0) {

    pointPhone.element.classList.add('visible')
    
    if(intersectedPhoneL1 != intersectsPhoneL1[0].object){
    
        if (intersectedPhoneL1) intersectedPhoneL1.material.color.setHex(intersectedPhoneL1.currentHex);
    
            intersectedPhoneL1 = intersectsPhoneL1[0].object;
            intersectedPhoneL1.currentHex = intersectedPhoneL1.material.color.getHex();
            intersectedPhoneL1.material.color.setHex(0x8942B4);
        }
            
        } else {
            
            pointPhone.element.classList.remove('visible')

            if (intersectedPhoneL1) intersectedPhoneL1.material.color.setHex(intersectedPhoneL1.currentHex);
                    intersectedPhoneL1 = null;
        }

    const translateXPhone = screenPositionPhone.x * sizes.width * 0.5
    const translateYPhone = - screenPositionPhone.y * sizes.height * 0.5

    pointPhone.element.style.transform = `translateX(${translateXPhone}px) translateY(${translateYPhone}px)`

    //[Level 1] Intersect BottleObj -->
    const intersectsBottleL1 = raycaster.intersectObjects(bottleLevel1.children)

    const screenPositionBottle = pointBottle.position.clone()
    screenPositionBottle.project(camera)

    if (intersectsBottleL1.length > 0) {

    pointBottle.element.classList.add('visible')
    
    if(intersectedBottleL1 != intersectsBottleL1[0].object){
    
        if (intersectedBottleL1) intersectedBottleL1.material.color.setHex(intersectedBottleL1.currentHex);
    
            intersectedBottleL1 = intersectsBottleL1[0].object;
            intersectedBottleL1.currentHex = intersectedBottleL1.material.color.getHex();
            intersectedBottleL1.material.color.setHex(0x8942B4);
        }
            
        } else {
            
            pointBottle.element.classList.remove('visible')

            if (intersectedBottleL1) intersectedBottleL1.material.color.setHex(intersectedBottleL1.currentHex);
                    intersectedBottleL1 = null;
        }

    const translateXBottle = screenPositionBottle.x * sizes.width * 0.5
    const translateYBottle = - screenPositionBottle.y * sizes.height * 0.5

    pointBottle.element.style.transform = `translateX(${translateXBottle}px) translateY(${translateYBottle}px)`

    //[Level 1] Intersect BalloonsObj -->
    const intersectsBalloonsL1 = raycaster.intersectObjects(balloonsLevel1.children)

    const screenPositionBalloons = pointBalloons.position.clone()
    screenPositionBalloons.project(camera)

    if (intersectsBalloonsL1.length > 0) {

    pointBalloons.element.classList.add('visible')
    
    if(intersectedBalloonsL1 != intersectsBalloonsL1[0].object){
    
        if (intersectedBalloonsL1) intersectedBalloonsL1.material.color.setHex(intersectedBalloonsL1.currentHex);
    
            intersectedBalloonsL1 = intersectsBalloonsL1[0].object;
            intersectedBalloonsL1.currentHex = intersectedBalloonsL1.material.color.getHex();
            intersectedBalloonsL1.material.color.setHex(0x8942B4);
        }
            
        } else {
            
            pointBalloons.element.classList.remove('visible')

            if (intersectedBalloonsL1) intersectedBalloonsL1.material.color.setHex(intersectedBalloonsL1.currentHex);
                    intersectedBalloonsL1 = null;
        }

    const translateXBalloons = screenPositionBalloons.x * sizes.width * 0.5
    const translateYBalloons = - screenPositionBalloons.y * sizes.height * 0.5

    pointBalloons.element.style.transform = `translateX(${translateXBalloons}px) translateY(${translateYBalloons}px)`

    // function changeCursor(){
    //     if (intersectsChaiseL1.length > 0) {
    //         document.body.style.display = "pointer"
    //     }
    // }

    // function onClick(_event){
    //     if (intersectsChaiseL1.length > 0) {
    //         modalChaise.style.display = "table"
    //     } else {
    //         modalChaise.style.display = "none"
    //     }

    //     if (intersectsTvcarpetL1.length > 0) {
    //         modalTvcarpet.style.display = "table"
    //     } else {
    //         modalTvcarpet.style.display = "none"
    //     }

    //     if (intersectsMuralL1.length > 0) {
    //         modalMural.style.display = "table"
    //     } else {
    //         modalMural.style.display = "none"
    //     }

    //     if (intersectsDressL1.length > 0) {
    //         modalDress.style.display = "table"
    //     } else {
    //         modalDress.style.display = "none"
    //     }

    //     if (intersectsRingL1.length > 0) {
    //         modalRing.style.display = "table"
    //     } else {
    //         modalRing.style.display = "none"
    //     }
    // }

    // changeCursor

    window.addEventListener('mousemove', onPointerMove)
    //window.addEventListener('click', onClick)

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()