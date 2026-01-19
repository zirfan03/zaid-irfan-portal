import * as THREE from 'three'
import Experience from '../Experience.js'
import Environment from './Environment.js'
import Portal from './Portal.js'

export default class World
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        this.resources.on('ready', () =>
        {
            // Setup
            this.portal = new Portal()
            this.Environment = new Environment()
        })
    }

    update()
    {
        if(this.portal)
            this.portal.update()
    }
}