<template>
  <div ref="container" class="w-full h-full min-h-[400px] relative rounded-3xl overflow-hidden bg-black/50">
    <div class="absolute inset-0 z-10 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'
import gsap from 'gsap'

const container = ref<HTMLElement | null>(null)
let scene: THREE.Scene, camera: THREE.PerspectiveCamera, renderer: THREE.WebGLRenderer
let group: THREE.Group
let animationFrameId: number

const init = () => {
  if (!container.value) return

  const width = container.value.clientWidth
  const height = container.value.clientHeight

  scene = new THREE.Scene()
  
  camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000)
  camera.position.z = 30

  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
  renderer.setSize(width, height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  container.value.appendChild(renderer.domElement)

  group = new THREE.Group()
  scene.add(group)

  // Central Core
  const coreGeometry = new THREE.IcosahedronGeometry(3, 1)
  const coreMaterial = new THREE.MeshBasicMaterial({ color: 0x3b82f6, wireframe: true, transparent: true, opacity: 0.3 })
  const core = new THREE.Mesh(coreGeometry, coreMaterial)
  group.add(core)

  // Orbiting Nodes (representing skills)
  const colors = [0x3b82f6, 0xa853ba, 0xe92a67, 0x10b981, 0xf59e0b]
  const nodeCount = 40

  for (let i = 0; i < nodeCount; i++) {
    const radius = 8 + Math.random() * 12
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos((Math.random() * 2) - 1)

    const x = radius * Math.sin(phi) * Math.cos(theta)
    const y = radius * Math.sin(phi) * Math.sin(theta)
    const z = radius * Math.cos(phi)

    const geometry = new THREE.SphereGeometry(0.3 + Math.random() * 0.4, 16, 16)
    const material = new THREE.MeshBasicMaterial({ 
      color: colors[Math.floor(Math.random() * colors.length)],
      transparent: true,
      opacity: 0.8
    })
    
    const mesh = new THREE.Mesh(geometry, material)
    mesh.position.set(x, y, z)
    
    // Custom properties for orbit animation
    mesh.userData = {
      radius,
      theta,
      phi,
      speed: 0.002 + Math.random() * 0.005
    }

    group.add(mesh)
    
    // Connect some nodes with lines
    if (i > 0 && Math.random() > 0.5) {
      const lineMat = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.1 })
      const points = [
        new THREE.Vector3(x, y, z),
        group.children[i-1].position
      ]
      const lineGeo = new THREE.BufferGeometry().setFromPoints(points)
      const line = new THREE.Line(lineGeo, lineMat)
      group.add(line)
    }
  }

  // Mouse interaction
  let targetRotationX = 0
  let targetRotationY = 0

  const onMouseMove = (e: MouseEvent) => {
    const rect = container.value!.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / width) * 2 - 1
    const y = -((e.clientY - rect.top) / height) * 2 + 1
    
    targetRotationY = x * 0.5
    targetRotationX = y * 0.5
  }

  container.value.addEventListener('mousemove', onMouseMove)

  const animate = () => {
    animationFrameId = requestAnimationFrame(animate)

    // Rotate group smoothly towards target
    group.rotation.y += (targetRotationY - group.rotation.y) * 0.05
    group.rotation.x += (targetRotationX - group.rotation.x) * 0.05
    
    // Constant slow rotation
    group.rotation.y += 0.002
    core.rotation.x += 0.005
    core.rotation.y += 0.005

    renderer.render(scene, camera)
  }

  animate()

  // Handle Resize
  const resizeObserver = new ResizeObserver(() => {
    if (!container.value) return
    const newWidth = container.value.clientWidth
    const newHeight = container.value.clientHeight
    camera.aspect = newWidth / newHeight
    camera.updateProjectionMatrix()
    renderer.setSize(newWidth, newHeight)
  })
  
  resizeObserver.observe(container.value)
}

onMounted(() => {
  if (process.client) {
    init()
  }
})

onUnmounted(() => {
  if (animationFrameId) cancelAnimationFrame(animationFrameId)
  if (renderer) renderer.dispose()
})
</script>
