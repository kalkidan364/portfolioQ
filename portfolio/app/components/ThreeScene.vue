<template>
  <div ref="canvasContainer" class="absolute inset-0 z-0 pointer-events-none opacity-50"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'
import gsap from 'gsap'

// Dynamic theme color mapping
let themeObserver: MutationObserver | null = null

const canvasContainer = ref<HTMLElement | null>(null)
let scene: THREE.Scene, camera: THREE.PerspectiveCamera, renderer: THREE.WebGLRenderer
let particles: THREE.Points
let mouseX = 0
let mouseY = 0
let targetX = 0
let targetY = 0
const windowHalfX = typeof window !== 'undefined' ? window.innerWidth / 2 : 0
const windowHalfY = typeof window !== 'undefined' ? window.innerHeight / 2 : 0

const initThemeObserver = () => {
  if (typeof window === 'undefined' || !particles) return

  themeObserver = new MutationObserver(() => {
    const isDark = document.documentElement.classList.contains('dark')
    const color = isDark ? 0x60a5fa : 0x0f172a // Light blue in dark mode, navy slate in light mode
    if (particles && particles.material) {
      ;(particles.material as THREE.PointsMaterial).color.setHex(color)
    }
  })

  themeObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class']
  })
}

const init = () => {
  if (!canvasContainer.value) return

  scene = new THREE.Scene()
  
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 2000)
  camera.position.z = 1000

  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(window.innerWidth, window.innerHeight)
  canvasContainer.value.appendChild(renderer.domElement)

  // Particles
  const geometry = new THREE.BufferGeometry()
  const vertices = []

  for ( let i = 0; i < 2000; i ++ ) {
    const x = Math.random() * 2000 - 1000
    const y = Math.random() * 2000 - 1000
    const z = Math.random() * 2000 - 1000
    vertices.push( x, y, z )
  }

  geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))

  const isDarkInitial = typeof document !== 'undefined' && document.documentElement.classList.contains('dark')
  const initialColor = isDarkInitial ? 0x60a5fa : 0x0f172a

  const material = new THREE.PointsMaterial({
    size: 3,
    color: initialColor,
    transparent: true,
    opacity: 0.4,
    blending: THREE.NormalBlending
  })

  particles = new THREE.Points(geometry, material)
  scene.add(particles)

  // Events
  document.addEventListener('mousemove', onDocumentMouseMove)
  window.addEventListener('resize', onWindowResize)

  // Initialize theme observer
  initThemeObserver()

  animate()
}

const onWindowResize = () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
}

const onDocumentMouseMove = (event: MouseEvent) => {
  mouseX = event.clientX - windowHalfX
  mouseY = event.clientY - windowHalfY
}

const animate = () => {
  requestAnimationFrame(animate)
  render()
}

const render = () => {
  targetX = mouseX * 0.001
  targetY = mouseY * 0.001

  if (particles) {
    particles.rotation.y += 0.002
    particles.rotation.x += 0.001

    gsap.to(particles.rotation, {
      y: `+=${targetX * 0.1}`,
      x: `+=${targetY * 0.1}`,
      duration: 2,
      ease: 'power2.out'
    })
  }

  renderer.render(scene, camera)
}

onMounted(() => {
  if (process.client) {
    init()
  }
})

onUnmounted(() => {
  if (process.client) {
    document.removeEventListener('mousemove', onDocumentMouseMove)
    window.removeEventListener('resize', onWindowResize)
    if (themeObserver) {
      themeObserver.disconnect()
    }
    if (renderer) renderer.dispose()
    if (particles) {
      particles.geometry.dispose()
      ;(particles.material as THREE.Material).dispose()
    }
  }
})
</script>
