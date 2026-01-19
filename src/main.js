import './style.css'
import Experience from './Experience/Experience.js'

const experience = new Experience(document.getElementById('webgl'))

// import './style.css'
// import * as THREE from 'three'
// import { OrbitControls } from 'three/examples/jsm/Addons.js'
// import { Timer } from 'three'
// import { GLTFLoader } from 'three/examples/jsm/Addons.js'
// import { gsap } from 'gsap/gsap-core'
// import GUI from 'lil-gui'

// /**
//  * Debug UI
//  */

// const gui = new GUI({
//   width: 300,
//   title: 'Debug UI',
//   closeFolders: true
// })

// window.addEventListener('keydown', () =>
// {
//   if(event.key == 'h')
//     gui.show(gui._hidden)
// })

// const debugObject = {}

// /**
//  * Canvas
//  */

// const canvas = document.getElementById('webgl')

// /**
//  * Scene
//  */

// const scene = new THREE.Scene()


// /**
//  * Objects
//  */

// const boxGeometry = new THREE.BoxGeometry(1, 1, 1)

// const boxMaterial = new THREE.MeshBasicMaterial({
//   color: 'red'
// })

// const box = new THREE.Mesh(boxGeometry, boxMaterial)
// box.position.set(0, 0, 0)

// scene.add(box)

// /**
//  * Camera
//  */

// const cameraRatio = {
//   width: window.innerWidth,
//   height: window.innerHeight
// }

// window.addEventListener('resize', () =>
// {
//   cameraRatio.width = window.innerWidth
//   cameraRatio.height = window.innerHeight

//   camera.aspect = cameraRatio.width / cameraRatio.height
//   camera.updateProjectionMatrix()

//   renderer.setSize(cameraRatio.width, cameraRatio.height)
//   renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

// })

// const camera = new THREE.PerspectiveCamera(60, cameraRatio.width / cameraRatio.height, 0.1, 1000)
// camera.lookAt(box)
// camera.position.set(0, 3, -5)
// scene.add(camera)


// /**
//  * Orbit Controls
//  */

// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true

// /**
//  * Renderer
//  */

// const renderer = new THREE.WebGLRenderer({
//   canvas: canvas
// })
// renderer.setSize(cameraRatio.width, cameraRatio.height)
// renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
// renderer.render(scene, camera)

// /**
//  * Animation Loop
//  */

// const timer = new Timer()

// const tick = () =>
// {
//   timer.update()
//   const elapsedTime = timer.getElapsed()

//   // Update controls
//   controls.update()

//   // Create new render
//   renderer.render(scene, camera)

//   // Call tick again before next frame
//   window.requestAnimationFrame(tick)
// }

// tick()