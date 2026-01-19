import * as THREE from 'three'
import Experience from '../Experience.js'

// Shaders
import portalVertexShader from '/src/shaders/portalShader/vertex.glsl'
import portalFragmentShader from '/src/shaders/portalShader/fragment.glsl'
import energyBoxVertexShader from '/src/shaders/energyBoxShader/vertex.glsl'
import energyBoxFragmentShader from '/src/shaders/energyBoxShader/fragment.glsl'

export default class Portal
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.time = this.experience.time
        this.resources = this.experience.resources

        // Setup
        this.resource = this.resources.items.portalModel

        this.setModel()
        this.setTextures()
        this.setMaterial()
    }

    setModel()
    {
        this.model = this.resource.scene
        this.model.position.set(0, 0, 0)
        this.model.rotation.y = Math.PI
        this.model.scale.set(1, 1, 1)
        this.scene.add(this.model)
    }

    setTextures()
    {
        this.textures = {}

        this.textures.bake1 = this.resources.items.portalBake1
        this.textures.bake1.flipY = false
        this.textures.bake1.colorSpace = THREE.SRGBColorSpace

        this.textures.bake2 = this.resources.items.portalBake2
        this.textures.bake2.flipY = false
        this.textures.bake2.colorSpace = THREE.SRGBColorSpace

        this.textures.bake3 = this.resources.items.portalBake3
        this.textures.bake3.flipY = false
        this.textures.bake3.colorSpace = THREE.SRGBColorSpace

        this.textures.bake4 = this.resources.items.portalBake4
        this.textures.bake4.flipY = false
        this.textures.bake4.colorSpace = THREE.SRGBColorSpace
    }

    setMaterial()
    {
        // Emissive
        // secondary_25_neutral_emissive
        this.model.children[0].material = new THREE.MeshStandardMaterial({
            color: "#ffffff"
        })

        // secondary_50_energyBox_emissive_shader
    this.model.children[1].material = new THREE.ShaderMaterial({
            vertexShader: energyBoxVertexShader,
            fragmentShader: energyBoxFragmentShader,
            uniforms: {
                uTime: { value: 0 },
                uColorOut: { value: new THREE.Color('#ffffff')},
                uColorIn: { value: new THREE.Color('#000000')}
            }
        })

        // primary_50_neutral_emissive
    this.model.children[2].material = new THREE.MeshStandardMaterial({
            color: "#ffa600"
        })

        // primary_200_portal_emissive_shader
    this.model.children[3].material = new THREE.ShaderMaterial({
            vertexShader: portalVertexShader,
            fragmentShader: portalFragmentShader,
            uniforms: {
                uTime: { value: 0 },
                uColorOut: { value: new THREE.Color('#000000')},
                uColorIn: { value: new THREE.Color('#ffa600')}
            }
        })

        // Baked
        this.model.children[4].material = new THREE.MeshBasicMaterial ({
            map: this.textures.bake1
        })

        this.model.children[5].material = new THREE.MeshBasicMaterial ({
            map: this.textures.bake2
        })

        this.model.children[6].material = new THREE.MeshBasicMaterial ({
        map: this.textures.bake3
        })

        this.model.children[7].material = new THREE.MeshBasicMaterial ({
            map: this.textures.bake4
        })
    }

    update()
    {
        this.model.children[1].material.uniforms.uTime.value += this.time.delta * 0.001
        this.model.children[3].material.uniforms.uTime.value += this.time.delta * 0.001
    }
}